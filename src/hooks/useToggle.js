import { useDispatch, useSelector } from "react-redux"
import { update } from "../redux/slices/componentSlice"


const useToggle = ()=>{

    const dispatch = useDispatch()
    const shopList = useSelector(state => state.componentReducer.shopList)
    const itemAdder = useSelector(state => state.componentReducer.itemAdder)
    const menu = useSelector(state => state.componentReducer.menu)

    const toggleList = () =>{
        dispatch(update({shopList:!shopList}))
        dispatch(update({itemAdder:false}))
        console.log(shopList)
    }

    const toggleAdder = () =>{
        dispatch(update({itemAdder:!itemAdder}))
        dispatch(update({shopList:false}))
        console.log(itemAdder)
    }

    const toggleMenu = (arg = !menu)=>{
        dispatch(update({menu: arg}))
    }

    return {toggleList, toggleAdder, toggleMenu}


}

export default useToggle