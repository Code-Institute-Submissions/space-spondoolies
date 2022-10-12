# Space Spondoolies - ReadMe File   
[Space-Spondoolies](https://gisjim.github.io/space-spondoolies/)


## Git Pages Testing   

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
Testing javascript with JSHint. First round 29 warnings. Most common warning,    
> 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).   
Looking for solution for the above warning.    


Fixing the following warning,   
> Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (diceOne, diceTwo, totalScore, statusReport, hideElements)    
Created variables for diceOne() and diceTwo() in other functions instead of direct use. Solved. 12/10/2022.     







