import { Navbar } from "react-bootstrap";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./Post";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const isMobile = useSelector((state) => state.isMobile);
  const dispatch = useDispatch();

  console.log("is", isMobile);
  const resize = () => {
    dispatch({
      type: "CHANGE_STATE",
      stateName: "isMobile",
      value: window.innerWidth <= 767,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", resize);
    resize();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Nav className="mr-auto">
                <Link to="/">Home</Link>
              </Nav> */}
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/post/:id" component={Post} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
