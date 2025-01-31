import React, { useContext } from 'react';
//v2025-01
import { VarContext } from '../Context/VarContext';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

import './Nav.css';

import Logo_femsa from "../Img/femsa/logo_femsa_bco.png"
import Logo_universidad from "../Img/femsa/logo_universidad.png"

const Nav = ({ titulo, btn_admin, btn_dash, curso }) => {

	const [CookieId, setCookieId] = useCookies(['idUser']);
	const GConText = useContext(VarContext);

	const removeAuth = (name) => {
		setCookieId(name, '', { path: '/', expires: (new Date(Date.now())) });
	};

	return (
		<>
			<div className="container Nav-bar" >
				<div className="row">
					<div style={{ display: btn_admin === true ? 'block' : 'none' }} className="col-12">
						<div className="row hr" style={{ padding: '10px' }}>

							<div className="col-6 col-md-6 text-left">
								<img src={Logo_femsa} alt="" className='logo'></img>
							</div>
							<div className="col-6 col-md-6 text-right">
								<img src={Logo_universidad} alt="" className='logo_universidad'></img>
							</div>

						</div>
					</div>

					<div style={{ display: curso === true ? 'block' : 'none' }} className={`col-12 col-md-12 text-left`}>

						<div className="row" style={{ padding: '15px' }}>

						<div className="col-3 col-md-3 text-left">
								<img src={Logo_femsa} alt="" className='logo'></img>
							</div>

							<div className={`col-6 col-md-6 text-center`}>
								<Link className='btn_amarillo' onClick={() => removeAuth('idUser')} to='/' ><FontAwesomeIcon icon={faPowerOff} /> Logout</Link>
							</div>

							<div className="col-3 col-md-3 text-right">
								<img src={Logo_universidad} alt="" className='logo_universidad'></img>
							</div>


						</div>
					</div>


					<div style={{ display: GConText.pruebas === true ? 'block' : 'none' }} className={`col-12 col-md-12 text-left`}>

						<div className="row hr" style={{ padding: '10px' }}>

							<div className={`d-none d-sm-block col-2 col-md-2 text-left`}>
								<h1 className='status  c-blanco'>{GConText.status ? '🟢 Completado' : '🟣 Cursando'}</h1>
							</div>

							<div className={`d-none d-sm-block col-10 col-md-10 text-left`}>
								<h2 className='bookmark c-blanco'>Nombre: {GConText.username}, ID: {GConText.userId} - BOOKMARK: {GConText.bookmark} - STATUS: {GConText.status === true ? 'true' : 'false'}</h2>
							</div>

						</div>
					</div>



				</div>
			</div>

			{/* <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-xl">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Ayuda</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body" style={{ backgroundColor: '#000000' }}>
							<img className='img-fluid' src={Ayuda_img} width="800" alt=""></img>
						</div>
					</div>
				</div>
			</div> */}

		</>
	)
}

export default Nav