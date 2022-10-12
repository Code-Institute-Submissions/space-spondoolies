# Space Spondoolies - ReadMe File   
[Space-Spondoolies](https://gisjim.github.io/space-spondoolies/)      
Just a simple game of chance, like throwing a dice, flipping a coin or a simple game of turning
a high/low card. It can be used for simple decision making,   
- If I win I will threat myself to a takeaway
- If i lose I will clean the windows   

#### Future Versions   
Ideas that could be added,   
- Collect statistics   
- How long the game lasted       
- How many double dice were thrown    
- How many even scores    
- How many odd scores    

## Heading    
Simple heading trying to imitate old retro 80's games.    


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




