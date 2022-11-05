import React, {useContext} from 'react';
import { VarContext } from '../Context/VarContext';
import { Link } from 'react-router-dom';

import './Login.css';

import * as Img from '../Components/Imagenes'
// import titulo_curso from "../Img/Titulo_curso.png";
// import bien from "../Img/bien.png";
// import mal from "../Img/mal.png";


import Nav from '../Components/Nav'


const Login = () => {

const GConText = useContext(VarContext);
console.log("🚀 ~ Ranking", GConText.Ranking)



  return (
	<>		
		{/* <div className="container fondo-rosa" style={{ backgroundImage: `url(${background})` }}> */}
		<div className="container login-background">

				<Nav titulo={"login"}></Nav>

			
			<div className="row mt-5 mx-1">
				<div className="col-12 col-md-6 offset-md-3">
					<div className='login-form'>

						<div className="mt-1">
							<img src={Img.titulo_curso} alt="" width="150" height="90"></img>
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
										<input type="text" className="d-inline form-control-sm form-control-login" name=""  aria-describedby="helpId" placeholder=""></input>
										<img src={Img.bien}  alt="" width="16"></img>
									</div>
									<div className="col-md-12" >
										<span id="" className="form-text help-text-login hide">Help text</span>
									</div>	
								</div>
							</div>
						</div>
						<div className="mt-3">
							<div className="container-fluid">
								<div className="row ">
									<div className="col-md-2 text-left">
										<label className="control-label label-login">Contraseña:</label>
									</div>
									<div className="col-md-10 ">
										<input type="password" className="d-inline form-control-sm form-control-login" name="" id="" aria-describedby="helpId" placeholder=""></input>
										<img src={Img.bien} alt="" width="16"></img>
									</div>
									<div className="col-md-12" >
										<span id="" className="form-text help-text-login hide">Help text</span>
									</div>	
								</div>
							</div>
						</div>	

						<div className="mt-5 mb-3">
							<Link className='btn_negro' to="/introduccion" onClick={() => GConText.setUser(true)}>Ingresar</Link>
						</div>	

						<div className="col-12 col-md-12 mt-4">
								<Link  to="/ranking" ><h1 className='fs-18 c-rojo'>Ver Ranking</h1></Link>
							</div>	

					</div>
				</div>				
			</div>
		</div>
	</>

  )
}

export default Login