import React, { Component } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Body from 'components/Body';

import styles from "styles/style.scss";

type props = {
  genericAction1: () => {},
  genericAction2: () => {},
  genericProp1: number,
  genericProp2: string
}

export default class Main extends Component {
  static displayName = 'Main';

  constructor(props) {
    super(props);
  };

  render(props) {
    return (
      <div id='Main' className={styles.main}>
        <Header/>
        <button onClick={() => {this.props.genericAction1()}}>Action 1</button>
        <button onClick={() => {this.props.genericAction2()}}>Action 2</button>
        <Body gp1={this.props.genericProp1} gp2={this.props.genericProp2}/>
        <Footer/>
      </div>
    )
  }
}
