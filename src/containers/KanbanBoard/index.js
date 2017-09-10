import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCard, updateCard } from '../../actions';
import InQueue from '../InQueue';
import InProgress from '../InProgress';
import Done from '../Done';

class KanbanBoard extends Component {
  constructor (props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleMoveRight = this.handleMoveRight.bind(this);
    this.handleMoveLeft = this.handleMoveLeft.bind(this);
  }

  handleDelete (event) {
    this.props.deleteCard(event.target.id);
  }

  handleMoveRight (card) {
    return (event) => {
      event.preventDefault();
      if (card.status === 'queue') {
        card.status = 'progress';
      } else if (card.status === 'progress') {
        card.status = 'done';
        //this.props.updateCardStatus(card.id, card.status)
      }
      this.props.updateCard(card);
    };
  }

  handleMoveLeft (card) {
    return (event) => {
      event.preventDefault();
      if (card.status === 'done') {
        card.status = 'progress';
      } else if (card.status === 'progress') {
        card.status = 'queue';
      }
      this.props.updateCard(card);
    };
  }

  render() {
    return (
      <div className="kanbanBoard">
        <InQueue
          handleDelete={this.handleDelete}
          handleMoveRight={this.handleMoveRight}
        />
        <InProgress
          handleDelete={this.handleDelete}
          handleMoveRight={this.handleMoveRight}
          handleMoveLeft={this.handleMoveLeft}
        />
        <Done
          handleDelete={this.handleDelete}
          handleMoveLeft={this.handleMoveLeft}
        />
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
  return {
    deleteCard: id => {
      dispatch(deleteCard(id));
    },
    updateCard: card => {
      dispatch(updateCard(card));
    }
  };
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoard);
export default ConnectedApp;
