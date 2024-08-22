import * as React from "react";
import { useEffect } from "react";
import { fetTickets } from "../axios/axios_request";

const SupportTickets = (props) => {
  function deleteHandler(ticket) {
    props.deleteTicket(ticket);
  }

  return (
    <div className="border" style={{ marginLeft: "1%", marginTop: "1%" }}>
      {props.tickets.map((ticket, ind) => {
        return (
          <div
            className="col-sm-5 mycard"
            key={ticket.ticket_id}
            style={{ float: "left", margin: "1%" }}
          >
            <div className="card" style={{ minHeight: "200px" }}>
              <div className="card-header">
                <h4>{ticket.name}</h4>
                <h5>{ticket.email}</h5>
              </div>
              <ul
                className="list-group list-group-flush"
                style={{ padding: "10px" }}
              >
                {ticket.description}
                <button
                  type="button"
                  className="card-button btn btn-danger"
                  onClick={(e) => {
                    deleteHandler(ticket);
                  }}
                >
                  DELETE
                </button>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SupportTickets;
