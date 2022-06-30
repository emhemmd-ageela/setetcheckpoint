import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img8 from "../imeges/img8.jpg";
import { Card } from "react-bootstrap";

class Childe extends React.Component {
  state = {
    Person: {
      fullName: "Emhemmad-ageela",
      bio: "Hello, I am Mohamed Akila, a programmer, and I graduated in 2014 from the Higher Institute of Comprehensive Professions, Sebha, specializing in computer programming, development and systems analysis, and now in Tunisia, ",
      imgSrc: img8,
      profession: "I am a programmer",
    },
    sum: 0,
  };
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        ...this.state,
        sum: this.state.sum + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="card-body">
        <Card style={{ width: "18rem" }}>
          <img variant="top" src={this.state.Person.imgSrc} />
          <Card.Body className="cardbody">
            <Card.Title style={{ color: "red" }}>
              {this.state.Person.fullName}{" "}
            </Card.Title>

            <Card.Title style={{ color: "red" }}>
              {this.state.Person.profession}
            </Card.Title>
            <Card.Title style={{ color: "black" }}>{this.state.sum}</Card.Title>
          </Card.Body>
          {/* <Card.tixt></Card.tixt> */}
        </Card>
        {/* card body */}
        <Card style={{ width: "500px", height: "200px" }}>
          <Card.Body>{this.state.Person.bio}</Card.Body>
        </Card>
      </div>
    );
  }
}
export default Childe;
