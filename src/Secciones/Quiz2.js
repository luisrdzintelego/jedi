import React, { useContext, useState, useEffect } from 'react';
import { VarContext } from '../Context/VarContext';
import { Link } from 'react-router-dom';

import Lottie from "lottie-react";
import retro_bien_lottie from '../Img/lotties/zafiro_si.json';
import retro_mal_lottie from '../Img/lotties/zafiro_no.json';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import './Quiz2.css';

import * as Img from '../Components/Imagenes'
import NavQuiz from '../Components/NavQuiz'


const Quiz2 = () => {

	const GConText = useContext(VarContext);

	// Properties
	let letras = ["A", "B", "C", "D"];
	const [showResults, setShowResults] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [select, setSelect] = useState(0);
	const [correct, setCorrect] = useState(false);
	const [showretro, setShowRetro] = useState(0);

	const [isActive, setActive] = useState(false);
	const [avanzar, setAvanzar] = useState(false);
	const [seleccionar, setSeleccionar] = useState(false);

	const [puntos, setPuntos] = useState(0);

	const [isTimer, setisTimer] = useState(true);
	const [counter, setCounter] = useState(GConText.Tiempo);

	const [second, setSecond] = useState(0)
	const [minute, setMinute] = useState(0)
	const [hour, setHour] = useState(0)


	const toggleClass = () => {
		//console.log("🚀 ~ toggleClass", isActive)
		//setActive(!isActive);
		setActive(true)
	};

	const questions_80 = [
		{
			text: "Son los Pilares de Scrum: ",
			correcta: 4,
			valor: 80,
			options: [
				{ id: 1, text: "Personas e interacciones sobre procesos y herramientas." },
				{ id: 2, text: "Establecer el Flujo de Trabajo, Mejorar y Evolucionar." },
				{ id: 3, text: "Foco, compromiso, coraje, apertura y respeto." },
				{ id: 4, text: "Transparencia, Inspección y Adaptación." },
			],
		},
		{
			text: "Son Valores de Scrum:",
			correcta: 3,
			valor: 80,
			options: [
				{ id: 1, text: "Personas e interacciones sobre procesos y herramientas." },
				{ id: 2, text: "Establecer el Flujo de Trabajo, Mejorar y Evolucionar." },
				{ id: 3, text: "Foco, compromiso, coraje, apertura y respeto." },
				{ id: 4, text: "Transparencia, Inspección y Adaptación." },
			],
		},
	];

	const questions_40 = [
		{
			text: "¿Cuál de las siguientes no es una responsabilidad del Product Owner?",
			correcta: 4,
			valor: 40,
			options: [
				{ id: 1, text: "Representante de los Clientes y/o Sponsor." },
				{ id: 2, text: "Establece la Visión del Producto y la comparte." },
				{ id: 3, text: "Es responsable de la rentabilidad del Producto." },
				{ id: 4, text: "Ayuda a difundir la agilidad en la organización." },
			],
		},
		{
			text: "¿Cuáles de las siguientes son responsabilidades del Scrum Master? ",
			correcta: 2,
			valor: 40,
			options: [
				{ id: 1, text: "Líder jerárquico del Equipo." },
				{ id: 2, text: "Gestiona la eliminación de los impedimentos del Proyecto." },
				{ id: 3, text: "Es responsable de la rentabilidad del Producto." },
				{ id: 4, text: "Crea entregables de alta calidad." },
			],
		},
		{
			text: "Tiene como objetivo establecer el objetivo del sprint y el Sprint Backlog del sprint que está iniciando.",
			correcta: 1,
			valor: 40,
			options: [
				{ id: 1, text: "Planeación del Sprint." },
				{ id: 2, text: "Daily Meeting." },
				{ id: 3, text: "Sprint Review." },
				{ id: 4, text: "Sprint Retrospective." },
			],
		},
		{
			text: "Se consideran artefactos de Scrum: ",
			correcta: 4,
			valor: 40,
			options: [
				{ id: 1, text: "Historias de Usuario, Épicas, Product Backlog. " },
				{ id: 2, text: "Meta del Sprint, Backlog Item, Impedimentos." },
				{ id: 3, text: "Incremento, el Sprint, Product Backlog." },
				{ id: 4, text: "El Product Backlog, Sprint Backlog e Incremento de Producto." },
			],
		},
		{
			text: "¿Quién tiene la responsabilidad de ejecutar el Daily Scrum? ",
			correcta: 3,
			valor: 40,
			options: [
				{ id: 1, text: "El Scrum Master." },
				{ id: 2, text: "El Product Owner." },
				{ id: 3, text: "Los Desarrolladores (Equipo de Desarrollo)." },
			],
		},
	];

	//revolver un arrray
	const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
	//revuelve el array
	const shuffle_40 = shuffleArray(questions_40)
	//lo recorta a 2 elementos
	const short_40 = shuffle_40.slice(0, 2)
	//obtiene 1 objeto al azar
	const random_80 = shuffleArray(questions_80)
	//une 2 arrays
	const questions_merge = shuffleArray([...random_80, ...short_40]);

	const [questions, setQuestions] = useState(() => questions_merge)

	//sufle las respuestas en cada preguntas
	const [currentAswers1, setCurrentAswers1] = useState(() => questions[0].options.sort(() => Math.random() - 0.5))
	const [currentAswers2, setCurrentAswers2] = useState(() => questions[1].options.sort(() => Math.random() - 0.5))
	const [currentAswers3, setCurrentAswers3] = useState(() => questions[2].options.sort(() => Math.random() - 0.5))
	const [currentAswers4, setCurrentAswers4] = useState(() => questions[3].options.sort(() => Math.random() - 0.5))

	//const[currentAswers, setCurrentAswers] = useState([]);

	useEffect(() => {
		console.log("🚀 ~ questions", questions)
	}, [])

	// Helper Functions

	/* A possible answer was clicked */
	const chkAswer = (answer) => {
		// Increment the score

		console.log("🚀 ~ questions.correcta", questions[currentQuestion].correcta)
		console.log("🚀 ~ questions.valor", questions[currentQuestion].valor)
		console.log("🚀 ~ answer", answer)
		console.log("🚀 ~ answer", answer === questions[currentQuestion].valor)
		console.log("🚀 ~ score", score)

		setShowRetro(select);
		setAvanzar(true);
		setSeleccionar(false);

		if (answer === questions[currentQuestion].correcta) {
			setScore(score + 1);

			GConText.setPuntos(GConText.Puntos + questions[currentQuestion].valor);
			setPuntos(puntos + questions[currentQuestion].valor);

			setCorrect(true)

		} else {
			setCorrect(false)
		}

		GConText.setConteoAvance(GConText.ConteoAvance + 1)

	};

	const selectedAswer = (thisAnswer) => {
		// Increment the score

		console.log("🚀 ~ thisAnswer", thisAnswer)
		console.log("🚀 ~ correct", questions[currentQuestion].correcta)
		setSelect(thisAnswer);
		setSeleccionar(true);
	};


	const nextCuestion = () => {
		// Increment the score

		setSelect(0);
		setCorrect(false)
		setShowRetro(0);

		setActive(false);
		setAvanzar(false);
		setSeleccionar(false);

		if (currentQuestion + 1 < questions.length) {
			setCurrentQuestion(currentQuestion + 1);

		} else {
			setShowResults(true);

			console.log("🚀 ~ counter", counter)
			//SET PUNTOS Y EL TIEMPO
			//GConText.setPuntos(GConText.Puntos + puntos);
			GConText.setPuntosEval2(puntos);
			GConText.setTiempoEval2(counter);

			//RESETEAMOS EL TIMER
			setisTimer(false);
			//setCounter(0);
			//setSecond("00");
			//setMinute("00");

			//SET JOYA Y BONUS
			if (score === questions.length) {
				GConText.setBonus2(true)
				GConText.setTiempo(counter - 600)
			} else {
				GConText.setTiempo(counter)
			}
			console.log("🚀 ~ GConText.Tiempo", GConText.Tiempo)

			score >= questions.length - 1 ? GConText.setJoya2(true) : GConText.setJoya2(false)



		}
	};


	/* Resets the game back to default */
	/*
	const restartGame = () => {
  	
	  setSelect(0);
	  setCorrect(false)	
	  setShowRetro(0);
  
	  setScore(0);
	  setCurrentQuestion(0);
	  setShowResults(false);
	  setPuntos(0);
  
	  setActive(false);
	  setAvanzar(false);
	  setSeleccionar(false);
  
	  //RESETEAMOS EL TIMER
	  GConText.setIniTiempo(false);
	  setCounter(0);
	  setSecond("00");
	  setMinute("00");
  
	};
	*/

	useEffect(() => {
		let intervalId;

		if (isTimer) {

			intervalId = setInterval(() => {
				const secondCounter = counter % 60;
				const minuteCounter = Math.floor((counter / 60) % 60);
				const hourCounter = Math.floor(counter / 3600)

				let computedSecond = (secondCounter < 10) ? `0${secondCounter}` : secondCounter;
				let computedMinute = (minuteCounter < 10) ? `0${minuteCounter}` : minuteCounter;
				let computedHour = (hourCounter < 10) ? `0${hourCounter}` : hourCounter;

				setSecond(computedSecond);
				setMinute(computedMinute);
				setHour(computedHour);

				setCounter((counter) => counter + 1);
				GConText.setTiempo((counter) => counter + 1);
			}, 16.6);
		}

		return () => clearInterval(intervalId);
	}, [counter, isTimer]);


	const ImgRetro = ({ success, currentAswers, showretro }) => (
		<img
			style={{ display: avanzar === true && questions[currentQuestion].correcta === currentAswers ? 'block' : 'none', width: '40px' }}
			src={success === true ? Img.bien : Img.mal} alt=""
		/>
	);


	return (
		<>

			<div className="container quiz2-background">

				<NavQuiz props={{ colorFondo: 'f-amarillo-claro', titulo: 'Quiz2', hour, minute, second }} ></NavQuiz>

				{showResults ? (
					<>
						{
							score === questions.length
								//score === 0
								? <>
									<div className="retro-bien pt-5" >
										<div className="row">
											<div className="col-12 col-md-6 offset-md-3 text-center ">
												{/* <img src={Img.joya1_retro_si} alt="" width="75%"></img> */}
												<Lottie animationData={retro_bien_lottie} loop={true} style={{ height: '300px' }} />
												<h1 className='fs-45 mt-2'>¡Muy bien!</h1>
												<h2 className='fs-20 mt-4'>Has encontrado el <b>Zafiro</b>, ahora podrás implementar los <b>principios Scrum</b>.</h2>
											</div>

											<div className="col-12 col-md-6 offset-md-3 text-center cuadro_bco mt-2 p-2 flex ">
												<img src={Img.bonus} alt="" width="60"></img>
												<h1 className='fs-18  ms-5  text-left'>¡Demostraste una gran habilidad en este reto! Por lo que te recompensamos restando <span className='c-rojo'>10 segundos a tu tiempo final</span>.</h1>
											</div>
											<div className="col-12 col-md-8 offset-md-2 text-center ">
												<h2 className='fs-20 mt-2'>Aún debes conseguir una Gema más, avanza para continuar tu búsqueda.</h2>
											</div>

											<div className="col-12 col-md-8 offset-md-2 text-center ">
												<div className="mt-3">
													{/* <button  className='btn_default mx-3 px-5' onClick={() => restartGame()}>Continuar</button> */}
													<Link className='btn_negro mx-3 px-5' to='/tercer_reto' >Continuar</Link>
												</div>
											</div>
										</div>
									</div>
								</>
								: <>  </>
						}

						{
							score === questions.length - 1
								//score === 0
								? <>
									<div className="retro-bien pt-5" >
										<div className="row">
											<div className="col-12 col-md-6 offset-md-3 text-center ">
												{/* <img src={Img.joya1_retro_si} alt=""  width="75%"></img> */}
												<Lottie animationData={retro_bien_lottie} loop={true} style={{ height: '300px' }} />
												<h1 className='fs-45 mt-2'>¡Muy bien!</h1>
												<h2 className='fs-20 mt-4'>Has encontrado el <b>Zafiro</b>, ahora podrás implementar los <b>principios Scrum</b>.</h2>
											</div>

											<div className="col-12 col-md-8 offset-md-2 text-center ">
												<h2 className='fs-20 mt-4'>Aún debes conseguir una Gema más, avanza para continuar tu búsqueda.</h2>
											</div>

											<div className="col-12 col-md-8 offset-md-2 text-center ">
												<div className="mt-3">
													{/* <button  className='btn_default mx-3 px-5' onClick={() => restartGame()}>Continuar</button> */}
													<Link className='btn_negro mx-3 px-5' to='/tercer_reto' >Continuar</Link>
												</div>
											</div>
										</div>
									</div>
								</>
								: <>  </>
						}

						{
							score < questions.length - 1
								//score === 0
								? <>
									<div className="retro-mal pt-5" >
										<div className="row">
											<div className="col-12 col-md-6 offset-md-3 text-center ">
												{/* <img src={Img.joya1_retro_no} alt="" width="75%"></img> */}
												<Lottie animationData={retro_mal_lottie} loop={true} style={{ height: '300px' }} />
												<h2 className='fs-20 mt-4 c-blanco'>No has encontrado el <b>Zafiro</b> y debes esforzarte más para contar con su poder y aplicar los <b>principios Scrum</b>.</h2>
											</div>

											<div className="col-12 col-md-8 offset-md-2 text-center ">
												<h2 className='fs-20 mt-4 c-blanco'>Aún debes conseguir una Gema más, avanza para continuar tu búsqueda.</h2>
											</div>

											<div className="col-12 col-md-8 offset-md-2 text-center ">
												<div className="mt-3">
													{/* <button className='btn_default mx-3 px-5' onClick={() => restartGame()}>Continuar</button> */}
													<Link className='btn_negro mx-3 px-5' to='/tercer_reto' >Continuar</Link>
												</div>
											</div>
										</div>
									</div>
								</>
								: <>  </>
						}


					</>

					//  <div className="final-results">
					//    <h1>Final Results</h1>
					//    <h2>
					//      {score} out of {questions.length} correct - (
					//      {(score / questions.length) * 100}%)
					//    </h2>
					//    <button onClick={() => restartGame()}>Restart game</button>
					//  </div>

				) : (

					<>
						<div className="container mt-3">
							<div className="row mx-1">
								<div className="col-12 col-md-10 offset-md-1 text-left my-1">
									<h3 className='fs-15 lh-25 c-negro'><img src={Img.info} alt="info" width="25"></img>  Selecciona tu respuesta y haz clic en enviar.</h3>
								</div>

								<div className="col-xs-12 col-md-10 offset-md-1 text-left pregunta-form mb-3 ">
									<div className="row flex">
										<div className="col-2 col-md-1 text-center">
											<span className="fs-25 dot_gris2" >{currentQuestion + 1} </span>
										</div>
										<div className="col-10 col-md-10 text-center">
											<h1 className='fs-20 lh-25 c-negro text-left'>
												{questions[currentQuestion].text}
											</h1>
										</div>
									</div>
								</div>


								{/*primera posicion del map es el objeto -- en este caso "option"*/}
								{/*segunda posicion del map es el consecutivo  -- en este caso "num" inicia del 0*/}

								{questions[currentQuestion].options.map((option, num) => {

									//console.log("🚀 ~ options", questions[currentQuestion].correcta === currentAswers[num].id)
									//console.log("🚀 ~ correcta", questions[currentQuestion].correcta)
									//console.log("🚀 ~ currentAswers", currentAswers[num].id)

									const estaAct = isActive && select === (option.id) ? "resp-active" : "resp"
									const estaDes = avanzar ? "resp-disabled" : ""

									return (

										<div style={{ display: option.text ? 'block' : 'none' }}
											key={option.id}
											className={`col-12 col-md-10 offset-md-1 text-left py-2 mt-3 ${estaAct} ${estaDes}`}


											onClick={() => {
												selectedAswer(option.id)
												toggleClass()
											}}

										>
											<div className="row flex">
												<div className="col-2 p-0 d-block d-sm-none text-center">
													<h4 className="fs-30 c-negro" >{letras[num]}.</h4>
												</div>

												<div className="col-1 p-0 d-none d-sm-block text-center">
													<h4 className="fs-30 c-negro" >{letras[num]}.</h4>
												</div>

												<div className="col-9 p-0 d-block d-sm-none ">
													<h5 className='fs-18 lh-20 c-negro text-left'>
														{option.text}
													</h5>
												</div>

												<div className="col-10 p-0 d-none d-sm-block ">
													<h5 className='fs-18 lh-20 c-negro text-left'>
														{option.text}
													</h5>
												</div>
												<div className="col-1">
													<img src={Img.mal} alt="retro" style={{ display: showretro === option.id && correct === false ? 'block' : 'none' }} width="40"></img>
													<img src={questions[currentQuestion].correcta === option.id ? Img.bien : Img.mal} style={{ display: avanzar === true && questions[currentQuestion].correcta === option.id ? 'block' : 'none' }} alt="retro" width="40"></img>

												</div>
											</div>
										</div>

									);
								})}

							</div>
						</div>

						<div className="row mt-3 pb-5">
							<div className="col-md-12">
								<div className="">
									<button disabled={seleccionar ? false : true} className='btn_negro mx-3 px-5' onClick={() => { chkAswer(select) }}>Enviar</button>
									<button disabled={avanzar ? false : true} className='btn_negro mx-3' onClick={() => nextCuestion()}>Siguiente <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></button>
								</div>
							</div>
						</div>
					</>
				)}



			</div>

		</>
	)
}

export default Quiz2
