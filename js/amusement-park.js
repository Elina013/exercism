function createVisitor(name, age, ticketId) {
    return {
      name: name,
      age: age,
      ticketId: ticketId,
    };
  }
  
  function revokeTicket(visitor) {
    visitor.ticketId = null;
    return visitor;
  }
  
  function ticketStatus(tracking, ticketId) {
    if (!(ticketId in tracking)) {
      return 'unknown ticket id';
    } else if (tracking[ticketId] === null) {
      return 'not sold';
    } else {
      return 'sold to ' + tracking[ticketId];
    }
  }
  
  function simpleTicketStatus(tracking, ticketId) {
    if (!(ticketId in tracking) || tracking[ticketId] === null) {
      return 'invalid ticket !!!';
    } else {
      return tracking[ticketId];
    }
  }
  
  function gtcVersion(visitor) {
    if (visitor.gtc && visitor.gtc.version) {
      return visitor.gtc.version;
    }
  }
  
  // Example usage:
  const visitor = createVisitor('Verena Nardi', 45, 'H32AZ123');
  console.log(visitor);
  
  const visitorWithRevokedTicket = revokeTicket(visitor);
  console.log(visitorWithRevokedTicket);
  
  const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
  };
  
  console.log(ticketStatus(tickets, 'RE90VAW7'));
  console.log(ticketStatus(tickets, '0H2AZ123'));
  console.log(ticketStatus(tickets, '23LA9T41'));
  
  console.log(simpleTicketStatus(tickets, '23LA9T41'));
  console.log(simpleTicketStatus(tickets, '0H2AZ123'));
  console.log(simpleTicketStatus(tickets, 'RE90VAW7'));
  
  const visitorNew = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
      signed: true,
      version: '2.1',
    },
  };
  
  const visitorOld = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
  };
  
  console.log(gtcVersion(visitorNew));
  console.log(gtcVersion(visitorOld));
  