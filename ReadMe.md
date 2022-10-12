# Space Spondoolies - ReadMe File   
[Space-Spondoolies](https://gisjim.github.io/space-spondoolies/)      
Just a simple game of chance, like throwing a dice, flipping a coin or a simple game of turning a high/low card. It can be used for simple decision making,   
- If I win I will threat myself to a takeaway
- If i lose I will clean the windows   

I am always fascinated by dashboards and information that I view most days. I wanted to created a simple version of a game with dashboards and put various information into each section.     

#### Future Versions   
Ideas that could be added,   
- Collect statistics   
- How long the game lasted       
- How many double dice were thrown    
- How many even scores    
- How many odd scores    

## Header Section       

![Header Section](/assets/images/readme/Heading.png)    
A basic header for a single page website. Try to imitate a old style 80's game.   

## Dashboard     

![Dashboard](/assets/images/readme/DashBoard.png)    

Dashboard with four sections.   
Top Left window showing the output from the function diceOne().     
Top right window showing the output from the function diceTwo().     
Bottom Left window is showing the output from the function scoreBoard().    
Bottom right window is showing the output from the function statusBoard().    

## Start the Game   

![Game Starts](/assets/images/readme/GameStart.png)    

Before the game starts the user has the option of entering a game name, if not "Human" is the default name. To start and play the game, "Spin The Dice" is pressed. after the first press "Enter User Name" disappears along with the input. Keep pressing until plus 10,000 or higher for a win. Minus 10,000 or lower to lose.     

## Bonus Points    

![Bonus Points](/assets/images/readme/BonusPoints.png)    

During the game if a double is thrown a bonus of 500 is won. This is highlighted with CSS animation and flashes in the Status Report window.     

## Game Won    

![Game Won](/assets/images/readme/GameWon.png)    

## Game Lost    

![Game Lost](/assets/images/readme/GameLost.png)     

## Game Rules     

![](/assets/images/readme/GameRules.png)     



## Dice One & Dice Two     

![DiceOne & Dice Two](/assets/images/readme/DashBoardDiceOneTwo.png)    

Imitating double dice throw with Math.random from and including 1 to 6. Showing each dice in 
a separate window highlights how random the throws are. The output of both dice numbers are added to generate a score. Even numbers + 2000 (spondoolies), odd numbers - 2000.
Bonus points of 500 if a double is thrown, double + 2500.    






## Git Pages Testing   
All good uploading to GitPages. Just had to alter some paths to suit GitHub.    

## W3C HTML Validator Testing   
[W3C HTML Validator](https://validator.w3.org/)
Tested html on the 11/10/2022 14:00. Failed.         
I used prettier to tidy up html, W3C validator did not like the layout.
Tested html on the 11/10/2022 14:30. Passed.   
Do not use Prettier for html formatting.

## W3C CSS Testing    
[W3C CSS JigSaw Validator](https://jigsaw.w3.org/css-validator/)     
Tested css on the 11/10/2022 14:30. Passed.    
Prettier works ok with CSS.    

## JavaScript Testing - JSHint    
[JavaScript Hint](https://jshint.com/)   

#### JS-W-001    
Testing javascript with JSHint. First round 29 warnings. Most common warning,    
> 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).   
Looking for solution for the above warning.    

#### JS-W-002    
Fixing the following warning,   
> Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (diceOne, diceTwo, totalScore, statusReport, hideElements)    
Created variables for diceOne() and diceTwo() in other functions instead of direct use. Solved. 12/10/2022.     

#### Searching for JSHint solutions   
No fixes for warning just to add a line to declare what version of javascript is being used. Or add
a jshint file to the project. More exploration required.   

## References     

### Images   

### Sources of Learning    




