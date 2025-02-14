import React, { useContext, useState, useEffect, useInput } from 'react';
import { VarContext } from '../Context/VarContext';
import { Link, Navigate } from 'react-router-dom';

//import { DataStore } from '@aws-amplify/datastore';
import { DataStore, SortDirection, Predicates } from '@aws-amplify/datastore';

import { Ranking } from '../models';
import { useCookies } from 'react-cookie';

import '../fonts/fonts.css'
import './Login.css';

import * as Img from '../Components/Imagenes'
import Nav from '../Components/Nav'

const Login = ({ props }) => {


	const [todos, setTodos] = useState([])

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
		//console.log("🚀 ~ date", date)
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


	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			chkLogin();
			//console.log('do validate')
		}
	}


	const chkData = async () => {
		//setTodos([]);
		//console.log("🚀 ~ chkData----------")
		return await DataStore.query(Ranking, Predicates.ALL, {
			sort: s => s.username(SortDirection.DESCENDING)
			//sort: s => s.puntos(SortDirection.DESCENDING).tiempo(SortDirection.ASCENDING)
		}).then((resp) => {
			//setTodos(resp)
			//setTodos({ notes: resp })
			setTodos(resp.map((option, i) => {
				return {
					id: option.id,
					ranking: i + 1,
					isOpen: false,
					...option
				}
			}))

		})
			.catch((err) => {
				//console.log(err)

			})
			.finally(() => {
				//console.log(todos)
			})
	}


	const chkLogin = async () => {

		num = 0;

		/* 		const clear  = await DataStore.clear()
				console.log("🚀 ~ clear:", clear)
				const start = await DataStore.start()
				console.log("🚀 ~ start:", start)
		
				const models = await DataStore.query(Ranking);
				console.log(models); */

		//console.log("🚀 ~ GConText.username:", GConText.username)

		try {
			//const models = await DataStore.query(Ranking);
			//console.log('Posts retrieved successfully!', JSON.stringify(models, null, 2));	
		} catch (error) {
			console.log('Error retrieving models', error);
		}


		/* const posts1 = await DataStore.query(Ranking, c => c.username.eq(GConText.username))
		.then((resp) => {
			console.log("🚀 ~ resp_________:", resp)
		}).catch((err) => {
			console.log(err)
		}).finally(() => {
	  	
		}) */


		const posts1 = await DataStore.query(Ranking, c => c.username.eq(GConText.username))
			.then((resp) => {
				console.log("🚀 ~ resp_________:", resp)

				//posts.length === 0 ? console.log("🚀 ~ ESTE USUSARIO NO EXISTE:") : console.log("🚀 ~ SI EXISTE:", posts)

				if (resp.length >= 1) {
					//console.log("🚀 ~ SI EXISTE:", resp[0].username)
					if (GConText.username === resp[0].username) {
						//console.log("🚀 ~ USUARIO COINCIDEN CON LOS INPUTS:")
						setUser(true);
					} else {
						//console.log("🚀 ~ USUARIO NO COINCIDE:")
						setUser(false);
						num = 1;
					}
					if (GConText.password === resp[0].password) {
						//console.log("🚀 ~ password COINCIDEN CON LOS INPUTS:")
						setPass(true);
					} else {
						//console.log("🚀 ~ password NO COINCIDE:")
						setPass(false);
						num = 1;
					}
				} else {
					//console.log("🚀 ~ ESTE USUSARIO NO EXISTE:")
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
					/* GConText.setPuntos(resp[0].puntos);
					GConText.setTiempo(resp[0].tiempo);
					GConText.setJoya1(resp[0].gema1);
					GConText.setJoya2(resp[0].gema2);
					GConText.setJoya3(resp[0].gema3);
					GConText.setBonus1(resp[0].bonus1);
					GConText.setBonus2(resp[0].bonus2);
					GConText.setBonus3(resp[0].bonus3);
					GConText.setIntentos(resp[0].intentos); */
					GConText.setStatus(resp[0].status);
					GConText.setBookmark(resp[0].bookmark);

					console.log("~~~~~~~ DATOS desde DataStore AWS ~~~~~~~")
					console.log("🚀 ~ dB.id", resp[0].id);
					console.log("🚀 ~ dB.username", resp[0].username)
					console.log("🚀 ~ dB.password", resp[0].password)
					console.log("🚀 ~ dB.nombre", resp[0].nombre)
					console.log("🚀 ~ dB.grupo", resp[0].grupo)
					console.log("🚀 ~ dB.type", resp[0].type)

					console.log("🚀 ~ dB.avatar", resp[0].avatar)
					/* console.log("🚀 ~ dB.puntos", resp[0].puntos)
					console.log("🚀 ~ dB.tiempo", resp[0].tiempo)
					console.log("🚀 ~ dB.gema1", resp[0].gema1)
					console.log("🚀 ~ dB.gema2", resp[0].gema2)
					console.log("🚀 ~ dB.gema3", resp[0].gema3)
					console.log("🚀 ~ dB.bonus1", resp[0].bonus1)
					console.log("🚀 ~ dB.bonus2", resp[0].bonus2)
					console.log("🚀 ~ dB.bonus3", resp[0].bonus3)
					console.log("🚀 ~ dB.intentos", resp[0].intentos) */
					console.log("🚀 ~ dB.status", resp[0].status)
					console.log("🚀 ~ dB.bookmark", resp[0].bookmark)

					console.log("~~~~~~~ ---------------- ~~~~~~~")

					setAuth(resp[0].id)
					//(resp[0].id,400,'puntos')
					resp[0].type === 'admin' ? setRedirectNow(1) : setRedirectNow(2)
				}


			}).catch((err) => {
				console.log(err)
			}).finally(() => {
			})


		//GConText.username === 'admin' && GConText.password === 'admin' ? setRedirectNow(1) :  setRedirectNow(2)
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
					GConText.setAvatar(resp[0].avatar);
					/* GConText.setPuntos(resp[0].puntos);
					GConText.setTiempo(resp[0].tiempo);
					GConText.setJoya1(resp[0].gema1);
					GConText.setJoya2(resp[0].gema2);
					GConText.setJoya3(resp[0].gema3);
					GConText.setBonus1(resp[0].bonus1);
					GConText.setBonus2(resp[0].bonus2);
					GConText.setBonus3(resp[0].bonus3);
					GConText.setIntentos(resp[0].intentos); */
					GConText.setStatus(resp[0].status);
					GConText.setBookmark(resp[0].bookmark);

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
					console.log("🚀 ~ dB.bookmark", resp[0].bookmark)

					console.log("~~~~~~~ ---------------- ~~~~~~~")

					setAuth(resp[0].id)
					//(resp[0].id,400,'puntos')
					//GConText.username === 'admin' && GConText.password === 'admin' ? setRedirectNow(1) :  setRedirectNow(2)
					resp[0].type === 'admin' ? setRedirectNow(1) : setRedirectNow(2)
				}
			}).catch((err) => {
				console.log(err)
			}).finally(() => {
			})

	}

	useEffect(() => {
		//console.log("🚀 ~ vistos", vistos)
		//setLoading(true)
		//console.log("🚀 ~ CookieId.idUser", CookieId.idUser)

		if (CookieId.idUser !== undefined) {
			chkAuth(CookieId.idUser)
		}

	}, [])

	return (
		<>
			{/* <div className="container fondo-rosa" style={{ backgroundImage: `url(${background})` }}> */}
			<div className="container login-background">

				{/* <Nav titulo={"login"}></Nav> */}

				<span className='fs-10 position-absolute bottom-0 end-0 p-1'>{GConText.version}</span>

				<div className="LoginForm">
					<div className="col-12 col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-8 offset-sm-2">
						<div className='login-form'>

							<div className="col-12">
								<div className="d-flex justify-content-around pt-4 pb-2">
									<img src={Img.Logo_femsa_rojo} alt="" width="100"></img>
									<img src={Img.Logo} alt="" width="100"></img>
								</div>
							</div>

							{/* <div className="col-6">
								<div className="pt-4 pb-2">
								</div>
							</div> */}

							<div className="col-12">
								<div className="mt-5 c-brown txt-bld fs-32 lh-35 p-2">
									Certificación de Ética<br></br> y Cumplimiento
								</div>
							</div>

							<div className="col-12 c-brown txt-reg fs-24">
								<div className="mt-4 text-login">
									Iniciar sesión
								</div>
							</div>

							<div className="mt-3">
								<div className="container">
									<div className="row">
										<div className="col-6 offset-1 col-md-6 offset-md-1 col-sm-6 offset-sm-1 text-left ">
											<label className="c-brown txt-bld fs-12">Correo Electrónico:</label>
										</div>
										<div className="col-4 col-md-4 col-sm-4 text-right align-self-center ">
										<span style={{ display: user === false && verImg === true ? 'block' : 'none' }} className="fs-10 c-rojo">Usuario no existe</span>
										</div>

										<div className='col-10 offset-1 align-self-center border-amarillo text-center'>
											<div className='row'>
												<div className="col-12 col-sm-10 col-md-10 align-self-center text-center ">
													<input type="text" onChange={UserChange} onKeyDown={handleKeyDown} className="fs-16 form-control-login" placeholder=""></input>
												</div>
												<div className="d-none d-sm-block col-sm-2 col-md-2 align-self-center text-center ">
													<img src={user === false ? Img.mal : Img.bien} style={{ display: verImg === true ? 'block' : 'none' }} alt="retro" width="30"></img>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>


							<div className="mt-3">
								<div className="container">
									<div className="row">
										<div className="col-6 offset-1 col-md-6 offset-md-1 col-sm-6 offset-sm-1 text-left ">
											<label className="c-brown txt-bld fs-12">Contraseña:</label>
										</div>
										<div className="col-4 col-md-4 col-sm-4 text-right align-self-center ">
										<span style={{ display: pass === false && verImg === true ? 'block' : 'none' }} className="fs-10 c-rojo">Contraseña incorrecta</span>
										</div>

										<div className='col-10 offset-1 align-self-center border-amarillo text-center'>
											<div className='row'>
												<div className="col-12 col-sm-10 col-md-10 align-self-center text-center ">
												<input type="password" onChange={PassChange} onKeyDown={handleKeyDown} className="fs-16  form-control-login" placeholder=""></input>
												</div>
												<div className="d-none d-sm-block col-sm-2 col-md-2 align-self-center text-center ">
												<img src={pass === false ? Img.mal : Img.bien} style={{ display: verImg === true ? 'block' : 'none' }} alt="retro" width="30"></img>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="mt-5 mb-5">
								{/* <Link className='btn_negro' to="/introduccion" onClick={() => chkData()}>chkData</Link> */}
								<span className='btn_amarillo' onClick={() => chkLogin()}>Ingresar</span>
								{/* <span className='btn_amarillo' onClick={() => chkData()}>chkData</span> */}
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