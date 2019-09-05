import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { Width, Height, Colors } from '../../index'
import { setVisibleTrue, setVisibleFalse } from '../actions/searchActions'
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
        const { visible } = this.props
        const { movies,movieData } = this.props;
        let CardModal =
                <Modal
                    width='500px'
                    height='500px'
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    style={{
                        position: 'absolute', display: 'flex'
                        , justifyContent: 'center', alignItems: 'center',
                        top: '3%',
                        left: "38%",
                        backgroundColor:'gray', zIndex: 10,cursor:'pointer'
                    }}
                    maskClosable={false}
                >

                          <h1 style={{ color: Colors.greenColor, textAlign: 'center',padding:"10px" }}>Movie Title:{movieData.Title}</h1>
                          <h1 style={{ color: Colors.greenColor, textAlign: 'center',padding:"10px" }}>Released:{movieData.Year}</h1>


                </Modal>

        let content = movies.Response == 'True' ? movies.Search.map((movie, index) => <MovieCard key={index}
            movie={movie}
        />) : null
        return (
            <div style={{
                display: 'flex', justifyContent: 'space-evenly',
                alignItems: 'center', flexWrap: 'wrap', flexDirection: 'row', zIndex: 0
            }}>
                {content}{visible ? CardModal : null}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    movies: state.movies.movies,
    visible: state.movies.visible,
    movieData:state.movies.movieData

});
export default connect(mapStateToProps, { setVisibleTrue, setVisibleFalse })(MoviesContainer);