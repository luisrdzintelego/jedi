import React, { useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { VarContext } from '../Context/VarContext';

 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faRankingStar} from '@fortawesome/free-solid-svg-icons'

import { DataStore } from '@aws-amplify/datastore';
import { Ranking } from '../models';

import './Dashboard.css';

import * as Img from '../Components/Imagenes'
import Nav from '../Components/Nav'

const Dashboard = () => {

	const GConText = useContext(VarContext);

	async function updateIntentos(id,dato) {
		console.log("🚀 ~ dato", dato, "🚀 ~ id", id)
		const original = await DataStore.query(Ranking, id);
		console.log("🚀 ~ original", original)
		await DataStore.save(
		  Ranking.copyOf(original, updated => {
		  updated.intentos = dato
		  })
		);
		const Update = await DataStore.query(Ranking, id);
		console.log("🚀 ~ updateIntentos", Update)
	  }


	const chkData = async()=>{

		const posts = await DataStore.query(Ranking, c => c.id("eq", GConText.UserId));
		console.log("🚀 ~ posts:", posts)
	
		console.log("~~~~~~~ Actualiza datos desde DataStore AWS ~~~~~~~")
			console.log("🚀 ~ GConText.UserId", GConText.UserId);

			GConText.setPuntos( posts[0].puntos);
			GConText.setTiempo( posts[0].tiempo);
			GConText.setJoya1( posts[0].gema1);
			GConText.setJoya2( posts[0].gema2);
			GConText.setJoya3( posts[0].gema3);

			console.log("🚀 ~ dB.id", posts[0].id);
			console.log("🚀 ~ dB.puntos", posts[0].puntos)
			console.log("🚀 ~ dB.tiempo", posts[0].tiempo)
			console.log("🚀 ~ dB.gema1", posts[0].gema1)
			console.log("🚀 ~ dB.gema2", posts[0].gema2)
			console.log("🚀 ~ dB.gema3", posts[0].gema3)

			console.log("~~~~~~~ ---------------- ~~~~~~~")
	}

	const chkRanking= async()=>{
		return await DataStore.query(Ranking, c => c.grupo("eq", GConText.Grupo));
	}



	useEffect( () => {
		//console.log("🚀 ~ vistos", vistos)
		//setLoading(true)
		chkData()
		chkRanking()
		.then((resp) => {
		  resp
			.sort((c,d) => c.tiempo < d.tiempo ? 1 : -1)
			.sort((a,b) => a.puntos < b.puntos ? 1 : -1)
			.reduce((empty, option, num) => {
			  if (option.id === GConText.UserId) {
				//var svalue = { posicion: num}
				//empty.push(svalue);
				console.log("~~~~~~~ ---------------- ~~~~~~~")
				console.log("🚀 ~ setRanking", num+1)
				console.log("🚀 ~ GConText.Ranking", num+1)
				console.log("~~~~~~~ ---------------- ~~~~~~~")

				GConText.setRanking(num+1)
			  }
			  return empty;

			}, {});

		})
		  .catch((err) => {
			console.log(err)
		})
		  .finally(()=> {
		})


	  }, [])




  return (
	<>
		<div className="container dashboard-background">

			<Nav titulo={"Dashboard"} btn_dash={true}></Nav>

			<div className="container">
				<div className="row mt-3 mx-1">
					<div className="col-md-7 mb-5 text-left">

						<img className='img-fluid' src={Img.titulo_curso} alt=""  width="300"></img>

					</div>

					<div className="col-md-5 dashboard-form">
						<div className="mb-3">
							<div className="row mt-1">
								<div className="col-md-12">
									
								<img className='mb-3' src={GConText.Avatar !== "" ? GConText.Avatar : Img.no_avatar } alt="" width="120"></img>

									<h2 className='fs-25 c-black text-left'>¡Hola!</h2>
									<h4 className='fs-25 c-black text-left' id='nombre'>{GConText.Nombre}</h4>
									<h4 className='fs-25 c-black text-left' id='ranking'><span className={`${GConText.Ranking === 1 ? "oro" : ""} ${GConText.Ranking === 2 ? "plata" : ""} ${GConText.Ranking === 3 ? "bronce" : ""}`}><FontAwesomeIcon icon={faRankingStar}></FontAwesomeIcon></span> {GConText.Ranking}</h4>
								</div>	
							</div>
							<div className="row mt-1 caja_gris">
								<div className="col-6 col-md-6 pt-2">
									<h2 className='fs-18 c-black text-left'><img src={Img.star} alt=""  width="40"></img> {GConText.Puntos} pts</h2>
								</div>	
								<div className="col-6 col-md-6 pt-2 text-right">

										{
											GConText.Joya1 === true
											//GConText.Joya1 === false
											? <img src={Img.joya1} alt=""  width="40"></img>
											: <img src={Img.joya1_d} alt=""  width="40"></img>
										}

										{
											GConText.Joya2 === true
											//GConText.Joya1 === false
											? <img src={Img.joya2} alt=""  width="40"></img>
											: <img src={Img.joya2_d} alt=""  width="40"></img>
										}

										{
											GConText.Joya3 === true
											//GConText.Joya1 === false
											? <img src={Img.joya3} alt=""  width="40"></img>
											: <img src={Img.joya3_d} alt=""  width="40"></img>
										}

								</div>	
							</div>
							{/* <div className="row mt-1 mx-1 text-left">
								<div className="col-md-12 pt-3">
									<progress max={GConText.TotalAvance} value={GConText.ConteoAvance}></progress>
									<h2 className='fs-15 c-black text-left'>Avance {Math.floor((GConText.ConteoAvance / GConText.TotalAvance) * 100)}%</h2>
								</div>	
							</div> */}
							<div className="row">
								<div className="col-12 col-md-12">
									<div className="mt-5">
										<Link className='btn_default mx-1' to="/instrucciones"> Instrucciones </Link>
										<Link className='btn_negro mx-1' to="/primer_reto" onClick={() => {
										//reiniciamos las variables locales
                                		GConText.resetAll();
										//le agregamos a la abase 1 intento
										updateIntentos( GConText.UserId, (GConText.Intentos+1))
										}} > Comenzar </Link>
									</div>	
								</div>	
							</div>	
						</div>
					</div>

				</div>
			</div>
		</div>
	</>
  )
}

export default Dashboard