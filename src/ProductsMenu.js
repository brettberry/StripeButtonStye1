import React, { Component } from 'react';

const styles = {
  container: {
    display: 'flex',
    width: '600px',
    height: '400px',
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: '5px',
    top: '50px',
    left: '75px'
  }
};

class ProductsMenu extends Component {
  render() {
    return (
      <div style={styles.container} />
    );
  }
}

export default ProductsMenu;
