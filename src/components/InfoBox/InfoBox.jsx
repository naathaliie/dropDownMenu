const InfoBox = ({ character }) => {
  /*The method Object.values() will return an array of ONLY the values (värden) from the object. 
   Each value corresponds to a property(egenskap) in the object. A property consists of a key and a value. 
   Same with Object.keys(). It will return an array of ONLY the keys */
  const valuestoPrint = Object.values(character);
  const keysToPrint = Object.keys(character);
  console.log(keysToPrint);
  console.log(valuestoPrint);

  return (
    <>
      <h1>INFOBOX!</h1>
      <ul className="infoBoxList">
        {keysToPrint.map((key, index) => (
          <li key={index}>
            {key}: {valuestoPrint[index]}
          </li>
        ))}
      </ul>
    </>
  );
};

export default InfoBox;
