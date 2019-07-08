import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from "components/Table/Table.jsx";

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
    color: "#509ace",
    background: "#d1f4ff",
    padding: "10px",
    width: "100%"
  },

  accTitle: {
    fontWeight: "300",
    textAlign: "left",
    fontSize: "16px",
    color: "#555555",
    padding: "5px!important",
    margin: "0px!important"
  },
  root: {
    width: "100%",
    background: "#f7f7f7"
  },
  floatRight: {
    float: "right",
    padding: "8px",
    background: "#fff",
    border: "1px solid #ccc"
  },
  content: {
    margin: "0px"
  },
  clearfix: {
    clear: "both"
  },
  txtList: {
    padding: "4px",
    borderBottom: "#fff 2px dotted",
    textAlign: "left"
  }
};
class FetchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      show: false,
      expandVal: true,
      btnTxt: "Collapse All"
    };
    this.hideAlert = this.hideAlert.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  warningWithConfirmMessage() {
    this.setState({
      alert: (
        <SweetAlert
          warning
          style={{ display: "block", marginTop: "-100px" }}
          title="Are you sure?"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
          cancelBtnCssClass={
            this.props.classes.button + " " + this.props.classes.danger
          }
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showCancel
        />
      )
    });
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
  }
  hideAlert() {
    this.setState({
      alert: null
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.state.alert}
        <GridContainer justify="center">
          <GridItem xs={12} sm={12}>
            <button
              className={classes.floatRight}
              round
              color="white"
              onClick={this.handleClick}
            >
              {this.state.btnTxt}
            </button>

            <div className={classes.clearfix} />
            <ExpansionPanel
              id="panel01"
              defaultExpanded={true}
              expanded={this.state.expandVal}
              className={classes.expanded}
            >
              <ExpansionPanelSummary
                className={classes.accTitle}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.sections}>Section 01</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <GridContainer>
                  <GridItem xs={12} sm={12}>
                    <Table
                      tableHeaderColor={["danger"]}
                      tableHead={["Errors (3)"]}
                      tableData={[
                        [
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non nulla nisi. In non facilisis dolor."
                        ],
                        [
                          "ut dapibus libero. Morbi at turpis eu felis fringilla semper. Aenean mauris nisi, pretium eget consectetur vel."
                        ],
                        [
                          "Sed ultrices, dui non auctor varius, quam sem rutrum orci, ac vulputate urna magna vitae tortor."
                        ]
                      ]}
                      coloredColls={[0]}
                    />
                    <div className={classes.clearfix} />
                    <div className={classes.floatRight}>
                      {" "}
                      <Button
                        color="rose"
                        onClick={this.warningWithConfirmMessage.bind(this)}
                      >
                        Confirm and Proceed
                      </Button>
                    </div>{" "}
                    <div className={classes.clearfix} />
                    <Table
                      tableHeaderColor={["success"]}
                      tableHead={["Success (3)"]}
                      tableData={[
                        [
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non nulla nisi. In non facilisis dolor."
                        ],
                        [
                          "ut dapibus libero. Morbi at turpis eu felis fringilla semper. Aenean mauris nisi, pretium eget consectetur vel."
                        ],
                        [
                          "Sed ultrices, dui non auctor varius, quam sem rutrum orci, ac vulputate urna magna vitae tortor."
                        ]
                      ]}
                    />
                    <Table
                      tableHeaderColor={["warning"]}
                      tableHead={["Warnings (2)"]}
                      tableData={[
                        [
                          "ut dapibus libero. Morbi at turpis eu felis fringilla semper. Aenean mauris nisi, pretium eget consectetur vel."
                        ],
                        [
                          "Sed ultrices, dui non auctor varius, quam sem rutrum orci, ac vulputate urna magna vitae tortor."
                        ]
                      ]}
                    />
                  </GridItem>
                </GridContainer>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              id="panel01"
              defaultExpanded={true}
              expanded={this.state.expandVal}
              className={classes.expanded}
            >
              <ExpansionPanelSummary
                className={classes.accTitle}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.sections}>Section 02</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <GridContainer>
                  <GridItem xs={12} sm={12}>
                    <Table
                      tableHeaderColor={["danger"]}
                      tableHead={["Errors (2)"]}
                      tableData={[
                        [
                          "ut dapibus libero. Morbi at turpis eu felis fringilla semper. Aenean mauris nisi, pretium eget consectetur vel."
                        ],
                        [
                          "Sed ultrices, dui non auctor varius, quam sem rutrum orci, ac vulputate urna magna vitae tortor."
                        ]
                      ]}
                      coloredColls={[0]}
                    />
                    <div className={classes.clearfix} />
                    <div className={classes.floatRight}>
                      {" "}
                      <Button
                        color="rose"
                        onClick={this.warningWithConfirmMessage.bind(this)}
                      >
                        Confirm and Proceed
                      </Button>
                    </div>{" "}
                    <div className={classes.clearfix} />
                    <Table
                      tableHeaderColor={["success"]}
                      tableHead={["Success (1)"]}
                      tableData={[
                        [
                          "Sed ultrices, dui non auctor varius, quam sem rutrum orci, ac vulputate urna magna vitae tortor."
                        ]
                      ]}
                    />
                    <Table
                      tableHeaderColor={["warning"]}
                      tableHead={["Warnings (2)"]}
                      tableData={[
                        [
                          "ut dapibus libero. Morbi at turpis eu felis fringilla semper. Aenean mauris nisi, pretium eget consectetur vel."
                        ],
                        [
                          "Sed ultrices, dui non auctor varius, quam sem rutrum orci, ac vulputate urna magna vitae tortor."
                        ]
                      ]}
                    />
                  </GridItem>
                </GridContainer>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(style)(FetchData);
