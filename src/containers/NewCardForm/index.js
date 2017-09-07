import React, { Component } from "react";
import { connect } from "react-redux";
import { addCard } from "../../actions";

class NewCardForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      title: "",
      priority: "low",
      createdBy: "",
      assignedTo: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.addCard({
      title: this.state.title,
      priority: this.state.priority,
      createdBy: this.state.createdBy,
      assignedTo: this.state.assignedTo
    });

    this.setState({
      title: '',
      priority: 'low',
      createdBy: '',
      assignedTo: ''
    });
  }

  render() {
    return (
      <div className="formContainer">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <select
            name="priority"
            onChange={this.handleChange}
            value={this.state.priority}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="blocker">Blocker</option>
          </select>
          <input
            type="text"
            name="createdBy"
            placeholder="Created By"
            onChange={this.handleChange}
            value={this.state.createdBy}

          />
          <input
            type="text"
            name="assignedTo"
            placeholder="Assigned To"
            onChange={this.handleChange}
            value={this.state.assignedTo}

          />
          <button type="submit">Add New Task</button>
        </form>
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
    addCard: card => {
      dispatch(addCard(card));
    }
  };
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCardForm);
export default ConnectedApp;
