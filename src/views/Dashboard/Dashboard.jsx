import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  render() {
    return <div>clear page</div>;
  }
}

export default withStyles(dashboardStyle)(Dashboard);
