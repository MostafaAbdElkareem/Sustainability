import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Add from "@material-ui/icons/Add";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { Link } from "react-router-dom";
const style = {
  customCardContentClass: {
    paddingLeft: "0",
    paddingRight: "0"
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  actionButton: {
    padding: "3px",
    textAlign: "right"
  },
  floatRight: {
    float: "right",
    margin: "20px 0",
    background: "#8ab842",
    color: "#fff",
    padding: "15px",
    fontSize: "22px"
  },
  add: {
    margin: "0 4px -5px 7px"
  }
};

function Assesments({ ...props }) {
  const { classes } = props;
  const roundButtons = [
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button
        color={prop.color}
        simple
        className={classes.actionButton}
        key={key}
      >
        <prop.icon className={classes.icon} />
      </Button>
    );
  });
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Link className={classes.floatRight} to="/dmin/Sustainability">
          Add New Assessment
          <Add className={classes.add} />
        </Link>

        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Assessemnt List</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              striped
              tableHead={["Assement Name", "Year", "Crop", "Provider", ""]}
              tableData={[
                [
                  "Dakota Lorem ipsum dolor sit amet, consectetur ",
                  "2016",
                  "Corn",
                  "F2M",
                  roundButtons
                ],
                [
                  "Duis convallis arcu ac luctus posuere",
                  "2017",
                  "Corn",
                  "CFA",
                  roundButtons
                ],
                [
                  "Sed convallis nibh non neque bibendum ",
                  "2018",
                  "Rice",
                  "CFA",
                  roundButtons
                ],
                [
                  "Etiam commodo sapien sodales risu",
                  "2018",
                  "Corn",
                  "CFA",
                  roundButtons
                ],
                [
                  "Quisque eget magna a purus condimentum",
                  "2019",
                  "Rice",
                  "F2M",
                  roundButtons
                ],
                [
                  "Maecenas suscipit arcu in ligula cursus,",
                  "2019",
                  "Rice",
                  "CFA",
                  roundButtons
                ]
              ]}
              coloredColls={[1, 3]}
              colorsColls={["info", "warning"]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(style)(Assesments);
