import "./App.css";
import SupportTickets from "./components/SupportTickets";
import TicketForm from "./components/TicketForm";
import {
  addTicket,
  fetchTickets,
  deleteTicketRequest,
} from "./axios/axios_request";
import React from "react";
import { useEffect } from "react";
import Header from "./components/Header";

function App() {
  const [tickets, setTickets] = React.useState([]);

  useEffect(() => {
    fetchTickets()
      .then((res) => {
        setTickets((prev) => res.data);
      })
      .catch((err) => {
        console.log(err.msg);
      });
  }, []);

  function ticketsUpdate(ticket) {
    console.log("ticket added");
    addTicket(ticket)
      .then((res) => {
        fetchTickets()
          .then((res) => {
            console.log("New data fetched after Add request: ", res);
            setTickets((prev) => res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteTicket(ticket) {
    console.log("ticket deleted");
    deleteTicketRequest(ticket.ticket_id)
      .then((res) => {
        fetchTickets()
          .then((res) => {
            console.log("New data fetched after delete request: ", res);
            setTickets((prev) => res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <nav className="navbar sticky-top bg-primary Noto Sans">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Header />
          </a>
        </div>
      </nav>

      <div className="Container main-body">
        <TicketForm className="add-ticket" ticketsUpdate={ticketsUpdate} />
        <SupportTickets
          className="tickets-body"
          tickets={tickets}
          deleteTicket={deleteTicket}
        />
      </div>
    </div>
  );
}

export default App;
