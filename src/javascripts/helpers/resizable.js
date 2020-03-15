import { Component } from 'react';
import PropTypes from 'prop-types';

class Resizable extends Component {
  constructor(props) {
    super(props);

    this.handleResize = this.handleResize.bind(this);
  }

  static propTypes = {
    onResize: PropTypes.func.isRequired
  };

  componentDidMount() {
    if (window.addEventListener) {
      window.addEventListener('resize', this.handleResize, true);
    } else {
      window.attachEvent('onresize', this.handleResize);
    }

    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize, true);
  }

  handleResize() {
    this.props.onResize(window.innerWidth, window.innerHeight);
  }

  render() {
    return this.props.children;
  }
}

export default Resizable;
