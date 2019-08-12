import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Label, Input, Button } from "../theme/index";

class WordPress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* Input value will be set to state with every change */
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  /* With the submit function the entered URL will be retrieved and shown in an alert */
  handleSubmit(event) {
    alert("Carry on with: " + this.state.value);
    event.preventDefault();
  }

  /*
  The Form is rendered here. There is no API involvement here.
  TODO: Entered Url to update the backend Url
  */
  render() {
    return (
      <Container>
        <FormWrapper>
          <Form onSubmit={this.handleSubmit}>
            <Label>Enter WordPress Url</Label>
            <Input
              type="url"
              onChange={this.handleChange}
              placeholder="https://example.com"
              pattern="(https://.*)|(http://.*)"
              size="30"
              required
            />
            <Button type={"submit"}>Submit</Button>
            <SecondButton>
              <Link to={"/step-two"}>
                <Button type={"submit"}>Accept</Button>
              </Link>
            </SecondButton>
          </Form>
        </FormWrapper>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: #fff;
`;

const FormWrapper = styled.section`
  width: 90%;
  margin: 0 auto;
  max-width: 600px;
  border-radius: 4px;
  border: 1px solid #ececec;
  box-shadow: 0 4px 15px 3px rgba(183, 182, 182, 0.5);
`;

const Form = styled.form`
  padding: 20px;
`;

const SecondButton = styled.div`
  margin-top: 40px;
  border-top: 1px solid #ececec;
  text-align: right;
`;

export default WordPress;
