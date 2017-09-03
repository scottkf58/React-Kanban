import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../../components/Card.js";

class Done extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="done">
      <div className="columnHeading">Done</div>
        {
          this.props.cards
            .filter( (card) => {
              card.status === "done"
            })
            .map( (card) =>
              <Card
                key={card.id}
                {...card}
              />)
        }
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
)(Done);
export default ConnectedApp;
