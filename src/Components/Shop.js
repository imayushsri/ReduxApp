import React from 'react'
import { useDispatch /*, useSelector*/} from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from "../state/index"

const Shop = () => {
  // let balance = useSelector(state => state.amount)
  const dispatch = useDispatch();
  // const actions = bindActionCreators(actionCreators, dispatch);
  const {depositeMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
        <h4 className='my-3'>Deposite/Withdraw Money</h4>
      {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositeMoney(100))}}>+</button> */}
      <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
      Update Balance{/* ({balance}) */}
      <button className="btn btn-primary mx-2" onClick={()=>{depositeMoney(100)}}>+</button>
    </div>
  )
}

export default Shop
