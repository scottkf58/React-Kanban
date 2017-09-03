import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCard } from '../../actions';
import InQueue from '../InQueue';
import InProgress from '../InProgress';
import Done from '../Done';

class KanbanBoard extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    this.props.deleteCard(event.target.id);
  }

  render() {
    return (
      <div className="kanbanBoard">
        <InQueue handleDelete={this.handleDelete} />
        <InProgress handleDelete={this.handleDelete} />
        <Done handleDelete={this.handleDelete} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: id => {
      dispatch(deleteCard(id));
    }
  };
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoard);
export default ConnectedApp;
