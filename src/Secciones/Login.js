/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import { Link } from 'react-router-dom';


import './Login.css';

import titulo_curso from "../Img/Titulo_curso.png";
import bien from "../Img/bien.png";
import mal from "../Img/mal.png";



import Nav from '../Components/Nav'


const Login = () => {
  return (
	<>		
		{/* <div className="container fondo-rosa" style={{ backgroundImage: `url(${background})` }}> */}
		<div className="container-fluid login-background">
			<div className="row">
				<div className="col-12">
				<Nav titulo={"login"}></Nav>
				</div>				
			</div>
			
			<div className="row mt-5">
				<div className="col-12">
					<div className='login-form'>

						<div className="mt-1">
							<img src={titulo_curso} width="150" height="90"></img>
						</div>
						<div className="mt-2">
						<span className="form-label mb-5" 
						style={{ padding: '20px',
								fontSize: '25px',
								color: "red"
						}}>Iniciar sesión</span>
						</div>
						<div className="mt-3 mb-5">
							<div className="container">
								<div className="row ">
									<div className="col-md-2 text-left">
										<label className="control-label label-login">Correo Electrónico:</label>
									</div>
									<div className="col-md-10">
										<input type="text" className="d-inline form-control-sm form-control-login" name="" id="" aria-describedby="helpId" placeholder=""></input>
										<img src={bien} width="16"></img>
									</div>
									<div className="col-md-12" >
										<span id="helpId" className="form-text help-text-login hide">Help text</span>
									</div>	
								</div>
							</div>
						</div>
						<div className="mt-3">
							<div className="container">
								<div className="row ">
									<div className="col-md-2 text-left">
										<label className="control-label label-login">Contraseña:</label>
									</div>
									<div className="col-md-10">
										<input type="password" className="d-inline form-control-sm form-control-login" name="" id="" aria-describedby="helpId" placeholder=""></input>
										<img src={bien} width="16"></img>
									</div>
									<div className="col-md-12" >
										<span id="helpId" className="form-text help-text-login hide">Help text</span>
									</div>	
								</div>
							</div>
						</div>	

						<div className="mt-5">
							<Link className='btn_default' to="/introduccion">Ingresar</Link>
						</div>	

					</div>
				</div>				
			</div>
		</div>
	</>

  )
}

export default Login