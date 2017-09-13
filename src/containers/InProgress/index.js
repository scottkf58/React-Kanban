import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card.js';

class InProgress extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="inProgress">
        <div className="columnHeading">In Progress</div>
        <div className="cardContainer">
        {
          this.props.cards
            .filter( (card) =>
              card.status === 'progress'
            )
            .map( (card) =>
              <Card
                key={card.id}
                handleDelete={this.props.handleDelete}
                {...card}
                handleMoveRight={this.props.handleMoveRight(card)}
                handleMoveLeft={this.props.handleMoveLeft(card)}
              />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(InProgress);
export default ConnectedApp;