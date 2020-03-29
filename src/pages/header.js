import React, { useContext } from "react";

import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

import { Link } from "react-router-dom";

import UserContext from "../services/authContext";

const Header = () => {
  const { fireBaseId, setFireBaseId } = useContext(UserContext);
  return (
    <AppBar position="static">
      <Toolbar disableGutters={true}>
        <Button component={Link} to="/" color="inherit">
          Supply Run
        </Button>
        <Box style={{ flexGrow: 1 }} />
        {fireBaseId === "" && (
          <>
            <Button component={Link} to="/signup" color="inherit">
              Sign Up
            </Button>
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
          </>
        )}
        {fireBaseId !== "" && (
          <>
            <Button
              component={Link}
              to="/"
              color="inherit"
              onClick={() => {
                setFireBaseId("");
              }}
            >
              Log Out
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export { Header };
