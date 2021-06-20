import React from "react";
import { connect } from "react-redux";
import { loadPosts } from "./store/reducers/posts";

const mapStateToProps = ({ posts }) => ({ posts });

function App({ posts, dispatch }) {
  console.log(posts);
  React.useEffect(() => {
    dispatch({
      type: loadPosts,
    });
  }, [dispatch]);

  return <div className="App">Hello World</div>;
}

export default connect(mapStateToProps)(App);
