
import express from 'express'  // type is module
const app = express();

app.get('/'  , (req , res) =>
{
  res.send('Server is ready');
});

app.get('/api/jokes' , (req , res) =>
{
  const jokes = [
  {
    id: 1,
    title: "Minimap",
    joke: "Why did the MM stop checking the minimap? Because apparently Gusion's location was classified information."
  },
  {
    id: 2,
    title: "Protection",
    joke: "Kaja: 'I'll protect you.' Hanabi: 'Great!' Kaja leaves for Turtle. Gusion: 'Hello there.'"
  },
  {
    id: 3,
    title: "80 Stacks",
    joke: "Granger after getting 80 stacks: 'Thank you, Hanabi. Very generous of you.'"
  },
  {
    id: 4,
    title: "Play Safe",
    joke: "Team: 'Play safe, enemies are missing.' Hanabi: 'Okay.' Pushes one more wave. Defeat."
  },
  {
    id: 5,
    title: "Wrong Target",
    joke: "Kaja ults Fredrinn: 'I got the enemy tank!' Granger + Gusion: deletes Hanabi. Kaja: 'Guys…?'"
  }
];
res.send(jokes);
});
const port = process.env.PORT || 3000;

app.listen(port , () =>
{
  console.log(`Server at http://localhost:${port}`);
}
);