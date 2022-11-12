import React, {useContext, useState, useEffect, useInput} from 'react';
import { VarContext } from '../Context/VarContext';
import { Link, Navigate } from 'react-router-dom';

import { DataStore } from '@aws-amplify/datastore';
import { Ranking } from '../models';

import './Login.css';

import * as Img from '../Components/Imagenes'
// import titulo_curso from "../Img/Titulo_curso.png";
// import bien from "../Img/bien.png";
// import mal from "../Img/mal.png";


import Nav from '../Components/Nav'


const Login = ({props}) => {

const GConText = useContext(VarContext);
const [redirectNow, setRedirectNow] = useState(0);

const [user, setUser] = useState('');
//console.log("🚀 ~ Ranking", GConText.Ranking)

// function useInput({ type /*...*/ }) {
// 	const [value, setValue] = useState("");
// 	const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
// 	return [value, input];
//   }

// const [password, setPassword] = useInput({ type: "text" });
// const [username, setUsername] = useInput({ type: "text" });

	const UserChange = (event) => {
    console.log(event.target.value);
    //setNombre(event.target.value);
    GConText.setUsername(event.target.value);
  }

  const PassChange = (event) => {
    console.log(event.target.value);
    //setNombre(event.target.value);
    GConText.setPassword(event.target.value);
  }
  
  //9db16aab-042d-471d-a2cb-374195f65c3e

  async function updateInfo(id,numero,seccion) {
	const original = await DataStore.query(Ranking, id);
	console.log("🚀 ~ original", original)
	await DataStore.save(
		Ranking.copyOf(original, updated => {
		updated.puntos = numero
	  })
	);
	const Update = await DataStore.query(Ranking, id);
	console.log("🚀 ~ Update", Update)
	
  }

  let num = 0;
  const chkLogin = async()=>{

	num = 0;
	//const models = await DataStore.query(Ranking);
	//console.log(models);

	//const uName = await DataStore.query(Ranking);
	//console.log("🚀 ~ Ranking:", uName)

	const posts = await DataStore.query(Ranking, c => c.username("eq", GConText.Username));
	console.log("🚀 ~ posts:", posts)

	//posts.length === 0 ? console.log("🚀 ~ ESTE USUSARIO NO EXISTE:") : console.log("🚀 ~ SI EXISTE:", posts)

	if(posts.length >= 1 ){
		console.log("🚀 ~ SI EXISTE:", posts[0].username)
		if(GConText.Username === posts[0].username ){
			console.log("🚀 ~ USUARIO COINCIDEN CON LOS INPUTS:") 
		} else {
			console.log("🚀 ~ USUARIO NO COINCIDE:") 
			num = 1;
		}
		if(GConText.Password === posts[0].password ){
			console.log("🚀 ~ PASSWORD COINCIDEN CON LOS INPUTS:") 
		} else {
			console.log("🚀 ~ PASSWORD NO COINCIDE:")
			num = 1; 
		}

		GConText.setUser( posts[0].id);

	} else{
		console.log("🚀 ~ ESTE USUSARIO NO EXISTE:") 
		num = 1;
	}

	if(num === 0){

		console.log("🚀 ~ posts[0].id", posts[0].id)
		console.log("🚀 ~ GConText.User", GConText.User)

		updateInfo(posts[0].id,400,'puntos')
		//GConText.Username === 'admin' && GConText.Password === 'admin' ? setRedirectNow(1) :  setRedirectNow(2)
	}	

}





/*
const sendInfo = async(nombre,url_img,negocio,pais,region,ciudad)=>{
	await DataStore.save(
		new Ranking({
			"username": "lrodriguez",
			"password": "abc123456",
			"type": "user",
			"grupo": 1,
			"puntos": 0,
			"tiempo": 0,
			"gema1": false,
			"gema2": false,
			"gema3": false,
			"bonus1": false,
			"bonus2": false,
			"bonus3": false,
			"intentos": 0,
			"status": false
		})
	);
  }
*/
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
										<input type="text" onChange={UserChange} className="d-inline form-control-sm form-control-login" name=""  aria-describedby="helpId" placeholder=""></input>
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
										<input type="password" onChange={PassChange} className="d-inline form-control-sm form-control-login" name="" id="" aria-describedby="helpId" placeholder=""></input>
										<img src={Img.bien} alt="" width="16"></img>
									</div>
									<div className="col-md-12" >
										<span id="" className="form-text help-text-login hide">Help text</span>
									</div>	
								</div>
							</div>
						</div>	

						<div className="mt-5 mb-3">
							{/* <Link className='btn_negro' to="/introduccion" onClick={() => chkLogin()}>Ingresar</Link> */}
							<span className='btn_negro' onClick={() => chkLogin()}>Ingresar</span>
						</div>	


						{
						redirectNow === 1 
						? <Navigate to="/admin"/>
						: <></>
            			} 

{
						redirectNow === 2 
						? <Navigate to="/introduccion"/>
						: <></>
            			} 


						{/* <div className="col-12 col-md-12 mt-4">
								<Link  to="/ranking" ><h1 className='fs-18 c-rojo'>Ver Ranking</h1></Link>
							</div>	 */}

					</div>
				</div>				
			</div>
		</div>
	</>

  )
}

export default Login