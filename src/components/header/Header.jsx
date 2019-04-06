import React from 'react';
import Button from '../buttons/Button';
import HeaderText from '../headerText/HeaderText';
import styles from './header.scss';


export default function Header() {
  return (
    <section>
      <div className={styles.container}>
        <HeaderText textHeader="All your thoughts in one place" textBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" />
        <div className={styles.button}>
          <Button buttonName="Get Started" />
          <Button buttonName="Explore" />
        </div>
      </div>
    </section>
  );
}
