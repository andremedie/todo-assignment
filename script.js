$(document).ready(function(){

        var user = "user";
        var password = "password";

        $(".logout").hide();
        $(".div2").hide();
        $(".div3").hide();
        $(".login").show();
        $(".main").show();
        // -a-a-a
    
        if (sessionStorage.doList == null) {

            var stuffToDo = [
                "Klipp gräset", 
                "Betala räkningar",
                "Köp mjölk", 
                "Spika upp tavlor"
                ];

                var json_str = JSON.stringify(stuffToDo);
                sessionStorage.doList = json_str;

        };
    
        $(".loginButton").click(function(){
            
              if ( $(".user").val() == user && $(".password").val() == password ) {
                
                    show.div3
                    
              console.log("rättlösenord")
                } else {
                    
                    show.div2
                    console.log("fellösenord")
              } 

        });
    
    });