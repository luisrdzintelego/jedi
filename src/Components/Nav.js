/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import './Nav.css';

import Logo_oxxo from "../Img/logo_oxxo.png"
import Logo_aca from "../Img/logo_aca.png"

const Nav = ({titulo}) => {
  return (
	<>
		<div className="container Nav-bar" >
			<div className="row">
				<div className="col-10 col-md-11 col-xs-11">
					<div className="row hr" style={{ padding: '10px'}}>
						<div className="col-4 col-md-2 text-left">
							<img src={Logo_oxxo} width="80"></img>
						</div>
							<div className="col-8 col-md-10 text-left">
							<span className='titulo'>{titulo}</span>
						</div>
					</div>
				</div>
				
				<div className="col-2 col-md-1 col-xs-1">
				<img src={Logo_aca} width="50"></img>
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