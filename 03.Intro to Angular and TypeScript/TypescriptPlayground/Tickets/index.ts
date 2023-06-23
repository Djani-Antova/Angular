interface TicketInterface {
    destination: string;
    price: number;
    status: string;
  }
  
  class Ticket implements TicketInterface {
    destination: string;
    price: number;
    status: string;
  
    constructor(destination: string, price: number, status: string) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  
  function sortTickets(tickets: string[], sortingCriteria: string): Ticket[] {
    const output: Ticket[] = [];
  
    tickets.forEach((ticketDesc) => {
      const [destination, price, status] = ticketDesc.split('|');
      const newTicket = new Ticket(destination, parseFloat(price), status);
      output.push(newTicket);
    });
  
    switch (sortingCriteria) {
      case 'destination':
        output.sort((a, b) => a.destination.localeCompare(b.destination));
        break;
      case 'price':
        output.sort((a, b) => a.price - b.price);
        break;
      case 'status':
        output.sort((a, b) => a.status.localeCompare(b.status));
        break;
      default:
        break;
    }
  
    return output;
  }
  
  const tickets: string[] = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed',
  ];
  const sortingCriteria: string = 'destination';
  
  const sortedTickets: Ticket[] = sortTickets(tickets, sortingCriteria);
  console.log(sortedTickets);
  