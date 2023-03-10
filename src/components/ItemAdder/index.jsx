import React, { useState } from 'react'
import onInput from '../../helpers/onInput'
import { useSetProductMutation } from '../../redux/api/productApi'
import useToggle from '../../hooks/useToggle'
import './ItemAdder.css'
import { useNavigate } from 'react-router-dom'

export const ItemAdd = () => {
    const { toggleAdder } = useToggle()
    const [productState, setProductState] = useState({})
    const [ setProduct ] = useSetProductMutation()
    const navigate = useNavigate()
  

    return (
        <div className="AddItem">
            <h3>Add new product</h3>
            <label htmlFor="">Name</label>
            <input value={productState.name} name="name" onChange={onInput(setProductState)} type="text" placeholder='Enter a name' />
            <label htmlFor="">Note (optional)</label>
            <input value={productState.note} name="note" onChange={onInput(setProductState)} type="text" placeholder='Enter a note' />
            <label htmlFor="">Image (optional)</label>
            <input value={productState.image} name="image" onChange={onInput(setProductState)} type="text" placeholder='Enter a url' />
            <label htmlFor="">Category</label>
            <input value={productState.category} name="category" onChange={onInput(setProductState)} type="text" placeholder='Enter a category or choose one below' />

            <div className="add-controller">
            <button onClick={toggleAdder} className='add-cancel'>Cancel</button>
            <button onClick={()=>{setProduct(productState).then(()=>setProductState({name: '', note: '', image: '', category: ''})); navigate(''); toggleAdder()}} className='add-save'>Save</button>
            </div>
        </div>
    )
}
