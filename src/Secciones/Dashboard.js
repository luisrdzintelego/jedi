import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { VarContext } from '../Context/VarContext';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Dashboard.css';

import * as Img from '../Components/Imagenes'

import Nav from '../Components/Nav'

const Dashboard = () => {

	const GConText = useContext(VarContext);

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
									<h4 className='fs-25 c-black text-left' id='ranking'>{GConText.Ranking}</h4>
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
                                		GConText.resetAll();
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