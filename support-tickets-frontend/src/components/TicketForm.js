import * as React from "react";

const TicketForm = (props) => {
  const [ticket, setTicket] = React.useState({
    name: "",
    email: "",
    description: "",
  });

  function changehandler(e) {
    setTicket((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.ticketsUpdate(ticket);
  }

  return (
    <div>
      <form className="ticket-form border " style={{ margin: "2%" }}>
        <b>CREATE SUPPORT TICKET</b>
        <br />
        <br />
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={changehandler}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={changehandler}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Issue Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            onChange={changehandler}
          ></input>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
