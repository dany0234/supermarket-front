import React, { useState,useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { Cart } from '../ccart/Cart';
import {
} from '../ccart/cartSlicer';
import { Navbar } from '../features/navbar/Navbar';
import SearchAppBar from '../searchAppBar/SearchAppBar';
import AutoPlaySwipeableViewsSlicer from '../swipeRecommandedViews/AutoPlaySwipeableViewsSlicer';
import './shopMain.css'; // Import the CSS file
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync, selectProducts } from './shopMainSlicer';





export function ShopMain() {




  return (
    <div>
      <div style={{ backgroundColor: '#d4f1c5', marginLeft: '355px', position: 'fixed', right: 0, left: 0, top: 90, bottom: 0, padding: '10px', overflowX: 'hidden', overflowY: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
      <SearchAppBar />
      <Cart></Cart>
        MainShop
        {/* <AutoPlaySwipeableViewsSlicer></AutoPlaySwipeableViewsSlicer> */}
        <div className="card" style={{backgroundColor:"Window",marginBottom:"10px"}}> 
          <img src="product-image.jpg" alt="Product Image" className="product-image" /> 
          <div className="product-description">   
            <p className="product-name">Product Name</p> 
            <p className="product-price">$10.99</p> 
          </div>
          <div className="quantity-controls"> 
            <button className="minus-btn">-</button> 
            <span className="quantity">1</span> 
            <button className="plus-btn">+</button> 
            <button style={{marginLeft:"10px"}} className="buy-btn"><AddShoppingCartIcon fontSize="small" /></button> 
          </div>
        </div>
        <div className="card" style={{backgroundColor:"Window",marginBottom:"10px"}}> 
          <img src="product-image.jpg" alt="Product Image" className="product-image" /> 
          <div className="product-description">   
            <p className="product-name">Product Name</p> 
            <p className="product-price">$10.99</p> 
          </div>
          <div className="quantity-controls"> 
            <button className="minus-btn">-</button> 
            <span className="quantity">1</span> 
            <button className="plus-btn">+</button> 
            <button style={{marginLeft:"10px"}} className="buy-btn">Buy</button> 
          </div>
        </div>
        <div className="card" style={{backgroundColor:"Window",marginBottom:"10px"}}> 
          <img src="product-image.jpg" alt="Product Image" className="product-image" /> 
          <div className="product-description">   
            <p className="product-name">Product Name</p> 
            <p className="product-price">$10.99</p> 
          </div>
          <div className="quantity-controls"> 
            <button className="minus-btn">-</button> 
            <span className="quantity">1</span> 
            <button className="plus-btn">+</button> 
            <button style={{marginLeft:"10px"}} className="buy-btn">Buy</button> 
          </div>
        </div>
        <div className="card" style={{backgroundColor:"Window",marginBottom:"10px"}}> 
          <img src="product-image.jpg" alt="Product Image" className="product-image" /> 
          <div className="product-description">   
            <p className="product-name">Product Name</p> 
            <p className="product-price">$10.99</p> 
          </div>
          <div className="quantity-controls"> 
            <button className="minus-btn">-</button> 
            <span className="quantity">1</span> 
            <button className="plus-btn">+</button> 
            <button style={{marginLeft:"10px"}} className="buy-btn">Buy</button> 
          </div>
        </div>
        <div className="card" style={{backgroundColor:"Window",marginBottom:"10px"}}> 
          <img src="product-image.jpg" alt="Product Image" className="product-image" /> 
          <div className="product-description">   
            <p className="product-name">Product Name</p> 
            <p className="product-price">$10.99</p> 
          </div>
          <div className="quantity-controls"> 
            <button className="minus-btn">-</button> 
            <span className="quantity">1</span> 
            <button className="plus-btn">+</button> 
            <button style={{marginLeft:"10px"}} className="buy-btn">Buy</button> 
          </div>
        </div>
        <div className="card" style={{backgroundColor:"Window",marginBottom:"10px"}}> 
          <img src="product-image.jpg" alt="Product Image" className="product-image" /> 
          <div className="product-description">   
            <p className="product-name">Product Name</p> 
            <p className="product-price">$10.99</p> 
          </div>
          <div className="quantity-controls"> 
            <button className="minus-btn">-</button> 
            <span className="quantity">1</span> 
            <button className="plus-btn">+</button> 
            <button style={{marginLeft:"10px"}} className="buy-btn">Buy</button> 
          </div>
        </div>
                <div className="card" style={{backgroundColor:"Window",marginBottom:"10px"}}> 
          <img src="product-image.jpg" alt="Product Image" className="product-image" /> 
          <div className="product-description">   
            <p className="product-name">Product Name</p> 
            <p className="product-price">$10.99</p> 
          </div>
          <div className="quantity-controls"> 
            <button className="minus-btn">-</button> 
            <span className="quantity">1</span> 
            <button className="plus-btn">+</button> 
            <button style={{marginLeft:"10px"}} className="buy-btn">Buy</button> 
          </div>
        </div>
        
      </div>
    </div>
  );
}
