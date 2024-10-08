import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

function addTicket(ticket) {
  return axios({
    method: "post",
    url: "/add",
    data: ticket,
  });
}

function fetchTickets() {
  return axios({
    method: "get",
    url: "/tickets",
  });
}

function deleteTicketRequest(id) {
  return axios({
    method: "delete",
    url: `/tickets/${id}`,
  });
}

export { addTicket, fetchTickets, deleteTicketRequest };
