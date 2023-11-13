/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useContext, useState, useEffect, useRef } from 'react';
import { VarContext } from '../Context/VarContext';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

import { useSwipeable } from "react-swipeable";

import './Introduccion.css';

import * as Img from '../Components/Imagenes'
import Nav from '../Components/Nav'

import { DataStore } from '@aws-amplify/datastore';
import { Ranking } from '../models';


const Introduccion = () => {

  //---LOGOUT ----//
  const [CookieId, setCookieId] = useCookies(['idUser']);

  const removeAuth = (name) => {
    setCookieId(name, '', { path: '/', expires: (new Date(Date.now())) });
  };

  const GConText = useContext(VarContext);

	//const [page, setPage] = useState(0);
	const [terminoLamina, setTerminoLamina] = useState(GConText.Status);
	/*
	const onClick = () => {
		setPage(page+1)
		setTerminoLamina(false)
	};
	*/
	const [message, setMessage] = useState('')

	async function udpatesUser(bolean, id) {
		console.log("🚀 udpates 🚀 ~", bolean, "--" , id)
		const original = await DataStore.query(Ranking, id);
		await DataStore.save(Ranking.copyOf(original, updated => {
			updated.status = bolean
		})
		).then((resp) => {
			console.log("🚀 ~ resp", resp)
			chkUser(GConText.UserId)
			
		}).catch((err) => {
			console.log(err)
		}).finally(() => {
		})
	}

	const chkUser = async (id) => {
		let num = 0;
		const posts = await DataStore.query(Ranking, c => c.id("eq", id))
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

					console.log("~~~~~~~ DATOS desde DataStore AWS ~~~~~~~")
					console.log("🚀 ~ dB.id", resp[0].id);
					console.log("🚀 ~ dB.username", resp[0].username)
					console.log("🚀 ~ dB.password", resp[0].password)
					console.log("🚀 ~ dB.nombre", resp[0].nombre)
					console.log("🚀 ~ dB.grupo", resp[0].grupo)
					console.log("🚀 ~ dB.type", resp[0].type)

					console.log("🚀 ~ dB.status", resp[0].status)

				}
			}).catch((err) => {
				console.log(err)
			}).finally(() => {
			})

	}


	// This hook is listening an event that came from the Iframe
	useEffect(() => {

		console.log('terminoLamina = '+ terminoLamina +' is defined now!');


		const handler = (ev) => {

			try {
				JSON.parse(ev.data);
			} catch (e) {
				return false;
			}

				const data = JSON.parse(ev.data)
				console.log("Hello World?", data)
				setMessage(data.message)
				setTerminoLamina(data.completado)

				udpatesUser(data.completado, GConText.UserId)

				console.log("message--- ", message)
				console.log("terminoLamina--- ", terminoLamina)

			return true;
		  }

		/*
	  const handler = (ev) => {

		const data = JSON.parse(event.data)
		console.log("Hello World?", data)

		//zconsole.log('ev', ev)
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
  
	const ref = useRef();  
	/*
	const [height, setHeight] = React.useState("0px");
	const onLoad = () => {
	  setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
	};
	*/

	return (
		<>
			<div className="container introduccion-background pb-5">
				<Nav titulo={"Introduccion"}></Nav>

				<Link className='btn_amarillo' onClick={() => removeAuth('idUser')} to='/' ><FontAwesomeIcon icon={faPowerOff} /> Logout</Link>

				<div style={{ width: "100%" }}>

					{/* <h1>{terminoLamina ? '✅ Lamina Completada' : '❌ Lamina Corriendo'}</h1> */}
					<h1>{terminoLamina ? '✅ Curso Completada' : '😱 Curso Corriendo'}</h1>

					{/* <iframe
						ref={ref}
						//onLoad={onLoad}
						autoFocus={true}
						id="myFrame"
						//src={process.env.PUBLIC_URL + 'curso1/asignaciones.html'}
						//src={`${process.env.PUBLIC_URL}/curso1/asignaciones.html`}
						src="public/curso1/asignaciones.html"
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

					<iframe
						ref={ref}
						//onLoad={onLoad}
						autoFocus={true}
						id="myFrame"
						src={'/curso1/asignaciones.html'}
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
					></iframe>


					<iframe
						ref={ref}
						//onLoad={onLoad}
						autoFocus={true}
						id="myFrame"
						src={'http://intelegoprojects.com/JEDI/curso1/asignaciones.html'}
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
					></iframe>

					{/* {terminoLamina ? <h1><button onClick={onClick}>🔜 Siguiente Lamina </button></h1> : <></>} */}
					{/* <button onClick={onClick}>{paused ? "Unpause" : "Pause"}</button> */}
				</div>

			</div>

		</>
	)
}

export default Introduccion