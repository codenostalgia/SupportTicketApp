import uuid

class Ticket:
    def __init__(self, name, email, description):
        self.ticket_id = uuid.uuid4()
        self.name = name
        self.email = email
        self.description = description
