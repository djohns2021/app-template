import React, { Component } from 'react';

import styles from 'styles/components/Header.scss';

export default class Header extends Component {
  static displayName = 'Header';

  render(props) {
    return (
      <div id='Header' className={styles.header}>
        <h1>Header</h1>
      </div>
    )
  }
}
