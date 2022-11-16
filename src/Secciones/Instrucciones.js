import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import { faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'

import { useSwipeable } from "react-swipeable";

import './Instrucciones.css';

import * as Img from '../Components/Imagenes'


import Nav from '../Components/Nav'


const Instrucciones = () => {

	let sliders = [true,0];
	const [vistos, setVistos] =  useState(sliders)
	const [activeIndex, setActiveIndex] = useState(0);

	//const [paused, setPaused] = useState(false);
	const [termino, setTermino] = useState(false);

	const updateIndex = (newIndex , prevEmployees) => {	
		console.log("🚀 ~ newIndex", newIndex)
		setActiveIndex(newIndex);

	  };

	  /*AGRERGAR A UN ARRAT SU MISMO TAMAÑO*/
	  /*
	  const [myArray, updateMyArray] = useState([]);
	  const onClick = () => {
        updateMyArray( arr => [...arr, `${arr.length}`]);
		console.log("🚀 ~ myArray", myArray)
      };
	  */


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
		<div className="container instruciones-background">

			<Nav titulo={"Instrucciones"}></Nav>
	
			<div className="row mx-1">
          		<div className="col col-md-6 offset-md-3">
            		<h2 className='fs-18 lh-25 c-negro text-left'>¡Muy bien! Ya estás por comenzar la búsqueda. Para que ésta sea todo un éxito y logres traer contigo las Gemas, toma en cuenta lo siguiente:</h2>
          		</div>				
        	</div>


			<div className="container">
				<div className="row mt-3 mx-1">
					<div className="col col-md-10 offset-md-1 instruciones-form ">
						<div {...handlers}>

							<div className="">
								<img src={Img.titulo_curso} alt="" width="110"></img>
							</div>

							<div id='idicador1' className='h250' style={{display: activeIndex === 0 ? 'block' : 'none'}}>
								<div className="mt-3 ">
										<div className="row">
											<div className="col-2 col-md-1 offset-md-1">
											<span className="dot_gris" >1</span>
											</div>
											<div className="col-10 col-md-9">
											<h5 className='fs-16 lh-25 c-negro text-left'>El reto está dividido en tres secciones. En cada una podrás ganar una Gema respondiendo a las preguntas que se te presentarán.</h5>
											</div>	
										</div>

										<div className="row">
										<div className="col-2 col-md-1 offset-md-1">
											<span className="dot_gris" >2</span>
											</div>
											<div className="col-10 col-md-9">
											<h5 className='fs-16 lh-25 c-negro text-left'>Cada respuesta correcta te otorgará puntos que te permitirán competir con otros colaboradores.</h5>
											</div>	
										</div>

										<div className="row">
											<div className="col-2 col-md-1 offset-md-1">
											<span className="dot_gris" >3</span>
											</div>
											<div className="col-10 col-md-9">
											<h5 className='fs-16 lh-25 c-negro text-left'>Debes ser veloz en tu búsqueda. En tu barra de avance contarás con un cronómetro que medirá el tiempo en que respondes cada sección.</h5>
											</div>	
										</div>

										<div className="row">
											<div className="col-2 col-md-1 offset-md-1">
											<span className="dot_gris" >4</span>
											</div>
											<div className="col-10 col-md-9">
											<h5 className='fs-16 lh-25 c-negro text-left'>Pon mucha atención pues solo podrás tener un error por sección para poder ganar la Gema correspondiente.</h5>
											</div>	
										</div>

										<div className="row">
											<div className="col-2 col-md-1 offset-md-1">
											<span className="dot_gris" >5</span>
											</div>
											<div className="col-10 col-md-9">
											<h5 className='fs-16 lh-25 c-negro text-left'>Al terminar de responder las 3 secciones encontrarás un Tablero en donde podrás consultar tus resultados y los de tus compañeros.</h5>
											</div>	
										</div>
								</div>
							</div>

							<div id='idicador2' className='h250' style={{display: activeIndex === 1 ? 'block' : 'none'}}>
								<div className="mt-3">
										<div className="row">
											<div className="col-2 col-md-1 offset-md-1">
											<span className="dot_gris" >6</span>
											</div>
											<div className="col-10 col-md-9">
											<h5 className='fs-16 lh-25 c-negro text-left'>Tu tiempo y puntos obtenidos, te darán un lugar en el ranking.</h5>
											</div>	
										</div>

										<div className="row">
											<div className="col-2 col-md-1 offset-md-1">
											<span className="dot_gris" >7</span>
											</div>
											<div className="col-10 col-md-9">
											<h5 className='fs-16 lh-25 c-negro text-left'>En cada sección podrás obtener un bonus que te servirá para mejorar tu resultado final. Gánalo respondiendo correctamente todas las preguntas.</h5>
											</div>	
										</div>

										<div className="row">
											<div className="col-2 col-md-1 offset-md-1">
											<span className="dot_gris" >8</span>
											</div>
											<div className="col-10 col-md-9">
											<h5 className='fs-16 lh-25 c-negro text-left'>En caso de no conseguir una de las Gemas, podrás continuar en el juego, al concluir podrás intentarlo de nuevo para mejorar tu resultado.</h5>
											</div>	
										</div>

										<div className="row">
											<div className="col-2 col-md-1 offset-md-1">
											<span className="dot_gris" >9</span>
											</div>
											<div className="col-10 col-md-9">
											<h5 className='fs-16 lh-25 c-negro text-left'>En la barra de avance superior podrás dar seguimiento de tus resultados.</h5>
											</div>	
										</div>

										<div className="row">
											<div className="col-2 col-md-1 offset-md-1">
											<span className="dot_gris" >10</span>
											</div>
											<div className="col-10 col-md-9">
											<h5 className='fs-16 lh-25 c-negro text-left'>Tienes una semana para completar tu búsqueda de la Gemas de Agilidad.</h5>
											</div>	
										</div>
								</div>
							</div>

							<div className="mt-5">
								<h3 className='fs-15 lh-25 c-negro text-center'><img src={Img.info} alt=""  width="25"></img> Haz clic en el botón parpadeante para ver toda la información.</h3>
							</div>	

							<div className="container-fluid">
								<div className="row flex">

											<div className="col-2 col-md-4">
												<span onClick={() => {
													updateIndex(activeIndex-1);
													IncrementarArray(activeIndex-1);
												}} style={{display: activeIndex > 0 ? 'block' : 'none' }}>
												<img src={Img.fizq} alt=""  width="40"></img>
												</span>
											</div>

											<div className="col-8 col-md-4">

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

											<div className="col-2 col-md-4">
												<span onClick={() => {
													updateIndex(activeIndex+1);
													IncrementarArray(activeIndex+1);
												}} style={{display: activeIndex < (vistos.length-1) ? 'block' : 'none' }}>
												<img className='parpadea' src={Img.fder} alt=""  width="40"></img>
												</span>
											</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>


			<div className="row">
				<div className="col-md-8 offset-md-2">
					<div className="mt-5 mb-5">
					<Link className='btn_default mx-3' to="/perfil"> <FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon> Regresar</Link>
							<Link className='btn_negro mx-3' to="/dashboard"  style={{visibility: termino === true ? 'visible' : 'hidden' }}>¡Vámos!</Link>
					</div>	
				</div>	
      		</div>	
		</div>								
	</>
  )
}

export default Instrucciones