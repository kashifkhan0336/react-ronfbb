import React, { useRef } from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CreateRoomBtn from "./CreateRoomBtn";
import JoinRoomBtn from "./JoinRoomBtn";
import AlertDialog from "./Alert";
import Header from "./Header";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import blue from '@material-ui/core/colors/blue';
export const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff"
    },
    primary: blue,
    background: {
      paper: "#fff",
      default: "#fafafa"
    }
  }
});
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
      <ThemeProvider theme={theme}>
        <Header />
        <button onClick={() => childRef.current.handleClickOpen()}>
          Click
        </button>
        <AlertDialog ref={childRef} />
      </ThemeProvider>
    </>
  );
}
