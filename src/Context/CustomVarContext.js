import React from 'react'
import { useState } from "react";
import {VarContext} from './VarContext'

export const CustomVarContext = ({children}) => {

	const [Nombre, setNombre] = useState ("")
	const [UrlImg, setUrlImg] = useState ("")
	const [Ciudad, setCiudad] = useState ("")
	const [Pais, setPais] = useState ("")
	const [Region, setRegion] = useState ("")
    //console.log("🚀 ~ UrlImg", UrlImg)

	const [productosCart, setProductosCart] = useState ([])

	const addImg = (url) => {
		setUrlImg(url)
		console.log("🚀 ~ url", url)
	}

	const addCiudad = (var1) => {
		setCiudad(var1)
		console.log("🚀 ~ Ciudad", var1)
	}

	const addPais = (var1) => {
		setPais(var1)
		console.log("🚀 ~ Pais", var1)
	}

	const addRegion = (var1) => {
		setRegion(var1)
		console.log("🚀 ~ Region", var1)
	}

	const addNombre = (var1) => {
		setNombre(var1)
		console.log("🚀 ~ nombre", var1)
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
		addCiudad, 
		Ciudad, 
		addPais, 
		Pais, 
		addRegion, 
		Region, 
		addNombre, 
		Nombre, 
		addImg, 
		UrlImg, 
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
