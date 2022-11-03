import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VarContext } from '../Context/VarContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose} from '@fortawesome/free-solid-svg-icons'
import { faQuestion} from '@fortawesome/free-solid-svg-icons'

import './NavQuiz.css';

import * as Img from './Imagenes'

import Timer2 from './Timer2';

const NavQuiz = ({props}) => {

	const GConText = useContext(VarContext);

	const stopTimer = () => {
		console.log("🚀 ~ GConText.Counter", GConText.Counter)
	};


  return (
	<>
		<div  className={`container-fluid ${props.colorFondo}`} >

					<div className="row flex">
						
						<div className="col-1 py-1 text-left">
							<img  src={GConText.Avatar !== "" ? GConText.Avatar : Img.no_avatar } alt=""  width="80" ></img>	
						</div>

						<div className="col-2 text-center">
							
								<div className="col-12 text-left mt-3">
									<progress className='barra' max={GConText.TotalPuntos} value={GConText.Puntos}></progress>
								</div>	
								<div className="col-12 text-center">
									{/* <h2 className='fs-18 c-black text-left'><img src={Img.star} alt="" width="30"></img> {GConText.Puntos} pts - {  Math.floor(GConText.Tiempo / 60)} : { GConText.Tiempo % 60}</h2> */}
									<h2 className='fs-18 c-black text-left'><img src={Img.star} alt="" width="30"></img> {GConText.Puntos} pts</h2>

								</div>	
						</div>

						<div className="col-2 text-center">

										<span className='f-gris br-50 p-2 mx-1'>
										{
											GConText.Joya1 === true
											//GConText.Joya1 === false
											? <img src={Img.joya1} alt="" width="25"></img>
											: <img src={Img.joya1_d} alt="" width="25"></img>
										}
										</span>
										<span className='f-gris br-50  p-2 mx-1'>
										{
											GConText.Joya2 === true
											//GConText.Joya1 === false
											? <img src={Img.joya2} alt="" width="25"></img>
											: <img src={Img.joya2_d} alt="" width="25"></img>
										}
										</span>
										<span className='f-gris br-50  p-2 mx-1'>
										{
											GConText.Joya3 === true
											//GConText.Joya1 === false
											? <img src={Img.joya3} alt="" width="25"></img>
											: <img src={Img.joya3_d} alt="" width="25"></img>
										}
										</span>

	
						</div>
						<div className="col-1 text-center" style={{ borderLeft: '1px solid black', borderRight: '1px solid black'}}>

								<div className="col-12 mt-1">
								<img src={Img.reloj} alt="" onClick={() => {stopTimer()}} width="40"></img>
								</div>	
								<div className="col-12 mt-1">
									<h2 className='fs-18 c-black text-center'>{props.minute}:{props.second}</h2>
								</div>	
								
						</div>

						<div className="col-1 text-center" >

										{
											GConText.Bonus === true
											//GConText.Joya1 === false
											? <img src={Img.bonus} alt="" width="50"></img>
											: <img src={Img.bonus_d} alt="" width="50"></img>
										}

						</div>

						<div className="col-4 text-center" >

							<Link className='btn_amarillo ms-2' to="/introduccion"><FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon> Ayuda</Link>
							<Link className='btn_amarillo  ms-2' to="/dashboard" ><FontAwesomeIcon icon={faClose}></FontAwesomeIcon> Cerrar</Link>

						</div>
					</div>

		</div>

		{/* <div className="row justify-content-center align-items-center g-2">
			<div className="col"></div>
			<div className="col">Column</div>
			<div className="col"></div>
		</div>	 */}
	</>
  )
}

export default NavQuiz