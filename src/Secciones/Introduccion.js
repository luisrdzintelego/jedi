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


	function refreshPage() {
		window.location.reload(false);
	  }


	const removeAuth = (name) => {
		setCookieId(name, '', { path: '/', expires: (new Date(Date.now())) });
	};

	//const [page, setPage] = useState(0);
	//const [terminoLamina, setTerminoLamina] = useState(GConText.status);



	/*
	const onClick = () => {
		setPage(page+1)
		setTerminoLamina(false)
	};
	*/

	async function udpatesUser(id, bookmark, completado) {
		//console.log("🟠 ~ ⭐udpatesUser:  -id: ", id , " bookmark: ", bookmark, " completado: ", completado)
		console.log("🟠 ~ ⭐udpatesUser:")

		const original = await DataStore.query(Ranking, id);
		await DataStore.save(Ranking.copyOf(original, updated => {
			//updated.status = completado
			updated.bookmark = bookmark
			updated.status = (completado === 'true' ? true : false)

		})
		).then((resp) => {
			//console.log("🟠 ~ Datos ya actualizados en la BaseDeDatos! ----->")
			//console.log("🟠 ~ DB.id:", resp.id)
			//console.log("🟠 ~ DB.bookmark:", resp.bookmark)
			//console.log("🟠 ~ DB.status:", resp.status)
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
				//console.log("🟠 ~ resp_________:", resp)
				if (resp.length >= 1) {
					//console.log("🟠 ~ SI EXISTE Auth ID:", resp[0].id)
				} else {
					//console.log("🟠 ~ NO EXISTE Auth ID:")
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

					console.log(" 🟠  ~~~~~~~ DATOS actualizados  DataStore AWS ~~~~~~~")
					/* console.log("🟠 ~ dB.id", resp[0].id);
					console.log("🟠 ~ dB.username", resp[0].username)
					console.log("🟠 ~ dB.password", resp[0].password)
					console.log("🟠 ~ dB.nombre", resp[0].nombre)
					console.log("🟠 ~ dB.grupo", resp[0].grupo)
					console.log("🟠 ~ dB.type", resp[0].type)*/
					console.log("🟠 ~ dB.bookmark", resp[0].bookmark) 
					console.log("🟠 ~ dB.status", resp[0].status)

				}
			}).catch((err) => {
				console.log(err)
			}).finally(() => {
			})

	}


	// This hook is listening an event that came from the Iframe
	useEffect(() => {

		//console.log("🚀 ~ CookieId.idUser", CookieId.idUser)

		if (CookieId.idUser !== undefined) {
			chkUser(CookieId.idUser)
		}

		//console.log('terminoLamina = ' + terminoLamina + ' is defined now!');

		const handler = (ev) => {

			try {
				JSON.parse(ev.data);
			} catch (e) {
				return false;
			}
			
			const data = JSON.parse(ev.data)
			console.log("🟣↩︎ ~Datos que llegan desde el Curso! ----->")
			//console.log("🟣↩︎ ~Datos que llegan desde el Curso! ----->", data)
			console.log("🟣↩︎ ~ data.message:", data.message)
			console.log("🟣↩︎ ~ data.completado:", data.completado)
			console.log("🟣↩︎ ~ data.bookmark:", data.bookmark)
			console.log("🟣 ~ ------------------------")
			console.log("🟠↩︎ ~Datos que estaban almacenados en la BaseDeDatos! ----->")
			console.log("🟠 ~ GConText.status:", GConText.status)
			console.log("🟠 ~ GConText.bookmark:", GConText.bookmark)
			//console.log("🟠 ~ GConText.userId:", GConText.userId)
			console.log("🟠 ~ ------------------------")

			//console.log(data.completado, " -- ", GConText.userId, " -- ", data.bookmark)
			//console.log("terminoLamina--- ", terminoLamina)

			if ( data.completado === 'true' && data.message === 'todoBien!' ) {

				udpatesUser(GConText.userId, data.bookmark, data.completado)

				setEstado(true)

				if(GConText.status !== true){
					Swal.fire({
						title: '<strong>Curso Completado!</strong>',
						html: `<i> ${GConText.nombre}, haz completado completado el curso</i>`,
						icon: "success",
						showConfirmButton: false,
						timer: 4000
					});
				}

			} else if(data.completado === 'false' && data.message === 'todoBien!'){

				udpatesUser(GConText.userId, data.bookmark, data.completado)

				setEstado(true)

				/* Swal.fire({
					title: '<strong>Avance Guardado!</strong>',
					html: `<i> ${GConText.nombre}, Se guardo tu avance en el curso</i>`,
					icon: "success",
					showConfirmButton: false,
					timer: 4000
				}); */
				
			} else if(data.completado === 'false' && data.message === 'Error!'){

				setEstado(false)

				Swal.fire({
					title: '<strong>Error de comunicación con el servidor!</strong>',
					html: `<i> ${GConText.nombre}, intenta mas tarde</i>`,
					icon: "error",
					showConfirmButton: true
				});

			} else if(data.completado === 'false' && data.message === 'restart!'){

				udpatesUser(GConText.userId, data.bookmark, data.completado)

				/* setEstado(false)

				Swal.fire({
					title: '<strong>Error de comunicación con el servidor!</strong>',
					html: `<i> ${GConText.nombre}, intenta mas tarde</i>`,
					icon: "error",
					showConfirmButton: true
				}); */

				refreshPage();

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
	  	//window.addEventListener('message', console.log)
		window.addEventListener('message', handler)
		// Don't forget to remove addEventListener

		return () => {
			window.removeEventListener('message', handler);
		}

		//return () => window.removeEventListener('message', handler)
		
	}, [])


	/*
	const [height, setHeight] = React.useState("0px");
	const onLoad = () => {
	  setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
	};
	*/

	/* useEffect(() => {
		//console.log("🚀 ~ vistos", vistos)
		//setLoading(true)
		console.log("🚀 ~ CookieId.idUser", CookieId.idUser)

		if (CookieId.idUser !== undefined) {
			chkUser(CookieId.idUser)
		}

	}, []) */

	const ref2 = useRef();
	useEffect(() => {
		const iframe = ref2.current;
		iframe.addEventListener('load', () => {
			//iframe.contentWindow.postMessage('message', 'http://localhost:3000');

			const win = iframe.contentWindow;
			//win.postMessage(GConText.bookmark, 'https://intelegoprojects.com');
			//win.postMessage('3-1-1-x,1|1-0-0-0|1-0-0-0|1-0-0-0|1-0-0-0|1-0-0-0|1-0-0-0|1-0-0-0|1-0-0-0|1-0-0-0&&1&&abuso-de-autoridad-y-ambiente-laboral&&&&0&&0&&', 'http://localhost:3000');
			
			GConText.bookmark != null ? win.postMessage(GConText.bookmark, '*') : win.postMessage('empty', '*')

			//win.postMessage(GConText.bookmark, '*');
			//win.postMessage(GConText.bookmark != null ? GConText.bookmark : '1-0-0-0|1-0-0-0|1-0-0-0|1-0-0-0|1-0-0-0|1-0-0-0|1-0-0-0|1-0-0-0|1-0-0-0|1-0-0-0&&1&&index&&&&0&&0&&' , '*');

			//win.postMessage('message (2)', 'http://localhost:3000/');

		});
	//}, [ref2, GConText.bookmark]);

	}, [ref2,GConText.bookmark]);

	/* const ref = useRef(); */
	/* 
	useEffect(() => {
		const iframe = ref.current;
		iframe.addEventListener('load', () => {
			iframe.contentWindow.postMessage(GConText.bookmark, 'http://intelegoprojects.com/FEMSA/CODIGO_ETICA/SITIO_PLATAFORMA/index.html');
		});
	 }, [ref]); */


	 const [estado, setEstado] = useState(true);

	return (
		<>
			<div className="container-fluid introduccion-background" style={{
									//maxWidth: 640,
									margin: '0px',
									//minHeight: '100vh',
									padding: '0px'
									//overflow: "hidden",
								}}>
				<Nav titulo={"Introduccion"} curso={true}></Nav>

				<span className='fs-10 position-absolute bottom-0 end-0 p-1'>{GConText.version}</span>

				{/* <div style={{ width: "100%" }}> */}
				<div className='container-fluid' style={{
									//maxWidth: 640,
									margin: '0px',
									//minHeight: '100vh',
									padding: '0px'
									//overflow: "hidden",
								}}>
					<div className='row'>
						<div className='col-12 col-md-12 text-center'>
							
						<iframe title='Curso0'
								className={`${estado ? '' : 'disabled'} col-12 col-md-12 text-left`}
								ref={ref2}
								//onLoad={onLoad}
								autoFocus={true}
								id="myFrame3"
								//src={'https://intelegoprojects.com/FEMSA/CODIGO_ETICA/SITIO_PLATAFORMA_FINAL/index.html'}

								src={process.env.PUBLIC_URL + '/sco01/index.html'}

								//src={'sco01/index.html'}
								//width="100%"
								//height="100%"
								//height={height}
								scrolling="yes"
								frameBorder="0"

								//allow-same-origin: permite que el contenido de un iframe se considere del mismo origen
								//allow-popups: permite que se abran ventanas emergentes en un iframe
								//allow-downloads: perimite permite descargas desde el iframe
								//allow-scrips: permite que el iframe ejecute JavaScript
								
								sandbox='allow-same-origin allow-scripts allow-modals allow-downloads allow-popups' 
								loading='lazy'

								style={{
									//maxWidth: 640,
									width: '100%',
									//minHeight: '100vh',
									height:  (GConText.pruebas ?' calc(100vh - 110px)' : 'calc(100vh - 50px)')
									//overflow: "hidden",
								}}
							/>


							{/* <h1>{terminoLamina ? '✅ Lamina Completada' : '❌ Lamina Corriendo'}</h1> */}
							{/* <h1>{terminoLamina ? '✅ Curso Completada' : '😱 Curso Corriendo'}</h1> */}

{/* 							{ terminoLamina 
							? 
							<>
							<h1 style={{
										padding: '20px',
										fontSize: '45px',
										//color: "red"
									}}>Curso Completado 🟢</h1>
							<iframe title='Curso0'
								ref={ref2}
								//onLoad={onLoad}
								autoFocus={true}
								id="myFrame3"
								src={''}
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
							
							</>
							 : 
							 <>
							<iframe title='Curso0'
								ref={ref2}
								//onLoad={onLoad}
								autoFocus={true}
								id="myFrame3"
								//src={'https://intelegoprojects.com/FEMSA/CODIGO_ETICA/SITIO_PLATAFORMA/index.html'}
								src={'sco01/index.html'}
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
							</>
							} */}

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