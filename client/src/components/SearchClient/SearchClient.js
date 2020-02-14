// search client page

import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import NavBar from '../NavBar/NavBar';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import getRequest from '../../utils/getData';

const useStyles = makeStyles({
  cardBg: {
    backgroundColor: '#EBEDEE',
    width: '350px',
    height: '110px',
    display: 'flex',
    borderRadius: '10px',
    marginBottom: '20px'
  },
  accountIcon: {
    color: '#C4C4C4',
    borderRadius: '50%',
    width: '100px',
    height: '100%',
    justifyContent: 'flex-start',
    alignContent: 'center'
  },
  accountInfo: {}
});

// Automatically sends a request to the server asking for a list of all the clients

const SearchClient = ({ clients, setClients }) => {
  // Creates a card for every user which comes back from the database

  useEffect(() => {
    getRequest('/getallclients').then(res => {
      setClients(res);
      console.log(clients.client_id);
    });
  }, []);
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <div className='App'>
        <br />
        <b>{clients.length} results:</b>
        <br />
        {clients.map(client => (
          <a
            href={`clientProfile/${client.client_id}`}
            style={{ textDecoration: 'none' }}
          >
            <Card className={classes.cardBg}>
              <CardContent>
                <AccountCircleIcon className={classes.accountIcon} />
              </CardContent>
              <Typography className={classes.accountInfo}>
                <h3>
                  <b>
                    {client.client_firstname} {client.client_surname}
                  </b>
                </h3>
                <p>DOB: {client.to_char}</p>
              </Typography>
            </Card>
          </a>
        ))}
      </div>
    </ThemeProvider>
  );
};

export default SearchClient;
