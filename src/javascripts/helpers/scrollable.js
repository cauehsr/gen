import { Component } from 'react';
import PropTypes from 'prop-types';

class Scrollable extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  static propTypes = {
    onScroll: PropTypes.func.isRequired
  };

  componentDidMount() {
    if (window.addEventListener) {
      window.addEventListener('scroll', this.handleScroll, true);
    } else {
      window.attachEvent('onscroll', this.handleScroll);
    }

    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  handleScroll() {
    const curTop =
      typeof window.scrollY === 'undefined'
        ? window.pageYOffset
        : window.scrollY;
    this.props.onScroll(curTop);
  }

  render() {
    return this.props.children;
  }
}

export default Scrollable;
