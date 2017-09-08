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


  }

  handleDelete (event) {
    this.props.deleteCard(event.target.id);
  }

  handleMoveRight (card) {
    return (event) => {
      event.preventDefault();
      // card.status = 'progress';
      if (card.status === 'queue') {
        card.status = 'progress';
      } else if (card.status === 'progress') {
        card.status = 'done';
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
        />
        <Done handleDelete={this.handleDelete} />
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
