let storiesCreated=0; 
$(".submit").click(function(){
storiesCreated=storiesCreated+1;
    let name=$(".name-input").val();
    let transport=$(".transport-input").val();
    let adjective=$(".adjective-input").val();
    let time=$(".number-input").val();

    $(".count").text(storiesCreated);
   
console.log(storiesCreated);    
   
$(".story").append("<p>" + name + " was riding on a " + transport + " to go to " + adjective + " in "+ time + "</p>");

});