import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// import Comment from "./comments";
// import ApprovalCard from "./ApprovalCard";

// import SeasonApp from "./Season/SeasonApp";
// import SearchApp from "./SearchBar/SearchApp";
// import VideoApp from "./Video/VideoApp";

// import SongsApp from "./Songs/SongsApp";
// import reducers from "./Songs/reducers";

// import BlogApp from "./Blog/BlogApp";
// import reducers from "./Blog/reducers";

import "./styles.css";

// import StreamsApp from "./Streams/StreamsApp";
// import reducers from "./Streams/reducers";

// import LangApp from "./Lang/LangApp";
import ToDoApp from "./ToDo/ToDoApp";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducers, applyMiddleware(thunk));
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default function App() {
  // return (
  //   <div className="ui container comments">
  //     <ApprovalCard>
  //       <Comment author="first" timeago="Today at 5:00" text="This is a blog" />
  //     </ApprovalCard>
  //     <Comment author="second" timeago="Today at 12:00" text="How about this" />
  //   </div>
  // );
  // return <SeasonApp />;
  // return <VideoApp />;
  // return (
  //   <Provider store={store}>
  //     <StreamsApp />
  //   </Provider>
  // );

  return <ToDoApp />;
}
