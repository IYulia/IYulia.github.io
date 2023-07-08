  //DARK THEME 
  function addOrRemoveTheme() {
    const theme = document.getElementById('them');
    if (theme.className == "theme-light") {
      theme.innerHTML = '<img src="/images/sun_.png">';
      theme.setAttribute('class', 'theme-dark');
      document.body.setAttribute('dark', '');
      localStorage.setItem('theme', 'dark');
    } else {
      theme.innerHTML = '<img src="/images/moon (1).png">';
      theme.setAttribute('class', 'theme-light');
      document.body.removeAttribute('dark');
      localStorage.setItem('theme', 'light');
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const theme = document.getElementById('them');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      theme.innerHTML = '<img src="/images/sun_.png">';
      theme.setAttribute('class', 'theme-dark');
      document.body.setAttribute('dark', '');
    } else {
      theme.innerHTML = '<img src="/images/moon (1).png">';
      theme.setAttribute('class', 'theme-light');
      document.body.removeAttribute('dark');
    }
  });
  
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
  
  
    