import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Container, MovieInfo, MovieLogos, MovieInfoText } from '../styledcompnents/styledComponent'
import { Width, Height, Colors } from '../../index'
function Navbar() {
  return (
    // <div>
    //   <nav className="navbar navbar-light bg-dark mb-5">
    //     <div className="container">
    //       <div className="navbar-header">
    //         <Link className="navbar-brand text-white text-lg brand-text" to="/">
    //           MovieSeriesInfo
    //         </Link>
    //       </div>
    //       <ul className="navbar-nav ml-auto text-light d-inline-block">
    //         <li className="nav-item d-inline-block mr-4">
    //           <i className="fab fa-imdb fa-5x" id="imdb-logo" />
    //         </li>
    //         <li className="nav-item d-inline-block mr-4">
    //           <i className="fab fa-react fa-5x" id="react-logo" />
    //         </li>
    //       </ul>

    //   </nav>ColorsColors
    // </div>
    <Nav width={Width} height={Height * .3} backGColor={Colors.blackColor}>
      <Container width='58%' height={Height * .28} backGColor={Colors.blackColor}>
        <MovieInfo width='15%' height='40%' backGColor={Colors.blackColor}>
          <Link to='/'>
            <MovieInfoText width='100%' fontSize='18px'
              color={Colors.grayColor}>MovieSeriesInfo</MovieInfoText>
          </Link>

        </MovieInfo>



        <MovieLogos width='15%' height='85%' backGColor={Colors.blackColor} >
          <div style={{
            display: 'flex',
            backgroundColor: Colors.grayColor,
            width: '32%', height: Height * .04, borderRadius: Width * .003, justifyContent: 'center', alignItems: 'center'
          }}>
            <text style={{ color: Colors.blackColor, fontWeight: 'bold', textAlign: 'center' }} >IMDB</text>
          </div>
          <div style={{
            display: 'flex', justifyContent: 'center',
            alignItems: 'center',
            width: '32%', height: '90%', borderRadius: Width * .003
          }} >
            <i class="fab fa-react" style={{ fontSize: Width * .025, color: Colors.grayColor }} ></i>


          </div>
        </MovieLogos>
      </Container>
    </Nav>
  );
}

export default Navbar;