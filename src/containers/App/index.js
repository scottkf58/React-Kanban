import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions';
import CardList from '../../components/CardList'
import './App.css';

class App extends Component {
  constructor() {
    super();

  }

  render() {
    console.log(this.props);
    return (
      <div>
        <CardList
          cards={this.props.cards}
        />
      </div>
    );
  }
}


// Transfer to store
const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

// Allows components to use actions
const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => {
      dispatch(addCard(card));
    }
  }
}


const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
