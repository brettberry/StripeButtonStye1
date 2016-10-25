import React, { Component } from 'react';

const styles = {
  container: {
    display: 'flex',
    width: '400px',
    height: '400px',
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: '5px',
    top: '50px',
    left: '450px'
  }
};

class CompanyMenu extends Component {
  render() {
    return (
      <div style={styles.container} />
    );
  }
}

export default CompanyMenu;
