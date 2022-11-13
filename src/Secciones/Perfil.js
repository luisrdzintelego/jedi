import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VarContext } from '../Context/VarContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import { faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'


import { DataStore } from '@aws-amplify/datastore';
import { Ranking } from '../models';


import './Perfil.css';

import * as Img from '../Components/Imagenes'

// import titulo_curso from "../Img/Titulo_curso.png";
// import info from "../Img/info.png";
// import avatar1 from "../Img/avatar1.png";
// import avatar2 from "../Img/avatar2.png";
// import avatar3 from "../Img/avatar3.png";

import Nav from '../Components/Nav'

const Perfil = () => {

	const GConText = useContext(VarContext);

	//const [selecciono, setSelecciono] = useState(GConText.avatar);

  //const [id, setId] = useState(GConText.UserId);
  //const [avatar, setAvatar] = useState(GConText.Avatar);
  

	useEffect(() => {

    console.log("🚀 ~ GConText.UserId", GConText.UserId)
    console.log("🚀 ~ GConText.Username", GConText.Username)
    console.log("🚀 ~ GConText.Password", GConText.Password)
    console.log("🚀 ~ GConText.Nombre", GConText.Nombre)
    console.log("🚀 ~ GConText.Avatar", GConText.Avatar)
    console.log("🚀 ~ GConText.Puntos", GConText.Puntos)
    console.log("🚀 ~ GConText.Tiempo", GConText.Tiempo)
  
    console.log("🚀 ~ GConText.Joya1", GConText.Joya1)
    console.log("🚀 ~ GConText.Joya2", GConText.Joya2)
    console.log("🚀 ~ GConText.Joya3", GConText.Joya3)
    console.log("🚀 ~ GConText.Bonus1", GConText.Bonus1)
    console.log("🚀 ~ GConText.Bonus2", GConText.Bonus2)
    console.log("🚀 ~ GConText.Bonus3", GConText.Bonus3)
  
    console.log("🚀 ~ GConText.Type", GConText.Type)
    console.log("🚀 ~ GConText.Intentos", GConText.Intentos)
    console.log("🚀 ~ GConText.Status", GConText.Status)


	  }, []);






  /*
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
  */

  async function updateInfo(id,dato) {
    console.log("🚀 ~ dato", dato)
    console.log("🚀 ~ id", id)
    const original = await DataStore.query(Ranking, id);
    console.log("🚀 ~ original", original)
    await DataStore.save(
      Ranking.copyOf(original, updated => {
      updated.avatar = dato
      })
    );
    const Update = await DataStore.query(Ranking, id);
    console.log("🚀 ~ Update", Update)
    }


  const Seleccionar_avatar = (newIndex, id) => {	


		console.log("🚀 ~ newIndex", newIndex)
		//setSelecciono(true);
    //setSelecciono(current => !current);
      if(newIndex === 1){
        GConText.setAvatar(Img.avatar1_tumb)
        updateInfo( GConText.UserId, Img.avatar1_tumb)
      } else if (newIndex === 2){
        GConText.setAvatar(Img.avatar2_tumb)
        updateInfo( GConText.UserId, Img.avatar2_tumb)
      } else if (newIndex === 3){
        GConText.setAvatar(Img.avatar3_tumb)
        updateInfo( GConText.UserId, Img.avatar3_tumb)
      }

      //modifyIniArray()

      
	  };

  
	
	  useEffect( () => {
		//console.log("🚀 ~ vistos", vistos)
		//setLoading(true)
		
	  }, [])
	




  return (
    <>
		<div className="container perfil-background">

        <Nav titulo={"Perfil"}></Nav>

        <div className="row mx-1">
          <div className="col col-md-6 offset-md-3">
            <h2 className='fs-18 lh-25 c-negro text-left'>Para recuperar las Gemas, se ha llamado a un grupo de ninjas, pues su <b>flexibilidad, agilidad y estrategia</b> serán de gran utilidad en esta búsqueda.</h2>

            <div className="mt-4">
                <h3 className='fs-15 lh-25 c-negro text-left'><img src={Img.info} alt="" width="25"></img> Para comenzar, selecciona un personaje para vivir este gran reto.</h3>
            </div>	

          </div>				
        </div>

        <div className="container">
        <div className="row">

                  {/* <!-- COLUMNA 1--> */}
                  <div className="col perfil-form mt-3 mx-3">
       
                        <div>
                          <img className='img-fluid' src={Img.titulo_curso} alt="" width="100" height=""></img>
                        </div>
                        <div>
                          <img src={Img.avatar1} alt="" width="200" ></img>
                        </div>
                        <hr></hr>

                        <div className="mt-1 mb-5">
                          <h1 className='fs-28 lh-25 c-negro text-center' >Avatar 1</h1>
                        </div>

                        <div className="mt-1 mb-3 text-center">
                          
                          {/* <span className={GConText.Avatar === Img.avatar1_tumb  ? 'activo' : 'btn_negro'} onClick={() => {Seleccionar_avatar(1);}}>Escoger</span> */}
                            {
                            GConText.Avatar === Img.avatar1_tumb
                            //score === 0
                            ? <><img className='img-fluid ms-2' src={Img.bien} alt="" width="35" height=""></img></>
                            : <><span className='btn_negro'  onClick={() => {Seleccionar_avatar(1)}}>Escoger</span></>
                            }

                        </div>
       
                  </div>
                  {/* <!-- COLUMNA 2--> */}
                  <div className="col perfil-form mt-3 mx-3">
                    <div className=''>

                      <div>
                        <img src={Img.titulo_curso} alt="" width="100" height=""></img>
                      </div>
                      <div>
                        <img src={Img.avatar2} alt="" width="200" ></img>
                      </div>
                        <hr></hr>
                        <div className="mt-1 mb-5">
                        <h1 className='fs-28 lh-25 c-negro text-center' >Avatar 2</h1>
                        </div>


                        <div className="mt-1 mb-3 text-center">
                          
                          {/* <span className={GConText.Avatar === Img.avatar1_tumb  ? 'activo' : 'btn_negro'} onClick={() => {Seleccionar_avatar(1);}}>Escoger</span> */}
                            {
                            GConText.Avatar === Img.avatar2_tumb
                            //score === 0
                            ? <><img className='img-fluid ms-2' src={Img.bien} alt="" width="35" height=""></img></>
                            : <><span className='btn_negro'  onClick={() => {Seleccionar_avatar(2)}}>Escoger</span></>
                            }

                        </div>
                    </div>
                  </div>
                  {/* <!-- COLUMNA 3--> */}
                  <div className="col perfil-form mt-3 mx-3">
                    <div className=''>
                        <div>
                          <img src={Img.titulo_curso} alt="" width="100" height=""></img>
                        </div>
                        <div>
                          <img src={Img.avatar3} alt="" width="200" ></img>
                        </div>
                          <hr></hr>
                          <div className="mt-1 mb-5">
                          <h1 className='fs-28 lh-25 c-negro text-center' >Avatar 3</h1>
                          </div>

                          <div className="mt-1 mb-3 text-center">
                          
                          {/* <span className={GConText.Avatar === Img.avatar1_tumb  ? 'activo' : 'btn_negro'} onClick={() => {Seleccionar_avatar(1);}}>Escoger</span> */}
                            {
                            GConText.Avatar === Img.avatar3_tumb
                            //score === 0
                            ? <><img className='img-fluid ms-2' src={Img.bien} alt="" width="35" height=""></img></>
                            : <><span className='btn_negro'  onClick={() => {Seleccionar_avatar(3)}}>Escoger</span></>
                            }

                        </div>   
                      </div>
         
                  </div>
          </div>			
        </div>
      
      <div className="row">
				<div className="col-12 col-md-12">
					<div className="mt-5 mb-5">
						<Link className='btn_default mx-3' to="/introduccion"> <FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon> Regresar</Link>
						<Link className='btn_negro mx-3' to="/instrucciones"  style={{visibility: GConText.Avatar !== "" ? 'visible' : 'hidden' }}>Continuar <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></Link>
					</div>	
				</div>	

        {/* <div className="col-12 col-md-12 mt-4">
								<Link  to="/ranking" ><h1 className='fs-18 c-rojo'>Ver Ranking</h1></Link>
				</div>	 */}

      </div>	

		</div>
	
	</>
  )
}

export default Perfil