/* eslint-disable react/no-danger */
import "./targetblank"; // pro otvírání odkazů v novém okně
import { h, render, Component } from "preact";
/** @jsx h */
import data from "./data";
import { getAge } from "./datehelper";

const DisplayBox = ({ candidate, handleClick }) => {
  const imgName = `${candidate.name.toLowerCase().replace(" ", "_")}.jpg`;

  return (
    <div className="displaybox" onFocusOut={e => handleClick("close", e)}>
      <div role="button" tabIndex="0" className="displaybox-close" onClick={e => handleClick("close", e)}>✕</div>
      <img className="displaybox-img" alt={candidate.name} src={`http://data.irozhlas.cz/us-prezident-kandidati/fotky/${imgName}`} />
      <div className="displaybox-header">
        <div className="displaybox-name">{candidate.name}</div>
        <div className="displaybox-age">{`${getAge(candidate.dob)} let`}</div>
      </div>
      <div className="displaybox-desc" dangerouslySetInnerHTML={{ __html: candidate.desc }} />
    </div>
  );
};


const Entry = ({ candidate, handleClick }) => {
  const imgName = `${candidate.name.toLowerCase().replace(" ", "_")}.jpg`;

  return (
    <div className="entry" role="button" tabIndex="0" onClick={() => handleClick(candidate)}>
      <img className="entry-img" alt={candidate.name} src={`http://data.irozhlas.cz/us-prezident-kandidati/fotky/${imgName}`} />
      <div className="entry-info">
        <div className="entry-name">{candidate.name}</div>
        <div className="entry-age">{`${getAge(candidate.dob)} let`}</div>
        <div className="entry-desc">{candidate.desc.split("<p>")[1]}</div>
      </div>
    </div>
  );
};

class Tablo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleBox: false,
      selectedCand: "Cory Booker",
    };
    this.handleEntryClick = this.handleEntryClick.bind(this);
    this.handleBoxClick = this.handleBoxClick.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  componentDidMount() {
    document.documentElement.addEventListener("keyup", this.handleKeys);
    document.documentElement.addEventListener("mouseup", this.handleMouseUp);
  }

  handleKeys(event) {
    const { visibleBox } = this.state;
    if (event.key === "Escape") {
      if (visibleBox) {
        this.setState({
          visibleBox: false,
        });
      }
    }
  }

  handleMouseUp(event) {
    const { visibleBox } = this.state;
    if (visibleBox) {
      const box = document.getElementsByClassName("displaybox")[0];
      if (event.target !== box && !box.contains(event.target)) {
        this.setState({
          visibleBox: false,
        });
      }
    }
  }

  handleEntryClick(candidate) {
    this.setState({
      visibleBox: true,
      selectedCand: candidate,
    });
    document.documentElement.style.overflow = "hidden";
  }

  handleBoxClick(action, event) {
    if (action === "close") {
      this.setState({
        visibleBox: false,
      });
      document.documentElement.style.overflow = "auto";
    }
  }

  render() {
    const { visibleBox, selectedCand } = this.state;
    const displayBox = visibleBox
      ? <DisplayBox candidate={selectedCand} handleClick={this.handleBoxClick} />
      : null;

    return (
      <div id="tablo">
        {displayBox}
        {data.map(candidate => (
          <Entry candidate={candidate} handleClick={this.handleEntryClick} />
        ))}
      </div>
    );
  }
}

// ========================================

render(<Tablo />, document.getElementById("kandidati"));
