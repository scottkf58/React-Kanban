import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCard } from '../../actions';
import { moveCardRight } from '../../actions';
import InQueue from '../InQueue';
import InProgress from '../InProgress';
import Done from '../Done';

class KanbanBoard extends Component {
  constructor (props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);

  }

  handleDelete (event) {
    this.props.deleteCard(event.target.id);
  }

  handleMoveLeft (event) {
    this.props.moveCardLeft(event.target.id);
  }

  handleMoveRight (event) {
    this.props.moveCardRight(event.target.id);
  }

  render() {
    return (
      <div className="kanbanBoard">
        <InQueue
        handleDelete={this.handleDelete}
        handleMoveRight={this.handleMoveRight}
        />
        <InProgress handleDelete={this.handleDelete} />
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
    moveCardRight: id => {
      dispatch(moveCardRight(id));
    }
  };
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoard);
export default ConnectedApp;
