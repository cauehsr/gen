import React, { Component } from 'react';
import PropTypes from 'prop-types';

// helpers
import Scrollable from 'javascripts/helpers/scrollable';

class Parallax extends Component {
  constructor(props) {
    super(props);

    this.elements = `.parallax-block > h1:not(.parallax-active), .parallax-block > h2:not(.parallax-active), .parallax-block > h3:not(.parallax-active), .parallax-block > p:not(.parallax-active), .parallax-item:not(.parallax-active), .parallax-element:not(.parallax-active)`;

    this.state = {
      active: false
    };
  }

  static propTypes = {
    watchElements: PropTypes.array
  };

  static defaultProps = {
    watchElements: []
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        active: true
      });
      this.handleScroll(0);
    }, 1000);
  }

  watchElement($element) {
    const { watchElements } = this.props;

    if (!watchElements || !watchElements.length) return false;

    watchElements.forEach(watchElement => {
      const el = watchElement.element.replace('.', '').replace('#', '');
      if (
        $element.classList.contains(el) &&
        typeof watchElement.callback === 'function'
      ) {
        watchElement.callback();
      }
    });
  }

  handleScroll = curTop => {
    const { active } = this.state;
    const height = window.innerHeight;

    if (!active) return false;

    const $elements = document.querySelectorAll(this.elements);

    const diff = (height / 100) * 10 - 150; // 10%
    const curTopDiff = parseInt(curTop - diff);

    $elements.forEach($element => {
      const elRect = $element.getBoundingClientRect();
      const elTop = parseInt(elRect.top + curTop - height);
      const delay = parseInt($element.getAttribute('data-parallax-delay'));

      if (curTopDiff >= elTop) {
        $element.classList.add('parallax-active');
        this.watchElement($element);
        if (delay) {
          $element.style.transitionDelay = `${delay}ms`;
        }
      }
    });
  };

  render() {
    return (
      <Scrollable onScroll={this.handleScroll}>
        {this.props.children}
      </Scrollable>
    );
  }
}

export default Parallax;
