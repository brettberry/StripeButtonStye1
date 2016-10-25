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
    marginLeft: '20px',
    marginRight: '20px',
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
  }
};

class Home extends Component {
  render() {
    return (
      <div style={styles.navContainer}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><path d="M0 0h72v72H0V0z" fill="#87bbfd"></path><path d="M39.55 44.65V45H0V12h49.45c.85 0 1.55.7 1.55 1.55V33.5h-.3c-6.15 0-11.15 5-11.15 11.15zM21.5 19c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5z" fill="#43458b"></path><path d="M72 60H22.55c-.85 0-1.55-.7-1.55-1.55v-29.9c0-.85.7-1.55 1.55-1.55H72v33zM50.5 34c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5z" fill="#FFF"></path></svg> */}
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
      <h2 style={styles.logo}>stripe</h2>
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
