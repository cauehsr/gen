import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CouponsData from 'javascripts/components/couponsData';
import firebase from '../../../Firebase';

class ManageCoupon extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('coupon');
    this.state = {
      coupon: [],
      key: '',
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const coupon = [];
    querySnapshot.forEach((doc) => {
      const { nameCoupon, descount, date } = doc.data();
      coupon.push({
        key: doc.id,
        doc, // DocumentSnapshot
        nameCoupon,
        descount,
        date,
      });
    });
    this.setState({
      coupon
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  delete(item) {
    firebase.firestore().collection('coupon').doc(item.key).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    const { } = this.state;
    return (
      <section id="manage" className={'manage'} ref="manage">
        <div className="manage-block">
          <div className="manage-limit limit-grid">
            <h2 className="title">
              Gerenciar Cupons
          </h2>
            <p className="text">
              Gerencie seus cupons abaixo, ou
              <Link to="/novo-cupon" className="link"> clique aqui </Link>
              para criar um novo cupom.
          </p>
            <ul className="manage-coupon">
              {this.state.coupon.map(item => (
                <CouponsData
                  path={item.key}
                  code={item.nameCoupon}
                  descount={`-${item.descount}%`}
                  date={item.date}
                  onClick={() => this.delete(item)}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(ManageCoupon);
