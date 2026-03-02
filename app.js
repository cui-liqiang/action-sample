const express = require('express');
const app = express();

// HTML escape function to prevent XSS attacks
function escapeHtml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

app.get('/welcome', (req, res) => {
  // 1. Source (来源): 用户受控的输入 req.query.name
  const name = req.query.name;

  // 2. Fixed: Escape user input before including in HTML response
  // 3. Sink (接收点): res.send()
  const safeName = escapeHtml(name);
  res.send("<h1>Hello, " + safeName + "</h1>"); 
});

app.listen(3000);
