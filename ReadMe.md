# Space Spondoolies - ReadMe File   
[Space-Spondoolies](https://gisjim.github.io/space-spondoolies/)      
Two games in one. Dice game and quiz game. Both can be played separately or for extra points before rolling the dice, get points for correct answers from the Space Quiz.          

### Dice   
Just a simple game of chance, like throwing a dice, flipping a coin or a simple game of turning a high/low card. It can be used for simple decision making,   
- If I win I will threat myself to a takeaway
- If i lose I will clean the windows   
Roll the dice to see how lucky you are, or answer space questions to increase your score.

### Space Quiz    
Select your answers, press submit. If you answers are correct you will get extra points with rolling the dice. Good if you are not feeling lucky.     

#### Future Versions   
Ideas that could be added,   
- Collect statistics   
- How long the game lasted       
- How many double dice were thrown    
- How many even scores    
- How many odd scores    
- Database of questions and answers
- Random questions on every reset    

## Header Section       
![Header Section](/assets/images/readme/HeadingOne.png)    
A basic header for a single page website. Try to imitate a old style 80's game.   
    
## Dashboard     
![Dashboard](/assets/images/readme/DashBoardOne.png)    
Dashboard with four sections.   
Top Left window showing the output from the function diceOne().     
Top right window showing the output from the function diceTwo().     
Bottom Left window is showing the output from the function scoreBoard().    
Bottom right window is showing the output from the function statusBoard().    

## Start Rolling the Dice       
![Game Starts](/assets/images/readme/GameStart.png)    
Before the game starts the user has the option of entering a game name, if not "Human" is the default name. To start and play the game, "Spin The Dice" is pressed. after the first press "Enter User Name" disappears along with the input and Space Quiz. Keep pressing until plus 10,000 or higher for a win. Minus 10,000 or lower to lose.     

## Dice One & Dice Two     
![DiceOne & Dice Two](/assets/images/readme/DiceOneTwoOne.png)    
Imitating double dice throw with Math.random from and including 1 to 6. Showing each dice in 
a separate window highlights how random the throws are. The output of both dice numbers are added to generate a score. The return of DiceOne and DiceTwo are taken in by the scoreBoard() function. Even numbers are + 2000 (spondoolies), and odd numbers - 2000.
Bonus points of 500 if a double is thrown, double + 2500.    

## Bonus Points    
![Bonus Points](/assets/images/readme/BonusPointsOne.png)    
During the game if a double is thrown a bonus of 500 is won. This is highlighted with CSS animation and flashes in the Status Report window.   
Information from the Space Quiz is show in the "Status Report" along with extra points for correct answers.    

## Space Quiz   
![Space Quiz](/assets/images/readme/QuizOne.png)    
5 general knowledge space questions. Select your answers and press the results button to get your score.
Your score is added to Space Spondoolies for extra points with the spaceQuizFunction().     
Any question that was answer incorrectly disappears.    
        
![Space Quiz](/assets/images/readme/QuizResultOne.png)       

## Quiz Bonus Points    
![Space Quiz](/assets/images/readme/SpaceQuizResultsOne.png)    
Get extra bonus points for answering the correct questions. 50 points for each correct correction using the spaceQuizReportFunction()     

## Game Won - Status Report
![Game Won](/assets/images/readme/GameWon.png)    
When a score of plus 10,000 or higher is achieved the game is won. The "Spin The Dice" button is replaced with a "Reload" button to restart a new game. A message and a friendly Alien face is shown. The statusReport() function controls the output along with changing the border color to highlight the severity of the reports.    

## Game Lost - Status Report   
![Game Lost](/assets/images/readme/GameLost.png)     
The same as the Game Won status report but with a Hungry Alien!     

## Game Rules     
![Game Rules](/assets/images/readme/GameRulesOne.png)     
Bottom of the page showing the simple rules of the game. Icons are used for the list icon.    

## Git Pages Testing   
All good uploading to GitPages. Just had to alter some paths to suit GitHub.    

## GIT   Branch - Merge     
![GIT BRANCH & MERGE](/assets/images/readme/GitBranchMerge.png)              
Feeling that the dice game was just not enough. I started to work on the space quiz. This is also give me an opportunity to integrate two javascript files. I used new features to me with git, Branch and Merge. The results were more or less what I excepted. The game worked after the merge. I did have to tidy up some html. This was my misunderstanding, it was a merge and not a replace.     

## W3C HTML Validator Testing   
[W3C HTML Validator](https://validator.w3.org/)
Tested html on the 11/10/2022 14:00. Failed.         
I used prettier to tidy up html, W3C validator did not like the layout.
Tested html on the 11/10/2022 14:30. Passed.   
Do not use Prettier for html formatting.     
Tested HTML on the 24/10/2022 14:30. Passed.     
![W3C HTML Validator](/assets/images/readme/Html_Pass_20221024.png)     

## W3C CSS Testing    
[W3C CSS JigSaw Validator](https://jigsaw.w3.org/css-validator/)     
Tested css on the 11/10/2022 14:30. Passed.    
Prettier works ok with CSS.    
Tested CSS on the 24/10/2022 14:30. Passed.     
![W3C CSS Validator](/assets/images/readme/CSS_Pass_20221024.png)     

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

## Credits     
[CCS Tricks](https://css-tricks.com/)   
[W3Schools](https://www.w3schools.com/)
[Markdown Guide](https://www.markdownguide.org/)
[Google Fonts](https://fonts.google.com/)    
[Darren Jones](JavaScript: Novice to Ninja)      

### Image Credits   
[Find Icons](https://findicons.com/icon/208653/hungry_alien)    
[Favicon](https://favicon.io/emoji-favicons/alien/)    



