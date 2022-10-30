import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import { faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'

import { useSwipeable } from "react-swipeable";

import './Instrucciones.css';

import titulo_curso from "../Img/Titulo_curso.png";
import info from "../Img/info.png";


import fizq from "../Img/flecha_izq.png";
import fder from "../Img/flecha_der.png";


import Nav from '../Components/Nav'

function Instrucciones() {
	let sliders = [true,0];
	const [vistos, setVistos] =  useState(sliders)
	const [activeIndex, setActiveIndex] = useState(0);

	const [paused, setPaused] = useState(false);
	const [termino, setTermino] = useState(false);

	const updateIndex = (newIndex , prevEmployees) => {	
		console.log("🚀 ~ newIndex", newIndex)
		setActiveIndex(newIndex);

	  };

	  /*AGRERGAR A UN ARRAT SU MISMO TAMAÑO*/
	  const [myArray, updateMyArray] = useState([]);
	  const onClick = () => {
        updateMyArray( arr => [...arr, `${arr.length}`]);
		console.log("🚀 ~ myArray", myArray)
    };


	function IncrementarArray(index) {

		const verVistos = vistos.map((c, i) => {
			//c --- valor de la posicion en el array
			//i --- calor del incremiento 1,2,3,4,5,6 etc
		  if (i === index && c === 0) {
			// Increment the clicked counter
			return true;
		  } else {
			// The rest haven't changed
			return c;
			
		  }
		});

		setVistos(verVistos);

		let cont = 1
		vistos.forEach(element => {
			console.log("🚀 ~ vistos", vistos)
			if(element === true){
				cont++;
			}
			if(cont === vistos.length){setTermino(true)}
		});

		

	  }
	
	  useEffect( () => {
		//console.log("🚀 ~ vistos", vistos)
		//setLoading(true)
		
	  }, [])
	

	//hacer sliser en telefono//
	const handlers = useSwipeable({
		onSwipedLeft: () => {
			if(activeIndex <(vistos.length-1)){
			updateIndex(activeIndex + 1)
			}
		},	
		onSwipedRight: () => {
			if(activeIndex > 0){
			updateIndex(activeIndex - 1)
			}
		}
	  });


  return (
	<>
		<div className="container-fluid instruciones-background">
			<div className="row">
				<div className="col-md-12">
				<Nav titulo={"Instrucciones"}></Nav>
				</div>				
			</div>

			<div className="row mt-3">
				<div className="col-md-6 offset-md-3  instruciones-form">
					<div {...handlers}>

						<div className="mt-1">
							<img src={titulo_curso} width="110"></img>
						</div>

						<div id='idicador1' className='' style={{display: activeIndex === 0 ? 'block' : 'none', height: '400px' }}>
	
							<div className="mt-3 mb-5">

									<div className="row mt-1">
										<div className="col-md-1 offset-md-1">
										<span className="dot_gris" >1</span>
										</div>
										<div className="col-md-9">
										<h5 className='text-left'>El reto está dividido en tres secciones. En cada una podrás ganar una Gema respondiendo a las preguntas que se te presentarán.</h5>
										</div>	
									</div>

									<div className="row mt-1">
										<div className="col-md-1 offset-md-1">
										<span className="dot_gris" >2</span>
										</div>
										<div className="col-md-9">
										<h5 className='text-left'>Cada respuesta correcta te otorgará puntos que te permitirán competir con otros colaboradores.</h5>
										</div>	
									</div>

									<div className="row mt-1">
										<div className="col-md-1 offset-md-1">
										<span className="dot_gris" >3</span>
										</div>
										<div className="col-md-9">
										<h5 className='text-left'>Debes ser veloz en tu búsqueda. En tu barra de avance contarás con un cronómetro que medirá el tiempo en que respondes cada sección.</h5>
										</div>	
									</div>

									<div className="row mt-1">
										<div className="col-md-1 offset-md-1">
										<span className="dot_gris" >4</span>
										</div>
										<div className="col-md-9">
										<h5 className='text-left'>Pon mucha atención pues solo podrás tener un error por sección para poder ganar la Gema correspondiente.</h5>
										</div>	
									</div>

									<div className="row mt-1">
										<div className="col-md-1 offset-md-1">
										<span className="dot_gris" >5</span>
										</div>
										<div className="col-md-9">
										<h5 className='text-left'>Al terminar de responder las 3 secciones encontrarás un Tablero en donde podrás consultar tus resultados y los de tus compañeros.</h5>
										</div>	
									</div>



							</div>
						</div>

						<div id='idicador2' className='' style={{display: activeIndex === 1 ? 'block' : 'none', height: '400px' }}>
	
							<div className="mt-3 mb-5">

									<div className="row mt-1">
										<div className="col-md-1 offset-md-1">
										<span className="dot_gris" >6</span>
										</div>
										<div className="col-md-9">
										<h5 className='text-left'>Tu tiempo y puntos obtenidos, te darán un lugar en el ranking.</h5>
										</div>	
									</div>

									<div className="row mt-1">
										<div className="col-md-1 offset-md-1">
										<span className="dot_gris" >7</span>
										</div>
										<div className="col-md-9">
										<h5 className='text-left'>En cada sección podrás obtener un bonus que te servirá para mejorar tu resultado final. Gánalo respondiendo correctamente todas las preguntas.</h5>
										</div>	
									</div>

									<div className="row mt-1">
										<div className="col-md-1 offset-md-1">
										<span className="dot_gris" >8</span>
										</div>
										<div className="col-md-9">
										<h5 className='text-left'>En caso de no conseguir una de las Gemas, podrás continuar en el juego, al concluir podrás intentarlo de nuevo para mejorar tu resultado.</h5>
										</div>	
									</div>

									<div className="row mt-1">
										<div className="col-md-1 offset-md-1">
										<span className="dot_gris" >9</span>
										</div>
										<div className="col-md-9">
										<h5 className='text-left'>En la barra de avance superior podrás dar seguimiento de tus resultados.</h5>
										</div>	
									</div>

									<div className="row mt-1">
										<div className="col-md-1 offset-md-1">
										<span className="dot_gris" >10</span>
										</div>
										<div className="col-md-9">
										<h5 className='text-left'>Tienes una semana para completar tu búsqueda de la Gemas de Agilidad.</h5>
										</div>	
									</div>



							</div>
						</div>



						<div className="mt-5">
							<h3><img src={info} width="25"></img> Haz clic para ver cada lámina.</h3>
						
						</div>	


								<div className="row">
									<div className="col col-md-3 col-xs-4">
										<span onClick={() => {
											updateIndex(activeIndex-1);
											IncrementarArray(activeIndex-1);
										}} style={{display: activeIndex > 0 ? 'block' : 'none' }}>
										<img src={fizq} width="40"></img>
										</span>
									</div>
									<div className="col col-md-6 col-xs-4">

									{sliders.map((sliders, index) => {
									return (
										<span
										className={`dot ${index === activeIndex ? "active" : ""}`} key={index}
										onClick={() => {
											updateIndex(index);
											IncrementarArray(index);
										}}
				
										>
											{/* {index + 1} */}
										</span>
									);
									})}
									</div>
									<div className="col col-md-3 col-xs-4">
										<span onClick={() => {
											updateIndex(activeIndex+1);
											IncrementarArray(activeIndex+1);
										}} style={{display: activeIndex < (vistos.length-1) ? 'block' : 'none' }}>
										<img src={fder} width="40"></img>
										</span>
									</div>
								</div>


					</div>
				</div>


				<div className="row">
					<div className="col-md-8 offset-md-2">
						<div className="mt-5 mb-5">
							<Link className='btn_default mx-3' to="/introduccion"> <FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon> Regresar</Link>
							<Link className='btn_default mx-3' to="/dashboard"  style={{visibility: termino === true ? 'visible' : 'hidden' }}>¡Vámos! <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></Link>
						</div>	
					</div>	
      			</div>	


			</div>
		</div>
	
	</>
  )
}

export default Instrucciones