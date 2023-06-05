import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './navbarSlicer';
import styles from './Counter.module.css';


export function Navbar() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div  style={{paddingBottom:'43px'}} className={styles.navbarContainer}>
      <div className={styles.row}>

        <div className={styles.rightButtons}>
        <button className={styles.button} onClick={() => console.log('Sign In / Register clicked')}>
            Sign In / Register
          </button>
          <br/>
          <button className={styles.button} onClick={() => console.log('Categories clicked')}>
            Categories
          </button>
        </div>
      </div>
    </div>
  );
}
// the navbar expants depending on what's in it need to fix so no matter what i try to fix the text/buttons will ajust not the navbar!