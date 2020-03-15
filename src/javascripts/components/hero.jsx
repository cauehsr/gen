import React, { Component } from 'react';

class Hero extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <section id="hero" className={'hero'} ref="hero">
        <div className="hero-block">
          <div className="hero-limit limit-grid">
            <h2 className="title">
              Bem vindo, Cauê
            </h2>
            <p className="text">
              Crie, gerencia e aplique cupons de descontos em sua loja.
            </p>
          </div>
        </div>
      </section>

    );
  }
}

export default Hero;
