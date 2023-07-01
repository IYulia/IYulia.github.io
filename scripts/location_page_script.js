  //API
  // api = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&prop=extracts&exintro&explaintext&exlimit=max&gsrsearch=";


  $(document).ready(function(){

    var backMe = $(".returning").hide();
    var form = $(".callMe");
    var inpVal = $("#inputValue");
    var button = $(".btn");
    
    var wiki = "https://en.wikipedia.org/wiki/";
    var api = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=revisions&list=search&srsearch=";
    
    button.on("click",function(event){
      event.preventDefault();
      event.stopPropagation();
      return $.ajax({
        url: "https://en.wikipedia.org/w/api.php",
        data: {action: "query", format: "json", prop:"revisions", list:"search", srsearch: inpVal.val()},
        dataType: "jsonp",
        headers: {"Api-User-Agent":"Example/1.0"},
        success: function(data){
          if (inpVal.val() == 0){
            return false;
          }
          else{
            $(".title").hide();
            var objecting = [];
            var values = data.query.search;
            for(var i = 0; i < values.length; i++){
              objecting.push("<h4 class = 'titles'>" + "<a href = 'https://en.wikipedia.org/wiki/" +  values[i].title + "' target = _'blank'" + ">" + values[i].title + "</a></h4>", "<p class = 'snippets'>" + values[i].snippet) + "</p>";
              $(".separator").html(objecting.join(""));
            }
            backMe.show();
            backMe.on("click", function(){
              inpVal.value = "";
              history.go(0);
            });
          }
      }
    }); 
   });
  });
  
  
    