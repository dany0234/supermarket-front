import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Cart } from '../ccart/Cart';
import SearchAppBar from '../searchAppBar/SearchAppBar';
import './shopMain.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { fetchProductsAsync, selectProducts } from './shopMainSlicer';
import { addToCart } from '../ccart/cartSlicer';
import { Product } from '../shopMain/shopMainSlicer';
import { ThunkDispatch } from 'redux-thunk';

export function ShopMain() {
  const dispatch: ThunkDispatch<any, any, any> = useDispatch();
  const products = useSelector(selectProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantities, setQuantities] = useState<{ [productId: number]: number }>({});
  const [cartVisible, setCartVisible] = useState(false);
  const isLoading = useSelector((state: any) => state.shopMain.loading);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      const defaultQuantities = products.reduce(
        (acc, product) => ({ ...acc, [product.id]: 1 }),
        {}
      );
      setQuantities(defaultQuantities);
    }
  }, [products]);

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
    if (quantities[product.id] > 0) {
      dispatch(addToCart({ product, quantity: quantities[product.id] }));
    }
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
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              products.map((product) => (
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
                      disabled={!quantities[product.id]}
                    >
                      -
                    </button>
                    <span className="quantity">{quantities[product.id] || 1}</span>
                    <button
                      className="plus-btn"
                      onClick={() => handleIncrement(product.id)}
                      disabled={!quantities[product.id]}
                    >
                      +
                    </button>
                    <button
                      className="buy-btn"
                      onClick={() => handleBuyButtonClick(product)}
                      disabled={!quantities[product.id]}
                    >
                      <AddShoppingCartIcon fontSize="small" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
