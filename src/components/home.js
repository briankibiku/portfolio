import React from "react";
import '../index.css';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import image from '../img/son.jpg';
// class Home extends Component {


//     render() {
//         return (
//             <div>
//                 <Row>
//                     <Col>
//                         I am your all time fav Dev
//                     </Col>
//                     <Col>
//                         <Row>First</Row>
//                         {/* <Row style={{ backgroundImage: url(${image}) }}>Second</Row> */}
//                         <Row>Third</Row>
//                     </Col>
//                 </Row>
//             </div>
//         )
//     }
// }

// export default Home;

import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavItem,
  MDBView,
  MDBRow,
  MDBCol,
  MDBMask,
  MDBAnimation,
  MDBBtn,
  MDBCard,
  MDBInput,
  MDBIcon,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";
// import "./index.css";

class AppPage extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    // const overlay = (
    //   <div
    //     id="sidenav-overlay"
    //     style={{ backgroundColor: "transparent" }}
    //     onClick={this.handleTogglerClick}
    //   />
    // );
    return (
      <div id='apppage'>
        {/* Start of landing page */}
        <Router>
          <div>
            <MDBNavbar
              className='gradient'
              dark
              expand="md"
              fixed="top"
              scrolling
              transparent>
              <MDBContainer>
                <MDBNavbarBrand style={{ paddingTop: 10 }}>
                  <strong className='white-text'>B2K</strong>
                </MDBNavbarBrand>
                <MDBCollapse isOpen={this.state.collapsed} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active id='some-padding'>
                      <li style={{ paddingTop: 10 }}>
                        <p id='nav-item-style'>Home</p>
                      </li>
                    </MDBNavItem>
                    <MDBNavItem className='white-text' id='some-padding'>
                      <li style={{ paddingTop: 10 }}>
                        <a href='#about' id='nav-item-style'>About</a>
                      </li>
                    </MDBNavItem>
                    <MDBNavItem id='some-padding'>
                      <li style={{ paddingTop: 10 }}>
                        <a href='#skills' id='nav-item-style'>Skills</a>
                      </li>
                    </MDBNavItem>
                    <MDBNavItem id='some-padding'>
                      <li style={{ paddingTop: 10 }}>
                        <a href='#projects' id='nav-item-style'>Project</a>
                      </li>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <li style={{ paddingTop: 10 }}>
                        <a href='#contact' id='nav-item-style'>Contact</a>
                      </li>
                    </MDBNavItem></MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
          </div>
        </Router>
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol md='6' className='white-text text-center text-md-left mt-xl-5 mb-5'>
                  <MDBAnimation type='fadeInLeft' delay='.3s'>
                    <h1 className='h1-responsive font-weight-bold mt-sm-5'>
                      Hello there, I'm Brian.
                  </h1>
                    <hr className='hr-light' />
                    <br></br>
                    <h5 className='mb-3'>
                      A software engineer by profession.
                        I am passionate about designing and developing mobile and web applications that conform to modern design principles, are
                         intuitive and make a users life easier.
                  </h5>
                    <br></br>
                    <br></br>
                    <MDBBtn color='white'>See More</MDBBtn>
                    <MDBBtn outline color='white'>View Projects</MDBBtn>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md='6' className='white-text text-center text-md-left mt-xl-5 mb-5'>
                  <MDBAnimation type='fadeInLeft' delay='.3s'>
                    {/* <img
                      src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
                      alt=""
                      className="img-fluid"
                    /> */}
                    <img src={require('../img/mobile_applications.svg')} alt='' height='600' width='800' />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
        {/* End of landing page */}

        <div id='apppage'>
          <MDBMask id='about'>
            <MDBView className="d-flex justify-content-center align-items-center gradient">
              <MDBContainer>
                <h6>I am the about page</h6>
              </MDBContainer>
            </MDBView>
          </MDBMask>
        </div>

        <div id='apppage'>
          <MDBMask id='skills'>
            <MDBView className="d-flex justify-content-center align-items-center gradient">
              <MDBContainer>
                <h6>I am the skills page</h6>
              </MDBContainer>
            </MDBView>
          </MDBMask>
        </div>

        <div id='apppage'>
          <MDBMask id='projects'>
            <MDBView className="d-flex justify-content-center align-items-center gradient">
              <MDBContainer><MDBRow >
                <MDBCol md='4' >
                  <MDBCard >
                    <MDBCardImage
                      top
                      src={require('../img/mobile_applications.svg')}
                      overlay='white-slight'
                      hover
                      waves
                      alt='MDBCard image cap' />
                    <MDBCardBody>
                      <a href='#about'>
                        <MDBIcon icon='twitter' className='black-text' />
                      </a>
                      <MDBCardTitle>Flash Chat App</MDBCardTitle>
                      <hr />
                      <MDBCardText>This is an app that facilitates group chat </MDBCardText>
                    </MDBCardBody>
                  </MDBCard></MDBCol>
              </MDBRow>
              </MDBContainer>
            </MDBView>
          </MDBMask>
        </div>

        <div id='apppage'>
          <MDBMask id='contact'>
            <MDBView className="d-flex justify-content-start align-items-start contact">
              <MDBContainer style={{paddingTop: 100}}>
                <MDBRow>
                  <MDBCol md='6'>
                    <p className='h5 mb-4' style={{ paddingLeft: 40 }}>Handles</p>
                    <MDBContainer>
                      <MDBBtn size="lg" tag="a" floating social="tw">
                        <MDBIcon fab icon="twitter" />
                      </MDBBtn>
                    </MDBContainer>
                  </MDBCol>
                  <MDBCol md='6'>
                    <form>
                      <p className='h5 mb-4' style={{ paddingLeft: 40 }}>Say hello</p>
                      <MDBInput label='Type your name' icon='user' type='text' />
                      <MDBInput label='Type your email' icon='envelope' type='email' />
                      <MDBInput label='Type your message' icon='envelope' type='textarea' />
                      <MDBBtn rounded color='cyan' style={{ paddingLeft: 40 }}>Submit</MDBBtn>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBView>
          </MDBMask>
        </div>
      </div>
    );
  }
}

export default AppPage;