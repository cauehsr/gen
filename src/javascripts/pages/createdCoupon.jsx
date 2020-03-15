import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormComponent from 'javascripts/components/formComponent';

import firebase from '../../../Firebase';
import Loading from 'javascripts/components/loading';


class CreatedCoupon extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('coupon');
    this.state = {
      nameCoupon: '',
      descount: '',
      loading: false,
      date: '',
    };
  }

  componentDidMount() {
    // this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }


  handleChangeNameCoupon = e => {
    const { value } = e.target;
    this.setState({ nameCoupon: value });
  };

  handleChangeDescount = e => {
    const { value } = e.target;
    this.setState({ descount: value });
  }

  handleChangeDate = e => {
    const { value } = e.target;
    this.setState({ date: value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true })

    const { nameCoupon, descount, date, loading } = this.state;

    this.ref.add({
      nameCoupon,
      descount,
      date
    }).then((docRef) => {
      console.log('entrou', docRef);

      this.setState({
        nameCoupon: '',
        descount: '',
        date: '',
      });

      setTimeout(() => {
        this.setState({ loading: false })

      }, 1000);
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  render() {
    const { nameCoupon, descount, date, loading } = this.state;

    return (
      <section id="edit-coupon" className={'edit-coupon'} ref="edit-coupon">
        <div className="edit-coupon-block">
          <div className="edit-coupon-limit limit-grid">
            <h2 className="title">
              Novo Cupom
          </h2>
            <p className="text">
              Preencha os campos abaixo para criar um novo cupom.
          </p>
            <form className="form" onSubmit={this.onSubmit}>
              <FormComponent
                placeholder="Nome do Cupom"
                type='text'
                name='nameCoupon'
                value={nameCoupon}
                handleChange={this.handleChangeNameCoupon}
                className="input-group"
              />
              <FormComponent
                mask={[/\d/, /\d/]}
                placeholder="Desconto"
                type='text'
                name='descount'
                value={descount}
                handleChange={this.handleChangeDescount}
                className="input-group"
              />
              <div className="form-block">
                <FormComponent
                  mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                  placeholder="Duração do Cupom"
                  type='text'
                  name='date'
                  value={date}
                  handleChange={this.handleChangeDate}
                  className="input-group input-group-date"
                />
                <button className="button__eternal">Cupom eterno</button>
              </div>

              <button
                type="submit"
                className="create__btn btn"
              >
                Criar Cupon
            </button>
            </form>
          </div>
        </div>
        <Loading result={require('../../lottie/verify.json')} activeStart={loading} />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(CreatedCoupon);