import React, { useContext, useState, useEffect } from 'react';
import { VarContext } from '../Context/VarContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons'

import './Quiz3.css';

import * as Img from '../Components/Imagenes'

import NavQuiz from '../Components/NavQuiz'


const Quiz3 = () => {

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
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  //const [isTimer, setisTimer] = useState(true);
  const [counter, setCounter] = useState(0);


  useEffect(() => {
    let intervalId;
	GConText.setIniTiempo(true);

    if (GConText.IniTiempo) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
		//GConText.setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
}, [counter, GConText]);

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
  


  const questions = [
	{
		text: "¿Cuál no es una práctica Kanban?",
		correcta: 3,
		valor:40,
		options: [
		  { id: 1, text: "Visualizar el Flujo de Trabajo."},
		  { id: 2, text: "Establecer Políticas Expresas."},
		  { id: 3, text: "Sistema Push."},
		  { id: 4, text: "Limitar el WIP."},
		],
	  },
	{
		text: "¿Cuál no es un ejemplo de Métricas Kanban?",
		correcta: 1,
		valor:40,
		options: [
		  { id: 1, text: "Velocidad"},
		  { id: 2, text: "Lead Time"},
		  { id: 3, text: "Cycle Time"},
		  { id: 4, text: "Troughput"},
		],
	  },
	{
		text: "¿Qué es el STATIK? ",
		correcta: 1,
		valor:40,
		options: [
		  { id: 1, text: "Un sistema diseñado para implementar Kanban."},
		  { id: 2, text: "Una Métrica de Kanban."},
		  { id: 3, text: "Un principio de Kanban."},
		  { id: 4, text: "Una Práctica de Kanban."},
		],
	  },
	{
		text: "Son valores de Kanban:",
		correcta: 2,
		valor:250,
		options: [
		  { id: 1, text: "Transparencia, Inspección y Adaptación."},
		  { id: 2, text: "Transparencia, Colaboración y Equilibrio."},
		  { id: 3, text: "Administrar el Flujo, Establecer Políticas Expresas, Mejorar."},
		  { id: 4, text: "Análisis de la demanda, entender fuentes de insatisfacción internas y externas."},
		],
	  },
	  {
		text: "Son ejemplos de métricas en Kanban:",
		correcta: 2,
		valor:250,
		options: [
		  { id: 1, text: "Velocidad del Sprint, Burn Dow Chart."},
		  { id: 2, text: "Lead Time, Cycle Time, throughput."},
		  { id: 3, text: "KPI y OKR."},
		  { id: 4, text: "Lead Time, Cycle Time, Burndown Chart."},
		],
	  },
	  {
		text: "Son Clases de Servicio: ",
		correcta: 2,
		valor:40,
		options: [
		  { id: 1, text: "Solicitud, Petición, Servicio."},
		  { id: 2, text: "Estándar, Entrega fija, Urgente, Intangible."},
		  { id: 3, text: "Lead Time, Cycle Time, Troughput."},
		  { id: 4, text: "Solicitud, Estándar, Entrega fija, Trougthput."},
		],
	  },
	  {
		text: "Algunos eventos sugeridos en Kanban son:",
		correcta: 1,
		valor:40,
		options: [
		  { id: 1, text: "Reunión Kanban, Reunión de realimentación, Reunión de la Planificación de la Entrega."},
		  { id: 2, text: "Daily, Revisión y Retrospectiva."},
		  { id: 3, text: "Reunión Kanban, Refinamiento, Sprint Planning."},
		  { id: 4, text: "Ninguno de los anteriores."},
		],
	  },
  ];

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
		
		//GConText.setPuntos(GConText.Puntos + Number(questions[currentQuestion].valor));
		setPuntos(puntos + Number(questions[currentQuestion].valor));
		setCorrect(true)
		
    } else {
		setCorrect(false)	
	}
	
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

		//SET PUNTOS Y EL TIEMPO
		GConText.setPuntos(GConText.Puntos + puntos);
		GConText.setTiempo(GConText.Tiempo + counter);

		GConText.setPuntosEval3(GConText.Puntos + puntos);
		GConText.setTiempoEval3(GConText.Tiempo + counter);

		//RESETEAMOS EL TIMER
		GConText.setIniTiempo(false);
		setCounter(0);
		setSecond("00");
		setMinute("00");

		//SET JOYA Y BONUS
		if(score === questions.length){GConText.setBonus3(true)}
		if(score >= questions.length-1){GConText.setJoya3(true) }

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

  /*
  useEffect( () => {
	//console.log("🚀 ~ vistos", vistos)
	//setLoading(true)

	score === questions.length ? GConText.setBonus1(true) : GConText.setBonus1(false)
	score === questions.length-1 ? GConText.setJoya1(true) : GConText.setJoya1(false)
	
  }, [GConText, questions.length, score])
  */

 // const priority = isDisabled ? "alert alert-info" : (todo.priority === 2 ? "alert alert-warning" : "alert alert-danger");


  return (
	<>
	
	<div className="container quiz3-background">

	<NavQuiz props={{colorFondo:'f-rosa-oscuro', titulo:'Quiz3',minute,second}} ></NavQuiz>

		{showResults ? (
		<>
		{
			score === questions.length
			//score === 0
			?  <>
				<div className="retro-bien flex" >
				<div className="row">
						<div className="col-12 col-md-6 offset-md-3 text-center ">
							<img src={Img.joya_reto3} alt="" width="180"></img>
							<h1 className='fs-45 mt-2'>¡Muy bien!</h1>
							<h2 className='fs-20 mt-4'>Has encontrado el <b>Zafiro</b>, ahora podrás implementar los <b>principios Scrum</b>.</h2>
						</div>

						<div className="col-12 col-md-6 offset-md-3 text-center cuadro_bco mt-3 p-2 flex ">
							<img src={Img.bonus} alt="" width="80"></img>
							<h1 className='fs-18  ms-5  text-left'>Además demostraste una gran habilidad en este reto y has ganado <span className='c-rojo'>10 puntos extra</span>.</h1>
						</div>
						<div className="col-12 col-md-8 offset-md-2 text-center ">
							<h2 className='fs-20 mt-4'>Ve a la siguiente pantalla para conocer tus resultados finales en esta búsqueda.</h2>
						</div>

						<div className="col-12 col-md-8 offset-md-2 text-center ">
							<div className="mt-3">
								{/* <button  className='btn_default mx-3 px-5' onClick={() => restartGame()}>Continuar</button> */}
								<Link className='btn_default mx-3 px-5' to='/retro_final' >Continuar</Link>
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
				<div className="retro-bien flex" >
				<div className="row">
						<div className="col-12 col-md-6 offset-md-3 text-center ">
							<img src={Img.joya_reto3} alt=""  width="180"></img>
							<h1 className='fs-45 mt-2'>¡Muy bien!</h1>
							<h2 className='fs-20 mt-4'>Has encontrado el <b>Diamante</b>, ahora podrás implementar en tus actividades el <b>método Kanban</b>.</h2>
						</div>

						<div className="col-12 col-md-8 offset-md-2 text-center ">
							<h2 className='fs-20 mt-4'>Ve a la siguiente pantalla para conocer tus resultados finales en esta búsqueda.</h2>
						</div>

						<div className="col-12 col-md-8 offset-md-2 text-center ">
							<div className="mt-3">
								{/* <button  className='btn_default mx-3 px-5' onClick={() => restartGame()}>Continuar</button> */}
								<Link className='btn_default mx-3 px-5' to='/retro_final' >Continuar</Link>
							</div>	
						</div>	
					</div>
				</div>
				</>
			: <>  </>
		  }


		{
			score <= questions.length-1
			//score === 0
			?  <>
				<div className="retro-mal flex" >
					<div className="row">
						<div className="col-12 col-md-6 offset-md-3 text-center ">
							<img src={Img.joya3_d}  alt=""  width="180"></img>

							<h2 className='fs-20 mt-4 c-blanco'>No has encontrado el <b>Diamante</b> y debes esforzarte más para recibir su poder que te permitirá implementar en tus actividades el <b>método Kanban</b>.</h2>
						</div>

						<div className="col-12 col-md-8 offset-md-2 text-center ">
							<h2 className='fs-20 mt-4 c-blanco'>Ve a la siguiente pantalla para conocer tus resultados finales en esta búsqueda.</h2>
						</div>

						<div className="col-12 col-md-8 offset-md-2 text-center ">
							<div className="mt-3">
								{/* <button className='btn_default mx-3 px-5' onClick={() => restartGame()}>Continuar</button> */}
								<Link className='btn_default mx-3 px-5' to='/retro_final' >Continuar</Link>
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
					<div className="col-12 col-md-10 offset-md-1 text-left my-4">
					<h3 className='fs-15 lh-25 c-negro'><img src={Img.info} alt="info" width="25"></img>  Selecciona la respuesta correcta y haz clic en enviar.</h3>
				</div>

				<div className="col-12 col-md-10 offset-md-1 text-left pregunta-form">
						<div className="row mt-1 flex">
							<div className="col-1 p-0 text-center">
								<span className="fs-25 dot_gris2" >{currentQuestion + 1} </span>
							</div>
							<div className="col-11 p-0 ">
								<h5 className='fs-16 lh-20 c-negro text-left'>
									{questions[currentQuestion].text}
								</h5>
							</div>	
						</div>
				</div>

					{/*primera posicion del map es el objeto -- en este caso "option"*/}
					{/*segunda posicion del map es el consecutivo  -- en este caso "num" inicia del 0*/ }
					{questions[currentQuestion].options.map((option, num) => {

						const estaAct = isActive && select === (num+1) ? "resp-active" : "resp"
						const estaDes = avanzar ? "resp-disabled" : ""

						return (
						
							<div  style={{display: option.text ? 'block' : 'none' }} 
							key={option.id}  
							className={`col-12 col-md-10 offset-md-1 text-left mt-4 ${estaAct} ${estaDes}`}
	
									
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
											<h5 className='fs-16 lh-20 c-negro text-left'>
												{option.text}
											</h5>
										</div>
										<div className="col-1">
											<img src={ correct === true ? Img.bien : Img.mal } alt="retro"  style={{display: showretro === (num+1) ? 'block' : 'none' }} width="40"></img>
										</div>		
									</div>
							</div>
							
						);
					})}
					
				</div>
			</div>

			<div className="row">
			<div className="col-md-8 offset-md-2">
				<div className="mt-5 mb-5">
					<button disabled={seleccionar ? false : true} className='btn_default mx-3 px-5' onClick={() => {chkAswer(select)}}>Enviar</button>
					<button disabled={avanzar ? false : true} className='btn_default mx-3' onClick={() => nextCuestion()}>Siguiente <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></button>
				</div>	
			</div>	
			</div>
			</>
		 )}
		
		
	
	</div>
	
	</>
  )
}

export default Quiz3
