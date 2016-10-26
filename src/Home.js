import React, { Component } from 'react';
import data from './data.json';
import DropDownItem from './DropDownItem';
import ProductsMenu from './ProductsMenu';
import DevelopersMenu from './DevelopersMenu';
import CompanyMenu from './CompanyMenu';

const styles = {
  navContainer: {
    display: 'flex',
    minHeight: '50px',
    minWidth: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: '10px'
  },
  navBar: {
    display: 'flex',
    minHeight: '50px',
    minWidth: '75%',
    position: 'absolute',
    marginTop: '0',
    marginBottom: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between'
  },
  logoContainer: {
    display: 'flex',
    width: '60px',
    height: '50px',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    color: 'white',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    fontSize: '1.5em',
    fontWeight: '400'
  },
  midSection: {
    display: 'flex',
    height: '50px',
    minWidth: '33%',
    backgroundColor: 'transparent',
    justifyContent: 'space-between'
  },
  endSection: {
    display: 'flex',
    height: '50px',
    minWidth: '15%',
    backgroundColor: 'transparent',
    justifyContent: 'space-between'
  },
  menuItems: {
    color: 'white',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    fontSize: '1em',
    fontWeight: '100',
    cursor: 'pointer'
  },
  svg: {
    width: '62px',
    height: '62px',
    fill: 'white',
    display: 'flex',
    alignItems: 'center'
  }
};

class Home extends Component {
  render() {
    return (
      <div style={styles.navContainer}>
        <div style={styles.navBar}>
          <LogoSection />
          <MidSection />
          <EndSection />
        </div>
      </div>
    );
  }
}

function LogoSection() {
  return (
    <div style={styles.logoContainer}>
      <svg style={styles.svg}>
        <path d="M5 10.1c0-.6.6-.9 1.4-.9 1.2 0 2.8.4 4 1.1V6.5c-1.3-.5-2.7-.8-4-.8C3.2 5.7 1 7.4 1 10.3c0 4.4 6 3.6 6 5.6 0 .7-.6 1-1.5 1-1.3 0-3-.6-4.3-1.3v3.8c1.5.6 2.9.9 4.3.9 3.3 0 5.5-1.6 5.5-4.5.1-4.8-6-3.9-6-5.7zM29.9 20h4V6h-4v14zM16.3 2.7l-3.9.8v12.6c0 2.4 1.8 4.1 4.1 4.1 1.3 0 2.3-.2 2.8-.5v-3.2c-.5.2-3 .9-3-1.4V9.4h3V6h-3V2.7zm8.4 4.5L24.6 6H21v14h4v-9.5c1-1.2 2.7-1 3.2-.8V6c-.5-.2-2.5-.5-3.5 1.2zm5.2-2.3l4-.8V.8l-4 .8v3.3zM61.1 13c0-4.1-2-7.3-5.8-7.3s-6.1 3.2-6.1 7.3c0 4.8 2.7 7.2 6.6 7.2 1.9 0 3.3-.4 4.4-1.1V16c-1.1.6-2.3.9-3.9.9s-2.9-.6-3.1-2.5H61c.1-.2.1-1 .1-1.4zm-7.9-1.5c0-1.8 1.1-2.5 2.1-2.5s2 .7 2 2.5h-4.1zM42.7 5.7c-1.6 0-2.5.7-3.1 1.3l-.1-1h-3.6v18.5l4-.7v-4.5c.6.4 1.4 1 2.8 1 2.9 0 5.5-2.3 5.5-7.4-.1-4.6-2.7-7.2-5.5-7.2zm-1 11c-.9 0-1.5-.3-1.9-.8V10c.4-.5 1-.8 1.9-.8 1.5 0 2.5 1.6 2.5 3.7 0 2.2-1 3.8-2.5 3.8z"/>
      </svg>
    </div>
  );
}

function MidSection() {
  return (
    <li style={styles.midSection}>
      <DropDownItem text={data.MenuBar[0]}>
        <ProductsMenu />
      </DropDownItem>
      <DropDownItem text={data.MenuBar[1]}>
        <DevelopersMenu />
      </DropDownItem>
      <DropDownItem text={data.MenuBar[2]}>
        <CompanyMenu />
      </DropDownItem>
    </li>
  );
}

function EndSection() {
  return (
    <li style={styles.endSection}>
      <h3 style={styles.menuItems}>{data.MenuBar[3]}</h3>
      <h3 style={styles.menuItems}>{data.MenuBar[4]}</h3>
    </li>
  );
}

export default Home;
