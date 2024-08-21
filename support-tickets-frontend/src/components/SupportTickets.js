import * as React from "react";
import { useEffect } from "react";
import { fetTickets } from "../axios/axios_request";

const SupportTickets = (props) => {
  return (
    <div className="border" style={{ marginLeft: "1%", marginTop: "1%" }}>
      {props.tickets.map((ticket, ind) => {
        return (
          <div
            className="col-sm-5"
            key={ind}
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
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SupportTickets;
