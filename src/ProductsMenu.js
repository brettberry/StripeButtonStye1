import React, { Component } from 'react';
import { paymentsText } from './data.json';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: '5px',
    top: '50px',
    padding: '20px',
    paddingRight: '40px',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  triangle: {
    position: 'absolute',
    top: '-8px',
    width: '16px',
    height: '16px',
    backgroundColor: 'white',
    transform: 'rotate(45deg)',
    left: '50%',
    marginLeft: '-8px'
  },
  rowDiv: {
    display: 'flex',
    flexDirection: 'row'
  },
  paymentsDiv: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px'
  },
  paymentSvg: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    borderColor: 'white'
  },
  svgDiv: {
    margin: '10px',
    marginRight: '20px'
  },
  textDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'left'
  },
  header: {
    color: '#6772e5',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    fontWeight: '400',
    marginBottom: 0
    // textTransform: 'uppercase'
  },
  text: {
    color: '#888',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    fontWeight: '400',
    fontSize: '11pt',
    textAlign: 'left',
    lineHeight: '1.5',
    whiteSpace: 'nowrap'
  }
};

class ProductsMenu extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.triangle}/>
        <div style={styles.rowDiv}>
          <PaymentsItem />
          <PaymentsItem />
        </div>
        <div style={styles.rowDiv}>
          <PaymentsItem />
          <PaymentsItem />
        </div>
        <div style={styles.rowDiv}>
          <PaymentsItem />
          <PaymentsItem />
        </div>
      </div>
    );
  }
}

function PaymentsItem() {
  return (
    <div style={styles.paymentsDiv}>
      <div style={styles.svgDiv}>
        <svg viewBox="0 0 48 48" style={styles.paymentSvg}>
          <path fill="#87BBFD" d="M24 48C12.11 48 2.244 39.35.338 28H6.5V9H5.27C9.67 3.515 16.423 0 24 0c13.255 0 24 10.745 24 24S37.255 48 24 48z"/>
          <path fill="#555ABF" d="M25 21v8H.526A24.082 24.082 0 0 1 0 24 23.908 23.908 0 0 1 6.116 8H31.5c.828 0 1.5.67 1.5 1.5V21h-8zm-10.502-8.995a6.497 6.497 0 1 0 0 12.994 6.497 6.497 0 0 0 0-12.996z" />
          <path fill="#FFF" d="M39.823 39.276a2.44 2.44 0 0 1-1.76.724H16.5a1.5 1.5 0 0 1-1.5-1.5v-18c0-.828.67-1.5 1.5-1.5h27.693a1.51 1.51 0 0 1 1.484 1.256c.21 1.217.323 2.467.323 3.744 0 5.936-2.355 11.32-6.177 15.276zM33.5 23.002a6.497 6.497 0 1 0 0 12.995 6.497 6.497 0 0 0 .002-12.994z"/>
        </svg>
      </div>
      <div style={styles.textDiv}>
        <h3 style={styles.header}>Payments</h3>
        <p style={styles.text} dangerouslySetInnerHTML={{ __html: paymentsText }}/>
      </div>
    </div>
  );
}

export default ProductsMenu;
