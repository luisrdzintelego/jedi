import React, {  } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { faQuestion} from '@fortawesome/free-solid-svg-icons'
import { faFileArrowDown} from '@fortawesome/free-solid-svg-icons'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import { faTimes} from '@fortawesome/free-solid-svg-icons'

import './Nav.css';

import Logo_oxxo from "../Img/logo_oxxo.png"
import Logo_aca from "../Img/logo_aca.png"

import Ayuda_img from "../Img/img_ayuda_pg.png"

const Nav = ({titulo,btn_admin,btn_dash}) => {
  return (
	<>
		<div className="container Nav-bar" >
			<div className="row">
				<div className="col-10 col-md-11 col-xs-11">
					<div className="row hr" style={{ padding: '10px'}}>

						<div className="col-3 col-md-2 text-left ">
							<img src={Logo_oxxo} alt="" width="80"></img>
						</div>
						
						<div className="col-9 col-md-4 text-left ">
							<span className='titulo'>{titulo}</span>
						</div>

						<div style={{display: btn_dash === true ? 'block' : 'none' }} className="col-12 col-md-6 text-right ">
							<span className='btn_amarillo me-1' data-bs-toggle="modal" data-bs-target="#exampleModal"><FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>&nbsp; Ayuda</span>
							<Link className='btn_amarillo me-1' to="/ranking"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>&nbsp; Ranking</Link>
						</div>

						<div style={{display: btn_admin === true ? 'block' : 'none' }}  className="col-12 col-md-6 text-right ">
							<span className='btn_amarillo me-1 '><FontAwesomeIcon icon={faFileArrowDown}></FontAwesomeIcon>&nbsp; Excel</span>
							<span className='btn_amarillo me-1 '><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>&nbsp; Agregar</span>
							<Link className='btn_amarillo' to="/login"><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>&nbsp; Cerrar</Link>
						</div>

						
					</div>
				</div>
				
				<div className="col-2 col-md-1 col-xs-1">
				<img src={Logo_aca} alt="" width="50"></img>
				</div>				
			</div>
		</div>
		

		<div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-xl">
					<div className="modal-content">
						<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">Ayuda</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body" style={{backgroundColor: '#000000' }}>
							<img className='img-fluid' src={Ayuda_img} width="800" alt=""></img>
						</div>
					</div>
				</div>
			</div>


		{/* <div className="row justify-content-center align-items-center g-2">
			<div className="col"></div>
			<div className="col">Column</div>
			<div className="col"></div>
		</div>	 */}
	</>
  )
}

export default Nav