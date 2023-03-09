let button = document.querySelector("button");
let question1 = document.querySelector(".question1");
let question2 = document.querySelector(".question2");

button.onclick = function() {
 let Q1=
document.querySelector(".question1").value;
     let Q2=
document.querySelector(".question2").value;
    
    console.log(Q1);
    console.log(Q2);
    
     if (Q1 <= 2 && Q2 === "Morning"  ) { 
        document.querySelector(".result").innerHTML="    You have  "   + Q1 + " fruits  " + "   and you prefer " + Q2 +  "   This means you are a Apple "; 
    }
   else if (Q1 > 4 && Q2 === "evening" ) { 
        document.querySelector(".result").innerHTML="  you have   " + Q1 + " fruits  " + "   and you prefer " + Q2 +  "   This means you are a Banana ";
    } 
   
    else if (Q1 <= 2 && Q2 === "evening" ) { 
        document.querySelector(".result").innerHTML= "you have   " + Q1 + " fruits  " + "   and you prefer " + Q2 +  "   This means you are a blueberry";
    }
    
     else if (Q1 > 4 && Q2 === "Morning" ) { 
        document.querySelector(".result").innerHTML="you have   " + Q1 + " fruits  " + "   and you prefer " + Q2 +  "   This means you are a peach";
    }
    
};


                                  
    