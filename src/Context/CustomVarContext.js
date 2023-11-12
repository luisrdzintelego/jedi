import React from 'react'
import { useState } from "react";
import {VarContext} from './VarContext'

export const CustomVarContext = ({children}) => {


	const iniBase = [
		{
			Nombre: 'Learner OXXO',
			User: 'OLearner',
			Avatar: '',
			Tiempo: 0,
			Puntos: 0,
		  },
		{
			Nombre: 'Maria Guadalupe Contreras Guzman',
			User: 'Mcontreras',
			Avatar: '/static/media/avatar3_tumb.9173397e87a7c41e640f.png',
			Tiempo: 34,
			Puntos: 130,
		  },
		  {
			Nombre: 'Alexa Rodriguez',
			User: 'ARodriguez',
			Avatar: '/static/media/avatar3_tumb.9173397e87a7c41e640f.png',
			Tiempo: 10,
			Puntos: 330,
		  },

		  {
			Nombre: 'Marina Lizette Rodriguez',
			User: 'Mrodriguez',
			Avatar: '/static/media/avatar3_tumb.9173397e87a7c41e640f.png',
			Tiempo: 50,
			Puntos: 330,
		  },

		  {
			Nombre: 'Ximena Guadalupe Rodriguez Contreras',
			User: 'Xcontreras',
			Avatar: '/static/media/avatar3_tumb.9173397e87a7c41e640f.png',
			Tiempo: 20,
			Puntos: 200,
		  },
		  {
			Nombre: 'Romina Rodriguez Contreras',
			User: 'Rcontreras',
			Avatar: '/static/media/avatar3_tumb.9173397e87a7c41e640f.png',
			Tiempo: 15,
			Puntos: 330,
		  },
		  {
			Nombre: 'Luis Eduardo Rodriguez Garcia',
			User: 'Lrodriguez',
			Avatar: '/static/media/avatar3_tumb.9173397e87a7c41e640f.png',
			Tiempo: 20,
			Puntos: 380,
		  },
		  {
			Nombre: 'Ernesto Contreras',
			User: 'Econtreras',
			Avatar: '/static/media/avatar3_tumb.9173397e87a7c41e640f.png',
			Tiempo: 30,
			Puntos: 380,
		  },
		  
	]
	
	const [Base, setBase] = useState(() => iniBase)

	//VARIABLES DEL JUEGO
	const [TotalAvance, setTotalAvance] = useState (10)
	const [ConteoAvance, setConteoAvance] = useState (0)

	const [Version, setVersion] = useState ('1.47 Jedi')
	//----

	//DATOA DE SE LLENAN DE LA BASE
	const [UserId, setUserId] = useState ('')
	const [Username, setUsername] = useState ('')
	const [Password, setPassword] = useState ('')
	const [Nombre, setNombre] = useState ('')
	const [Grupo, setGrupo] = useState ('')
	const [Type, setType] = useState ('')

	const [Avatar, setAvatar] = useState ('')
	const [Puntos, setPuntos] = useState (0)
	const [Tiempo, setTiempo] = useState (0)

	const [Joya1, setJoya1] = useState (false)
	const [Joya2, setJoya2] = useState (false)
	const [Joya3, setJoya3] = useState (false)
	const [Bonus1, setBonus1] = useState (false)
	const [Bonus2, setBonus2] = useState (false)
	const [Bonus3, setBonus3] = useState (false)

	const [Status, setStatus] = useState (false)
	const [Intentos, setIntentos] = useState (0)
	
	const [Ranking, setRanking] = useState (0)
	//----

	// DATOS DE EL JUEGO PERO NO VAN A LA ABSE
	const [PuntosEval1, setPuntosEval1] = useState (0)
	const [PuntosEval2, setPuntosEval2] = useState (0)
	const [PuntosEval3, setPuntosEval3] = useState (0)
	const [TiempoEval1, setTiempoEval1] = useState (0)
	const [TiempoEval2, setTiempoEval2] = useState (0)
	const [TiempoEval3, setTiempoEval3] = useState (0)
	///----

	const [Bonus, setBonus] = useState (false)
	const [Counter, setCounter] = useState (0)



    //console.log("🚀 ~ UrlImg", UrlImg)

	const [productosCart, setProductosCart] = useState ([])

	/*
	const resetAll2 = (var1) => {
		setNombre(var1)
		console.log("🚀 ~ Nombre", var1)
	}
	*/

	const resetAll = () => {
		setPuntos(0)
		setTiempo(0)
		//setBonus(false)
		setPuntosEval1(0)
		setPuntosEval2(0)
		setPuntosEval3(0)
		setTiempoEval1(0)
		setTiempoEval2(0)
		setTiempoEval3(0)
		setJoya1(false)
		setJoya2(false)
		setJoya3(false)
		setBonus1(false)
		setBonus2(false)
		setBonus3(false)
		//pone el conteo del avancer en 0
		setConteoAvance(0)

		console.log("🚀 ~ resetAll")
	}

	

	const addItem = (id,nombre,precio,img,cantidad) => {

		if (!isInCart(id)) {
			const Item = {
				//item:{//},
				id, nombre, precio, img, cantidad
			}
			setProductosCart([...productosCart, Item])
        } else {

			setProductosCart( productosCart.map(prod => (prod.id === id ? {...prod, cantidad: (prod.cantidad+cantidad)}: prod)))

		}

	}
	
	const removeItem = (itemId) => {
		setProductosCart( productosCart.filter((producto) => producto.id !== itemId) )
	}

	const vaciarCart = () => {
		setProductosCart([])
	}

    const cantidadCart = () => {
		return productosCart.reduce((acc, prod) => acc + prod.cantidad, 0)
	}
  
	const totalCart = () => {
		return productosCart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
	}

    const isInCart = (id) => {
		return productosCart.some((prod) => prod.id === id)
	}

	const sumarItem = (id) => {
		setProductosCart( productosCart.map(prod => (prod.id === id ? {...prod, cantidad: (prod.cantidad+1)}: prod)))
	}

	const restarItem = (id) => {
		setProductosCart( productosCart.map(prod => (prod.id === id ? {...prod, cantidad: (prod.cantidad-1)}: prod)))
	}

  return (
	<VarContext.Provider value={{
		//--
		TotalAvance,setTotalAvance,ConteoAvance,setConteoAvance,
		//--
		UserId,setUserId,
		Username,setUsername,
		Password,setPassword,
		Nombre,setNombre,
		Grupo,setGrupo,
		Type,setType,
		Version,setVersion,

		Avatar,setAvatar,
		Puntos,setPuntos,
		Tiempo,setTiempo,
		Joya1,setJoya1,
		Joya2,setJoya2,
		Joya3,setJoya3,
		Bonus1,setBonus1,
		Bonus2,setBonus2,
		Bonus3,setBonus3,
		Intentos,setIntentos,
		Status,setStatus,
		Ranking,setRanking,
		resetAll,
		//TEST-
		Base,setBase,
		//--NO SE USAN
		Bonus,setBonus,
		PuntosEval1,setPuntosEval1,
		PuntosEval2,setPuntosEval2,
		PuntosEval3,setPuntosEval3,
		TiempoEval1,setTiempoEval1,
		TiempoEval2,setTiempoEval2,
		TiempoEval3,setTiempoEval3,
		Counter,setCounter,
		//NOSE USAN
		productosCart, 
		addItem, 
		removeItem, 
		vaciarCart, 
		isInCart, 
		totalCart, 
		cantidadCart, 
		restarItem, 
		sumarItem  }}>
		{children}
	</VarContext.Provider>
  )
}
