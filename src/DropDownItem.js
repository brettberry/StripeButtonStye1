import React, { Component, PropTypes } from 'react';

const styles = {
  menuInactive: {
    color: 'white',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    fontSize: '1em',
    fontWeight: '100',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    perspective: '800px'
  },
  menuActive: {
    color: 'hsla(0,0%,100%,.5)',
    fontFamily: 'Open Sans, Helvetica, sans-serif',
    fontSize: '1em',
    fontWeight: '100',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    perspective: '800px'
  },
  transformContainer: {
    position: 'absolute',
    top: '10px',
    bottom: '0',
    left: '0',
    right: '0',
    transform: 'rotateX(-15deg)',
    transformOrigin: '50% -50px',
    opacity: 0,
    transition: '0.5s all ease-in-out'
  },
  untransformedContainer: {
    position: 'absolute',
    top: '10px',
    bottom: '0',
    left: '0',
    right: '0',
    transform: 'rotateX(0)',
    transformOrigin: '50% -50px',
    opacity: '1',
    transition: '0.5s all ease-in-out'
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
        <div style={this.getTransformedStyles()}>{children}</div>
      </div>
    );
  }

  getTransformedStyles() {
    const { isHovering } = this.state;
    return isHovering ? styles.untransformedContainer : styles.transformContainer;
  }
}

export default DropDownItem;
