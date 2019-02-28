import "./targetblank"; // pro otvírání odkazů v novém okně
import { h, render } from "preact";
/** @jsx h */
import data from "./data";
import { getAge } from "./datehelper";

/*
const Calendar = () => (
  <div>
    {Object.entries(data).map(week => (
      <div>
        <div className="separator" id={`sep${week[0]}`}>• • •</div>
        <WeekTitle week={week} />
        <WeekText
          text={week[1].text}
        />
        <WeekDiv week={week} />
      </div>
    ))}
  </div>
);
*/
const Entry = ({ candidate }) => {
  const imgName = `${candidate.name.toLowerCase().replace(" ", "_")}.jpg`;

  return (
    <div className="entry">
      <img className="entry-img" alt={candidate.name} src={`http://data.irozhlas.cz/us-prezident-kandidati/fotky/${imgName}`} />
      <div className="entry-name">{candidate.name}</div>
      <div className="entry-age">{`${getAge(candidate.dob)} let`}</div>
      <div className="entry-desc">{candidate.desc}</div>
    </div>
  );
};

const Tablo = () => (
  <div id="tablo">
    {data.map(candidate => (
      <Entry candidate={candidate} />
    ))}
  </div>
);
// ========================================

render(<Tablo />, document.getElementById("kandidati"));
