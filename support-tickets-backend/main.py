from fastapi import FastAPI, Response
import random
from entities.Ticket import Ticket
from services.TicketService import TicketService
from fastapi import Request
from fastapi.middleware.cors import CORSMiddleware
import json


app = FastAPI()

ticketServiceImpl = TicketService()

allowed_origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def home():
    return "Home Page"


@app.post("/add")
async def addTicket(r: Request):
    ticket = await r.json()
    ticket = Ticket(ticket["name"], ticket["email"], ticket["description"])
    ticketServiceImpl.addTickets(ticket)
    return "success"


@app.get("/tickets")
async def fetch():
    return ticketServiceImpl.fetchTickets()


@app.delete("/tickets/{id}")
async def deleteTicket(id):
    print("ID: ", id)
    ticketServiceImpl.deleteTicket(id)
    return "DELETED"
