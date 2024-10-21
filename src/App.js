import "./App.scss";
import Toolbar from "./components/Toolbar";
import Card from "./components/Card";
import Redpin from "./components/Redpin";
import Details from "./components/Details";
import FilterView from "./components/FilterView";
import { ReactComponent as RelocateIcon } from "./Assets/relocate.svg";
import { ReactComponent as PlusIcon } from "./Assets/plus.svg";
import { ReactComponent as MinusIcon } from "./Assets/Minus.svg";
import { ReactComponent as BlueZone } from "./Assets/Blue zone.svg";
import GoogleIcon from "./Assets/Google.png";
import LollypopIcon from "./Assets/Lollypop studio.png";
import InternshalaIcon from "./Assets/Internshala_favicon radius 3px.png";
import Alcon from "./Assets/Alcon.png";
import React, { useState } from "react";
import _ from "lodash";

const internshipsArray = [
  {
    logoKey: InternshalaIcon,
    top: "20px",
    left: "100px",
    jobID: 1,
    jobName: "Product Manager",
    companyID: 1,
    companyName: "Internshala",
    rating: 5,
    location: "Gurugram, Haryana",
    compensation: "₹ 25,000/month",
    duration: "6 months",
    postedOn: "Posted 2 days ago",
    aboutCompany:
      "Internshala is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the big four technology companies along with Amazon, Facebook, and Apple.",
    aboutIntership: [
      "As a graphic design intern, you will assist with technical tasks such as creating hard and soft copy files, writing reports and mailing, printing and stuffing materials.",
      "You will also shadow a graphic designer, attend meetings, compile databases and assist the design team with creative work related to existing projects."
    ],
    skills: [
      "Adobe photoshop",
      "Adobe Illustrator",
      "HTML",
      "Adobe After Effects",
      "Figma"
    ],
    highlight: false
  },
  {
    logoKey: GoogleIcon,
    top: "130px",
    left: "180px",
    jobID: 2,
    jobName: "Graphics Designer",
    companyID: 2,
    companyName: "Google",
    rating: 5,
    location: "Gurugram, Haryana",
    compensation: "₹ 25,000/month",
    duration: "6 months",
    postedOn: "Posted 2 days ago",
    aboutCompany:
      "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the big four technology companies along with Amazon, Facebook, and Apple.",
    aboutIntership: [
      "As a graphic design intern, you will assist with technical tasks such as creating hard and soft copy files, writing reports and mailing, printing and stuffing materials.",
      "You will also shadow a graphic designer, attend meetings, compile databases and assist the design team with creative work related to existing projects."
    ],
    skills: [
      "Adobe photoshop",
      "Adobe Illustrator",
      "HTML",
      "Adobe After Effects",
      "Figma"
    ],
    highlight: false
  },
  {
    logoKey: LollypopIcon,
    top: "90px",
    left: "0px",
    jobID: 3,
    jobName: "UI Designer",
    companyID: 3,
    companyName: "Lollypop Designs Pvt Ltd",
    rating: 4,
    location: "Hauz Khas, New Delhi",
    compensation: "₹ 25,000/month",
    duration: "6 months",
    postedOn: "Posted 15 days ago",
    aboutCompany:
      "Lollypop Designs is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the big four technology companies along with Amazon, Facebook, and Apple.",
    aboutIntership: [
      "As a graphic design intern, you will assist with technical tasks such as creating hard and soft copy files, writing reports and mailing, printing and stuffing materials.",
      "You will also shadow a graphic designer, attend meetings, compile databases and assist the design team with creative work related to existing projects."
    ],
    skills: [
      "Adobe photoshop",
      "Adobe Illustrator",
      "HTML",
      "Adobe After Effects",
      "Figma"
    ],
    highlight: false
  },
  {
    logoKey: Alcon,
    top: "200px",
    left: "200px",
    jobID: 4,
    jobName: "Visual Designer",
    companyID: 4,
    companyName: "Alcon",
    rating: 3,
    location: "Noida, Uttar Pradesh",
    compensation: "₹ 20,000/month",
    duration: "6 months",
    postedOn: "Posted 7 days ago",
    aboutCompany:
      "Alcon is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the big four technology companies along with Amazon, Facebook, and Apple.",
    aboutIntership: [
      "As a graphic design intern, you will assist with technical tasks such as creating hard and soft copy files, writing reports and mailing, printing and stuffing materials.",
      "You will also shadow a graphic designer, attend meetings, compile databases and assist the design team with creative work related to existing projects."
    ],
    skills: [
      "Adobe photoshop",
      "Adobe Illustrator",
      "HTML",
      "Adobe After Effects",
      "Figma"
    ],
    highlight: false
  }
];

const App = () => {
  const [internships, setInternships] = useState(internshipsArray);
  const [detailIndex, setDetailIndex] = useState(null);
  const [filtersView, setFilterView] = useState(false);

  // Highlight or Open seletcted card
  const highlightCard = (id) => {
    if (window.screen.width < 992) {
      setDetailIndex(id - 1);
      return;
    }
    const updatedArray = _.cloneDeep(internshipsArray);
    const selectedIndex = updatedArray.findIndex(
      (internship) => id === internship.jobID
    );
    updatedArray[selectedIndex].highlight = true;
    setInternships(updatedArray);
  };

  const openDetail = (id) => {
    setDetailIndex(id - 1);
  };

  const closeDetail = () => {
    setDetailIndex(null);
  };

  const openFilters = () => {
    setFilterView(true);
  };

  const closeFilters = () => {
    setFilterView(false);
  };

  return (
    <div className="Wrapper">
      <Toolbar openFilter={openFilters} />
      <section className="Main-section">
        <div className="Left">
          {internships.map((internship) => {
            return (
              <Card
                data={internship}
                key={internship.jobID}
                highlight={internship.highlight}
                requestOpen={openDetail}
              />
            );
          })}
        </div>
        <div className="Right">
          <div className="Zoom">
            <PlusIcon className="Zoom-icon" />
            <MinusIcon className="Zoom-icon" />
          </div>
          <div className="Zone-wrapper">
            <BlueZone className="Blue-zone" />
            <span>Hauz Khas</span>
            {internships.map((intership) => {
              return (
                <Redpin
                  transformVal={1 - (intership.jobID - 1) * 0.2}
                  data={intership}
                  key={intership.jobID}
                  highlight={highlightCard}
                />
              );
            })}
          </div>
          <RelocateIcon className="Relocate" />
          {detailIndex != null ? (
            <Details
              data={internships[detailIndex]}
              closeDetail={closeDetail}
            />
          ) : null}
          {filtersView ? <FilterView requestClose={closeFilters} /> : null}
        </div>
      </section>
    </div>
  );
};

export default App;
