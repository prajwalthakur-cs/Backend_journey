require('dotenv').config()
const express = require('express');
const app = express()
const Port = process.env.PORT || 4000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login'  , (req , res) =>
{
  res.send('<h1>Please login at Chai aur Code</h1>')
})

app.get('/twitter' , (req , res) =>
{
  res.send('<h1>www.twitter.com</h1>')
})

app.get('/github' , async(req , res) =>
{
  const username = "prajwalthakur-cs"
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  res.send(data);

})
app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`)
})