function Assignment() {
  const handleChange = (item) => {
    console.log("Hi sabita");
  };
  const list = {
    Name: "",
    Address: "",
    phoneNumber: "",
    Salegroup: "",
    NPI: "",
  };
  const [person, setPerson] = React.useState("");
  return (
    <>
      <div>
        <div className="box">
          <div className="heading">Entring Data</div>
        </div>

        <form>
          <label for="fname" className="name">
            Name
          </label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            className="box1"
            value={handleChange}
            placeholder="Enter Name"
          />

          <label for="fname" className="address">
            Address
          </label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={handleChange}
            className="box2"
            placeholder="Enter Address"
          />
          <label for="fname" className="phonenumber">
            Phone Number
          </label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            className="box3"
            value={handleChange}
            placeholder="Enter Phone Number"
          />
          <label for="fname" className="salegroup">
            Sale Group
          </label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            className="box4"
            value={handleChange}
            placeholder="Enter Sale Group"
          />
          <label for="fname" className="npi">
            NPI
          </label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            className="box5"
            placeholder="Enter NPI"
          />

          <button
            type="submit"
            form="nameform"
            className="button"
            onClick={() => handleChange()}
          >
            <div className="Save">save</div>
          </button>
        </form>
      </div>
    </>
  );
}
export default Assignment;
