import React from "react";
// import TweetList from "./components/TweetList";
// // import CreateTweet from "./components/CreateTweet";
// // import { useState } from "react/cjs/react.development";

import { useSelector, useDispatch } from "react-redux";
import increment from "./actions/counter";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={dispatch(increment())}>Increment</button>
    </div>
  );
}

export default App;
