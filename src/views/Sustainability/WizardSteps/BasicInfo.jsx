import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.jsx";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import CFA from "assets/img/CFA_logo.svg";
import FTM from "assets/img/ftm_logo.svg";
const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  imgStyle: {
    padding: "12px 0",
    height: "100px",
    width: "70%"
  },
  spacer: {
    marginTop: "40px;"
  },
  inputAdornment: {
    position: "relative"
  },
  ...customSelectStyle,
  ...customCheckboxRadioSwitch
};

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assessmentname: "",
      assessmentnameState: "",
      yearSelect: "",
      cropSelect: "",
      checked: [24, 22],
      selectedValue: null,
      selectedEnabled: "b"
    };
  }
  sendState() {
    return this.state;
  }
  // function that returns true if value is email, false otherwise
  verifyEmail(value) {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  }
  // function that verifies if a string has a given length or not
  verifyLength(value, length) {
    if (value.length >= length) {
      return true;
    }
    return false;
  }
  change(event, stateName, type, stateNameEqualTo) {
    switch (type) {
      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  }
  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChange = name => event => {
    //this.setState({ [name]: event.target.checked });
    this.setState({ selectedValue: event.target.value });
  };

  isValidated() {
    if (this.state.assessmentnameState === "success") {
      return true;
    } else {
      if (this.state.assessmentnameState !== "success") {
        this.setState({ assessmentnameState: "error" });
      }
    }
    return false;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12}>
            <h4 className={classes.infoText}>
              Let's start with the basic information (with validation)
            </h4>
          </GridItem>

          <GridItem xs={12} sm={10}>
            <CustomInput
              success={this.state.assessmentnameState === "success"}
              error={this.state.assessmentnameState === "error"}
              labelText={
                <span>
                  Assessment Name : <small>(required)</small>
                </span>
              }
              id="assessmentname"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: event =>
                  this.change(event, "assessmentname", "length", 3),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    className={classes.inputAdornment}
                  />
                )
              }}
            />
          </GridItem>
          <div className={classes.clearfix} />

          <GridItem xs={12} sm={5}>
            <FormControl fullWidth className={classes.selectFormControl}>
              <InputLabel htmlFor="year-select" className={classes.selectLabel}>
                Choose Year
              </InputLabel>
              <Select
                MenuProps={{
                  className: classes.selectMenu
                }}
                classes={{
                  select: classes.select
                }}
                value={this.state.yearSelect}
                onChange={this.handleSimple}
                inputProps={{
                  name: "yearSelect",
                  id: "year-select"
                }}
              >
                <MenuItem
                  disabled
                  classes={{
                    root: classes.selectMenuItem
                  }}
                >
                  Choose Year
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                  }}
                  value="2"
                >
                  2014
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                  }}
                  value="3"
                >
                  2015
                </MenuItem>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={5}>
            <FormControl fullWidth className={classes.selectFormControl}>
              <InputLabel htmlFor="crop-select" className={classes.selectLabel}>
                Choose Crop
              </InputLabel>
              <Select
                required
                MenuProps={{
                  className: classes.selectMenu
                }}
                classes={{
                  select: classes.select
                }}
                value={this.state.cropSelect}
                onChange={this.handleSimple}
                inputProps={{
                  name: "cropSelect",
                  id: "year-cropSelect"
                }}
              >
                <MenuItem
                  disabled
                  classes={{
                    root: classes.selectMenuItem
                  }}
                >
                  Choose Year
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                  }}
                  value="2"
                >
                  Corn
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                  }}
                  value="3"
                >
                  Rice
                </MenuItem>
              </Select>
            </FormControl>
          </GridItem>
          <div className={classes.clearfix} />
        </GridContainer>
        <div className={classes.spacer} />
        <GridContainer justify="left">
          <GridItem xs={12} sm={12}>
            <div className={classes.spacer} />
            <h4 className={classes.infoText}>Choose from below Providers</h4>
          </GridItem>
          <div className={classes.clearfix} />
          <GridItem xs={12} sm={4} />
          <GridItem xs={12} sm={3}>
            <div className={classes.choiche}>
              <Radio
                checked={this.state.selectedValue === "a"}
                value="a"
                name="radio button demo"
                aria-label="A"
                tabIndex={-1}
                onClick={this.handleChange("ftm")}
                checkedIcon={
                  <img alt="" src={FTM} className={classes.imgStyle} />
                }
                icon={<img alt="" src={FTM} className={classes.imgStyle} />}
                classes={{
                  checked: classes.iconCheckboxChecked,
                  root: classes.iconCheckbox
                }}
              />
              <h6>Field to Market</h6>
            </div>
          </GridItem>
          <GridItem xs={12} sm={3}>
            <div className={classes.choiche}>
              <Radio
                checked={this.state.selectedValue === "b"}
                value="b"
                name="radio button demo"
                aria-label="A"
                onClick={this.handleChange("cfa")}
                checkedIcon={
                  <img alt="" src={CFA} className={classes.imgStyle} />
                }
                icon={<img alt="" src={CFA} className={classes.imgStyle} />}
                classes={{
                  checked: classes.iconCheckboxChecked,
                  root: classes.iconCheckbox
                }}
              />
              <h6>Cool Farm Alliance</h6>
            </div>
          </GridItem>
          <GridItem xs={12} sm={2} />
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(style)(BasicInfo);
