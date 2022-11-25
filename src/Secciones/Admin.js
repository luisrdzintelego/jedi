import React, { useRef, useState, useContext, useEffect, useMemo } from 'react';
import { Link, resolvePath } from 'react-router-dom';
import { VarContext } from '../Context/VarContext';

import { useCookies } from 'react-cookie';

import { DataStore, SortDirection, Predicates } from '@aws-amplify/datastore';
import { Ranking } from '../models';

import { DownloadTableExcel } from 'react-export-table-to-excel';

import * as XLSX from "xlsx";

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

import { faCancel } from '@fortawesome/free-solid-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

import './Admin.css';

import * as Img from '../Components/Imagenes'
import Nav from '../Components/Nav'

const Admin = () => {

  //---LOGOUT ----//
  const [CookieId, setCookieId] = useCookies(['idUser']);

  const removeAuth = (name) => {
    setCookieId(name, '', { path: '/', expires: (new Date(Date.now())) });
  };

  const GConText = useContext(VarContext);

  //const [todos, setTodos] = useState({ notes: [] })
  const [todos, setTodos] = useState([])


  const [isActive, setIsActive] = useState(true);
  const [item, setItem] = useState('')

  // const ExcelFile = ExportExel.ExcelFile;
  // const ExcelSheet = ExportExel.ExcelSheet;
  // const ExcelColum = ExportExel.ExcelColum;



  const chkData = async () => {
    //setTodos([]);
    console.log("🚀 ~ chkData----------")
    return await DataStore.query(Ranking, Predicates.ALL, {
      sort: s => s.puntos(SortDirection.DESCENDING).tiempo(SortDirection.ASCENDING)
    }).then((resp) => {
      //setTodos(resp)
      //setTodos({ notes: resp })
      setTodos(resp.map((option, i) => {
        return {
          id: option.id,
          ranking: i + 1,
          isOpen: false,
          ...option
        }
      }))

    })
      .catch((err) => {
        console.log(err)

      })
      .finally(() => {
        setEdit(false)
      })
  }


  // useEffect(() => {
  //   getData(someParam).then(data => setState(data))
  // }, [someParam]) 

  useEffect(() => {

    chkData()
    /*
      .then((resp) => {
        //setTodos(resp)

        //setTodos({ notes: resp })

        setTodos(resp.map((option, i) => {
          return {
            id: option.id,
            isOpen: false,
            ...option
          }
        }))

      })
      .catch((err) => {
        console.log(err)

      })
      .finally(() => {
        setEdit(false)


      })
      */


  }, [])


  /*
  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
    console.log("🚀 ~ isActive", isActive)
  };
  */


  //------LUIS: EDITAR UN REGISTRO ---///

  const [edit, setEdit] = useState(true)

  let inputName = useRef();
  let inputPass = useRef();
  let inputUser = useRef();

  const tableRef = useRef();

  const submitDelete = (id) => {
    confirmAlert({
      //title: 'Confirmar eliminación de registro',
      message: 'Estas segura de hacer esto?',
      buttons: [
        {
          label: 'Sí',
          onClick: () => deleteNote({ props: { id: id } })
        },
        {
          label: 'No',
          //onClick: () => alert('Click No')
          onClick: () => ''
        }
      ]
    });
  };

  const submitUpload = () => {
    confirmAlert({
      //title: 'Confirmar eliminación de registro',
      message: 'Estas segura de hacer esto?',
      buttons: [
        {
          label: 'Sí',
          onClick: () => uploadUsers(items)
        },
        {
          label: 'No',
          //onClick: () => alert('Click No')
          onClick: () => setIsActive(true)
        }
      ]
    });
  };


  //se mandan las variables por props
  const deleteNote = async ({ props }) => {
    const modelToDelete = await DataStore.query(Ranking, props.id);
    DataStore.delete(modelToDelete);

    //setTodos({ notes: todos.notes.filter((value, index, arr) => { return value.id !== props.id; }) });
    setTodos(todos.filter((value, index, arr) => { return value.id !== props.id; }));
  }


  const updateNote = async (i, id) => {

    //const updatedtodos = [...todos.notes];

    if (edit === true) {
      setEdit(false);
      const updatedtodos = [...todos];

      console.log("🚀 ~ updateNote", id)
      console.log("🚀 ~ i", i)
      console.log("🚀 ~ isOpen", updatedtodos[i].isOpen)
      updatedtodos[i].isOpen = updatedtodos[i].isOpen ? !updatedtodos[i].isOpen : true;
      updatedtodos[i].nombre = inputName.current ? inputName.current.value : updatedtodos[i].nombre;
      updatedtodos[i].password = inputPass.current ? inputPass.current.value : updatedtodos[i].password;
      updatedtodos[i].username = inputUser.current ? inputUser.current.value : updatedtodos[i].username;
      setTodos(updatedtodos);

      const original = await DataStore.query(Ranking, id);
      await DataStore.save(
        Ranking.copyOf(original, updated => {
          updated.nombre = inputName.current ? inputName.current.value : updatedtodos[i].nombre
          updated.password = inputPass.current ? inputPass.current.value : updatedtodos[i].password
          updated.username = inputUser.current ? inputUser.current.value : updatedtodos[i].username
        })
      ).then((resp) => {
        console.log("🚀 ~ resp", resp)
      }).catch((err) => {
        console.log(err)
      }).finally(() => {
        console.log("finaly")
      })
      //const Update = await DataStore.query(Ranking, id);
    }

  };

  const editNote = async (i, id) => {

    //const updatedtodos = [...todos.notes];

    if (edit === false) {
      setEdit(true);
      const updatedtodos = [...todos];

      console.log("🚀 ~ editNote", id)
      updatedtodos[i].isOpen = updatedtodos[i].isOpen ? !updatedtodos[i].isOpen : true;
      updatedtodos[i].nombre = inputName.current ? inputName.current.value : updatedtodos[i].nombre;
      updatedtodos[i].password = inputPass.current ? inputPass.current.value : updatedtodos[i].password;
      updatedtodos[i].username = inputUser.current ? inputUser.current.value : updatedtodos[i].username;
      setTodos(updatedtodos);
    }

  };



  //------LUIS: FILTRO ---///
  const [sg, setSg] = useState("");
  const [su, setSu] = useState("");
  const [sn, setSn] = useState("");

  const filteredTodos = useMemo(() => {
    //if (!search) return todos;

    if (!sn && !su && !sg) {

      console.log("🚀 ~ sg", sg, "🚀 ~ su", su, "🚀 ~ sn", sn)
      return todos;
    } else {

      /*
      return todos.filter((ser) =>
        ser.nombre.toLowerCase().includes(sn) && ser.grupo == sg && ser.username.toLowerCase().includes(su) 
      );
      */
      return todos.filter(function check(el) {

        //el.nombre.toLowerCase().includes(sn) 
        return el.nombre.includes(sn) &&
          el.username.includes(su) &&
          //el.grupo == sg;
          el.grupo.includes(sg)

      });
    }
  }, [sg, su, sn, todos]);

  const findChangeGrupo = (event) => {
    setSg(event.target.value);
  }
  const findChangeUsuario = (event) => {
    setSu(event.target.value);
  }
  const findChangeNombre = (event) => {
    setSn(event.target.value);
  }

  //LEER EXCEL
  const [items, setItems] = useState([]);
  const readExcel = (file) => {

    const promise = new Promise((resolve, reject) => {

      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file)

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      console.log("🚀 ~ d", d)
      setItems(d);
      setIsActive(false)
    })

  };


  const uploadUsers = async () => {

    //return  new Promise((resolve, reject) => {
    const length = items.length;
    items.map(async (option, i) => {

      if (i === length - 1) {
        console.log("🚀 ~TERMINO DE PASAR POR TODO EL EXCEL",)
        //setIsActive(true)
        //chkData()
      }
      console.log("🚀 ~ username", option.username)
      const posts = await DataStore.query(Ranking, c => c.username("eq", option.username));

      if (posts.length >= 1) {
        console.log("🚀 ~ SI EXISTE USUARIO:", posts[0].username, " --- ", option.username)

        const original = await DataStore.query(Ranking, posts[0].id);
        await DataStore.save(
          Ranking.copyOf(original, updated => {
            updated.nombre = option.nombre
            updated.username = option.username
            updated.password = option.password
            updated.grupo = option.grupo
          })
        ).then((resp) => {
          console.log("🚀 ~ resp", resp)
          chkData()
        }).catch((err) => {
          console.log(err)
        }).finally(() => {
          console.log("finaly")
          setIsActive(true)
        })

      } else {
        console.log("🚀 ~ ESTE USUSARIO NO EXISTE:")

        await DataStore.save(
          new Ranking({
            "username": option.username,
            "password": option.password,
            "type": "user",
            "grupo": option.grupo,
            "puntos": 0,
            "tiempo": 0,
            "gema1": false,
            "gema2": false,
            "gema3": false,
            "bonus1": false,
            "bonus2": false,
            "bonus3": false,
            "intentos": 0,
            "status": false,
            "avatar": "",
            "nombre": option.nombre,
          })
        ).then((resp) => {
          console.log("🚀 ~ resp", resp)
          chkData()
        }).catch((err) => {
          console.log(err)
        }).finally(() => {
          console.log("finaly")
          setIsActive(true)
        })

      }
    })
    //})
  }

  //ref del input de file
  const inputRef = useRef();

  const handleClickInputFile = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };

  return (
    <>
      <div className='container admin-background'>

        <Nav titulo={'Panel Administrador:'} base={filteredTodos} btn_admin={true}></Nav>

        <div className='container'>
          <div className='row'>


            <div className='row pt-1 pb-2'>
              <div className='col-12 col-md-12 text-center '>
                <span className='btn_amarillo me-1' onClick={handleClickInputFile}><FontAwesomeIcon icon={faFileArrowDown} /> Subir Excel</span>

                <input type="file" style={{ display: 'none' }} ref={inputRef} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={(e) => {

                  //const file = e.target.files[0];

                  const file = e.target.files && e.target.files[0];
                  if (!file) {
                    return;
                  }
                  readExcel(file);
                  console.log('file is', file);

                  // 👇️ reset file input
                  e.target.value = null;

                  // 👇️ is now empty
                  console.log(e.target.files);

                  // 👇️ can still access file object here
                  console.log(file);
                  console.log(file.name);





                }} />


                <DownloadTableExcel
                  filename="Usuarios"
                  sheet="usuarios"
                  currentTableRef={tableRef.current}
                >

                  <span className='btn_amarillo me-1'><FontAwesomeIcon icon={faDownload} /> Descargar Excel</span>

                </DownloadTableExcel>


                {/* <ExcelFile element={<span className='btn_amarillo me-1'><FontAwesomeIcon icon={faDownload}/> Descargar Excel</span>} filename='Usuarios'>
                    <ExcelSheet data={filteredTodos} name='Usuarios'>
                    <ExcelColum label='# Ranking' value='ranking'/>
                    <ExcelColum label='Grupo' value='grupo'/>
                    <ExcelColum label='Usuario' value='username'/>
                    <ExcelColum label='Nombre' value='nombre'/>
                    <ExcelColum label='Password' value='password'/>
                    <ExcelColum label='Puntos' value='puntos'/>
                    <ExcelColum label='Tiempo' value='tiempo'/>
                    <ExcelColum label='Status' value='status'/>
                    </ExcelSheet>
                  </ExcelFile> */}
                <Link className='btn_amarillo' onClick={() => removeAuth('idUser')} to='/' ><FontAwesomeIcon icon={faPowerOff} /> Logout</Link>
              </div>

            </div>



            {/* <!-- COLUMNA 1--> */}
            <div className="col-md-12 admin-form mt-2" >
              <div style={{ display: isActive ? 'block' : 'none' }}>
                <div className="row" >
                  {/* <input type="text" placeholder="Search..." onChange={(e) => ProductCategoryRow(e.target.value)} /> */}
                  <div className="col-md-2 text-left">
                    Grupo: <input className='input-search' type="text" placeholder="Search..." onChange={findChangeGrupo} />
                  </div>
                  <div className="col-md-5 text-left">
                    Usuario: <input className='input-search' type="text" placeholder="Search..." onChange={findChangeUsuario} />
                  </div>
                  <div className="col-md-5 text-left">
                    Nombre: <input className='input-search' type="text" placeholder="Search..." onChange={findChangeNombre} />
                  </div>
                </div>

                <div className='table-responsive' style={{ display: isActive ? 'block' : 'none' }}>
                  <table className="table table-striped" ref={tableRef}>

                    <thead>
                      <tr>
                        <th scope="col">Rankin</th>
                        <th scope="col">Grupo</th>
                        <th className='text-left' scope="col">Usuario</th>
                        <th className='text-left' scope="col">Nombre</th>
                        <th className='text-left' scope="col">Password</th>
                        <th scope="col">Puntos</th>
                        <th scope="col">Tiempo</th>
                        <th scope="col">Status</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Borrar</th>
                      </tr>
                    </thead>
                    <tbody>

                      {

                        filteredTodos.map((option, i) => {

                          return (
                            <tr key={i + 1}>
                              <th scope="row">{i + 1}</th>
                              <td className='fs-14 c-negro'>{option.grupo}</td>
                              <td className='fs-14 c-negro text-left'>{option.isOpen ? (<input className='fs-14 c-negro w-100 input-admin' defaultValue={option.username} onKeyDown={(event) => { if (event.key === 'Enter') { updateNote(i, option.id) } }} ref={inputUser} type="text" name="textarea" />) : (<span>{option.username}</span>)}</td>
                              <td className='fs-14 c-negro py-2 text-left'>{option.isOpen ? (<input className='fs-14 c-negro w-100 input-admin' defaultValue={option.nombre} onKeyDown={(event) => { if (event.key === 'Enter') { updateNote(i, option.id) } }} ref={inputName} type="text" name="textarea" />) : (<span>{option.nombre}</span>)}</td>
                              <td className='fs-14 c-negro text-left'>{option.isOpen ? (<input className='fs-14 c-negro w-100 input-admin' defaultValue={option.password} onKeyDown={(event) => { if (event.key === 'Enter') { updateNote(i, option.id) } }} ref={inputPass} type="text" name="textarea" />) : (<span>{option.password}</span>)}</td>
                              <td className='fs-14 c-negro'>{option.puntos}</td>
                              <td className='fs-14 c-negro'>{(Math.floor(option.tiempo / 3600) < 10) ? `0${Math.floor(option.tiempo / 3600)}` : Math.floor(option.tiempo / 3600)}:{(Math.floor((option.tiempo / 60) % 60) < 10) ? `0${Math.floor((option.tiempo / 60) % 60)}` : Math.floor((option.tiempo / 60) % 60)}:{(option.tiempo % 60 < 10) ? `0${option.tiempo % 60}` : option.tiempo % 60}</td>
                              <td className='fs-14 c-negro'>{option.status} <img src={option.status === true ? Img.bien : Img.mal} alt="" width="16"></img></td>
                              <td className='fs-24 c-negro btn_icon' >{option.isOpen === true ? <span onClick={(event) => { updateNote(i, option.id); }} ><FontAwesomeIcon color='#69C096' icon={faSave} /></span> : <span onClick={(event) => { editNote(i, option.id); }} ><FontAwesomeIcon icon={faEdit} /></span>}</td>
                              <td className='fs-24 c-negro btn_icon' onClick={(event) => {
                                submitDelete(option.id)
                                //deleteNote({props:{id:option.id }}) 
                              }}><FontAwesomeIcon icon={faTrash} /></td>
                            </tr>


                          )
                        })
                      }


                    </tbody>
                  </table>
                </div>
              </div>
              <div className='table-responsive py-2' style={{ display: isActive ? 'none' : 'block' }}>
                <table className="table table-striped" >
                  <thead>
                    <tr>
                      <th scope="col">Grupo</th>
                      <th scope="col">Username</th>
                      <th scope="col">Password</th>
                      <th scope="col">Nombre</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((d, i) => (
                      <tr key={i}>
                        <th>{d.grupo}</th>
                        <td>{d.username}</td>
                        <td>{d.password}</td>
                        <td>{d.nombre}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <span className='btn_amarillo me-1 ' onClick={() => submitUpload()} ><FontAwesomeIcon icon={faUpload} /> Subir</span>
                <span className='btn_amarillo me-1 ' onClick={() => setIsActive(true)} ><FontAwesomeIcon icon={faCancel} /> Cancelar</span>
              </div>





            </div>

          </div>
        </div>


      </div>

    </>
  )
}

export default Admin