import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../../components/Card.js";

class InProgress extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="inProgress">
      <div className="columnHeading">In Progress</div>
        {
          this.props.cards
            .filter( (card) => {
              card.status === "progress"
            })
            .map( (card) =>
              <Card
                key={card.id}
                {...card}
              />)}
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
  return {};
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(InProgress);
export default ConnectedApp;