import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
import { fetchCharacters } from "../actions";

class CharacterListView extends React.Component {
  componentDidMount() {
   return  this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  };
};

export default connect(
  mapStateToProps,
  {
    fetchCharacters
  }
)(CharacterListView);