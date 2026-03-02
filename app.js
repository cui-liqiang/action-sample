const express = require('express');
const app = express();

app.get('/welcome', (req, res) => {
  // 1. Source (来源): 用户受控的输入 req.query.name
  const name = req.query.name;

  // 2. Vulnerability (漏洞): 直接将用户输入拼接进 HTML 响应，没有进行转义或过滤
  // 3. Sink (接收点): res.send()
  // 这允许攻击者注入 <script>alert('xss')</script>
  res.send("<h1>Hello, " + name + "</h1>"); 
});

app.listen(3000);
