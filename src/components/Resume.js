import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Document, Page } from "react-pdf";
import resume from "../utils/KBoedgesResume.pdf";

library.add(faDownload);

class Resume extends Component {
  render() {
    return (
      <div className="page resume p-5">
        <a href={resume} className="resume-download" download>
          <FontAwesomeIcon icon="download" /> Download Resume
        </a>
        <Document file={resume}>
          <Page pageNumber={1} />
        </Document>
      </div>
    );
  }
}

export default Resume;
