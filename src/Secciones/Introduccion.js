/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useContext, useState, useEffect, useRef } from 'react';
import { VarContext } from '../Context/VarContext';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import { useSwipeable } from "react-swipeable";

import './Introduccion.css';

import * as Img from '../Components/Imagenes'
import Nav from '../Components/Nav'

const Introduccion = () => {

	const GConText = useContext(VarContext);

	const [page, setPage] = useState(0);
	const [terminoLamina, setTerminoLamina] = useState(false);

	const onClick = () => {
		setPage(page+1)
		setTerminoLamina(false)
	};

	const [message, setMessage] = useState(false)

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
				<div style={{ width: "100%" }}>

					{/* <h1>{terminoLamina ? '✅ Lamina Completada' : '❌ Lamina Corriendo'}</h1> */}
					<h1>{terminoLamina ? '✅ Curso Completada' : '😱 Curso Corriendo'}</h1>

					<iframe
						ref={ref}
						//onLoad={onLoad}
						autoFocus={true}
						id="myFrame"
						src="/curso1/asignaciones.html"
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

					{terminoLamina ? <h1><button onClick={onClick}>🔜 Siguiente Lamina </button></h1> : <></>}
					{/* <button onClick={onClick}>{paused ? "Unpause" : "Pause"}</button> */}
				</div>

			</div>

		</>
	)
}

export default Introduccion