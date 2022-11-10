import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VarContext } from '../Context/VarContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import { faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'

import './Ranking.css';

import * as Img from '../Components/Imagenes'

// import titulo_curso from "../Img/Titulo_curso.png";
// import info from "../Img/info.png";
// import avatar1 from "../Img/avatar1.png";
// import avatar2 from "../Img/avatar2.png";
// import avatar3 from "../Img/avatar3.png";

import Nav from '../Components/Nav'

const Ranking = () => {

	const GConText = useContext(VarContext);

	//const [selecciono, setSelecciono] = useState(GConText.avatar);

	
	  useEffect( () => {
		//console.log("🚀 ~ vistos", vistos)
		//setLoading(true)
		
	  }, [])
	

  return (
    <>
		<div className="container ranking-background">

        <Nav titulo={"Ranking: Nombre del Grupo"}></Nav>

        <div className="row mx-1 my-4 text-left">
          <div className="col-12 col-md-10 offset-md-1">
          <Link className='btn_default mx-3' to="/login" >Regresar </Link>

          </div>				
        </div>

        <div className="container">
        <div className="row">

                  {/* <!-- COLUMNA 1--> */}
                  <div className="col col-md-10 offset-md-1 ranking-form mt-3">
       
                        <div>
                          <img className='img-fluid' src={Img.titulo_curso} alt="" width="100" height=""></img>
                        </div>
                        <hr></hr>

                        {
                        GConText.Base
                        //.sort((a,b) => a.itemM < b.itemM ? 1 : -1)
                        .sort((c,d) => c.Tiempo < d.Tiempo ? 1 : -1)
                        .sort((a,b) => a.Puntos < b.Puntos ? 1 : -1)
                            // if you want to change the sorting direction: b.price - a.price
                        .map((option, i) => {
                          return (
                            <div key={i+1} className="col-12 col-md-10 offset-md-1 text-left f-gris br-10 px-2 py-1 mt-1">
                              
                              <div className="row flex">
                                <div className="col-1 text-center">
                                  <img src={option.Avatar === GConText.Avatar ? GConText.Avatar : Img.no_avatar } alt="" width="40"></img>
                                </div>
                                <div className="col-1 text-center">
                                  <h1 className='fs-22 m-0 c-negro'>
                                  {i+1}
                                  </h1>
                                </div>
              
                                <div className="col-6 text-left">
                                  <h1 className='fs-18 m-0 c-negro'>
                                  {option.Nombre}
                                  </h1>
                                </div>
                                <div className="col-4 text-center">
                                  {/* <h2 className='fs-18 c-black text-left'><img src={Img.star} alt="" width="30"></img> {GConText.Puntos} pts - {  Math.floor(GConText.Tiempo / 60)} : { GConText.Tiempo % 60}</h2> */}
                                  <span className='fs-18 c-black text-left'><img src={Img.star} alt="" width="30"></img> {option.Puntos}  Pts &nbsp;&nbsp; <img src={Img.reloj} alt="" width="30"></img> {(Math.floor(option.Tiempo / 3600) < 10)? `0${Math.floor(option.Tiempo / 3600)}` : Math.floor(option.Tiempo / 3600)}:{(Math.floor((option.Tiempo / 60) % 60) < 10)? `0${Math.floor((option.Tiempo / 60) % 60)}` : Math.floor((option.Tiempo / 60) % 60)}:{ (option.Tiempo % 60 < 10)? `0${option.Tiempo % 60}` : option.Tiempo % 60 }</span>
                                
                                </div>
                              </div>
                            </div>
                            
                            )
                        })
                        }
                           
                  </div>

          </div>			
        </div>
    

		</div>
	
	</>
  )
}

export default Ranking