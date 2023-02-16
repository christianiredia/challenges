# Data Structures, Modern Operators and Strings

**Coding Challenge**

We're building a football betting app (soccer for my American friends)!
Suppose we get data from a web service about a certain game ('game' variable on
starter code of index.js). In this challenge we're gonna work with that data.

**Your tasks:**

1. Create one player array for each team (variables _'players1'_ and
   _'players2'_)

2. The first player in any player array is the goalkeeper and the others are field
   players. For Bayern Munich (team 1) create one variable (_'gk'_) with the
   goalkeeper's name, and one array (_'fieldPlayers'_) with all the remaining 10
   field players

3. Create an array _'allPlayers'_ containing all players of both teams (22
   players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
   new array (_'players1Final'_) containing all the original team1 players plus
   'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called
   '_team1_', _'draw'_ and _'team2'_)

6. Write a function (_'printGoals'_) that receives an arbitrary number of player
   names (not an array) and prints each of them to the console, along with the
   number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which
   team is more likely to win, without using an if/else statement or the ternary
   operator.

**Test data for 6.:** First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
