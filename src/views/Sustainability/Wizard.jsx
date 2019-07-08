import React from "react";

// core components
import Wizard from "components/Wizard/Wizard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import BasicInfo from "./WizardSteps/BasicInfo.jsx";
import CropZones from "./WizardSteps/CropZones.jsx";
import FetchData from "./WizardSteps/FetchData.jsx";
import ManualData from "./WizardSteps/ManualData.jsx";
import Summary from "./WizardSteps/Summary.jsx";

class WizardView extends React.Component {
  render() {
    return (
      <GridContainer justify="left">
        <GridItem xs={12} sm={11}>
          <Wizard
            validate
            steps={[
              {
                stepName: "Basic Info",
                stepComponent: BasicInfo,
                stepId: "1"
              },
              {
                stepName: "Crop Zones",
                stepComponent: CropZones,
                stepId: "2"
              },
              {
                stepName: "Fetch Data",
                stepComponent: FetchData,
                stepId: "3"
              },
              {
                stepName: "Manual Data",
                stepComponent: ManualData,
                stepId: "4"
              },
              {
                stepName: "Summary",
                stepComponent: Summary,
                stepId: "5"
              }
            ]}
            title="Create Your Assessment "
            subtitle="Please Fill in this information."
            finishButtonClick={e => console.log(e)}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default WizardView;
