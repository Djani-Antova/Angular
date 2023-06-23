var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function sortTickets(tickets, sortingCriteria) {
    var output = [];
    tickets.forEach(function (ticketDesc) {
        var _a = ticketDesc.split('|'), destination = _a[0], price = _a[1], status = _a[2];
        var newTicket = new Ticket(destination, parseFloat(price), status);
        output.push(newTicket);
    });
    switch (sortingCriteria) {
        case 'destination':
            output.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
            break;
        case 'price':
            output.sort(function (a, b) { return a.price - b.price; });
            break;
        case 'status':
            output.sort(function (a, b) { return a.status.localeCompare(b.status); });
            break;
        default:
            break;
    }
    return output;
}
var tickets = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed',
];
var sortingCriteria = 'destination';
var sortedTickets = sortTickets(tickets, sortingCriteria);
console.log(sortedTickets);
