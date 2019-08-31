import React, { Component } from 'react';

import { connect } from 'react-redux';
import { searchMovie, fetchMovies, setLoading } from '../actions/searchActions';
import { Width, Height, Colors } from '../../index'
import { Searchform, SearchContainer, ButtonDiv, SearchIconDiv, FormInBut } from '../styledcompnents/styledComponent'
export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.setLoading();
    this.props.fetchMovies(this.props.text);
  };

  render() {
    return (
      // <div className="jumbotron jumbotron-fluid mt-5 text-center">
      //   <div className="container">
      //     <h1 className="display-4 mb-3">
      //       <i className="fa fa-search" /> Search for a movie ,TV series ..
      //     </h1>
      //     <form id="searchForm" onSubmit={this.onSubmit}>
      //       <input
      //         type="text"
      //         className="form-control"
      //         name="searchText"
      //         placeholder="Search Movies, TV Series ..."
      //         onChange={this.onChange}
      //       />
      //       <button type="submit" className="btn btn-primary btn-bg mt-3">
      //         Search
      //       </button>
      //     </form>
      //   </div>
      // </div>
      <Searchform width={Width} height='400px' backGColor={Colors.whiteColor}>
        <SearchContainer width='100%' height='65%' backGColor={Colors.whiteGray}>
          <SearchIconDiv
            width='65%' height={Height * .18} backGColor={Colors.whiteGray}
          >
            <i class="fas fa-search" style={{
              fontSize: Height * .035, width: '6%',
              backgroundColor: Colors.whiteGray
            }}></i>
            <text style={{
              flexWrap: 'wrap', height: '100%', width: '75%',
              fontSize: Width * .02, backgroundColor: Colors.whiteGray,
              color: Colors.blackColor1
            }}>Search For a Movie ,Tv Series...</text>
          </SearchIconDiv>
          <FormInBut width='100%' height='50%'
            backGColor={Colors.whiteGray} onSubmit={this.onSubmit}>
            <div style={{
              width: '95%', height: '30%', backgroundColor: Colors.whiteColor
            }}>
              <input style={{
                padding: '10px', height: '100%',
                fontSize: Width * .011, width: '100%'
                ,borderColor: 'transparent',
              }} onChange={this.onChange}
                type='text' placeholder='Search Movies ,Tv series' />
            </div>
            <ButtonDiv
              width='96%' height='25%' backGColor={Colors.whiteGray}
            >
              <button style={{
                width: '7%', height: '100%', borderColor: 'transparent',
                borderRadius: Width * .001, color: Colors.whiteColor,
                backgroundColor: Colors.blueColor,
                 cursor: 'pointer'
              }} type='submit'
              >Search</button>
            </ButtonDiv>
          </FormInBut>

        </SearchContainer>
      </Searchform>
    );
  }
}
const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);