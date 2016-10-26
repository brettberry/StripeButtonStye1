import React, { Component } from 'react';
import { docText } from './data.json';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: '5px',
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
  docSvg: {
    width: '17px',
    height: '17px',
    marginRight: '10px'
  },
  docHeader: {
    display: 'flex',
    alignItems: 'center',
    color: '#6772e5',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    textTransform: 'uppercase',
    fontSize: '11pt',
    fontWeight: '500',
    margin: 0
  },
  docSubtext: {
    color: '#7d8ca0',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    padding: 0,
    paddingLeft: '28px',
    margin: 0,
    lineHeight: '1.5',
    whiteSpace: 'nowrap',
    paddingTop: '10px'
  },
  submenuContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 20px 0px 28px',
    whiteSpace: 'nowrap'
  },
  getStartedDiv: {
    paddingRight: '40px'
  },
  subtitle: {
    color: '#8898aa',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    textTransform: 'uppercase',
    fontSize: '10pt',
    fontWeight: '400'
  },
  listItems: {
    display: 'flex',
    flexDirection: 'column',
    color: '#8898aa',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    fontSize: '10pt',
    fontWeight: '200',
    lineHeight: '2',
    listStyleType: 'none',
    padding: '0'
  },
  bottomSection: {
    backgroundColor: '#f6f9fc',
    borderRadius: '0 0 5px 5px',
    padding: '20px 35px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  topSection: {
    padding: '30px 30px 10px 30px'
  },
  submenu: {
    display: 'flex',
    alignItems: 'center',
    color: '#6772e5',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    textTransform: 'uppercase',
    fontSize: '11pt',
    fontWeight: '500',
    margin: 0,
    padding: '9px 0'
  }
};

class DevelopersMenu extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.triangle}/>
        <div style={styles.topSection}>
          <DocumentationItem />
          <SubmenuItem />
        </div>
        <BottomSection />
      </div>
    );
  }
}

function DocumentationItem() {
  return (
    <div>
      <h3 style={styles.docHeader}>
        <svg style={styles.docSvg}>
          <path fill="#87BBFD" d="M.945 1.998h3.632C6.744 1.998 8.5 3.005 8.5 4.83v11.583c-.512 0-1.015-.337-1.33-.59-1.03-.828-3.057-.828-5.222-.828H.945A.944.944 0 0 1 0 14.052V2.944C0 2.422.423 2 .945 2z"/>
          <path fill="#6772E5" d="M16.055 1.998h-3.632C10.257 1.998 8.5 3.005 8.5 4.83v11.583c.512 0 1.015-.337 1.33-.59 1.03-.828 3.057-.828 5.222-.828h1.003A.944.944 0 0 0 17 14.05V2.945A.944.944 0 0 0 16.055 2z"/>
        </svg>
        Documentation
      </h3>
      <div>
        <p style={styles.docSubtext} dangerouslySetInnerHTML={{ __html: docText }}/>
      </div>
    </div>
  );
}

function SubmenuItem() {
  return (
    <div style={styles.submenuContainer}>
      <div style={styles.getStartedDiv}>
        <h3 style={styles.subtitle}>Get Started</h3>
        <ul style={styles.listItems}>
          <li>Stripe.js</li>
          <li>Checkout</li>
          <li>Mobile Apps</li>
          <li>Libraries</li>
        </ul>
      </div>
      <div>
        <h3 style={styles.subtitle}>Popular Topics</h3>
        <ul style={styles.listItems}>
          <li>Apple Pay</li>
          <li>Testing</li>
          <li>Launch Checklist</li>
          <li>Plug-ins</li>
        </ul>
      </div>
    </div>
  );
}

function BottomSection() {
  return (
    <div style={styles.bottomSection}>
      <h3 style={styles.submenu}>
        <svg style={styles.docSvg}>
          <path d="M2 15h13M2 11h13M2 7h13M2 3h13" fill="none" stroke="#6772e5"/>
        </svg>
        Full API Reference
      </h3>
      <h3 style={styles.submenu}>
        <svg style={styles.docSvg}>
          <path d="M1 9h2.95l3-6.5 3 12 3-5.45L16 9" fill="none" stroke="#6772e5"/>
        </svg>
        API Status
      </h3>
      <h3 style={styles.submenu}>
        <svg style={styles.docSvg}>
          <path fill="#6772E5" d="M8.5 17a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zM6.987 6.078a.684.684 0 0 0-.968-.968L3.116 8.012a.684.684 0 0 0 0 .967l2.9 2.9a.684.684 0 0 0 .97-.967l-2.42-2.418 2.42-2.42zm6.996 1.95L11.08 5.123a.684.684 0 0 0-.966.968l2.418 2.42-2.418 2.417a.684.684 0 0 0 .967.967l2.904-2.902a.684.684 0 0 0 0-.966z"/>
        </svg>
        Open Source
      </h3>
    </div>
  );
}

export default DevelopersMenu;
