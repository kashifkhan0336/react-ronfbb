import React, { useRef } from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CreateRoomBtn from "./CreateRoomBtn";
import JoinRoomBtn from "./JoinRoomBtn";
import AlertDialog from "./Alert";
import Header from './Header'
export default function App() {
  const childRef = useRef();
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  }));
  return (
    <>
    <Header></Header>
      {/*<AppBar>
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">PartyWatch</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>*/}
      <button onClick={() => childRef.current.handleClickOpen()}>Click</button>
      <AlertDialog ref={childRef} />
      <CreateRoomBtn />
      <JoinRoomBtn />
      <TextField id="outlined-basic" label="Room Name" variant="outlined" />
      <div>
        <Button variant="contained" color="primary">
          Create
        </Button>
      </div>
    </>
  );
}
