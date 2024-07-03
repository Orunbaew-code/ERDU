function loadChatMessages(groupId) {
    // Send AJAX request to server with groupId
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/api/chat/messages/${groupId}`);
    xhr.onload = function() {
      // Parse response and update #chat-messages
      const messages = JSON.parse(xhr.responseText);
      // ... dynamically populate #chat-messages with message details
    };
    xhr.send();
  }
  
  function sendMessage(message) {
    // Send POST request to server with group/user ID and message
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `/api/chat/send`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      // Update #chat-messages with sent message and clear input
      // ... implement message sending and UI update
    };
    xhr.send(JSON.stringify({ message }));
  }