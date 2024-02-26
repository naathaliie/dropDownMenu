import InfoBox from "../InfoBox/InfoBox";
import charactersJson from "../json/characteres.json";

const DropDownMenu = () => {
    /* What will happen on the event onChange */
    const handleOnChange = (event) => {
        const selectedName = event.target.value;
        console.log("Du klickade på", selectedName);
        <InfoBox/>
};


  return (
    <div className="dropDownMenyDiv">
      <label htmlFor="option-select">Välj en karaktär</label>

      <select name="characters" id="option-select" onChange={handleOnChange}>
        <option value="">--Välj en karaktär--</option>
        {charactersJson.map((caracter, index) => {
          console.log();
          return (
            <option
              key={`${index}`}
              value={`${caracter.firstname}`}
            >{`${caracter.firstname} ${caracter.lastname} `}</option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDownMenu;
