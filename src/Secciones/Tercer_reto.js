import React, { } from 'react';
import { Link } from 'react-router-dom';

import './Tercer_reto.css';

import * as Img from '../Components/Imagenes'

import Nav from '../Components/Nav'


const Tercer_reto = () => {

  return (
    <>
		<div className="container tercer-background">

			<Nav titulo={"Tercer Reto"}></Nav>
			
			<div className="container mt-3">
				<div className="row mx-1">
					<div className="col-md-5 mb-5 text-left">

						<img className='img-fluid' src={Img.titulo_curso} alt="" width="250"></img>

					</div>

					<div className="col-md-7 tercer-form mb-5">

						<div className="mb-5">
							<img src={Img.joya_reto3} alt="" width="110"></img>
						</div>

						<div className="mb-3">
							<div className="row mt-1">
								<div className="col-md-12">
									<h2 className='fs-18 lh-25 c-negro text-left'>¡Eres muy persistente! Has llegado realmente lejos en esta búsqueda y te encuentras ante el último reto, debes obtener el <b>Diamante</b>.</h2><br></br>
									<h2 className=' fs-18 lh-25 c-negro text-left'>Quienes han logrado encontrarla han recibido su poder para utilizar el <b>método Kanban</b>, lo que les ha permitido mejorar y evolucionar en sus actividades.</h2>
								</div>
							</div>
						</div>


						<div className="row">
								<div className="col-12 col-md-12">
									<div className="my-4">
										<Link className='btn_negro mx-1 px-5' to="/quiz3">Iniciar Reto</Link>
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

export default Tercer_reto
