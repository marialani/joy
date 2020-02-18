import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import LandingPage from "../src/components/LandingPage/LandingPage";
import SearchClient from "../src/components/SearchClient/SearchClient";
import ClientProfile from "../src/components/ClientProfile/ClientProfile";
import WellbeingAssessment from "../src/components/WellbeingAssessment/WellbeingAssessment";

const App = () => {
  // const [overallWellbeing, setOverallWellbeing] = React.useState(15);
  // const [data, setOverallData] = React.useState({});
  const [clients, setClients] = React.useState([{}]);

  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route
        path="/dashboard"
        render={() => (
          <Dashboard
            clients={clients}
            setClients={setClients}
            overallWellbeing={15}
            data={{}}
          />
        )}
      />
      <Route
        path="/searchClient"
        render={() => (
          <SearchClient clients={clients} setClients={setClients} />
        )}
      />
      <Route path="/clientProfile" component={ClientProfile} />
      <Route path="/wellbeingAssessment" component={WellbeingAssessment} />
    </Router>
  );
};

export default App;
