import React from 'react'
import './ShopListMaker.css'
import { ReactComponent as Bottle } from '../../assets/bottle.svg'
import useToggle from '../../hooks/useToggle'

export const ShopListMaker = () => {

  const { toggleAdder, toggleList } = useToggle()

    return (
        <div className='ItemAdder'>
            <div className="list-container">
                <div className="add-item-bottle-wrapper">
                <Bottle className='bottle-logo'></Bottle>
                    <div className="add-item-bottle">
                    
                    <p>
                    Didn’t find what you need?
                    </p>
                    <button onClick={()=>{
                      toggleAdder()
                    
                    }} className='add-item-btn'>Add Item</button>
                    </div>
                </div>

            </div>
            <div className="list-name">
                <input type="text" placeholder='Enter a name' />
                <button className='list-save-button'>Save</button>
            </div>
        </div>
    )
}
