import "./App.css";
import SupportTickets from "./components/SupportTickets";
import AddTicket from "./components/AddTicket";
import { addTicket, fetchTickets } from "./axios/axios_request";
import React from "react";
import { useEffect } from "react";

function App() {
  const [tickets, setTickets] = React.useState([]);

  useEffect(() => {
    fetchTickets()
      .then((res) => {
        setTickets((prev) => res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.msg);
      });
  }, []);

  function ticketsUpdate(ticket) {
    console.log("ticket added");
    addTicket(ticket)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    fetchTickets()
      .then((res) => {
        setTickets((prev) => res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App Container-fluid">
      <AddTicket ticketsUpdate={ticketsUpdate} />
      <SupportTickets tickets={tickets} />
    </div>
  );
}

export default App;
