import React, { Component, PropTypes } from 'react';

const styles = {
  menuInactive: {
    color: 'white',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    fontSize: '1em',
    fontWeight: '100',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center'
  },
  menuActive: {
    color: 'hsla(0,0%,100%,.5)',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    fontSize: '1em',
    fontWeight: '100',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center'
  }
};

class DropDownItem extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired
  }

  state = {
    isHovering: false
  };

  render() {
    const { isHovering } = this.state;
    const { text, children } = this.props;
    return (
      <div style={isHovering ? styles.menuActive : styles.menuInactive}
          onMouseEnter={() => this.setState({ isHovering: true })}
          onMouseLeave={() => this.setState({ isHovering: false })}>
        {text}
        {isHovering && children}
      </div>
    );
  }
}

export default DropDownItem;
