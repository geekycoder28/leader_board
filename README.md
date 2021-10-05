# leader_board

This leaderboard will be used to display the rankings and the winners of golf tournaments. Using the example dataset below, write a method that accepts the playerscores and the playernames and returns a leaderboard. 
A leaderboard is a collection of
{id: number, name: string, score: number, winner: boolean} 
where 
id is the unique identifier for the player and can be used to match playerscores with playernames
name is the name of the player
score is the sum of roundscores
winner should be set to true if the player has the lowest score

Example dataset:

const playerscores = [
  {id: 5, roundscores: [1, 1, 1, 0]},
  {id: 2, roundscores: [-2, -1, -1, -1]},
  {id: 6, roundscores: null},
  {id: 3, roundscores: [0, 0, -2, -1]},
  {id: 4, roundscores: [0, 0, -1, -1]},
  {id: 1, roundscores: [1, 0, -2, -1]},
];

const playernames = [
  {id: 4, name: "Bob"},
  {id: 5, name: "Ann"},
  {id: 1, name: "Joe"},
  {id: 2, name: "Sue"},
  {id: 3, name: "Jane"},
  {id: 6, name: "Larry"},
];