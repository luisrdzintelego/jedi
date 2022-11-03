import React from 'react'
import { useState } from "react";
import {VarContext} from './VarContext'

export const CustomVarContext = ({children}) => {

	const [Nombre, setNombre] = useState ("Javier Hernandez")
	const [Avatar, setAvatar] = useState ("")
	const [Ranking, setRanking] = useState (0)

	const [Puntos, setPuntos] = useState (0)
	const [Tiempo, setTiempo] = useState (0)

	const [TotalPuntos, setTotalPuntos] = useState (1000)

	const [PuntosEval1, setPuntosEval1] = useState (0)
	const [PuntosEval2, setPuntosEval2] = useState (0)
	const [PuntosEval3, setPuntosEval3] = useState (0)

	const [TiempoEval1, setTiempoEval1] = useState (0)
	const [TiempoEval2, setTiempoEval2] = useState (0)
	const [TiempoEval3, setTiempoEval3] = useState (0)

	const [Joya1, setJoya1] = useState (false)
	const [Joya2, setJoya2] = useState (false)
	const [Joya3, setJoya3] = useState (false)

	const [Bonus, setBonus] = useState (false)

	const [Bonus1, setBonus1] = useState (false)
	const [Bonus2, setBonus2] = useState (false)
	const [Bonus3, setBonus3] = useState (false)

	const [Counter, setCounter] = useState (0)
	const [IniTiempo, setIniTiempo] = useState (true)

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
		setBonus(false)
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
		Nombre,setNombre,
		Avatar,setAvatar,
		Ranking,setRanking,
		Puntos,setPuntos,
		TotalPuntos,setTotalPuntos,
		Tiempo,setTiempo,
		PuntosEval1,setPuntosEval1,
		PuntosEval2,setPuntosEval2,
		PuntosEval3,setPuntosEval3,
		TiempoEval1,setTiempoEval1,
		TiempoEval2,setTiempoEval2,
		TiempoEval3,setTiempoEval3,
		Joya1,setJoya1,
		Joya2,setJoya2,
		Joya3,setJoya3,
		Bonus,setBonus,
		Bonus1,setBonus1,
		Bonus2,setBonus2,
		Bonus3,setBonus3,
		Counter,setCounter,
		IniTiempo,setIniTiempo,
		resetAll,
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