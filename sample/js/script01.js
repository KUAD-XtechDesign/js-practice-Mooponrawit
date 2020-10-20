$(function(){


    $("#button01").on("click",function(){
        //$(".back-red").sildetoggle();
        $(".back-red").hide();
    })
    
    $("#button02").on("click",function(){
        //$(".back-red").show();
        //$(".back-blue").slidetoggle();
        $(".back-blue").hide();
    })
    
    $("#button03").on("click",function(){
        //$("#box03").hide();
        //$("#box07").hide();
        $("#box03,#box07").hide();
        
    })

    $("#button04").on("click",function(){
        $(".box").show();
    })

})


