import React, { } from 'react';
import { Link } from 'react-router-dom';

import './Primer_reto.css';

import * as Img from '../Components/Imagenes'
import Nav from '../Components/Nav'

const Primer_reto = () => {

	//const GConText = useContext(VarContext);

	return (
		<>
			<div className="container primer-background">

				<Nav titulo={"Primer Reto"}></Nav>

				<div className="container mt-3">
					<div className="row mx-1">
						<div className="col-md-5 mb-5 text-left">

							<img className='img-fluid' src={Img.titulo_curso} alt="" width="250"></img>

						</div>

						<div className="col-md-7 primer-form mb-5">

							<div className="mb-3">
								<img src={Img.joya_reto1} alt="" width="110"></img>
							</div>

							<div className="mb-3">
								<div className="row mt-1">
									<div className="col-md-12">
										<h2 className='fs-18 lh-25 c-negro text-left'>Tu primer reto será obtener el <b>Rubí</b>, esta Gema se ha extraviado en alguno de los rincones de la Oficina de Servicio de OXXO.</h2><br></br>
										<h2 className=' fs-18 lh-25 c-negro text-left'>Se dice que aquellos que la han encontrando, han descubierto en su interior los <b>principios y valores Agile</b> y su gran poder los ha llevado a <b>cambiar su mentalidad para ser más ágiles</b>.</h2>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-12 col-md-12">
									<div className="my-4">
										{/* <Link className='btn_default mx-1 px-5' to="/quiz1" onClick={() => {
                                		GConText.setIniTiempo(true);
										}}> Iniciar </Link> */}
										<Link className='btn_negro mx-1 px-5' to="/quiz1" >Iniciar Reto</Link>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Primer_reto