from fastapi import FastAPI
import random
from entities.Ticket import Ticket
from services.TicketService import TicketService
from fastapi import Request
from fastapi.middleware.cors import CORSMiddleware
import json
from fastapi.responses import JSONResponse


app = FastAPI()

allowed_origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

ticketServiceImpl = TicketService()


@app.post("/add")
async def addTicket(r: Request):
    ticket = await r.json()
    ticket = Ticket(ticket["name"], ticket["email"], ticket["description"])
    ticketServiceImpl.addTickets(ticket)
    return "success"


@app.get("/tickets")
async def fetch():
    return ticketServiceImpl.fetchTickets()


@app.get("/")
async def home():
    return "Home Page"
