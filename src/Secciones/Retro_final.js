import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { VarContext } from '../Context/VarContext';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Retro_final.css';

import * as Img from '../Components/Imagenes'

import Nav from '../Components/Nav'

const Retro_final = () => {

	const GConText = useContext(VarContext);

  return (
	<>
		<div className="container retro-final-background">

			<Nav titulo={"Puntuación final"}></Nav>

			<div className="container">
				<div className="row mt-4 mx-1">
					<div className="col-md-8 mb-5 text-left">

						{
							GConText.Joya1 === true && GConText.Joya2 === true && GConText.Joya3 === true
							//score === 0
							?  <>
								<div className="row">
										<div className="col-12 col-md-8 offset-md-2 text-center ">
										<img className='img-fluid' src={Img.retro_fina_bien} alt=""  width="350"></img>
											<h1 className='fs-45 mt-2 c-rojo'>¡Felicidades!</h1>
											<h2 className='fs-20 mt-4'>Encontraste las <b>tres Gemas de Agilidad</b>, ahora debes utilizar sus poderes para generar <b>entregas continuas e incrementales de valor para nuestros clientes</b>.</h2>
										</div>

										<div className="col-12 col-md-8 offset-md-2 text-center ">
											<h2 className='fs-20 mt-4'>Descarga tu certificado  <b>AGILE CONVERSANT</b>.</h2>
										</div>

										<div className="col-12 col-md-8 offset-md-2 text-center ">
											<div className="mt-3">
												{/* <button  className='btn_default mx-3 px-5' onClick={() => restartGame()}>Continuar</button> */}
												<Link className='btn_default mx-3 px-5' to='/retro_final' >Descargar</Link>
											</div>	
										</div>	
									</div>
								</>
							: <>
							<div className="row">
									<div className="col-12 col-md-8 offset-md-2 text-center ">
									<img className='img-fluid' src={Img.retro_fina_mal} alt=""  width="350"></img>
										<h1 className='fs-45 mt-2 c-rojo'>¡Lo sentimos!</h1>
										<h2 className='fs-20 mt-4'>No has logrado encontrar las <b>tres Gemas de Agilidad</b>, debes esforzarte un poco más en tu búsqueda para recibir sus poderes.</h2>
									</div>	
								</div>
							</>
						}

					</div>

					<div className="col-md-4 retro-final-form">

						<div className="row mt-1">
							<div className="col-md-12 text-center">
									
								<img className='mb-3' src={GConText.Avatar !== "" ? GConText.Avatar : Img.no_avatar } alt="" width="120"></img>

									<h1 className='fs-16 c-rojo'>Tus resultados:</h1>
									<h4 className='fs-28 c-black' id='nombre'>{GConText.Nombre}</h4>
							</div>	


							<div className="col-12 col-md-10 offset-md-1 text-center">

								<div className="row text-left' caja_gris">

									<div className="col-12 col-md-12 ">
										<h4 className='fs-50 c-black' id='ranking'>{GConText.Ranking}</h4>
									</div>	

									<div className="col-12 col-md-12 p-1">

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

									<div className="col-12 col-md-12 p-1">
										<h2 className='fs-18 c-black' ><img src={Img.star} alt=""  width="40"></img> {GConText.Puntos} pts</h2>
									</div>	

									<div className="col-12 col-md-12 p-1">
										<h2 className='fs-18 c-black' ><img src={Img.reloj} alt=""  width="40"></img> {  Math.floor(GConText.Tiempo / 60)} : { GConText.Tiempo % 60}</h2>
									</div>	

								</div>
							</div>

						</div>
						<div className="row">
							<div className="col-12 col-md-12 mt-4">
								<Link className='btn_default' to="/dashboard" >Jugar de nuevo</Link>
							</div>	

							<div className="col-12 col-md-12 mt-4">
								<Link  to="/" ><h1 className='fs-18 c-rojo'>Ver Ranking</h1></Link>
							</div>	

						</div>	
					</div>
				</div>
			</div>
		</div>
	</>
  )
}

export default Retro_final