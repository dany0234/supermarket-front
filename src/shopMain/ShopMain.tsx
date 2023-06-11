import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { Cart } from '../ccart/Cart';
import SearchAppBar from '../searchAppBar/SearchAppBar';
import AutoPlaySwipeableViewsSlicer from '../swipeRecommandedViews/AutoPlaySwipeableViewsSlicer';
import './shopMain.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { fetchProductsAsync, selectProducts } from './shopMainSlicer';
import { RootState } from '../app/store';
import { addToCart } from '../ccart/cartSlicer';
import { Product } from '../shopMain/shopMainSlicer';


export function ShopMain() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantities, setQuantities] = useState<{ [productId: number]: number }>({});
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      console.log('Adding to cart:', selectedProduct);
      dispatch(addToCart({ product: selectedProduct, quantity: quantities[selectedProduct.id] || 1 }));
    }
  }, [selectedProduct, dispatch, quantities]);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  // const handleAddToCart = () => {
  //   console.log(selectedProduct);
  //   if (selectedProduct) {
  //     console.log('Adding to cart:', selectedProduct);
  //     dispatch(addToCart({ product: selectedProduct, quantity: quantities[selectedProduct.id] || 1 }));
  //   }
  // };

  const handleIncrement = (productId: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId: number) => {
    if (quantities[productId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] - 1,
      }));
    }
  };

  const handleToggleCart = () => {
    setCartVisible((prevVisible) => !prevVisible);
  };

  const handleBuyButtonClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: '#d4f1c5',
          marginLeft: '355px',
          position: 'fixed',
          right: 0,
          left: 0,
          top: 90,
          bottom: 0,
          padding: '10px',
          overflowX: 'hidden',
          overflowY: 'auto',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
        }}
      >
        <div className="shop-main-container">
          <SearchAppBar />
          <button className="cart-icon" onClick={handleToggleCart}>
            <AddShoppingCartIcon fontSize="large" />
          </button>
          {cartVisible && <Cart products={products} quantities={quantities} />}
          <div className="product-list">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt="Product Image" className="product-image" />
                <div className="product-description">
                  <p className="product-name">{product.name}</p>
                  <p className="product-price">${product.price}</p>
                </div>
                <div className="quantity-controls">
                  <button
                    className="minus-btn"
                    onClick={() => handleDecrement(product.id)}
                  >
                    -
                  </button>
                  <span className="quantity">{quantities[product.id] || 1}</span>
                  <button
                    className="plus-btn"
                    onClick={() => handleIncrement(product.id)}
                  >
                    +
                  </button>
                  <button
                    className="buy-btn"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <AddShoppingCartIcon fontSize="small" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
