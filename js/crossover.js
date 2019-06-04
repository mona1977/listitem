function crossover() {
///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////CROSSOVER FUNCTIONALITY///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
//Surendra Gupta
//Date : 03-June-2019
//EXTRACT url Parameter and split them
	var options = getUrlVars()["tags"]; //Get TagS value from URL
	var tagsplit = new Array();
	tagsplit=options.split(","); //Split tags in multiple words
   populateItems(tagsplit, '#items'); //Fill Items value in List

		//Split URL Tags 
		function getUrlVars()
		{
		    var vars = [], hash;
		    var hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('#');
		    for(var i = 0; i < hashes.length; i++)
		    {
		        hash = hashes[i].split('=');
		        vars.push(hash[0]);
		        vars[hash[0]] = hash[1];
		    }
		    return vars;
		}
    
    //populate items box with arr
    function populateItems(arr, targetMultiSelect) {
        //arr.sort();
        generateOptionElements(arr, targetMultiSelect);
    }
    
    //add btn
    $('#add-new-item-btn').click(function() {
        if ($('#new-item-input').val() !== '') {

            var selected = [];
            selected.push($('#new-item-input').val().trim());
    
            $('#items option').each(function() {
                selected.push($(this).val()); 
            });
    
            //selected.sort();
            $('#items').empty();
    			setGetParameter('',$('#new-item-input').val());
    			generateOptionElements(selected, '#items');
    
            $('#new-item-input').val('');
        }
    });
    
    
    
///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////MINI FUNCTIONS TO AVOID REPEAT CODE///////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
//sET Modify parameter after remove
function setremoveParameter(paramName, paramValue)
{
  var url = window.location.href;
  var updateurl = url.replace(","+ paramValue, "");
  window.location.href = updateurl ;
}





//Set modify parameter value after add in URL
function setGetParameter(paramName, paramValue)
{
  var url = window.location.href;
  window.location.href = url + "," + paramValue;
}
        
//create option elements
function generateOptionElements(arr, targetMultiSelect) {
    for (var i = 0; i < arr.length; i++) {
        var option = document.createElement('OPTION');
        var text = document.createTextNode(arr[i]);
        option.appendChild(text);
        $(targetMultiSelect).append(option);
    }
}
};
