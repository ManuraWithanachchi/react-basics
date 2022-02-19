import React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const CreateTweet = ({ TextInput, setTextInput, tweets, setTweets }) => {
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitTweetHandle = (e) => {
    e.preventDefault();
    setTweets([...tweets, { message: TextInput, id: uuidv4() }]);
    setTextInput("");
  };

  return (
    <form onSubmit={submitTweetHandle}>
      <div>
        <Input
          value={TextInput}
          onChange={userInputHandler}
          defaultValue="@probablyup"
          type="text"
        />
      </div>
      <Button>Submit</Button>
    </form>
  );
};

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

export default CreateTweet;
