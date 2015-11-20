#Work with Dynamic Loops like a boss - Client-side 
As a front end developer i work with code all the time and what i face a lot is when the developer provide me a loop of DOM elements with Dynamic IDs <br>And i want to make something simple like on click i expand a specific (div) for example.<br>From here i got the idea for using something more flexible like Attributes so simple and will work with almost anything and so flixeble as well

<br>
<br>
- how it works?
1- we need to start a simple function as for the example it's click function.
<code>$('.on-click-item-class-name').click(function(e){</code>
2- 






	        $('.on-click-item-class-name').click(function(e){
	            e.preventDefault();
                    //Take the value of this class attribute "attName1" 
	            fieldName = $(this).attr('attName1');
                    // And for this DIV we will search for it's attribute "attName2" and Do whatever
	            $(' .targeted-div-class-name[attName2='+fieldName+'] ').toggle();
	        });