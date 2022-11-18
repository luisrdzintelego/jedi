//terciario 
score === questions.length
//score === 0
? <>  </>
: <>  </>

  //const suits = ["♠️", "♣️", "♥️", "♦️", "🃏"];
  //const ranks = ["A", "K", "Q", "J", "🃏"];

//! * ? // ~ & ^
//* ? // ~ & ^
//? // ~ & ^
//& ^
//~
//^
//@
//NOTE:

  {loading ? <h2>Cargando..</h2> : <ItemList lista={productos}/>}

//partir arrat en grupos chunkSize : cantidad de obejtos por grupo
  const chunkSize = 4;
  const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  const groups = arr.map((e, i) => { 
	   return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null; 
  }).filter(e => { return e; });

//random array suffle
  function randomArrayShuffle(array) {
	let currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex -= 1;
	  temporaryValue = array[currentIndex];
	  array[currentIndex] = array[randomIndex];
	  array[randomIndex] = temporaryValue;
	}
	return array;
  }
  const alphabet=["a","b","c","d","e"];
  //alphabet is now shuffled randomly = ["d", "c", "
  
//agregar dierecto au use state un array lleno
  const [questions2, setQuestions2] = useState(() => getRandom(questions))
  //unir arrays con 1 obejto el primero y el segundo con varios
  const questions_merge = [random_80, ...short_40];
    //unir arrays con varios objetos los 2
  const questions_merge = [questions_80, ...short_40];

    /*
  useEffect( () => {
	//console.log("🚀 ~ vistos", vistos)
	//setLoading(true)

	score === questions.length ? GConText.setBonus1(true) : GConText.setBonus1(false)
	score === questions.length-1 ? GConText.setJoya1(true) : GConText.setJoya1(false)
	
  }, [GConText, questions.length, score])
  */

 // const priority = isDisabled ? "alert alert-info" : (todo.priority === 2 ? "alert alert-warning" : "alert alert-danger");


//add objects to an arraay use state
const [theArray, setTheArray] = useState(initialArray);
setTheArray(oldArray => [...oldArray, newElement]);
setTheArray([...theArray, newElement]);


 const {useState, useCallback} = React;
 function Example() {
	 const [theArray, setTheArray] = useState([]);
	 const addEntryClick = () => {
		 setTheArray(oldArray => [...oldArray, `Entry ${oldArray.length}`]);
	 };
	 return [
		 <input type="button" onClick={addEntryClick} value="Add" />,
		 <div>{theArray.map(entry =>
		   <div>{entry}</div>
		 )}
		 </div>
	 ];
 }

 //modificar un array
  const modifyIniArray = () => {	
      console.log("🚀 ~ datos", datos)

      const updateDatos = datos.map(shape => {
        if (shape.User === 'OLearner') {
          // No change
          return {
            ...shape,
            Avatar: GConText.Avatar,
          }
        } else {
          // Return a new circle 50px below
          return shape;          
        }
      })
      // Re-render with the new array
      setDatos(updateDatos);
      GConText.setBase(updateDatos);

      console.log("🚀 ~ updateDatos", updateDatos)
      console.log("🚀 ~ GConText.setBase", GConText.Base)
  };


  //Javascript Check If Number Is Even Or Odd With Code Examples -- para las tablas
  function solution(num) {
    return num % 2 === 0 ? 'Even' : 'Odd'
}



  //gestionar prsionar teclas
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      updateNote()
    }
  }


      //hacer un rankin de un map
      resp.sort((c,d) => c.tiempo < d.tiempo ? 1 : -1)
        .sort((a,b) => a.puntos < b.puntos ? 1 : -1)
        .reduce((empty, option, num) => {
          if (option.id === GConText.UserId) {
            //var svalue = { posicion: num}
            //empty.push(svalue);
            console.log("🚀 ~ num", num+1)
            setItem(num+1)
          }
          return empty;

        }, {});
        



  console.log("🚀 ~ Ranking", GConText.Ranking)

	 function useInput({ type /*...*/ }) {
	 	const [value, setValue] = useState("");
	 	const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
	 	return [value, input];
	   }

	 const [password, setPassword] = useInput({ type: "text" });
	 const [username, setUsername] = useInput({ type: "text" });


  //modifiy an array
	const modifyIniArray = () => {	
		console.log("🚀 ~ datos", datos)
  
		const updateDatos = datos.map(shape => {
		  if (shape.User === 'OLearner') {
			// No change
			return {
				...shape,
				Avatar: GConText.Avatar,
				Tiempo: GConText.Tiempo,
				Puntos: GConText.Puntos
			}
        } else {
          // Return a new circle 50px below
          return shape;          
        }
      })
		// Re-render with the new array
		setDatos(updateDatos);
		GConText.setBase(updateDatos);
  
		console.log("🚀 ~ updateDatos", updateDatos)
		console.log("🚀 ~ GConText.setBase", GConText.Base)
	};
	


  await DataStore.query(Ranking, c => c.grupo("eq", GConText.Grupo))
  .then((resp) => {
    resp
      .sort((c, d) => c.tiempo < d.tiempo ? 1 : -1)
      .sort((a, b) => a.puntos < b.puntos ? 1 : -1)
      .reduce((empty, option, num) => {
        if (option.id === GConText.UserId) {
          //var svalue = { posicion: num}
          //empty.push(num+1);
          console.log("~~~~~~~ ---------------- ~~~~~~~")
          console.log("🚀 ~ setRanking", num + 1)
          console.log("🚀 ~ GConText.Ranking", num + 1)
          console.log("~~~~~~~ ---------------- ~~~~~~~")
          empty = num + 1;
          GConText.setRanking(num + 1)
          setRanking(num + 1)
        }
        return empty;

      }, {});

  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {

  })



			{/* {
              user === "" 
              ? <Navigate to="/login" />
              : <></>
            }  */}



  	/*AGRERGAR A UN ARRAT SU MISMO TAMAÑO*/
	/*
	const [myArray, updateMyArray] = useState([]);
	const onClick = () => {
	  updateMyArray( arr => [...arr, `${arr.length}`]);
	  console.log("🚀 ~ myArray", myArray)
	};
	*/


  	/*  
	function stopTimer() {
		GConText.setIniTiempo(false);
		setCounter(0);
		setSecond("00");
		setMinute("00");
	}
	*/

  	//const [second, setSecond] = useState(() => ( String(GConText.Tiempo % 60).length === 1 ? `0${GConText.Tiempo % 60}` : GConText.Tiempo % 60))
	//const [minute, setMinute] = useState(() => ( String(Math.floor(GConText.Tiempo / 60)).length === 1 ? `0${Math.floor(GConText.Tiempo / 60)}` : Math.floor(GConText.Tiempo / 60)))


  	//TIMER
	//const [second, setSecond] = useState("00");
	//const [minute, setMinute] = useState("00");


  function secondsToString(seconds) {
		var hour = Math.floor(seconds / 3600);
		hour = (hour < 10) ? '0' + hour : hour;
		var minute = Math.floor((seconds / 60) % 60);
		minute = (minute < 10) ? '0' + minute : minute;
		var second = seconds % 60;
		second = (second < 10) ? '0' + second : second;
		return hour + ':' + minute + ':' + second;
	}


  	//obtener un objeto aleatoreo
	const getRandom = (array) => {
		const randomObject = array[Math.floor(Math.random() * array.length)];
		return randomObject;
	};


  const ImgRetro = ({ success, currentAswers, showretro }) => (
		<img
			style={{ display: avanzar === true && questions[currentQuestion].correcta === currentAswers ? 'block' : 'none', width: '40px' }}
			src={success === true ? Img.bien : Img.mal} alt=""
		/>
	);