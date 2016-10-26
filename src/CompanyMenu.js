import React, { Component } from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
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
  listItems: {
    display: 'flex',
    flexDirection: 'column',
    color: '#8898aa',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    fontSize: '11pt',
    fontWeight: '200',
    lineHeight: '2',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    whiteSpace: 'nowrap'
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    color: '#6772e5',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    textTransform: 'uppercase',
    fontSize: '11pt',
    fontWeight: '500',
    margin: 0,
    whiteSpace: 'nowrap',
    padding: '9px 0'
  },
  topSection: {
    padding: '20px 30px 20px 30px'
  },
  bottomSection: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f6f9fc',
    borderRadius: '0 0 5px 5px',
    padding: '20px 35px',
    justifyContent: 'center'
  },
  svg: {
    width: '17px',
    height: '17px',
    marginRight: '10px'
  },
  blogPost: {
    padding: '5px 0'
  }
};

class CompanyMenu extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.triangle}/>
        <TopSection />
        <BottomSection />
      </div>
    );
  }
}

function TopSection() {
  return (
    <div style={styles.topSection}>
      <ul style={styles.listItems}>
        <li>
          <h3 style={styles.title}>
            <svg style={styles.svg}>
              <path fill="#6772E5" d="M8.5 17a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm.178-10.89c.76 0 1.726.278 2.486.69V4.443c-.828-.33-1.656-.502-2.484-.502-2.028 0-3.41 1.06-3.41 2.83 0 2.77 3.8 2.32 3.8 3.513 0 .462-.37.612-.93.612-.827 0-1.867-.366-2.706-.823v2.388c.93.4 1.843.592 2.705.592 2.077 0 3.48-1.027 3.48-2.827 0-2.98-3.82-2.447-3.82-3.572-.003-.39.352-.542.877-.542z"/>
            </svg>
            About Stripe
          </h3>
        </li>
        <li>
          <h3 style={styles.title}>
            <svg style={styles.svg}>
              <path fill="#87BBFD"d="M2 16a1 1 0 0 1-1-1V9a4 4 0 0 1 8 0v7H2zm3-9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
              <path fill="#6772E5" d="M15 16H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h.55a2.5 2.5 0 0 1 4.9 0H15a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1z"/>
              <path fill="#87BBFD" d="M11 12h2v4h-2v-4z"/>
            </svg>
            Customers
          </h3>
        </li>
        <li>
          <h3 style={styles.title}>
            <svg style={styles.svg}>
              <path fill="#6772E5" d="M1.5 4h14c.828 0 1.5.67 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 0 13.5v-8C0 4.67.67 4 1.5 4z"/>
              <path fill="#87BBFD" d="M13 15V4h2v11h-2zM2 4h2v11H2V4z"/>
              <path fill="#6772E5" d="M11.5 3.5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1V4H4v-.5A2.5 2.5 0 0 1 6.5 1h4A2.5 2.5 0 0 1 13 3.5V4h-1.5v-.5z"/>
            </svg>
            Jobs
          </h3>
        </li>
      </ul>
    </div>
  );
}

function BottomSection() {
  return (
    <div style={styles.bottomSection}>
      <h3 style={styles.title}>
        <svg style={styles.svg}>
          <path fill="#87BBFD" d="M1 4h4.5v11H1.75A1.75 1.75 0 0 1 0 13.25V5a1 1 0 0 1 1-1z"/>
          <path fill="#6772E5" d="M14 15H2v-.025a2.243 2.243 0 0 0 2-2.225V3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v9a3 3 0 0 1-3 3zm1-11H6v3h9V4z"/>
        </svg>
        From the blog
      </h3>
      <ul style={styles.listItems}>
        <li style={styles.blogPost}>
          Stripe Radar >
        </li>
        <li style={styles.blogPost}>
          Introducing Veneur: high performance and ... >
        </li>
        <li style={styles.blogPost}>
          Stripe in Japan! >
        </li>
      </ul>
    </div>
  );
}

export default CompanyMenu;
