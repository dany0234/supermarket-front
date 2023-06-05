import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '.././app/hooks';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './cartSlicer';
import { Link } from 'react-router-dom';

export function Cart() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div style={{width:"335px",backgroundColor:" #227e47", position:"fixed", top:0, bottom:0,left:0,maxWidth: "335px",padding:"10px",overflowY: 'auto',whiteSpace: 'pre-wrap',wordWrap: 'break-word'}}>
      <div>
      <LocalGroceryStoreIcon/><h3>Cart</h3> 
   <div style={{backgroundColor:"#FFFF",height:"800px",borderRadius:'7px'}}>
    ddsada
   </div>
   <button className="button" style={{ backgroundColor: "white", color: "black", border: "none", padding: "2px 20px",marginTop:"19px", borderRadius: "4px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", transition: "background-color 0.3s" }}>
            <Link to="checkout" style={{ textDecoration: "none", color:"black"}}><div>Checkout</div><ShoppingCartCheckoutIcon/></Link></button>
      </div>
    </div>
  );
}

