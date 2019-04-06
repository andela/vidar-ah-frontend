import React from 'react';
import styles from './headerText.scss';

export default function HeaderText(props) {
  const { textHeader, textBody } = props;
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>{textHeader}</h2>
      <p className={styles.body}>{textBody}</p>
    </section>
  );
}
