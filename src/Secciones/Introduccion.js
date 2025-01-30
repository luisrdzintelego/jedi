/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useContext, useState, useEffect, useRef } from 'react';

//v2025-01
import { useLocation, Link } from 'react-router-dom';
import { VarContext } from '../Context/VarContext';

import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

import { useSwipeable } from "react-swipeable";
import Swal from 'sweetalert2'

import './Introduccion.css';

import * as Img from '../Components/Imagenes'
import Nav from '../Components/Nav'

import { DataStore } from '@aws-amplify/datastore';
import { Ranking } from '../models';


const Introduccion = () => {

	const GConText = useContext(VarContext);

	//---LOGOUT ----//
	const [CookieId, setCookieId] = useCookies(['idUser']);

	//USELOCATION
	//const location = useLocation();
	//const [nombre, setNombre] = useState(location.state.nombre)
	//const [id, setId] = useState(location.state.id)
	//const [complete, setComplete] = useState(location.state.complete)
	//const [bookmark, setBookmark] = useState(location.state.bookmark)
	//const [user, setUser] = useState([])



	const removeAuth = (name) => {
		setCookieId(name, '', { path: '/', expires: (new Date(Date.now())) });
	};

	//const [page, setPage] = useState(0);
	const [terminoLamina, setTerminoLamina] = useState(GConText.status);



	/*
	const onClick = () => {
		setPage(page+1)
		setTerminoLamina(false)
	};
	*/
	const [message, setMessage] = useState('')

	async function udpatesUser(id, bookmark) {
		console.log("🚀 udpates 🚀 ~ --id -- ", id)
		console.log("🚀 udpates 🚀 ~ --bookmark -- ", bookmark)
		const original = await DataStore.query(Ranking, id);
		await DataStore.save(Ranking.copyOf(original, updated => {
			updated.status = true
			updated.bookmark = bookmark
		})
		).then((resp) => {
			console.log("🚀 ~ resp", resp)
			chkUser(GConText.userId)

		}).catch((err) => {
			console.log(err)
		}).finally(() => {
		})
	}

	const chkUser = async (id) => {
		let num = 0;
		//const posts = await DataStore.query(Ranking, c => c.id("eq", id))
		const posts = await DataStore.query(Ranking, (c) => c.id.eq(id))
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
					GConText.setStatus(resp[0].status);
					GConText.setBookmark(resp[0].bookmark);

					console.log("~~~~~~~ DATOS desde DataStore AWS ~~~~~~~")
					/* console.log("🚀 ~ dB.id", resp[0].id);
					console.log("🚀 ~ dB.username", resp[0].username)
					console.log("🚀 ~ dB.password", resp[0].password)
					console.log("🚀 ~ dB.nombre", resp[0].nombre)
					console.log("🚀 ~ dB.grupo", resp[0].grupo)
					console.log("🚀 ~ dB.type", resp[0].type)*/
					console.log("🚀 ~ dB.bookmark", resp[0].bookmark) 
					console.log("🚀 ~ dB.status", resp[0].status)

				}
			}).catch((err) => {
				console.log(err)
			}).finally(() => {
			})

	}


	// This hook is listening an event that came from the Iframe
	useEffect(() => {

		console.log('terminoLamina = ' + terminoLamina + ' is defined now!');


		const handler = (ev) => {

			try {
				JSON.parse(ev.data);
			} catch (e) {
				return false;
			}

			const data = JSON.parse(ev.data)
			console.log("se mando esto a la Plataforma! ----->", data)
			setMessage(data.message)
			setTerminoLamina(data.completado)

			//console.log(data.completado, " -- ", GConText.userId, " -- ", data.bookmark)
			udpatesUser(GConText.userId, data.bookmark)

			console.log("message--- ", message)
			console.log("terminoLamina--- ", terminoLamina)

			if (terminoLamina === '') {

				Swal.fire({
					title: '<strong>Curso Completado!</strong>',
					html: `<i> ${GConText.nombre} haz completado se agrego el bookmark 🤙!</i>`,
					icon: "success",
					showConfirmButton: false,
					timer: 2000
				});

			}


			return true;
		}

		/*
	  const handler = (ev) => {

		const data = JSON.parse(event.data)
		console.log("Hello World?", data)

		//console.log('ev', ev)
		if (typeof ev.data !== 'object') return
		if (!ev.data.type) return
		if (ev.data.type !== 'button-click') return
		if (!ev.data.message) return
  
		setMessage(ev.data.message)
		setTerminoLamina(ev.data.completado)
	  }
	  */

		window.addEventListener('message', handler)

		// Don't forget to remove addEventListener
		return () => window.removeEventListener('message', handler)
	}, [])


	/*
	const [height, setHeight] = React.useState("0px");
	const onLoad = () => {
	  setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
	};
	*/

	useEffect(() => {
		//console.log("🚀 ~ vistos", vistos)
		//setLoading(true)
		console.log("🚀 ~ CookieId.idUser", CookieId.idUser)

		if (CookieId.idUser !== undefined) {
			chkUser(CookieId.idUser)
		}

	}, [])

	const ref2 = useRef();
	useEffect(() => {
		const iframe = ref2.current;
		iframe.addEventListener('load', () => {
			//iframe.contentWindow.postMessage('message', 'http://localhost:3000');

			const win = iframe.contentWindow;
			win.postMessage(GConText.bookmark, 'https://intelegoprojects.com/FEMSA/CODIGO_ETICA/SITIO_PLATAFORMA/index.html');
			//win.postMessage('message (2)', 'http://localhost:3000/');

		});
	}, [ref2]);

	const ref = useRef();
	/* 
	useEffect(() => {
		const iframe = ref.current;
		iframe.addEventListener('load', () => {
			iframe.contentWindow.postMessage(GConText.bookmark, 'http://intelegoprojects.com/FEMSA/CODIGO_ETICA/SITIO_PLATAFORMA/index.html');
		});
	 }, [ref]); */



	return (
		<>
			<div className="container introduccion-background">
				<Nav titulo={"Introduccion"}></Nav>

				<Link className='btn_amarillo' onClick={() => removeAuth('idUser')} to='/' ><FontAwesomeIcon icon={faPowerOff} /> Logout</Link>
				<br></br><br></br>

				{/* <div style={{ width: "100%" }}> */}
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-md-12 text-center '>

							{/* <h1>{terminoLamina ? '✅ Lamina Completada' : '❌ Lamina Corriendo'}</h1> */}
							{/* <h1>{terminoLamina ? '✅ Curso Completada' : '😱 Curso Corriendo'}</h1> */}

							<div>Nombre: {GConText.username}, ID: {GConText.userId} - BOOKMARK: {GConText.bookmark} - STATUS: {GConText.status === true ? 'true' : 'false'}</div>
							<h1>{terminoLamina ? '✅ Curso Completado' : '😱 Curso Corriendo'}</h1>

							<iframe title='Curso0'
								ref={ref2}
								//onLoad={onLoad}
								autoFocus={true}
								id="myFrame3"
								src={'https://intelegoprojects.com/FEMSA/CODIGO_ETICA/SITIO_PLATAFORMA/index.html'}
								//width="100%"
								//height="100%"
								//height={height}
								scrolling="yes"
								frameBorder="0"
								style={{
									//maxWidth: 640,
									width: "100%",
									minHeight: '100vh',
									//height: "100%",
									//overflow: "hidden",
								}}
							/>


							{/* <iframe
						ref={ref}
						//onLoad={onLoad}
						autoFocus={true}
						id="myFrame1"
						//src={process.env.PUBLIC_URL + 'curso1/asignaciones.html'}
						//src={`${process.env.PUBLIC_URL}/curso1/asignaciones.html`}
						src="curso1/asignaciones.html"
						width="100%"
						//height="100%"
						//height={height}
						scrolling="yes"
						frameBorder="0"
						style={{
							//maxWidth: 640,
							width: "100%",
							minHeight: 1000,
							overflow: "hiden",
						}}
					></iframe> */}

							{/* <iframe
						ref={ref}
						//onLoad={onLoad}
						autoFocus={true}
						id="myFrame"
						src={process.env.PUBLIC_URL + 'curso1/asignaciones.html'}
						//src={`${process.env.PUBLIC_URL}/curso1/asignaciones.html`}
						width="100%"
						//height="100%"
						//height={height}
						scrolling="yes"
						frameBorder="0"
						style={{
							//maxWidth: 640,
							width: "100%",
							minHeight: 1000,
							overflow: "hiden",
						}}
					></iframe> */}

						{/* //SI FUNCIONA */} 
						{/* <iframe
						ref={ref}
						//onLoad={onLoad}
						autoFocus={true}
						id="myFrame2"
						src={'http://intelegoprojects.com/FEMSA/CODIGO_ETICA/SITIO_PLATAFORMA/index.html'}
						//src={`${process.env.PUBLIC_URL}/curso1/asignaciones.html`}
						width="100%"
						//height="100%"
						//height={height}
						scrolling="yes"
						frameBorder="0"
						style={{
							//maxWidth: 640,
							width: "100%",
							minHeight: '100vh',
							overflow: "hiden",
						}}
					></iframe> */}

							{/* {terminoLamina ? <h1><button onClick={onClick}>🔜 Siguiente Lamina </button></h1> : <></>} */}
							{/* <button onClick={onClick}>{paused ? "Unpause" : "Pause"}</button> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Introduccion