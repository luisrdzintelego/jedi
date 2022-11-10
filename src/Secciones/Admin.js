import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VarContext } from '../Context/VarContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import { faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'

import './Admin.css';

import * as Img from '../Components/Imagenes'

// import titulo_curso from "../Img/Titulo_curso.png";
// import info from "../Img/info.png";
// import avatar1 from "../Img/avatar1.png";
// import avatar2 from "../Img/avatar2.png";
// import avatar3 from "../Img/avatar3.png";

import Nav from '../Components/Nav'

const Admin = () => {

	const GConText = useContext(VarContext);

	//const [selecciono, setSelecciono] = useState(GConText.avatar);

	
	  useEffect( () => {
		//console.log("🚀 ~ vistos", vistos)
		//setLoading(true)
		
	  }, [])
	

  return (
    <>
		<div className="container admin-background">

        <Nav titulo={"Panel Administrador:"} btn_admin={true}></Nav>

        <div className="container">
        <div className="row">

                  {/* <!-- COLUMNA 1--> */}
                  <div className="col col-md-10 offset-md-1 admin-form mt-3">
       
                        <div className="col f-negro pY-2">
                              
                              <div className="row flex">

                                <div className="col text-center">
                                  <span className='fs-18 c-blanco'>ID</span>
                                </div>
              
                                <div className="col-4 text-left">
                                  <span className='fs-18 c-blanco'>NOMBRE</span>
                                </div>

                                <div className="col text-center">
                                  <span className='fs-18 c-blanco'>PUNTOS</span>
                                </div>

                                <div className="col text-center">
                                  <span className='fs-18 c-blanco'>TIEMPO</span>
                                </div>

                                <div className="col text-center">
                                  <span className='fs-18 c-blanco'>GEMAS</span>
                                </div>

                                <div className="col text-center">
                                  <span className='fs-18 c-blanco'>STATUS</span>
                                </div>

                              </div>
                            </div>


                        {
                        GConText.Base
                        //.sort((a,b) => a.itemM < b.itemM ? 1 : -1)
                        .sort((c,d) => c.Tiempo < d.Tiempo ? 1 : -1)
                        .sort((a,b) => a.Puntos < b.Puntos ? 1 : -1)
                            // if you want to change the sorting direction: b.price - a.price
                        .map((option, i) => {

                          const estaAct = i % 2 === 0 ? "f-gris" : "Odd"

                          return (
                            <div key={i+1} className={`col py-1 ${estaAct}`} >
                              
                              <div className="row flex">
                                <div className="col text-center">
                                  <h1 className='fs-18 c-negro'>{i+1}</h1>
                                </div>
              
                                <div className="col-4 text-left">
                                  <h1 className='fs-18 c-negro'>{option.Nombre}</h1>
                                </div>
                                <div className="col text-center">
                                  <span className='fs-18 c-negro'>{option.Puntos}</span>         
                                </div>

                                <div className="col text-center">
                                  <span className='fs-18 c-negro'>{(Math.floor(option.Tiempo / 3600) < 10)? `0${Math.floor(option.Tiempo / 3600)}` : Math.floor(option.Tiempo / 3600)}:{(Math.floor((option.Tiempo / 60) % 60) < 10)? `0${Math.floor((option.Tiempo / 60) % 60)}` : Math.floor((option.Tiempo / 60) % 60)}:{ (option.Tiempo % 60 < 10)? `0${option.Tiempo % 60}` : option.Tiempo % 60 }</span>
                                </div>

                                <div className="col text-center">
                                  <span className='fs-18 c-negro'>0</span>
                                </div>

                                <div className="col text-center">
                                  <span className='fs-18 c-negro'><img src={Img.bien} alt="" width="16"></img></span>
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

export default Admin