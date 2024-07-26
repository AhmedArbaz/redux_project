import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from '../state/index' //index may sary action-creator export kiay thy yaha import karny say use kar sakty hian 


const Shop = () => {
  const dispatch = useDispatch()
  
  // 1st way dispatch ko onclick may use kia aus may actionCreator. actionCreator ka name function ka aur arg dia kam ho gaya   onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}   aitna lamba ho raha hay 

  // 2nd way jis may bindActionCreators use karin gay Q kay abhi jo kia hay vo thora complicated ho gaya hay 
  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch); //ais may automatically a jaty hain saray actions

  // ya destructring kar lia hay
  return (
    <div>
        <h2>Deposit/Widthdraw Money</h2>
      
      {/* without bindActionCreators method  */}

      {/* <button className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}> - </button> */}
      {/* jab bhi argumnet hoty hain function may to arrow function use karty hain  */}
      {/* update Balance
      <button className='btn btn-primary mx-2'onClick={()=>{dispatch(actionCreators.depositMoney(100))}}> + </button> */}



        {/* with bindActionCreators */}
        
      <button className='btn btn-primary mx-2' onClick={()=>{withdrawMoney(100)}}> - </button>
      {/* jab bhi argumnet hoty hain function may to arrow function use karty hain  */}
      update Balance
      <button className='btn btn-primary mx-2'onClick={()=>{depositMoney(100)}}> + </button>
    </div>
  )
}

export default Shop
