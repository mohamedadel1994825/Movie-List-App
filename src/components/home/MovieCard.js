import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Moviecard } from '../styledcompnents/styledComponent'
import { Width, Height, Colors } from '../../index'
import { Modal, Button } from 'antd';
import {setVisibleTrue} from '../actions/searchActions'
class MovieCard extends Component {
  // state = { visible: false };

  // showModal = () => {
  //   this.setState({
  //     visible: true,
  //   });
  // };

  // handleOk = e => {
  //   console.log(e);
  //   this.setState({
  //     visible: false,
  //   });
  // };

  // handleCancel = e => {
  //   console.log(e);
  //   this.setState({
  //     visible: false,
  //   });
  // };
  render() {
    const { movie ,visible} = this.props;
    // let CardModal =
    //     <Modal
    //       title="Basic Modal"
    //       visible={this.state.visible}
    //       onOk={this.handleOk}
    //       onCancel={this.handleCancel}
    //     >
    //       <p>Some contents...</p>
    //       <p>Some contents...</p>
    //       <p>Some contents...</p>
    //     </Modal>
    return (
      // <div className="col-md-3 mb-5">
      //   <div className="card card-body bg-dark text-center h-100">
      //     <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
      //     <h5 className="text-light card-title">
      //       {movie.Title} - {movie.Year}
      //     </h5>
      //     <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}>
      //       Movie Details
      //       <i className="fas fa-chevron-right" />
      //     </Link>
      //   </div>
      // </div>
      <Moviecard width='300px' height='530px' backGColor={Colors.blackColor} style={{ zIndex:10,borderRadius: Width * .003 }}>
        <img src={movie.Poster} style={{ width: '100%', height: '70%' }} />
        <h5 style={{ color: Colors.whiteColor, textAlign: 'center', width: '90%' }}>{movie.Title}-{movie.Year}</h5>
        <div style={{
          width: '100%', justifyContent: 'space-evenly'
          , alignItems: 'center', flexDirection: 'row', display: 'flex'
        }}>
          <button style={{
             borderRadius: Width * .0035
            , backgroundColor: Colors.blueColor, cursor: 'pointer',
            borderColor: 'transparent', color: Colors.whiteColor
          }}
          onClick={()=>this.props.setVisibleTrue()}
          >
           Load More
          </button>
          <Link to={'/movie/'+movie.imdbID} >
            <button style={{
               borderRadius: Width * .0035
              , backgroundColor: Colors.blueColor, cursor: 'pointer',
              borderColor: 'transparent', color: Colors.whiteColor
            }}>
              Movie Details
        <i class="fas fa-angle-right" style={{ marginLeft: '5px' }}></i>
            </button>
          </Link>
        </div>

      </Moviecard>
    );
  }
}

const mapStateToProps = state => ({
  visible: state.movies.visible,
});

export default connect(
  mapStateToProps,
  { setVisibleTrue }
)(MovieCard);