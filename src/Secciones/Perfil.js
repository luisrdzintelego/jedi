/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import { faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'

import './Perfil.css';

import titulo_curso from "../Img/Titulo_curso.png";
import info from "../Img/info.png";
import avatar1 from "../Img/avatar1.png";
import avatar2 from "../Img/avatar2.png";
import avatar3 from "../Img/avatar3.png";



import Nav from '../Components/Nav'

const Perfil = () => {


	const [selecciono, setSelecciono] = useState(0);


  const Seleccionar_avatar = (newIndex) => {	
		console.log("🚀 ~ newIndex", newIndex)
		//setSelecciono(true);
    //setSelecciono(current => !current);
    setSelecciono(newIndex);
	  };


  
	
	  useEffect( () => {
		//console.log("🚀 ~ vistos", vistos)
		//setLoading(true)
		
	  }, [])
	




  return (
    <>
		<div className="container-fluid perfil-background">

        <div className="row">
          <div className="col-md-12">
          <Nav titulo={"Perfil"}></Nav>
          </div>				
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className='text-left'>Para recuperar las Gemas, se ha llamado a un grupo de ninjas, pues su <b>flexibilidad, agilidad y estrategia</b> serán de gran utilidad en esta búsqueda.</h2>

            <div className="mt-4">
                <h3 className='text-left'><img src={info} width="25"></img> Para comenzar, selecciona un personaje para vivir este gran reto.</h3>
            </div>	

          </div>				
        </div>

        <div className="container">
          <div className="row mt-3">

              {/* <!-- COLUMNA 1--> */}
              <div className="col-md-3 perfil-form ms-5 me-5">

                  <div className="mt-1">
                    <img src={titulo_curso} width="100" height=""></img>
                  </div>

                    <div className="mt-2">
                      <img src={avatar1} width="200" ></img>
                    </div>
                    <hr></hr>
                    <div className="mt-1 mb-5">
                      <h4>Avatar 1</h4>
                    </div>

                <div className="mt-1 mb-3">
                <span className={selecciono === 1 ? 'activo' : 'btn_default'} onClick={() => {
											Seleccionar_avatar(1);

										}}>Escoger</span>
                </div>
                
              </div>
              {/* <!-- COLUMNA 2--> */}
              <div className="col-md-3 perfil-form ms-5 me-5">

                  <div className="mt-1">
                    <img src={titulo_curso} width="100" height=""></img>
                  </div>

                    <div className="mt-2">
                      <img src={avatar2} width="200" ></img>
                    </div>
                    <hr></hr>
                    <div className="mt-1 mb-5">
                      <h4>Avatar 1</h4>
                    </div>


                  <div className="mt-1 mb-3">
                    <span className={selecciono === 2 ? 'activo' : 'btn_default'} onClick={() => {
											Seleccionar_avatar(2);

										}}>Escoger</span>
                  </div>
                
              </div>
              {/* <!-- COLUMNA 3--> */}
              <div className="col-md-3 perfil-form ms-5">

                  <div className="mt-1">
                    <img src={titulo_curso} width="100" height=""></img>
                  </div>

                    <div className="mt-2">
                      <img src={avatar3} width="200" ></img>
                    </div>
                    <hr></hr>
                    <div className="mt-1 mb-5">
                      <h4>Avatar 1</h4>
                    </div>

                  <div className="mt-1 mb-3">
                    <span className={selecciono === 3 ? 'activo' : 'btn_default'} onClick={() => {
											Seleccionar_avatar(3);

										}}>Escoger</span>
                  </div>
                
              </div>
          </div>			
        </div>
      
      <div className="row">
				<div className="col-md-8 offset-md-2">
					<div className="mt-5 mb-5">
						<Link className='btn_default mx-3' to="/introduccion"> <FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon> Regresar</Link>
						<Link className='btn_default mx-3' to="/instrucciones"  style={{visibility: selecciono !== 0 ? 'visible' : 'hidden' }}>Continuar <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></Link>
					</div>	
				</div>	
      </div>	

		</div>
	
	</>
  )
}

export default Perfil