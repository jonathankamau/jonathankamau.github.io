var jsonContent = new Array();
    $.ajax({
      url: "../data/",
      success: function(data){
         $(data).find("a").each(function(){
            if(openFile($(this).attr("href"))){
                var fileName = $(this).attr("href")
                $.getJSON( "data/"+fileName, function( data ) {
                    jsonContent.push(data)
                    $.each(data, function(key, val){
                        console.log(data)
                        populateData(key, val);
                        
                    })
                    
                })
            }        
         });
         
      }
      
    }); 
function openFile(file) {
    var extension = file.substr( (file.lastIndexOf('.') +1) );
    switch(extension) {
        case 'json':
            return true;
            break;
        default:
            return false;
    }
};

function populateData(key, val) {
    if (document.getElementById(key)) {
        var key = document.getElementById(key);
        var showChar = 400;
        var ellipsestext = "...";
        var moretext = "Read More";
        
        if(val.length > showChar) {
            var c = val.substr(0, showChar);
            var h = val.substr(showChar, val.length);
    
            var newVal = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
            key.innerHTML = newVal; 
        }
        else {
            key.innerHTML = val;
        }
    }
    else {
        var keys = document.getElementsByName(key)
        console.log(keys)

        for (var index=0; index<keys.length; index++){
            keys[index].innerHTML = val;
        }
    }

    
    
    

    
    
}



