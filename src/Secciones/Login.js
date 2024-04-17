import React, { useContext, useState, useEffect, useInput } from 'react';
import { VarContext } from '../Context/VarContext';
import { Link, Navigate } from 'react-router-dom';

import { DataStore } from '@aws-amplify/datastore';
import { Ranking } from '../models';
import { useCookies } from 'react-cookie';

import './Login.css';

import * as Img from '../Components/Imagenes'
import Nav from '../Components/Nav'

const Login = ({ props }) => {

	const GConText = useContext(VarContext);
	const [redirectNow, setRedirectNow] = useState(0);

	const [verImg, setVerImg] = useState(false);

	const [user, setUser] = useState(false);
	const [pass, setPass] = useState(false);

	const [CookieId, setCookieId] = useCookies(['idUser']);

	function setAuth(id) {
		//setCookieId('idUser', id, { path: '/'});
		//setCookieId('idUser', id, { path: '/', maxAge: 60 * 60 * 24 * 365, sameSite: true});
		//setCookieId('idUser', id, { path: '/', expires: (new Date(Date.now())) });
		let date = new Date();
		date.setTime(date.getTime() + (30 * 60 * 1000));
		console.log("🚀 ~ date", date)
		setCookieId('idUser', id, { path: '/', expires: date });
		setCookieId('idUser', id, { path: '/', maxAge: 30 * 60, sameSite: true });

	}

	const removeAuth = (name) => {
		setCookieId(name, '', { path: '/', expires: (new Date(Date.now())) });
	};

	const UserChange = (event) => {
		//console.log(event.target.value);
		//setNombre(event.target.value);
		GConText.setUsername(event.target.value);
	}

	const PassChange = (event) => {
		//console.log(event.target.value);
		//setNombre(event.target.value);
		GConText.setPassword(event.target.value);
	}

	const setTimeoutImg = () => {
		setVerImg(true)
		setTimeout(() => {
			setVerImg(false)
			setPass(false)
			setUser(false)
		}, 3000);
	}
	
	let num = 0;
	const chkLogin = async () => {

		num = 0;
		const models = await DataStore.query(Ranking);
		console.log(models);

		//await DataStore.clear();

		console.log("🚀 ~ GConText.Username:", GConText.Username)


		try {
			const models = await DataStore.query(Ranking);
			console.log('Posts retrieved successfully!', JSON.stringify(models, null, 2));
		  } catch (error) {
			console.log('Error retrieving models', error);
		  }
		
				/*
		  const posts1 = await DataStore.query(Ranking, c => c.username.eq(GConText.Username))
		  .then((resp) => {
			  console.log("🚀 ~ resp_________:", resp)
		  }).catch((err) => {
			  console.log(err)
		  }).finally(() => {
			
		  })
		*/
		
		const posts1 = await DataStore.query(Ranking, c => c.username.eq(GConText.Username))
			.then((resp) => {
				console.log("🚀 ~ resp_________:", resp)

				//posts.length === 0 ? console.log("🚀 ~ ESTE USUSARIO NO EXISTE:") : console.log("🚀 ~ SI EXISTE:", posts)

				if (resp.length >= 1) {
					console.log("🚀 ~ SI EXISTE:", resp[0].username)
					if (GConText.Username === resp[0].username) {
						console.log("🚀 ~ USUARIO COINCIDEN CON LOS INPUTS:")
						setUser(true);
					} else {
						console.log("🚀 ~ USUARIO NO COINCIDE:")
						setUser(false);
						num = 1;
					}
					if (GConText.Password === resp[0].password) {
						console.log("🚀 ~ PASSWORD COINCIDEN CON LOS INPUTS:")
						setPass(true);
					} else {
						console.log("🚀 ~ PASSWORD NO COINCIDE:")
						setPass(false);
						num = 1;
					}
				} else {
					console.log("🚀 ~ ESTE USUSARIO NO EXISTE:")
					setUser(false);
					num = 1;
				}

				setTimeoutImg();

				if (num === 0) {
					//DATOS FIJOS
					GConText.setUserId(resp[0].id);
					GConText.setUsername(resp[0].username)
					GConText.setPassword(resp[0].password);
					GConText.setNombre(resp[0].nombre);
					GConText.setGrupo(resp[0].grupo);
					GConText.setType(resp[0].type);
					//DATOS QUE CAMBIAN
					GConText.setAvatar(resp[0].avatar);
					GConText.setPuntos(resp[0].puntos);
					GConText.setTiempo(resp[0].tiempo);
					GConText.setJoya1(resp[0].gema1);
					GConText.setJoya2(resp[0].gema2);
					GConText.setJoya3(resp[0].gema3);
					GConText.setBonus1(resp[0].bonus1);
					GConText.setBonus2(resp[0].bonus2);
					GConText.setBonus3(resp[0].bonus3);
					GConText.setIntentos(resp[0].intentos);
					GConText.setStatus(resp[0].status);

					console.log("~~~~~~~ DATOS desde DataStore AWS ~~~~~~~")
					console.log("🚀 ~ dB.id", resp[0].id);
					console.log("🚀 ~ dB.username", resp[0].username)
					console.log("🚀 ~ dB.password", resp[0].password)
					console.log("🚀 ~ dB.nombre", resp[0].nombre)
					console.log("🚀 ~ dB.grupo", resp[0].grupo)
					console.log("🚀 ~ dB.type", resp[0].type)

					console.log("🚀 ~ dB.avatar", resp[0].avatar)
					console.log("🚀 ~ dB.puntos", resp[0].puntos)
					console.log("🚀 ~ dB.tiempo", resp[0].tiempo)
					console.log("🚀 ~ dB.gema1", resp[0].gema1)
					console.log("🚀 ~ dB.gema2", resp[0].gema2)
					console.log("🚀 ~ dB.gema3", resp[0].gema3)
					console.log("🚀 ~ dB.bonus1", resp[0].bonus1)
					console.log("🚀 ~ dB.bonus2", resp[0].bonus2)
					console.log("🚀 ~ dB.bonus3", resp[0].bonus3)
					console.log("🚀 ~ dB.intentos", resp[0].intentos)
					console.log("🚀 ~ dB.status", resp[0].status)

					console.log("~~~~~~~ ---------------- ~~~~~~~")

					setAuth(resp[0].id)
					//(resp[0].id,400,'puntos')
					resp[0].type === 'admin' ? setRedirectNow(1) : setRedirectNow(2)
				}


			}).catch((err) => {
				console.log(err)
			}).finally(() => {
			})
		

		//GConText.Username === 'admin' && GConText.Password === 'admin' ? setRedirectNow(1) :  setRedirectNow(2)


	}

	const chkAuth = async (id) => {
		num = 0;
		//await DataStore.clear();
		const posts = await DataStore.query(Ranking, c => c.id.eq(id))
			.then((resp) => {
				console.log("🚀 ~ resp_________:", resp)

				if (resp.length >= 1) {
					console.log("🚀 ~ SI EXISTE Auth ID:", resp[0].id)
				} else {
					console.log("🚀 ~ NO EXISTE Auth ID:")
					num = 1;
				}

				if (num === 0) {
					//DATOS FIJOS
					GConText.setUserId(resp[0].id);
					GConText.setUsername(resp[0].username)
					GConText.setPassword(resp[0].password);
					GConText.setNombre(resp[0].nombre);
					GConText.setGrupo(resp[0].grupo);
					GConText.setType(resp[0].type);
					//DATOS QUE CAMBIAN
					//GConText.setAvatar(resp[0].avatar);
					//GConText.setPuntos(resp[0].puntos);
					//GConText.setTiempo(resp[0].tiempo);
					//GConText.setJoya1(resp[0].gema1);
					//GConText.setJoya2(resp[0].gema2);
					//GConText.setJoya3(resp[0].gema3);
					//GConText.setBonus1(resp[0].bonus1);
					//GConText.setBonus2(resp[0].bonus2);
					//GConText.setBonus3(resp[0].bonus3);
					//GConText.setIntentos(resp[0].intentos);
					GConText.setStatus(resp[0].status);

					console.log("~~~~~~~ DATOS desde DataStore AWS ~~~~~~~")
					console.log("🚀 ~ dB.id", resp[0].id);
					console.log("🚀 ~ dB.username", resp[0].username)
					console.log("🚀 ~ dB.password", resp[0].password)
					console.log("🚀 ~ dB.nombre", resp[0].nombre)
					console.log("🚀 ~ dB.grupo", resp[0].grupo)
					console.log("🚀 ~ dB.type", resp[0].type)

					//console.log("🚀 ~ dB.avatar", resp[0].avatar)
					//console.log("🚀 ~ dB.puntos", resp[0].puntos)
					//console.log("🚀 ~ dB.tiempo", resp[0].tiempo)
					//console.log("🚀 ~ dB.gema1", resp[0].gema1)
					//console.log("🚀 ~ dB.gema2", resp[0].gema2)
					//console.log("🚀 ~ dB.gema3", resp[0].gema3)
					//console.log("🚀 ~ dB.bonus1", resp[0].bonus1)
					//console.log("🚀 ~ dB.bonus2", resp[0].bonus2)
					//console.log("🚀 ~ dB.bonus3", resp[0].bonus3)
					//console.log("🚀 ~ dB.intentos", resp[0].intentos)
					console.log("🚀 ~ dB.status", resp[0].status)

					console.log("~~~~~~~ ---------------- ~~~~~~~")

					setAuth(resp[0].id)
					//(resp[0].id,400,'puntos')
					GConText.Username === 'admin' && GConText.Password === 'admin' ? setRedirectNow(1) :  setRedirectNow(2)
					//resp[0].type === 'admin' ? setRedirectNow(1) : setRedirectNow(3)
				}
			}).catch((err) => {
				console.log(err)
			}).finally(() => {
			})

	}

	useEffect(() => {
		//console.log("🚀 ~ vistos", vistos)
		//setLoading(true)
		console.log("🚀 ~ CookieId.idUser", CookieId.idUser)

		if (CookieId.idUser !== undefined) {
			chkAuth(CookieId.idUser)
		}

	}, [])

	return (
		<>
			{/* <div className="container fondo-rosa" style={{ backgroundImage: `url(${background})` }}> */}
			<div className="container login-background">

				<Nav titulo={"login"}></Nav>

			<span className='fs-10 position-absolute bottom-0 end-0 p-1'>{GConText.Version}</span>

				<div className="row mt-5 mx-1">
					<div className="col-12 col-lg-6 offset-lg-3 col-md-8 offset-md-2">
						<div className='login-form'>

							<div className="top-login pt-4 pb-4">
								<img src={Img.Logo_jedi} alt="" width="200"></img>
							</div>
							<div className="mt-5">
								<span className="form-label mb-5"
									style={{
										padding: '20px',
										fontSize: '25px',
										color: "red"
									}}>Iniciar sesión</span>
							</div>
							<div className="mt-3">
								<div className="container">
									<div className="row ">
										<div className="col-sm-12 col-md-3 text-center">
											<label className="control-label label-login">Correo Electrónico:</label>
										</div>
										<div className="col-sm-12 col-md-8  text-center">
											<input type="text" onChange={UserChange} className="fs-16 form-control-login" placeholder=""></input>
										</div>
										<div className="d-none d-sm-block col-md-1 text-center">
											<img src={user === false ? Img.mal : Img.bien} style={{ display: verImg === true ? 'block' : 'none' }} alt="retro" width="34"></img>
										</div>
										<div className="col-md-12 text-center">
											<span style={{ display: user === false && verImg === true ? 'block' : 'none' }} className="form-text help-text-login">Usuario no existe</span>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-3">
								<div className="container">
									<div className="row">
										<div className="col-sm-12 col-md-3 text-center">
											<label className="control-label label-login">Contraseña:</label>
										</div>
										<div className="col-sm-12 col-md-8  text-center">
											<input type="password" onChange={PassChange} className="fs-16  form-control-login" placeholder=""></input>
										</div>
										<div className="d-none d-sm-block col-md-1 text-center">
											<img src={pass === false ? Img.mal : Img.bien} style={{ display: verImg === true ? 'block' : 'none' }} alt="retro" width="34"></img>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12 text-center" >
											<span style={{ display: pass === false && verImg === true ? 'block' : 'none' }} className="form-text help-text-login">Contraseña incorrecta</span>
										</div>
									</div>

								</div>
							</div>

							<div className="mt-5 mb-5">
								{/* <Link className='btn_negro' to="/introduccion" onClick={() => chkLogin()}>Ingresar</Link> */}
								<span className='btn_amarillo' onClick={() => chkLogin()}>Ingresar</span>
							</div>

							{
								redirectNow === 1
									? <Navigate to="/admin" />
									: <></>
							}
							{
								redirectNow === 2
									? <Navigate to="/introduccion" />
									: <></>
							}
							{
								redirectNow === 3
									? <Navigate to="/dashboard" />
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