import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../../components/Card.js";

class InQueue extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="inQueue">
        <div className="columnHeading">In Queue</div>
        <div className="cardContainer">
          {
            this.props.cards
              .filter( (card) => card.status === "queue")
              .map( (card) =>
                <Card
                  key={card.id}
                  handleDelete={this.props.handleDelete}
                  {...card}
                />
          )}
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
)(InQueue);
export default ConnectedApp;