import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AudioRecorder from 'react-audio-recorder';
import { Jumbotron, FormFeedback, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false
        };
    }

    render() {
        return (
            <div className="App">
                <div>
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">Welcome to VoiceBox</h1>
                            <p className="lead">To get started, choose the category you'd like then press record</p>
                        </Container>
                    </Jumbotron>
                </div>

                <br /><br /><br /><br />
                <span>
                    <FormGroup>
                        <Label for="exampleEmail">Enter your name:</Label>
                        <Button color="link">
                            <Input />
                            <FormFeedback>You will not be able to see this</FormFeedback>
                        </Button>
                    </FormGroup>
                    <FormGroup width="100">
                        <Label for="exampleSelect">Select message type:</Label>
                        <Button color="link">
                            <Input type="select" name="select" id="exampleSelect">
                                <option>Good morning!</option>
                                <option>Birthday wish</option>
                                <option>Getting in touch on a bad day</option>
                                <option>Goals setting/checking</option>
                                <option>Good night</option>
                            </Input>
                        </Button>
                    </FormGroup>
                    <AudioRecorder />
                </span>
                <br /><br /><br /><br />
                <Button size="lg" color="secondary">Submit</Button>

            </div>
        );
    }
}

export default App;
