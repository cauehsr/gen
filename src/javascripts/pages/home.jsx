import React from 'react';
import { connect } from 'react-redux';
import Hero from 'javascripts/components/hero';

function Home(props) {
  return (
    <div className="page">
      <Hero />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Home);