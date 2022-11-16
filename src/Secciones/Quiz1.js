import React, { useContext, useState, useEffect } from 'react';
import { VarContext } from '../Context/VarContext';
import { Link } from 'react-router-dom';

import Lottie from "lottie-react";
import retro_bien_lottie from '../Img/lotties/rubi_si.json';
import retro_mal_lottie from '../Img/lotties/rubi_no.json';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons'


import './Quiz1.css';

import * as Img from '../Components/Imagenes'

import NavQuiz from '../Components/NavQuiz'




const Quiz1 = () => {

const GConText = useContext(VarContext);

  // Properties
  let letras = ["A","B","C","D"];
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

  //TIMER
  //const [second, setSecond] = useState("00");
  //const [minute, setMinute] = useState("00");

  const [isTimer, setisTimer] = useState(true);
  const [counter, setCounter] = useState(GConText.Tiempo);

  //const [second, setSecond] = useState(() => ( String(GConText.Tiempo % 60).length === 1 ? `0${GConText.Tiempo % 60}` : GConText.Tiempo % 60))
  //const [minute, setMinute] = useState(() => ( String(Math.floor(GConText.Tiempo / 60)).length === 1 ? `0${Math.floor(GConText.Tiempo / 60)}` : Math.floor(GConText.Tiempo / 60)))

  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(0)
  const [hour, setHour] = useState(0)



	/*  
	function stopTimer() {
		GConText.setIniTiempo(false);
		setCounter(0);
		setSecond("00");
		setMinute("00");
	}
	*/


  const toggleClass = () => {
	//console.log("🚀 ~ toggleClass", isActive)
    //setActive(!isActive);
	setActive(true)
  };
  
  /*
  const questions = [
	{
		text: "¿Cómo podemos enfrentar el Mundo VUCA? ",
		correcta: 4,
		valor:40,
		options: [
		  { id: 1, text: "Utilizando Scrum."},
		  { id: 2, text: "No existe tal Mundo."},
		  { id: 3, text: "Con Transparencia, Inspección y Adaptación."},
		  { id: 4, text: "Con Visión, Comprensión, Claridad y Agilidad."},
		],
	  },
	  {
		  text: "¿Cuál de los siguientes no es un valor del manifiesto ágil? ",
		  correcta: 1,
		  valor:80,
		  options: [
			{ id: 1, text: "Procesos y herramientas sobre individuos e interacciones."},
			{ id: 2, text: "Software funcionando sobre documentación extensiva."},
			{ id: 3, text: "Colaboración con el cliente sobre negociación contractual."},
			{ id: 4, text: "Respuesta ante el cambio sobre seguir un plan."},
		  ],
		},
		{
		  text: "¿Cuál de estos enunciados no hace referencia a lo que es la Agilidad? ",
		  correcta: 4,
		  valor:40,
		  options: [
			{ id: 1, text: "Una filosofía acerca de la entrega de soluciones de calidad y con valor empresarial."},
			{ id: 2, text: "Una colección de valores y principios que sostienen esa filosofía."},
			{ id: 3, text: "Un movimiento o comunidad creada para cambiar la forma de hacer las cosas y la gestión empresarial."},
			{ id: 4, text: "Una metodología que te permite hacer las cosas más rápido."},
		  ],
		},
		{
		  text: "El Alcance, Tiempo y Costo se consideran por igual en un Enfoque Agile y en uno tradicional. ",
		  correcta: 2,
		  valor:40,
		  options: [
			{ id: 1, text: "Cierto"},
			{ id: 2, text: "Falso"},
			{ id: 3, text: ""},
			{ id: 4, text: ""},
		  ],
		},
		{
		  text: "Entregar valor vía módulos más pequeños que se pueden resolver de manera incremental, adaptativa y flexible en ciclos cortos, buscando el feedback de clientes se refiere a:",
		  correcta: 2,
		  valor:80,
		  options: [
			{ id: 1, text: "Priorización"},
			{ id: 2, text: "Enfoque MVP"},
			{ id: 3, text: "Alienación"},
			{ id: 4, text: "Empoderamiento"},
		  ],
		},
		{
		  text: "Agile por sí mismo, no resolverá ninguno de nuestros problemas, solo los hará tan dolorosamente visibles que ignorarlos será mucho más difícil.",
		  correcta: 1,
		  valor:40,
		  options: [
			{ id: 1, text: "Verdadero"},
			{ id: 2, text: "Falso"},
			{ id: 3, text: ""},
			{ id: 4, text: ""},
		  ],
		},
  ];
  */


  const questions_80 = [
	  {
		  text: "¿Cuál de los siguientes no es un valor del manifiesto ágil? ",
		  correcta: 1,
		  valor:80,
		  options: [
			{ id: 1, text: "Procesos y herramientas sobre individuos e interacciones."},
			{ id: 2, text: "Software funcionando sobre documentación extensiva."},
			{ id: 3, text: "Colaboración con el cliente sobre negociación contractual."},
			{ id: 4, text: "Respuesta ante el cambio sobre seguir un plan."},
		  ],
		},
		{
		  text: "Entregar valor vía módulos más pequeños que se pueden resolver de manera incremental, adaptativa y flexible en ciclos cortos, buscando el feedback de clientes se refiere a:",
		  correcta: 2,
		  valor:80,
		  options: [
			{ id: 1, text: "Priorización"},
			{ id: 2, text: "Enfoque MVP"},
			{ id: 3, text: "Alienación"},
			{ id: 4, text: "Empoderamiento"},
		  ],
		}
  ];

  const questions_40 = [
	{
		text: "¿Cómo podemos enfrentar el Mundo VUCA? ",
		correcta: 4,
		valor:40,
		options: [
		  { id: 1, text: "Utilizando Scrum."},
		  { id: 2, text: "No existe tal Mundo."},
		  { id: 3, text: "Con Transparencia, Inspección y Adaptación."},
		  { id: 4, text: "Con Visión, Comprensión, Claridad y Agilidad."},
		],
	  },
		{
		  text: "¿Cuál de estos enunciados no hace referencia a lo que es la Agilidad? ",
		  correcta: 4,
		  valor:40,
		  options: [
			{ id: 1, text: "Una filosofía acerca de la entrega de soluciones de calidad y con valor empresarial."},
			{ id: 2, text: "Una colección de valores y principios que sostienen esa filosofía."},
			{ id: 3, text: "Un movimiento o comunidad creada para cambiar la forma de hacer las cosas y la gestión empresarial."},
			{ id: 4, text: "Una metodología que te permite hacer las cosas más rápido."},
		  ],
		},
		{
		  text: "El Alcance, Tiempo y Costo se consideran por igual en un Enfoque Agile y en uno tradicional. ",
		  correcta: 2,
		  valor:40,
		  options: [
			{ id: 1, text: "Cierto"},
			{ id: 2, text: "Falso"},
			{ id: 3, text: ""},
			{ id: 4, text: ""},
		  ],
		},
		{
		  text: "Agile por sí mismo, no resolverá ninguno de nuestros problemas, solo los hará tan dolorosamente visibles que ignorarlos será mucho más difícil.",
		  correcta: 1,
		  valor:40,
		  options: [
			{ id: 1, text: "Verdadero"},
			{ id: 2, text: "Falso"},
			{ id: 3, text: ""},
			{ id: 4, text: ""},
		  ],
		}
  ];
  
	//obtener un objeto aleatoreo
  const getRandom = (array) => {
	const randomObject = array[Math.floor(Math.random() * array.length)];
	return randomObject;
  };
  //revolver un arrray
  const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

  //revuelve el array
  const shuffle_40 = shuffleArray(questions_40)
  //lo recorta a 2 elementos
  const short_40 = shuffle_40.slice(0, 2)
  //obtiene 1 objeto al azar
  const random_80 = getRandom(questions_80)
  //une 2 arrays
  const questions_merge =  shuffleArray([random_80, ...short_40]);
  
  const [questions, setQuestions] = useState(() => questions_merge)
  
  //sufle las respuestas en cada preguntas
  const[currentAswers1, setCurrentAswers1] = useState(() => questions[0].options.sort(() => Math.random() - 0.5))
  const[currentAswers2, setCurrentAswers2] = useState(() => questions[1].options.sort(() => Math.random() - 0.5))
  const[currentAswers3, setCurrentAswers3] = useState(() => questions[2].options.sort(() => Math.random() - 0.5))
 
  //const[currentAswers, setCurrentAswers] = useState([]);


  useEffect(() => {

	/*
	lottie.loadAnimation({
		container: container.current,
		renderer: 'svg',
		loop: true,
		autoplay: true,
		animationData: require('../Img/lotties/rubi_si.json')
	})
	*/
    //console.log('sólo al principio')
	//console.log('shuffle_40',shuffle_40)
	//console.log('short_40',short_40)
	//console.log("🚀 ~ random_80", random_80)
	console.log("🚀 ~ questions", questions)
	//console.log("🚀 ~ currentAswers", currentAswers)
	//console.log("🚀 ~ questions.short", questions[currentQuestion].options)
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
		//GConText.setTiempo(GConText.Tiempo + counter);
		GConText.setTiempo(counter);

		GConText.setPuntosEval1(puntos);
		GConText.setTiempoEval1(counter);

		//RESETEAMOS EL TIMER
		setisTimer(false);
		//setCounter(0);
		//setSecond("00");
		//setMinute("00");

		//SET JOYA Y BONUS
		if(score === questions.length){
			GConText.setBonus1(true) 
			GConText.setPuntos(GConText.Puntos + 15) 
		}
		if(score >= questions.length-1){GConText.setJoya1(true)}

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

  function secondsToString(seconds) {
	var hour = Math.floor(seconds / 3600);
	hour = (hour < 10)? '0' + hour : hour;
	var minute = Math.floor((seconds / 60) % 60);
	minute = (minute < 10)? '0' + minute : minute;
	var second = seconds % 60;
	second = (second < 10)? '0' + second : second;
	return hour + ':' + minute + ':' + second;
  }


  


 useEffect(() => {
    let intervalId;

    if (isTimer) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
		const minuteCounter = Math.floor((counter / 60) % 60);
		const hourCounter = Math.floor(counter / 3600)
	

		let computedSecond = (secondCounter < 10)? `0${secondCounter}` : secondCounter;
		let computedMinute = (minuteCounter < 10)? `0${minuteCounter}` : minuteCounter;
		let computedHour = (hourCounter < 10)? `0${hourCounter}` : hourCounter;

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
		style={{display: avanzar === true && questions[currentQuestion].correcta === currentAswers   ? 'block' : 'none', width: '40px' }}
	  src={success === true ? Img.bien : Img.mal} alt=""
	/>
  );


  return (
	<>
	
	<div className="container quiz1-background">

		<NavQuiz props={{colorFondo:'f-rosa-claro', titulo:'Quiz1',hour,minute,second}} ></NavQuiz>

		{showResults ? (
		<>
		{
			score === questions.length
			//score === 0
			?  <>
				<div className="retro-bien pt-5" >
				<div className="row">
						<div className="col-12 col-md-6 offset-md-3 text-center ">
							{/* <img src={Img.joya1_retro_si} alt="" width="75%"></img> */}
							<Lottie animationData={retro_bien_lottie} loop={true}  style={{height: '300px' }} />
							<h1 className='fs-45 mt-2'>¡Muy bien!</h1>
							<h2 className='fs-20 mt-4'>Has encontrado el <b>Rubí</b>, ahora podrás aplicar en tus entregas los <b>principios y valores Agile</b>.</h2>
						</div>

						<div className="col-12 col-md-6 offset-md-3 text-center cuadro_bco mt-2 p-2 flex ">
							<img src={Img.bonus} alt="" width="60"></img>
							<h1 className='fs-18 ms-5 text-left'>Además demostraste una gran habilidad en este reto y has ganado <span className='c-rojo'>15 puntos extra</span>.</h1>
						</div>
						<div className="col-12 col-md-8 offset-md-2 text-center ">
							<h2 className='fs-20 mt-2'>Aún debes conseguir dos Gemas más, avanza para continuar tu búsqueda.</h2>
						</div>

						<div className="col-12 col-md-8 offset-md-2 text-center ">
							<div className="mt-3">
								{/* <button  className='btn_default mx-3 px-5' onClick={() => restartGame()}>Continuar</button> */}
								<Link className='btn_negro mx-3 px-5' to='/segundo_reto' >Continuar</Link>
							</div>	
						</div>	
					</div>
				</div>
				</>
			: <>  </>
		  }



		{
			score === questions.length-1
			//score === 0
			?  <>
				<div className="retro-bien pt-5" >
				<div className="row">
						<div className="col-12 col-md-6 offset-md-3 text-center ">
							{/* <img src={Img.joya1_retro_si} alt=""  width="75%"></img> */}
							<Lottie animationData={retro_bien_lottie} loop={true} style={{height: '300px' }}  />
							<h1 className='fs-45 mt-2'>¡Muy bien!</h1>
							<h2 className='fs-20 mt-4'>Has encontrado el <b>Rubí</b>, ahora podrás aplicar en tus entregas los <b>principios y valores Agile</b>.</h2>
						</div>

						<div className="col-12 col-md-8 offset-md-2 text-center ">
							<h2 className='fs-20 mt-4'>Aún debes conseguir dos Gemas más, avanza para continuar tu búsqueda.</h2>
						</div>

						<div className="col-12 col-md-8 offset-md-2 text-center ">
							<div className="mt-3">
								{/* <button  className='btn_default mx-3 px-5' onClick={() => restartGame()}>Continuar</button> */}
								<Link className='btn_negro mx-3 px-5' to='/segundo_reto' >Continuar</Link>
							</div>	
						</div>	
					</div>
				</div>
				</>
			: <>  </>
		  }


		{
			score < questions.length-1
			//score === 0
			?  <>
				<div className="retro-mal pt-5" >
				<div className="row">
						<div className="col-12 col-md-6 offset-md-3 text-center ">
							{/* <img src={Img.joya1_retro_no} alt="" width="75%"></img> */}
							<Lottie animationData={retro_mal_lottie} loop={true} style={{height: '300px' }} />
							<h2 className='fs-20 mt-4 c-blanco'>No conseguiste el <b>Rubí</b>, debes esforzarte más para contar con su poder interior de <b>principios y valores Agile</b>.</h2>
						</div>

						<div className="col-12 col-md-8 offset-md-2 text-center ">
							<h2 className='fs-20 mt-4 c-blanco'>Aún debes conseguir dos Gemas más, avanza para continuar tu búsqueda.</h2>
						</div>

						<div className="col-12 col-md-8 offset-md-2 text-center ">
							<div className="mt-3">
								{/* <button  className='btn_default mx-3 px-5' onClick={() => restartGame()}>Continuar</button> */}
								<Link className='btn_negro mx-3 px-5' to='/segundo_reto' >Continuar</Link>
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
					{/*segunda posicion del map es el consecutivo  -- en este caso "num" inicia del 0*/ }

					{questions[currentQuestion].options.map((option, num) => {

							//console.log("🚀 ~ options", questions[currentQuestion].correcta === currentAswers[num].id)
							//console.log("🚀 ~ correcta", questions[currentQuestion].correcta)
							//console.log("🚀 ~ currentAswers", currentAswers[num].id)

						const estaAct = isActive && select === (option.id) ? "resp-active" : "resp"
						const estaDes = avanzar ? "resp-disabled" : ""

						return (

							<div  style={{display: option.text ? 'block' : 'none' }} 
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
											<img src={Img.mal} alt="retro"  style={{display: showretro === option.id && correct === false ? 'block' : 'none' }} width="40"></img>
											<img src={ questions[currentQuestion].correcta === option.id ? Img.bien : Img.mal } style={{display: avanzar === true && questions[currentQuestion].correcta === option.id  ? 'block' : 'none' }} alt="retro"  width="40"></img>

										</div>		
									</div>
							</div>
							
						);
					})}



{/* 
					{questions[currentQuestion].options.map((option, num) => {

						const estaAct = isActive && select === (num+1) ? "resp-active" : "resp"
						const estaDes = avanzar ? "resp-disabled" : ""

						return (
						
							<div  style={{display: option.text ? 'block' : 'none' }} 
							key={option.id}  
							className={`col-12 col-md-10 offset-md-1 text-left py-2 mt-3 ${estaAct} ${estaDes}`}
	
									
									onClick={() => {
										selectedAswer(option.id)
										toggleClass()
									}}

									>
									<div className="row mt-1 flex">
										<div className="col-1 p-0 text-center">
											<h4 className="fs-30 c-negro" >{letras[num]}.</h4>
										</div>
										<div className="col-10 p-0 ">
											<h5 className='fs-18 lh-20 c-negro text-left'>
												{option.text}
											</h5>
										</div>
										<div className="col-1">
											<img src={ correct === true ? Img.bien : Img.mal } alt="retro"  style={{display: showretro === (num+1) ? 'block' : 'none' }} width="40"></img>
										</div>		
									</div>
							</div>
							
						);
					})}  */}
					
				</div>
			</div>

			<div className="row mt-3 pb-5">
				<div className="col-md-12">
					<div className="">
						<button disabled={seleccionar ? false : true} className='btn_negro mx-3 px-5' onClick={() => {chkAswer(select)}}>Enviar</button>
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

export default Quiz1
