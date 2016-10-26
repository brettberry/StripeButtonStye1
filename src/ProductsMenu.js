import React, { Component } from 'react';
import { paymentsText, pricingText } from './data.json';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: '5px',
    paddingTop: '10px',
    top: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
    boxShadow: '0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1)'
  },
  triangle: {
    position: 'absolute',
    top: '-8px',
    width: '16px',
    height: '16px',
    backgroundColor: 'white',
    transform: 'rotate(45deg)',
    left: '50%',
    marginLeft: '-8px',
    boxShadow: '-3px -3px 5px rgba(82,95,127,.04)',
    borderRadius: '4px 0 0 0'
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
    marginRight: '20px',
    marginLeft: '20px'
  },
  textDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'left',
    marginRight: '40px'
  },
  header: {
    color: '#6772e5',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    marginBottom: 0,
    textTransform: 'uppercase',
    fontSize: '11pt',
    fontWeight: '400'
  },
  text: {
    color: '#7d8ca0',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    textAlign: 'left',
    lineHeight: '1.5',
    whiteSpace: 'nowrap',
    marginTop: '8px'
  },
  bottomSection: {
    backgroundColor: '#f6f9fc',
    width: '100%',
    height: '100px',
    borderRadius: '0 0 5px 5px',
    padding: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px'
  },
  pricing: {
    color: '#6a75e5',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    textTransform: 'uppercase',
    fontSize: '11pt',
    fontWeight: '400'
  },
  pricingSubtext: {
    color: '#7d8ca0',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    marginLeft: '10px'
  },
  pricingSvg: {
    width: '17px',
    height: '17px',
    marginRight: '10px'
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
        <PricingItem />
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

function PricingItem() {
  return (
    <div style={styles.bottomSection}>
      <svg style={styles.pricingSvg}>
        <path fill="#6772E5" d="M15.998 6.98c0 .24-.083.458-.217.635a1.373 1.373 0 0 1-.187.24l-7.736 7.742c-.534.534-1.4.534-1.934 0L1.41 11.08a1.37 1.37 0 0 1 0-1.935l7.736-7.743c.15-.15.33-.255.52-.32a.918.918 0 0 1 .16-.048c.136-.03.275-.034.412-.02l4.192.002c.867 0 1.57.665 1.57 1.486l-.002 4.48zm-2.366-3.62a1.254 1.254 0 0 0-1.772 1.77 1.254 1.254 0 0 0 1.772-1.77z"/>
      </svg>
      <h3 style={styles.pricing}>Pricing</h3>
      <p style={styles.pricingSubtext}>{pricingText}</p>
    </div>
  );
}

export default ProductsMenu;
