import React, { Component } from 'react';

const styles = {
  container: {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    height: '150%',
    justifyContent: 'center',
    top: '100px'
  },
  navContainer: {
    width: '180px',
    height: '210px'
  },
  listStyle: {
    listStyleType: 'none',
    lineHeight: '2',
    width: '210px',
    height: '135px',
    margin: '0',
    padding: '0'
  },
  hoverItem: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: 'black',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    fontSize: '13pt',
    fontWeight: '200'
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#6772e5',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    fontSize: '13pt',
    fontWeight: '200'
  },
  svg: {
    width: '33px',
    height: '34px',
    alignSelf: 'center',
    padding: '10px',
    fill: '#6772E5'
  },
  svgHover: {
    width: '33px',
    height: '34px',
    alignSelf: 'center',
    padding: '10px',
    fill: 'black'
  },
  highlight: {
    position: 'absolute',
    width: '210px',
    height: '34px',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(50,50,93,.1)',
    zIndex: -1
  }
};

const HoverState = {
  None: -1,
  Payments: 0,
  Customers: 1,
  Subscriptions: 2,
  Reporting: 3
};

class Home extends Component {

  state = {
    hoverIndex: HoverState.None
  }

  handleHover(hoverIndex) {
    this.setState({
      hoverIndex
    });
  }

  render() {
    const { hoverIndex } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.navContainer}>
        <span style={styles.highlight}/>
          <ul style={styles.listStyle}>
            <PaymentButton isHovered={hoverIndex == HoverState.Payments} handleHover={this.handleHover.bind(this)}/>
            <CustomersButton isHovered={hoverIndex == HoverState.Customers} handleHover={this.handleHover.bind(this)}/>
            <SubscriptionsButton isHovered={hoverIndex == HoverState.Subscriptions} handleHover={this.handleHover.bind(this)}/>
            <ReportingButton isHovered={hoverIndex == HoverState.Reporting} handleHover={this.handleHover.bind(this)}/>
          </ul>
        </div>
      </div>
    );
  }
}

function PaymentButton({ isHovered, handleHover }) {
  const textStyle = isHovered ? styles.hoverItem : styles.listItem;
  const iconStyle = isHovered ? styles.svgHover : styles.svg;
  return (
    <li style={textStyle}
        onMouseOver={() => handleHover(HoverState.Payments)}
        onMouseOut={() => handleHover(HoverState.None)}>
      <svg style={iconStyle}
           onMouseOver={() => handleHover(HoverState.Payments)}
           onMouseOut={() => handleHover(HoverState.None)}>
        <path d="M0 3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3zm0 1h13v2H0V4z"/>
      </svg>
      Payments
    </li>
  );
}

function CustomersButton({ isHovered, handleHover }) {
  const textStyle = isHovered ? styles.hoverItem : styles.listItem;
  const iconStyle = isHovered ? styles.svgHover : styles.svg;
  return (
    <li style={textStyle}
        onMouseOver={() => handleHover(HoverState.Customers)}
        onMouseOut={() => handleHover(HoverState.None)}>
      <svg style={iconStyle}
           onMouseOver={() => handleHover(HoverState.Customers)}
           onMouseOut={() => handleHover(HoverState.None)}>
        <path d="M12.5 11.75c0-1.24-2.69-2.25-6-2.25s-6 1-6 2.25c0 .46.37.9 1.01 1.25h9.98c.64-.36 1.01-.79 1.01-1.25zM6.5 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
      </svg>
      Customers
    </li>
  );
}

function SubscriptionsButton({ isHovered, handleHover }) {
  const textStyle = isHovered ? styles.hoverItem : styles.listItem;
  const iconStyle = isHovered ? styles.svgHover : styles.svg;
  return (
    <li style={textStyle}
        onMouseOver={() => handleHover(HoverState.Subscriptions)}
        onMouseOut={() => handleHover(HoverState.None)}>
      <svg style={iconStyle}
        onMouseOver={() => handleHover(HoverState.Subscriptions)}
        onMouseOut={() => handleHover(HoverState.None)}>
        <path d="M6.3 6.3l1.4 1.4L11.5 4 7.7.3 6.3 1.7 7.58 3H6.5a5.5 5.5 0 1 0 5.48 5H9.96A3.5 3.5 0 1 1 6.5 5h1.09l-1.3 1.3z"/>
      </svg>
      Subscriptions
    </li>
  );
}

function ReportingButton({ isHovered, handleHover }) {
  const textStyle = isHovered ? styles.hoverItem : styles.listItem;
  const iconStyle = isHovered ? styles.svgHover : styles.svg;
  return (
    <li style={textStyle}
        onMouseOver={() => handleHover(HoverState.Reporting)}
        onMouseOut={() => handleHover(HoverState.None)}>
      <svg style={iconStyle}
           onMouseOver={() => handleHover(HoverState.Reporting)}
           onMouseOut={() => handleHover(HoverState.None)}>
        <path d="M0 6.5c0-.27.22-.5.5-.5h2c.28 0 .5.23.5.5v6a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-6zm5-5c0-.28.22-.5.5-.5h2c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11zm5 2.01a.5.5 0 0 1 .5-.51h2c.28 0 .5.23.5.51v8.98a.5.5 0 0 1-.5.51h-2a.5.5 0 0 1-.5-.51V3.51z"/>
      </svg>
      Reporting
    </li>
  );
}

export default Home;
