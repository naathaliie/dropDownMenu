const InfoBox = ({ character }) => {

  /*The method Object.values() will return you an array of the values (värden) from an object. 
   Each value corresponds to a property(egenskap) in the object. A property consists of a key and a value. 
   Same with Object.keys(). It will return an array of the keys */
  const valuestoPrint = Object.values(character);
  const keysToPrint = Object.keys(character);

  return (
    <>
      <h1>INFOBOX!</h1>
      <ul className="infoBoxList">
        {keysToPrint.map((key, index) => (
          <li key={index}>{key}: {valuestoPrint[index]}</li>
        ))}
      </ul>
    </>
  );
};

export default InfoBox;
