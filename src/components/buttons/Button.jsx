import React from 'react';
import styles from './button.scss';

export default function Button(props) {
  const { buttonName } = props;
  return (
    <div>
      <button className={styles.button}>
        {' '}
        {buttonName}
        {' '}
      </button>
    </div>
  );
}
