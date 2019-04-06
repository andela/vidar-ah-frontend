import React from 'react';
import styles from './summaryCard.scss';
import articleImg from '../../assets/images/wall.jpg';
import icon from '../../assets/images/user.svg';

export default function summaryCard() {
  return (
    <div className={styles.outline}>
      <section className={styles.image}>
        <img alt="Article" src={articleImg} />
      </section>
      <section>
        <p className={styles.body}>From grass to grace; my story</p>
        <div className={styles.footer}>
          <img alt="User icon" src={icon} />
          <p className={styles.ftext}>Jide Ayinla</p>
          <p className={styles.ftext}>2 days ago</p>
        </div>
      </section>
    </div>
  );
}
