
import React from 'react';
import styles from './MessageBox.module.css';

const MessageBox = ({ type, children }) => {
  return <div className={styles[type]}>{children}</div>;
};

export default MessageBox;
