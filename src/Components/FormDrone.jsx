import { useContext } from "react";
import { createNewContext } from "../context/userProfileContext";

function FormDrone() {
  const { userDetails, setUserDetails } = useContext(createNewContext);

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      basic: {
        ...userDetails.basic,
        [name]: value,
      },
    });
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          autocomplete="off"
          value={userDetails.basic.name}
          onChange={handleNameChange}
        />
        <label htmlFor="">Place</label>
        <input
          type="text"
          name="place"
          autocomplete="off"
          value={userDetails.basic.place}
          onChange={handleNameChange}
        />
        <label htmlFor="">Mobile Number</label>
        <input
          type="number"
          autocomplete="off"
          name="number"
          value={userDetails.basic.number}
          onChange={handleNameChange}
        />
      </div>
    </div>
  );
}

export default FormDrone;
