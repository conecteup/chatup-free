import React, { useEffect, useState } from "react";
import openSocket from "socket.io-client";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1)
  },

  paper: {
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
  },

  settingOption: {
    marginLeft: "auto",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));


const Disparo = () => {
  const classes = useStyles();
  //const googleUrl = "http://localhost:3000/";
  const DisparonSite = process.env.REACT_APP_DisparoSITEL_URL;
  const [iframSrc ] = useState(DisparonSite);

  useEffect(() => {
    const socket = openSocket(process.env.REACT_APP_BACKEND_URL);
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className={classes.root}> 
    <iframe title="Disparo" src={iframSrc} height='800' width='100%' frameBorder="0"/>  
    </div>
  );
};

export default Disparo; 