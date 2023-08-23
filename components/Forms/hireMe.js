import React from "react";

class HireMeForm extends React.Component {
  render() {
    return <div id="ff-compose"></div>;
  }
  componentDidMount() {
    var script = document.createElement("script");
    script.id = "ff-script";
    script.src =
      "https://formfacade.com/include/102297505509517785082/form/1FAIpQLScdc-NhhButE9imfWuCSetkRRkrVgh9FFtbnSfvZOwIoan_Qg/classic.js?div=ff-compose";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }
}

export default HireMeForm;
