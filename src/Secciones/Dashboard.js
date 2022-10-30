import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useSwipeable } from "react-swipeable";

import './Dashboard.css';

import titulo_curso from "../Img/Titulo_curso.png";
import avatar_tumb1 from "../Img/avatar_tumb1.png";

import star from "../Img/iconos/Star.png";
import joya1 from "../Img/Joya1.png";
import joya2 from "../Img/Joya2.png";
import joya3 from "../Img/Joya3.png";

import joya1_d from "../Img/Joya1_Disabled.png";
import joya2_d from "../Img/Joya2_Disabled.png";
import joya3_d from "../Img/Joya3_Disabled.png";


import Nav from '../Components/Nav'

function Dashboard() {
  return (
	<>
		<div className="container-fluid dashboard-background">
			<div className="row">
				<div className="col-md-12">
				<Nav titulo={"Dashboard"}></Nav>
				</div>				
			</div>
			<div className="row mt-5">
				<div className="col-md-7">

					<div className="">
						<img src={titulo_curso} width="340"></img>
					</div>
				</div>

				<div className="col-md-4  dashboard-form">

						<div className="mt-">
							<img src={avatar_tumb1} width="110"></img>
						</div>

							<div className="mt-3 mb-3">

									<div className="row mt-1">
										<div className="col-md-12">
										<h5 className='text-left' style={{fontSize: '25px'}}>¡Hola!</h5>
										<h4 className='text-left' id='nombre' style={{fontSize: '25px'}}>Javier Hernández</h4>
										<h4 className='text-left' id='medallas' style={{fontSize: '25px'}}>00</h4>
										</div>	
									</div>

									<div className="row mt-1 caja_gris mx-1">
										<div className="col-md-6 pt-2">
											<h5 className='text-left' style={{fontSize: '17px'}}><img src={star} width="40"></img> 0000 pts</h5>
										</div>	
										<div className="col-md-6 pt-2 text-right">
											<img src={joya1_d} width="40"></img>
											<img src={joya2_d} width="40"></img>
											<img src={joya3} width="40"></img>
										</div>	


									</div>
									<div className="row mt-1 mx-1 text-left">
										<div className="col-md-12 pt-3">
											<progress max="100" value="76"></progress>
											<h5 className='text-left' style={{fontSize: '14px'}}>Avance %</h5>
										</div>	
									</div>
									<div className="row">
										<div className="col-md-12">
											<div className="mt-4">
												<Link className='btn_default mx-3' to="/instrucciones"> Instrucciones </Link>
												<Link className='btn_default mx-3' to="/instrucciones"> Entrar </Link>
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