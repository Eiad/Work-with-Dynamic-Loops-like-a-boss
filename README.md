#Work with Dynamic Loops like a boss with jQuery - Client-side 
As a front end developer i work with different programming code all the time and what i face alot is when the developer provide me a loop of DOM elements with Dynamic IDs <br>And i want to make something simple like on click i expand a specific (div) for example.<br>From here i got the idea for using something more flexible like Attributes so simple and will work with almost anything and so flexible as well.
<br>
- how it works?<br>
<br>1- we need to start a simple function as for the example it's click function.
<br><code>$('.on-click-item-class-name').click(function(e){</code>
<br>2- Create a variable that takes the attribute value we will give to this DOM element (Which should be the dynamic ID variable).
<br><code>fieldName = $(this).attr('attName1');</code>
<br>3- Give the targeted DOM and Attribut with the same Value (Which should be the same dymanic ID variable)
<br>4- Then we target this DOM in our JS like this:
<br><code>$(' .targeted-div-class-name[attName2='+fieldName+'] ').toggle();</code>

<br>5- Final code should be like this:
<img src="https://mo-ash.com/d-links/dynamic-loop-ex.png" alt="">

