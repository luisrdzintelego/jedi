import React, { useContext, useState, useEffect } from 'react';
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
	let sliders = [true, 0, 0, 0];
	const [vistos, setVistos] = useState(sliders)
	const [activeIndex, setActiveIndex] = useState(0);

	//const [paused, setPaused] = useState(false);
	const [termino, setTermino] = useState(false);

	const updateIndex = (newIndex) => {
		//console.log("🚀 ~ newIndex", newIndex)
		setActiveIndex(newIndex);

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
			//console.log("🚀 ~ vistos", vistos)
			if (element === true) {
				cont++;
			}
			if (cont === vistos.length) { setTermino(true) }
		});

	}

	const chkData = async () => {

		console.log("~~~~~~~ DATOS desde Context REACT ~~~~~~~")

		console.log("🚀 ~ GConText.UserId", GConText.UserId)
		console.log("🚀 ~ GConText.Username", GConText.Username)
		console.log("🚀 ~ GConText.Password", GConText.Password)
		console.log("🚀 ~ GConText.Nombre", GConText.Nombre)
		console.log("🚀 ~ GConText.Grupo", GConText.Grupo)
		console.log("🚀 ~ GConText.Type", GConText.Type)

		console.log("🚀 ~ GConText.Avatar", GConText.Avatar)
		console.log("🚀 ~ GConText.Puntos", GConText.Puntos)
		console.log("🚀 ~ GConText.Tiempo", GConText.Tiempo)

		console.log("🚀 ~ GConText.Joya1", GConText.Joya1)
		console.log("🚀 ~ GConText.Joya2", GConText.Joya2)
		console.log("🚀 ~ GConText.Joya3", GConText.Joya3)
		console.log("🚀 ~ GConText.Bonus1", GConText.Bonus1)
		console.log("🚀 ~ GConText.Bonus2", GConText.Bonus2)
		console.log("🚀 ~ GConText.Bonus3", GConText.Bonus3)

		console.log("🚀 ~ GConText.Intentos", GConText.Intentos)
		console.log("🚀 ~ GConText.Status", GConText.Status)

		console.log("🚀 ~ GConText.Ranking", GConText.Ranking)

		console.log("~~~~~~~ ---------------- ~~~~~~~")

	}

	useEffect(() => {
		//console.log("🚀 ~ vistos", vistos)
		//setLoading(true)
		chkData()

	}, [])


	//hacer sliser en telefono//
	const handlers = useSwipeable({
		onSwipedLeft: () => {
			if (activeIndex < (vistos.length - 1)) {
				updateIndex(activeIndex + 1)
			}
		},
		onSwipedRight: () => {
			if (activeIndex > 0) {
				updateIndex(activeIndex - 1)
			}
		}
	});

	return (
		<>

			<div className="container introduccion-background pb-5">

				<Nav titulo={"Introduccion"}></Nav>

				<div className="container">

					<div className="row mt-3 mx-1">
						<div className="col col-md-8 offset-md-2 introduccion-form ">
							<div {...handlers}
							/*onMouseEnter={() => setPaused(true)}*/
							/*onMouseLeave={() => setPaused(false)}*/>

								<div className="mt-1">
									<img className='img-fluid' src={Img.titulo_curso} alt="" width="120"></img>
								</div>

								<div id='idicador1' className='h300' style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
									<div className="mt-2">
										<img className='img-fluid' src={Img.img_bienvenida_1} alt="" width="250" ></img>
									</div>
									<hr></hr>
									<div className="mt-2 mb-5">
										<h1 className='fs-25 c-rojo text-left'>¡Qué comience la aventura!</h1>
										<h2 className='fs-16 lh-25 c-negro text-left'>El cambio en el Universo Retail es constante y para adaptarnos a él es momento de que en OXXO implementemos prácticas <b>Agile</b> que nos permita enfrentarlo con una nueva mentalidad.</h2>
									</div>
								</div>

								<div id='idicador2' className='h300' style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
									<div className="mt-2">
										<img className='img-fluid' src={Img.img_bienvenida_2} alt="" width="250" ></img>
									</div>
									<hr></hr>
									<div className="mt-2 mb-5">
										<h2 className='fs-16 lh-25 c-negro text-left'>Para lograrlo necesitamos que nos ayudes a encontrar las tres <b>Gemas de Agilidad</b>, cada una cuenta con un poder que nos permitirá tener <b>entregas continuas e incrementales de valor para nuestros clientes</b>.</h2>
									</div>
								</div>

								<div id='idicador3' className='h300' style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
									<div className="mt-2">
										<img className='img-fluid' src={Img.img_bienvenida_3} alt="" width="250" ></img>
									</div>
									<hr></hr>
									<div className="mt-2 mb-5">
										<h2 className='fs-16 lh-25 c-negro text-left'>Sabemos que eres la persona indicada para hacerlo, las Gemas son muy importantes, pues cada una tiene un gran poder:</h2>
										<h2 className='fs-16 lh-25 c-negro text-left' style={{ marginTop: '10px' }}><img src={Img.joya1} alt="" width="25" ></img> <b>Rubí</b>: en su interior tiene los <b>principios y valores Agile</b>.</h2>
										<h2 className='fs-16 lh-25 c-negro text-left' style={{ marginTop: '10px' }}><img src={Img.joya2} alt="" width="25" ></img> <b>Zafiro</b>: te brinda el poder de aplicar los <b>principios Scrum</b>.</h2>
										<h2 className='fs-16 lh-25 c-negro text-left' style={{ marginTop: '10px' }}><img src={Img.joya3} alt="" width="25" ></img> <b>Diamante</b>: te permitirá usar el <b>método Kanban</b>.</h2>
									</div>
								</div>

								<div id='idicador4' className='h300' style={{ display: activeIndex === 3 ? 'block' : 'none' }}>
									<div className="mt-2">
										<img className='img-fluid' src={Img.img_bienvenida_4} alt="" width="250" ></img>
									</div>
									<hr></hr>
									<div className="mt-2 mb-5">
										<h2 className='fs-16 lh-25 c-negro text-left'>Toma en cuenta que hay otros participantes buscando las Gemas, por lo que debes encontrarlas en el <b>menor tiempo posible y reunir la mayor cantidad de puntos</b> para alzar la victoria.</h2>
									</div>
								</div>

								<div className="mt-5">
									<h3 className='fs-15 lh-25 c-negro text-center'><img src={Img.info} alt="" width="25"></img> Haz clic en el botón parpadeante para ver toda la información.</h3>

								</div>

								<div className="container-fluid">
									<div className="row flex">

										<div className="col-2 col-md-4">
											<span onClick={() => {
												updateIndex(activeIndex - 1);
												IncrementarArray(activeIndex - 1);
											}} style={{ display: activeIndex > 0 ? 'block' : 'none' }}>
												<img src={Img.fizq} alt="" width="40"></img>
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
												updateIndex(activeIndex + 1);
												IncrementarArray(activeIndex + 1);
											}} style={{ display: activeIndex < (vistos.length - 1) ? 'block' : 'none' }}>
												<img className='parpadea' src={Img.fder} alt="" width="40"></img>
											</span>
										</div>
									</div>
								</div>

							</div>
						</div>

						<div className="col-md-10 offset-md-1" style={{ visibility: termino === true ? 'visible' : 'hidden' }}>
							<div className="mt-5 mb-4">
								<Link className='btn_negro' to="/perfil">Continuar <FontAwesomeIcon icon={faArrowRightLong} /></Link>
							</div>
						</div>
						<div className="col-md-10 offset-md-1" style={{ visibility: GConText.Avatar === '' ? 'hidden' : 'visible' }}>
							<Link to="/dashboard" ><h1 className='fs-18 c-rojo td-rojo'>Omitir</h1></Link>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default Introduccion