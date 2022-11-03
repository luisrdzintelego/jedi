import React, { } from 'react';
import { Link } from 'react-router-dom';

import './Segundo_reto.css';

import * as Img from '../Components/Imagenes'

import Nav from '../Components/Nav'

const Segundo_reto = () => {

  return (
    <>
		<div className="container segundo-background">

			<Nav titulo={"Segundo Reto"}></Nav>
			
			<div className="container mt-3">
				<div className="row mx-1">
					<div className="col-md-5 mb-5 text-left">

						<img className='img-fluid' src={Img.titulo_curso} alt="" width="250"></img>

					</div>

					<div className="col-md-7 segundo-form mb-5">

						<div className="mb-5">
							<img src={Img.joya_reto2} alt="" width="110"></img>
						</div>

						<div className="mb-3">
							<div className="row mt-1">
								<div className="col-md-12">
									<h2 className='fs-18 lh-25 c-negro text-left'>Ahora debes encontrar el <b>Zafiro</b>, cuentan que esta Gema se ha extraviado en un CeDis OXXO y es difícil de encontrar.</h2><br></br>
									<h2 className=' fs-18 lh-25 c-negro text-left'>Quienes han logrado encontrarla dicen que su gran poder de los <b>Principios Scrum</b> les ha permitido implementar diferentes rutinas en su dinámica de trabajo que les permite ser más agiles.</h2>
								</div>
							</div>
						</div>

						<div className="mt-5">
							<h3 className='fs-15 lh-25 c-negro text-center'><img src={Img.info} alt="" width="25"></img> Haz clic en el botón Iniciar.</h3>
						</div>	

						<div className="row">
								<div className="col-12 col-md-12">
									<div className="my-4">
										<Link className='btn_default mx-1 px-5' to="/quiz2"> Iniciar </Link>
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

export default Segundo_reto