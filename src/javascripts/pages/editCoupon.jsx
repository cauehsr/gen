import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormComponent from 'javascripts/components/formComponent';
import firebase from '../../../Firebase';

class EditCoupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameCoupon: '',
      descount: '',
      date: '',
      key: '',
      Coment: {},
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('coupon');
    const edit = ref.doc(this.props.match.params.id);
    const del = ref.doc(this.props.match.params.id);
    edit.get().then((doc) => {
      if (doc.exists) {
        const Coment = doc.data();
        this.setState({
          key: doc.id,
          nameCoupon: Coment.nameCoupon,
          descount: Coment.descount,
          date: Coment.date
        });
      } else {
        console.log("No such document!");
      }
    });

  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nameCoupon, descount, date } = this.state;

    const updateRef = firebase.firestore().collection('coupon').doc(this.state.key);
    updateRef.set({
      nameCoupon,
      descount,
      date
    }).then((docRef) => {
      this.setState({
        key: '',
        nameCoupon: '',
        descount: '',
        date: ''
      });
      this.props.history.push("/gerenciar-cupons")
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  handleChangeCoupon = e => {
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

  render() {
    const { nameCoupon, descount, date, key } = this.state;
    return (
      <section id="edit-coupon" className={'edit-coupon'} ref="edit-coupon">
        <div className="edit-coupon-block">
          <div className="edit-coupon-limit limit-grid">
            <h2 className="title">
              Editar Cupom
          </h2>
            <p className="text">
              Altere os campos abaixo para editar o cupom FERIAS2020
          </p>
            <form className="form" onSubmit={this.onSubmit}>
              <FormComponent
                placeholder="Cupom"
                type='text'
                name='nameCoupon'
                value={nameCoupon}
                handleChange={this.handleChangeCoupon}
                className="input-group"
              />
              <FormComponent
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
                className="saveAlteration__btn btn"
              >
                Salvar Alterações
            </button>
            </form>
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

export default connect(mapStateToProps)(EditCoupon);
