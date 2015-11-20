//Dynamic Loop target JS By Eiad Ashraf

	$(document).ready(function(){
	    $('.on-click-item-class-name').click(function(e){
	        e.preventDefault();
	            //Take the value of this class attribute "attName1" 
	        fieldName = $(this).attr('attName1');
	            // And for this DIV we will search for it's attribute "attName2" and Do whatever
	        $(' .targeted-div-class-name[attName2='+fieldName+'] ').toggle();
	    });
	});
