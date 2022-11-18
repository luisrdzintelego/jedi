import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VarContext } from '../Context/VarContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

import { DataStore, SortDirection } from '@aws-amplify/datastore';
import { Ranking } from '../models';

import './RankingBoard.css';
import * as Img from '../Components/Imagenes'


import Nav from '../Components/Nav'

const RankingBoard = () => {

  const GConText = useContext(VarContext);

  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  const chkData = async () => {
    //NOTE: SIN FILTRO
    //const models = await DataStore.query(Ranking);
    //NOTE: FILTRO POR GRUPOS
    //const posts = await DataStore.query(Ranking, c => c.grupo("eq", GConText.Grupo));
    //setTodos(posts)
    //return await DataStore.query(Ranking, c => c.grupo("eq", GConText.Grupo));

    return await DataStore.query(Ranking, c => c.grupo("eq", GConText.Grupo), {
      sort: s => s.puntos(SortDirection.DESCENDING).tiempo(SortDirection.ASCENDING)
    }).then((resp) => {
      //setTodos(resp)
      setTodos(resp.map((option, i) => {
        return {
          id: option.id,
          ...option
        }
      }))
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    chkData()
  }, [])

  return (
    <>
      <div className="container ranking-background pb-5">

        <Nav titulo={"Ranking: G" + GConText.Grupo}></Nav>

        <div className="container">
          <div className="row">

            <div className="col col-md-10 offset-md-1 ranking-form">

              <div>
                <img className='img-fluid' src={Img.titulo_curso} alt="" width="100" height=""></img>
              </div>
              <hr></hr>

              {
                todos.map((option, i) => {
                  const user = option.id === GConText.UserId ? "f-rosa-claro" : "f-gris"

                  return (
                    <div key={i + 1}

                      className={`col-12 col-md-10 offset-md-1 text-left ${user} br-10 px-2 py-1 mt-1`}>

                      <div className="row flex">
                        <div className="col-1 text-center d-none d-sm-block">
                          <img src={option.avatar === '' ? Img.no_avatar : option.avatar} alt="" width="40"></img>
                        </div>
                        <div className="col-1 text-center">
                          <h1 className='fs-22 m-0 c-negro'>
                            {i + 1}
                          </h1>
                        </div>

                        <div className="col-5 text-left">
                          <h1 className='fs-18 m-0 c-negro'>
                            {option.nombre}
                          </h1>
                        </div>
                        <div className="col-5 text-center">
                          {/* <h2 className='fs-18 c-black text-left'><img src={Img.star} alt="" width="30"></img> {GConText.Puntos} pts - {  Math.floor(GConText.Tiempo / 60)} : { GConText.Tiempo % 60}</h2> */}
                          <span className='fs-18 c-black text-left'><img src={Img.star} alt="" width="30"></img> {option.puntos}  Pts &nbsp;&nbsp; <img src={Img.reloj} alt="" width="30"></img> {(Math.floor(option.tiempo / 3600) < 10) ? `0${Math.floor(option.tiempo / 3600)}` : Math.floor(option.tiempo / 3600)}:{(Math.floor((option.tiempo / 60) % 60) < 10) ? `0${Math.floor((option.tiempo / 60) % 60)}` : Math.floor((option.tiempo / 60) % 60)}:{(option.tiempo % 60 < 10) ? `0${option.tiempo % 60}` : option.tiempo % 60}</span>

                        </div>
                      </div>
                    </div>

                  )
                })
              }

            </div>

          </div>
        </div>

        <div className="row mx-1 my-4 text-center">
          <div className="col-12 col-md-10 offset-md-1">
            <Link className='btn_default mx-3' to="/dashboard" > <FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon> Regresar</Link>
          </div>
        </div>

      </div>

    </>
  )
}

export default RankingBoard