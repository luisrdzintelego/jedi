import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

import Logo_oxxo from "../Img/logo_oxxo.png"
import Logo_aca from "../Img/logo_aca.png"

const Nav_admin = ({titulo}) => {
  return (
	<>
		<div className="container Nav-bar" >
			<div className="row flex">
				<div className="col-10 col-md-11 col-xs-11">
					<div className="row hr" style={{ padding: '10px'}}>
						<div className="col-2 col-md-2 text-left ">
							<img src={Logo_oxxo} alt="" width="80"></img>
						</div>
						<div className="col-6 col-md-5 text-left ">
							<span className='titulo'>{titulo}</span>
						</div>

						<div className="col-4 col-md-5 text-right ">
							<span className='btn_amarillo me-1 '>Excel</span>
							<span className='btn_amarillo me-1 '>Agregar</span>
							<Link className='btn_amarillo' to="/login">X cerrar</Link>
						</div>

					</div>
				</div>
				
				<div className="col-2 col-md-1 col-xs-1">
				<img src={Logo_aca} alt="" width="50"></img>
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

export default Nav_admin