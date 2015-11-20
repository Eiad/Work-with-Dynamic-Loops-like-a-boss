//Dynamic Loop target JS

	$(document).ready(function(){

	        $('.order_status_table').click(function(e){
	            e.preventDefault();
                    //Take the value of this class attribute "attName1" 
	            fieldName = $(this).attr('attName1');
                    // And for this DIV we will search for it's attribute "attName2" and Do whatever
	            $(' .order-history-container[attName2='+fieldName+'] ').toggleClass('in');
	        });
		
	});
