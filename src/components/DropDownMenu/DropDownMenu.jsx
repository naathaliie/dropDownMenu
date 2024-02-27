import InfoBox from "../InfoBox/InfoBox";
import charactersJson from "../json/characteres.json";
import { useState } from "react";

const DropDownMenu = () => {
  /* useState so we can collect the specific character that the user clicks on. 
  Its default value is set to null (has no value) because no choice has been made untill the user makes one */
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  /* What will happen on the event onChange */
  const handleOnChange = (event) => {
    const selectedName = event.target.value; //Targets the value of the event
    //.find() will search the charactersJson after a match of the selected name
    const character = charactersJson.find(
      (char) => char.firstname === selectedName
    );

    //updates the state of "selectedCharacter" to the found character
    setSelectedCharacter(character);
  };

  return (
    <div className="dropDownMenyDiv">
      {/* Lable for the dropdown menu, htmlFor is needed to connect the lable with right tag */}
      <label htmlFor="option-select">Välj en karaktär</label>

      {/* Row33: select-tag (is like a dropdown). id is needed if you have a label, this makes you connect it with the right lable.  
          Row34: The first option, we don´t give this a value since its just information to the user.
          Row35: The array.map() to go through every element.
          Row36-42: For every element we want to create a new option to the select-tag. And to use the information later 
          we set the value to someting unik for this element, like the firstname. And also we want to output 
          to the user the characters foirstname and lastname (row 37)*/}
      <select name="characters" id="option-select" onChange={handleOnChange}>
        <option value="">--Välj en karaktär--</option>
        {charactersJson.map((caracter, index) => {
          return (
            <option
              key={`${index}`}
              value={`${caracter.firstname}`}
            >{`${caracter.firstname} ${caracter.lastname} `}</option>
          );
        })}
      </select>

        {/* IF selectedCharacter isn´t null (its default value) we will call the komponent/function infobox and send the selectedCharacter to it */}
      {selectedCharacter && <InfoBox character={selectedCharacter} />}
    </div>
  );
};

export default DropDownMenu;
