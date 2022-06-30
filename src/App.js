import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Button, Carousel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import img1 from "./imeges/img1.jpg";
import img2 from "./imeges/img2.jpg";
import img3 from "./imeges/img3.jpg";
import img4 from "./imeges/img4.png";

import Childe from "./component/Childe";
class App extends React.Component {
  state = {
    show: false,
  };
  handleshow = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="App">
        {/* navbar bag */}
        <Navbar className="navbar" expand="lg" variant="light">
          <Container>
            <Navbar.Brand href="#">my personal file</Navbar.Brand>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Container>
        </Navbar>
        <div className="name">
          <h1>emhammed-ageela</h1>
        </div>
        {/* Carousel */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              height="500px"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>GO MY CODE</h3>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              height="500px"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>GO MY CODE</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              height="500px"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>GO MY CODE</h3>
              {/* <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* tag imeges */}
        <div className="img">
          <img src={img4} width="600" height="400px" alt="Third slide" />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={this.handleshow}>
              GO
            </Button>
          </Form>
        </div>
        {/* tag card */}
        {this.state.show === true ? <Childe /> : null}
        {/* footer */}
        <div className="footer">
          <footer className="page-footer font-small blue pt-4 footer1">
            <div className="container-fluid text-center text-md-left">
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <h5 className="text-uppercase">ABOUT US </h5>
                  <p>
                    The site identifies the profile, which tells about the
                    biography of the file, the year of graduation and the
                    profession...
                  </p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0" />

                <div className="col-md-3 mb-md-0 mb-3">
                  <h5 className="text-uppercase">Contact Us</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">Email address : arooh7546@gmail.com</a>
                    </li>
                    <li>
                      <a href="#!">Phone Number : 00218925345580</a>
                    </li>
                    <li>
                      <a href="#!">Other Ph Num : 00218925340125</a>
                    </li>
                    <li>
                      <a href="#!">Address : libya-sbha</a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">
                        <i class="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <i class="fa-brands fa-instagram-square"></i>
                    </li>
                    <li>
                      <a href="#!">
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i class="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-copyright text-center py-3">
              © 2022 Copyright:
              <a href="#"> Mangateam.com</a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
