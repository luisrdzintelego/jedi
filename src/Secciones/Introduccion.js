import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons'

import { useSwipeable } from "react-swipeable";

import './Introduccion.css';

import titulo_curso from "../Img/Titulo_curso.png";
import info from "../Img/info.png";
import img_bienvenida_1 from "../Img/img_bienvenida_1.png";
import img_bienvenida_2 from "../Img/img_bienvenida_2.png";
import img_bienvenida_3 from "../Img/img_bienvenida_3.png";
import img_bienvenida_4 from "../Img/img_bienvenida_4.png";


import fizq from "../Img/flecha_izq.png";
import fder from "../Img/flecha_der.png";

import joya1 from "../Img/Joya1.png";
import joya2 from "../Img/Joya2.png";
import joya3 from "../Img/Joya3.png";

import Nav from '../Components/Nav'

function Introduccion() {

	let sliders = [true,0,0,0];
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
			if(cont === 4){setTermino(true)}
		});

		

	  }
	
	  useEffect( () => {
		//console.log("🚀 ~ vistos", vistos)
		//setLoading(true)
		
	  }, [])
	

	//hacer sliser en telefono//
	const handlers = useSwipeable({
		onSwipedLeft: () => {
			if(activeIndex < 3){
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
		<div className="container-fluid introduccion-background">
			<div className="row">
				<div className="col-md-12">
				<Nav titulo={"Introduccion"}></Nav>
				</div>				
			</div>

			<div className="row mt-3">
				<div className="col-md-6 offset-md-3  introduccion-form">
					<div {...handlers}       
						onMouseEnter={() => setPaused(true)}
						onMouseLeave={() => setPaused(false)}>

						<div className="mt-1">
							<img src={titulo_curso} width="150" height="90"></img>
						</div>

						<div id='idicador1' className='' style={{display: activeIndex === 0 ? 'block' : 'none', height: '320px' }}>
							<div className="mt-2">
								<img src={img_bienvenida_1} width="300" ></img>
							</div>
							<hr></hr>
							<div className="mt-2 mb-5">
								<h1>¡Que comience la aventura!</h1>
								<h2 className='text-left'>El cambio en el Universo Retail es constante y para adaptarnos a él es momento de que en OXXO implementemos prácticas <b>Agile</b> que nos permita enfrentarlo con una nueva mentalidad.</h2>
							</div>
						</div>

						<div id='idicador2' className='' style={{display: activeIndex === 1 ? 'block' : 'none', height: '320px' }}>
							<div className="mt-2">
								<img src={img_bienvenida_2} width="300" ></img>
							</div>
							<hr></hr>
							<div className="mt-2 mb-5">
								<h2 className='text-left'>Para lograrlo necesitamos de tu ayuda para encontrar las tres <b>Gemas de Agilidad</b>, cada una cuenta con un poder que nos permitirá tener <b>entregas continuas e incrementales de valor para nuestros clientes</b>.</h2>
							</div>
						</div>

						<div id='idicador3' className='' style={{display: activeIndex === 2 ? 'block' : 'none', height: '320px' }}>
							<div className="mt-2">
								<img src={img_bienvenida_3} width="300" ></img>
							</div>
							<hr></hr>
							<div className="mt-2 mb-5">
								<h2 className='text-left'>Sabemos que eres la persona indicada para hacerlo, las Gemas son muy importantes, pues cada una tiene un gran poder:</h2>
								<h2 className='text-left' style={{marginTop: '15px' }}><img src={joya1} width="25" ></img> <b>Rubí</b>: en su interior tiene los <b>principios y valores Agile</b>.</h2>
								<h2 className='text-left'style={{marginTop: '15px' }}><img src={joya2} width="25" ></img> <b>Zafiro</b>: te brinda el poder de aplicar los <b>principios Scrum</b>.</h2>
								<h2 className='text-left'style={{marginTop: '15px' }}><img src={joya3} width="25" ></img> <b>Diamante</b>: te permitirá usar el <b>método Kanban</b>.</h2>
							</div>
						</div>

						<div id='idicador4' className='' style={{display: activeIndex === 3 ? 'block' : 'none', height: '320px' }}>
							<div className="mt-2">
								<img src={img_bienvenida_4} width="300" ></img>
							</div>
							<hr></hr>
							<div className="mt-2 mb-5">
								<h2 className='text-left'>Toma en cuenta que hay otros participantes buscando las Gemas, por lo que debes encontrarlas en el <b>menor tiempo posible y reunir la mayor cantidad de puntos</b> para alzar la victoria.</h2>
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
										}} style={{display: activeIndex < 3 ? 'block' : 'none' }}>
										<img src={fder} width="40"></img>
										</span>
									</div>
								</div>


					</div>
				</div>

				<div className="col-md-10 offset-md-1" style={{display: termino === true ? 'block' : 'none' }}>
					<div className="mt-5 mb-5">
						<Link className='btn_default' to="/introduccion">Continuar <FontAwesomeIcon icon={faArrowRightLong} /></Link>
					</div>	
				</div>				
			</div>
		</div>
	
	</>
  )
}

export default Introduccion