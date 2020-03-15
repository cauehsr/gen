import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lottie from 'react-lottie';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: null
    };
  }

  componentDidMount() {
    this._playAnimation();
  }

  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimationAsync();
    } else {
      this.animation.play();
    }
  };

  _loadAnimationAsync = async () => {

    this.setState({ animation: this.props.result }, this._playAnimation);
  };

  render() {
    const { activeStart } = this.props;

    const { animation } = this.state;

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <div className={activeStart ? 'loading active' : 'loading'}>
        <Lottie
          options={defaultOptions}
          height={500}
          width={500}
          ref={animation => {
            this.animation = animation;
          }}
          source={this.state.animation}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  };
};

export default connect(mapStateToProps)(Loading);
