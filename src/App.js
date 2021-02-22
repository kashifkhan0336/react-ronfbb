import React, { useRef } from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CreateRoomBtn from "./CreateRoomBtn";
import JoinRoomBtn from "./JoinRoomBtn";
import AlertDialog from "./Alert";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/icons/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography'
export default function App() {
  const childRef = useRef();
  const useStyles = makeStyles(theme => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch"
      }
    }
  }));
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            PartyWatch
          </Typography>
        </Toolbar>
      </AppBar>
      <button onClick={() => childRef.current.handleClickOpen()}>Click</button>
      <AlertDialog ref={childRef}></AlertDialog>
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
