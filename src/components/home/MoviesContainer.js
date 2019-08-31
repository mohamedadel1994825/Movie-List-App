import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { Width, Height, Colors } from '../../index'
import{setVisibleTrue,setVisibleFalse} from '../actions/searchActions'
import { Modal, Button } from 'antd';
class MoviesContainer extends Component {
    showModal = () => {
     this.props.setVisibleTrue()
    };
  
    handleOk = e => {
        this.props.setVisibleFalse()

    };
  
    handleCancel = e => {
        this.props.setVisibleFalse()

    };
    render() {
        const{visible}=this.props
        const { movies } = this.props;
        let CardModal =
        <Modal
          width='500px'
          height='500px'
          title="Basic Modal"
          mask={true}
          maskClosable={true}
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          style={{position:'absolute',display:'flex'
          ,justifyContent:'center',alignItems:'center',
          top:'12%',
          left: "50%",
          top: '50%',
          transform: `translate('-50%', '-50%')`,
          backgroundColor:Colors.whiteColor,zIndex:10}}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
       let content = movies.Response=='True'? movies.Search.map((movie, index) =><MovieCard key={index}
            movie={movie} 
        />): null
        return (
            <div style={{display:'flex',justifyContent:'space-evenly',
            alignItems:'center',flexWrap:'wrap',flexDirection:'row',zIndex:0}}>
            {content}{visible?CardModal:null}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    movies: state.movies.movies,
    visible:state.movies.visible
});
export default connect(mapStateToProps,{setVisibleTrue,setVisibleFalse})(MoviesContainer);