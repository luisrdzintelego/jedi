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

	async function updateInfo(id, numero, seccion) {
		const original = await DataStore.query(Ranking, id);
		console.log("🚀 ~ original", original)
		await DataStore.save(
			Ranking.copyOf(original, updated => {
				updated.seccion = numero
			})
		);
		const Update = await DataStore.query(Ranking, id);
		console.log("🚀 ~ Update", Update)
	}

	let num = 0;
	const chkLogin = async () => {

		num = 0;
		//const models = await DataStore.query(Ranking);
		//console.log(models);

		const posts = await DataStore.query(Ranking, c => c.username("eq", GConText.Username));
		console.log("🚀 ~ posts:", posts)

		//posts.length === 0 ? console.log("🚀 ~ ESTE USUSARIO NO EXISTE:") : console.log("🚀 ~ SI EXISTE:", posts)

		if (posts.length >= 1) {
			console.log("🚀 ~ SI EXISTE:", posts[0].username)
			if (GConText.Username === posts[0].username) {
				console.log("🚀 ~ USUARIO COINCIDEN CON LOS INPUTS:")
				setUser(true);
			} else {
				console.log("🚀 ~ USUARIO NO COINCIDE:")
				setUser(false);
				num = 1;
			}
			if (GConText.Password === posts[0].password) {
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
			GConText.setUserId(posts[0].id);
			GConText.setUsername(posts[0].username)
			GConText.setPassword(posts[0].password);
			GConText.setNombre(posts[0].nombre);
			GConText.setGrupo(posts[0].grupo);
			GConText.setType(posts[0].type);
			//DATOS QUE CAMBIAN
			GConText.setAvatar(posts[0].avatar);
			GConText.setPuntos(posts[0].puntos);
			GConText.setTiempo(posts[0].tiempo);
			GConText.setJoya1(posts[0].gema1);
			GConText.setJoya2(posts[0].gema2);
			GConText.setJoya3(posts[0].gema3);
			GConText.setBonus1(posts[0].bonus1);
			GConText.setBonus2(posts[0].bonus2);
			GConText.setBonus3(posts[0].bonus3);
			GConText.setIntentos(posts[0].intentos);
			GConText.setStatus(posts[0].status);

			console.log("~~~~~~~ DATOS desde DataStore AWS ~~~~~~~")
			console.log("🚀 ~ dB.id", posts[0].id);
			console.log("🚀 ~ dB.username", posts[0].username)
			console.log("🚀 ~ dB.password", posts[0].password)
			console.log("🚀 ~ dB.nombre", posts[0].nombre)
			console.log("🚀 ~ dB.grupo", posts[0].grupo)
			console.log("🚀 ~ dB.type", posts[0].type)

			console.log("🚀 ~ dB.avatar", posts[0].avatar)
			console.log("🚀 ~ dB.puntos", posts[0].puntos)
			console.log("🚀 ~ dB.tiempo", posts[0].tiempo)
			console.log("🚀 ~ dB.gema1", posts[0].gema1)
			console.log("🚀 ~ dB.gema2", posts[0].gema2)
			console.log("🚀 ~ dB.gema3", posts[0].gema3)
			console.log("🚀 ~ dB.bonus1", posts[0].bonus1)
			console.log("🚀 ~ dB.bonus2", posts[0].bonus2)
			console.log("🚀 ~ dB.bonus3", posts[0].bonus3)
			console.log("🚀 ~ dB.intentos", posts[0].intentos)
			console.log("🚀 ~ dB.status", posts[0].status)

			console.log("~~~~~~~ ---------------- ~~~~~~~")

			setAuth(posts[0].id)
			//(posts[0].id,400,'puntos')
			posts[0].type === 'admin' ? setRedirectNow(1) : setRedirectNow(2)
		}

	}

	const chkAuth = async (id) => {

		num = 0;
		const posts = await DataStore.query(Ranking, c => c.id("eq", id));
		console.log("🚀 ~ posts:", posts)

		if (posts.length >= 1) {
			console.log("🚀 ~ SI EXISTE Auth ID:", posts[0].id)
		} else {
			console.log("🚀 ~ NO EXISTE Auth ID:")
			num = 1;
		}

		if (num === 0) {
			//DATOS FIJOS
			GConText.setUserId(posts[0].id);
			GConText.setUsername(posts[0].username)
			GConText.setPassword(posts[0].password);
			GConText.setNombre(posts[0].nombre);
			GConText.setGrupo(posts[0].grupo);
			GConText.setType(posts[0].type);
			//DATOS QUE CAMBIAN
			GConText.setAvatar(posts[0].avatar);
			GConText.setPuntos(posts[0].puntos);
			GConText.setTiempo(posts[0].tiempo);
			GConText.setJoya1(posts[0].gema1);
			GConText.setJoya2(posts[0].gema2);
			GConText.setJoya3(posts[0].gema3);
			GConText.setBonus1(posts[0].bonus1);
			GConText.setBonus2(posts[0].bonus2);
			GConText.setBonus3(posts[0].bonus3);
			GConText.setIntentos(posts[0].intentos);
			GConText.setStatus(posts[0].status);

			console.log("~~~~~~~ DATOS desde DataStore AWS ~~~~~~~")
			console.log("🚀 ~ dB.id", posts[0].id);
			console.log("🚀 ~ dB.username", posts[0].username)
			console.log("🚀 ~ dB.password", posts[0].password)
			console.log("🚀 ~ dB.nombre", posts[0].nombre)
			console.log("🚀 ~ dB.grupo", posts[0].grupo)
			console.log("🚀 ~ dB.type", posts[0].type)

			console.log("🚀 ~ dB.avatar", posts[0].avatar)
			console.log("🚀 ~ dB.puntos", posts[0].puntos)
			console.log("🚀 ~ dB.tiempo", posts[0].tiempo)
			console.log("🚀 ~ dB.gema1", posts[0].gema1)
			console.log("🚀 ~ dB.gema2", posts[0].gema2)
			console.log("🚀 ~ dB.gema3", posts[0].gema3)
			console.log("🚀 ~ dB.bonus1", posts[0].bonus1)
			console.log("🚀 ~ dB.bonus2", posts[0].bonus2)
			console.log("🚀 ~ dB.bonus3", posts[0].bonus3)
			console.log("🚀 ~ dB.intentos", posts[0].intentos)
			console.log("🚀 ~ dB.status", posts[0].status)

			console.log("~~~~~~~ ---------------- ~~~~~~~")

			setAuth(posts[0].id)
			//(posts[0].id,400,'puntos')
			//GConText.Username === 'admin' && GConText.Password === 'admin' ? setRedirectNow(1) :  setRedirectNow(3)
			posts[0].type === 'admin' ? setRedirectNow(1) : setRedirectNow(3)
		}

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

				<div className="row mt-5 mx-1">
					<div className="col-12 col-lg-6 offset-lg-3 col-md-8 offset-md-2">
						<div className='login-form'>

							<div className="mt-1">
								<img src={Img.titulo_curso} alt="" width="150" height="90"></img>
							</div>
							<div className="mt-2">
								<span className="form-label mb-5"
									style={{
										padding: '20px',
										fontSize: '25px',
										color: "red"
									}}>Iniciar sesión</span>
							</div>
							<div className="mt-2">
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

							<div className="mt-5 mb-3">
								{/* <Link className='btn_negro' to="/introduccion" onClick={() => chkLogin()}>Ingresar</Link> */}
								<span className='btn_negro' onClick={() => chkLogin()}>Ingresar</span>
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