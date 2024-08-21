import pickle
from entities.Ticket import Ticket
from pathlib import Path


class TicketService:

    def __init__(self) -> None:

        my_file = Path("./repo/database.pkl")

        if not my_file.is_file():
            with open(my_file, "ab") as f:
                pickle.dump(
                    Ticket("Natalia Romanoff", "Blackwidow@gmail.com", 
                           "I have installed the VPN as per given instructions in the manual, But I'm facing issues with my Download & Upload speeds after using VPN"), f)
                pickle.dump(
                    Ticket("Steve Rodgers", "captainamerica@gmail.com", 
                           "I am facing issues related to some settings conflict between my Antivirus software & VPN, Could you please help me solve it??"), f)
                pickle.dump(Ticket("Tony Starc", "ironman@gmail.com",
                            "I tried integrating the ChatBot on my website, but its not able to pickup the configuration file, how to resolve it?"), f)
                pickle.dump(Ticket("Thor", "Thunder@gmail.com",
                            "My hammer is not lightening anymore, I think someone hacked the circuit within it, can we track this breach?"), f)

    def fetchTickets(self):
        tickets = []
        with open("./repo/database.pkl", "rb") as f:
            while True:
                try:
                    tickets.append(pickle.load(f))
                except EOFError:
                    break

        return tickets

    def addTickets(self, ticket):
        with open("./repo/database.pkl", "ab") as file:
            pickle.dump(ticket, file)
