/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-danger */
import "./targetblank"; // pro otvírání odkazů v novém okně
import { h, render, Component } from "preact";
/** @jsx h */
import { getAge } from "./datehelper";

const DisplayBox = ({ candidate, handleClick }) => {
  const imgName = `${candidate.name.toLowerCase().replace("ová", "").replace(" ", "_")}.jpg`;

  return (
    <div>
      <div className="displaybox-overlay" />
      <div className="displaybox">
        <div className="displaybox-top">
          <div className="displaybox-img-container">
            <img className="displaybox-img" alt={candidate.name} src={`http://data.irozhlas.cz/us-prezident-kandidati/fotky/${imgName}`} />
          </div>
          <div className="displaybox-header">
            <div className="displaybox-name">{candidate.name}</div>
            <div className="displaybox-blurb">{candidate.blurb}</div>
            <div className="displaybox-age">{`${getAge(candidate.dob)} let`}</div>
          </div>
          <div role="button" tabIndex="0" className="displaybox-close" onClick={() => handleClick("close")}>✕</div>
        </div>
        <div className="displaybox-desc" dangerouslySetInnerHTML={{ __html: candidate.desc }} />
        <div className="displaybox-nav">
          <div role="button" tabIndex="0" className="displaybox-nav-arrow" onClick={() => handleClick("left")}>‹</div>
          <div role="button" tabIndex="0" className="displaybox-nav-arrow" onClick={() => handleClick("right")}>›</div>
        </div>
      </div>
    </div>
  );
};


const Entry = ({ candidate, id, handleClick }) => {
  const imgName = `${candidate.name.toLowerCase().replace("ová", "").replace(" ", "_")}.jpg`;

  return (
    <div className="entry" role="button" tabIndex="0" onClick={() => handleClick(id)}>
      <img className="entry-img" alt={candidate.name} src={`http://data.irozhlas.cz/us-prezident-kandidati/fotky/${imgName}`} />
      <div className="entry-info">
        <div className="entry-name">{candidate.name}</div>
        <div className="entry-blurb">{candidate.blurb}</div>
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
      selectedCand: null,
      data: [],
    };
    this.handleEntryClick = this.handleEntryClick.bind(this);
    this.handleBoxClick = this.handleBoxClick.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  componentDidMount() {
    this.loadData();
    document.documentElement.addEventListener("keyup", this.handleKeys);
    document.documentElement.addEventListener("mouseup", this.handleMouseUp);
  }

  loadData() {
    const xhr = new XMLHttpRequest();
    const url = "https://data.irozhlas.cz/us-prezident-kandidati/data/data.json";
    xhr.open("get", url, true);
    xhr.onload = () => {
      this.setState({ data: JSON.parse(xhr.responseText) });
    };
    xhr.send();
  }

  handleKeys(event) {
    const { visibleBox, selectedCand, data } = this.state;
    if (visibleBox) {
      if (event.key === "Escape") {
        this.setState({
          visibleBox: false,
        });
        document.documentElement.style.overflow = "auto";
      } else if (event.key === "ArrowRight") {
        this.setState({
          selectedCand: (selectedCand + 1) % data.length,
        });
      } else if (event.key === "ArrowLeft") {
        this.setState({
          selectedCand: selectedCand === 0 ? data.length - 1 : selectedCand - 1,
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
        document.documentElement.style.overflow = "auto";
      }
    }
  }

  handleEntryClick(id) {
    this.setState({
      visibleBox: true,
      selectedCand: id,
    });
    document.documentElement.style.overflow = "hidden";
  }

  handleBoxClick(action) {
    const { selectedCand, data } = this.state;
    if (action === "close") {
      this.setState({
        visibleBox: false,
      });
      document.documentElement.style.overflow = "auto";
    } else if (action === "right") {
      this.setState({
        selectedCand: (selectedCand + 1) % data.length,
      });
    } else if (action === "left") {
      this.setState({
        selectedCand: selectedCand === 0 ? data.length - 1 : selectedCand - 1,
      });
    }
  }

  render() {
    const { visibleBox, selectedCand, data } = this.state;
    const displayBox = visibleBox
      ? <DisplayBox candidate={data[selectedCand]} handleClick={this.handleBoxClick} />
      : null;

    return (
      <div id="tablo">
        {displayBox}
        {data.map((candidate, candId) => (
          <Entry candidate={candidate} id={candId} handleClick={this.handleEntryClick} />
        ))}
      </div>
    );
  }
}

// ========================================

render(<Tablo />, document.getElementById("kandidati"));
