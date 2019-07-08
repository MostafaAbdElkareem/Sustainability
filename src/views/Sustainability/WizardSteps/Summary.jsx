import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Table from "components/Table/Table.jsx";
import CardBody from "components/Card/CardBody.jsx";

const style = {
  infoText: {
    margin: "10px 0 10px",
    textAlign: "center",
    fontWeight: "400",
    color: "#555"
  },
  sections: {
    fontWeight: "300",
    margin: "0px",
    textAlign: "left",
    fontSize: "26px",
    color: "#444444",
    background: "#d1f4ff",
    padding: "10px",
    width: "100%"
  },
  contnet: {
    textAlign: "center",
    color: "#444444",
    background: "#d1f4ff",
    padding: "10px",
    margin: "0px"
  },

  accTitle: {
    fontWeight: "300",
    textAlign: "left",
    fontSize: "16px",
    color: "#555555",
    padding: "5px!important",
    margin: "0px"
  },
  root: {
    width: "100%"
  },
  floatRight: {
    float: "right",
    padding: "8px",
    background: "#fff",
    border: "1px solid #ccc"
  },
  clearfix: {
    clear: "both"
  }
};

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandVal: true,
      btnTxt: "Collapse All"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  sendState() {
    return this.state;
  }

  handleClick() {
    if (this.state.expandVal) {
      this.setState({
        expandVal: false,
        btnTxt: "Expand All"
      });
    } else {
      this.setState({
        expandVal: true,
        btnTxt: "Collapse All"
      });
    }
    console.log(this.state.expandVal);
  }
  render() {
    const { classes } = this.props;

    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <button className={classes.floatRight} onClick={this.handleClick}>
            {this.state.btnTxt}
          </button>

          <div className={classes.clearfix} />
          <ExpansionPanel
            defaultExpanded={true}
            expanded={this.state.expandVal}
            className={classes.root}
          >
            <ExpansionPanelSummary
              className={classes.accTitle}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.sections}>Basic Info</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <GridContainer>
                <GridItem xs={6} sm={6}>
                  <Table
                    tableData={[
                      ["Assessment Name", "2019 - Corn Assessement"],
                      ["Year", "2019"]
                    ]}
                    coloredColls={[0]}
                  />
                </GridItem>
                <GridItem xs={6} sm={6}>
                  <Table
                    tableData={[
                      ["Crop Zone", "Corn"],
                      ["Provider", "Field to market"]
                    ]}
                    coloredColls={[0]}
                  />
                </GridItem>
              </GridContainer>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            defaultExpanded={true}
            expanded={this.state.expandVal}
            className={classes.root}
          >
            <ExpansionPanelSummary
              className={classes.accTitle}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.sections}>Crop Zones</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <GridContainer>
                <GridItem xs={12} sm={12}>
                  <Table
                    tableData={[
                      [
                        "Farm 1 / Field 2 / Crop Zone X Farm 1 / Field 3 / Crop Zone Y"
                      ]
                    ]}
                    coloredColls={[0]}
                  />
                </GridItem>
              </GridContainer>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            defaultExpanded={true}
            expanded={this.state.expandVal}
            className={classes.root}
          >
            <ExpansionPanelSummary
              className={classes.accTitle}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.sections}>
                Landdb Summary
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <GridContainer>
                <GridItem xs={6} sm={6}>
                  <Table
                    tableData={[
                      ["Number of Crop Protection products", "10"],
                      ["Analysis of Fertilizers", "Accurate 90%"],
                      ["Yeild", "10H"]
                    ]}
                    coloredColls={[0]}
                  />
                </GridItem>
                <GridItem xs={6} sm={6}>
                  <Table
                    tableData={[
                      ["Number of Fertilizers", "20"],
                      [
                        "Aggregate seed rate and the seed variety",
                        "XYZ, ABC,ETC"
                      ]
                    ]}
                    coloredColls={[0]}
                  />
                </GridItem>
              </GridContainer>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(style)(Summary);
