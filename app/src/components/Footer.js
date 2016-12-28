import React, { Component } from 'react';

import styles from 'styles/components/Footer.scss'

export default class Footer extends Component {
  static displayName = 'Footer';

  render(props) {
    return (
      <div className={styles.footer}>
        <h1>Footer</h1>
      </div>
    )
  }
}
