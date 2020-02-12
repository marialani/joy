import React, { Component } from "react";
import ServicesGraph from "./ServicesGraph";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import upArrow from "../../assets/up-arrow.svg";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles({
  root: {
    margin: "auto",
    textAlign: "center",
    fontFamily: "Source Sans Pro"
  },
  card: {
    minWidth: 275,
    maxWidth: 500,
    backgroundColor: "#EBEDEE",
    margin: "auto",
    marginTop: 25,
    padding: 20,
    color: "#676767",
    display: "flex",
    flexDirection: "row",
    fontSize: 20
  },
  arrow: {
    width: 130,
    padding: 10
  },
  emphasis: {
    fontSize: 40,
    color: "#E71F67"
  }
});

const Dashboard = ({ overallWellbeing }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <NavBar />
        <br />
        <Link to="/SearchClient"> Search for clients </Link>
        <h2 className={classes.emphasis}>My Dashboard</h2>
        <Card className={classes.card}>
          <img className={classes.arrow} src={upArrow} />
          <h3>
            Over the last month, average wellbeing increased by:
            <span className={classes.emphasis}> {overallWellbeing}%</span>
          </h3>
        </Card>
        <Card className={classes.card}>
          <ServicesGraph />
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
