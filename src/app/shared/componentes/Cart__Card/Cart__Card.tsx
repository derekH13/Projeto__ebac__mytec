import { useContext, useEffect, useState } from 'react'
import '../../../../styles/styles.css'
import AppContext from '../../contexts/AppContext'
import { Util } from '../../../Util/Util'

type props = {
    title: string,
    imagem: string,
    price: number
    id: number
}


function Cart__Card({title, imagem, price, id}: props){
let result: props[]

const {carrinho, setCarrinho} = useContext(AppContext)
 
 







}

export default Cart__Card