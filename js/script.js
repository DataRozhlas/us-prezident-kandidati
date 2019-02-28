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
const Entry = ({ candidate }) => (
  <div class="entry">
    <img src={`http://data.irozhlas.cz/us-prezident-kandidati/fotky/${candidate.photo}`} />
    {candidate.name}
  </div>
);

const Tablo = () => (
  <div id="tablo">
    {data.map(candidate => (
      <Entry candidate={candidate} />
    ))}
  </div>
);
// ========================================

render(<Tablo />, document.getElementById("kandidati"));
