//terciario 
//! * ? // ~ & ^
//* ? // ~ & ^
//? // ~ & ^
//& ^
//~
//^
//@
//NOTE:
//{
	score === questions.length
	//score === 0
	? <>  </>
	: <>  </>
  //}

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