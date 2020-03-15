import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
      <header className="header">
        <div className="header-wrapper">
          <h1 className="header-logo">
            <Link to="/" className="header-logo__btn"
              style={{
                position: "relative",
                textIndent: "-999em",
                overflow: "hidden",
                width: "100px",
                height: "63px",
                display: "flex",
                transition: "inherit",
              }}>
              Logo
            </Link>
          </h1>

          <nav className="header-nav">
            <ul className="header-nav-items">
              <li className="header-nav-item">
                <Link to="/novo-cupon" className="header-nav__btn--coupon">
                  + Novo Cupom
              </Link>
              </li>
              <li className="header-nav-item">
                <Link to="/" className="header-nav__btn header-nav__btn--icon-geral">
                  Visão Geral
              </Link>
              </li>
              <li className="header-nav-item">
                <Link to="/gerenciar-cupons" className="header-nav__btn header-nav__btn--icon-coupon">
                  Gerenciar Cupons
              </Link>
              </li>
              <li className="header-nav-item">
                <Link to="/aplicar-cupons" className="header-nav__btn header-nav__btn--icon-apply">
                  Aplicar Cupons
              </Link>
              </li>
            </ul>
          </nav>

          <div className="header-user">
            <div className="header-user-block">
              <img src="/src/images/user.png" alt="user" />
              <h2 className="text-user">Cauê Henrique</h2>
            </div>
          </div>

        </div>
      </header>
    );
  }
}

export default Header;