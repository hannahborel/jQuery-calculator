$(document).ready(function() {


    //global variables
    
      var numObj = {
      
        firstNum: "",
        secondNum: "",
        firstOpp: "",
        secondOpp:"",
        total: 0, 
      }
      
      printFirst = document.getElementById("first-number");
      printFirstOpp = document.getElementById('operator');
      printSecond = document.getElementById('second-number');
      printResult = document.getElementById('result');
    
    
    var clearNumObj = function clearNumObj(){
    
      numObj.firstNum = "";
      numObj.secondNum = "";
      numObj.firstOpp = "";
      numObj.total = 0;
    
      console.log("clear: ", numObj)
    
      $("#result").empty();
      $("#first-number").empty();
      $("#second-number").empty();
      $("#operator").empty();
      
      
    
    }
    
    // set first number 
    
    var storeNumbers = function(num){
    
          if (numObj.firstNum === ""){
               numObj.firstNum = num;
               printFirst.textContent = numObj.firstNum;
               } else if (numObj.firstNum != "" && numObj.firstOpp == ""){
                 numObj.firstNum = numObj.firstNum + "" + num;
                 printFirst.textContent = numObj.firstNum;
                  } else if (numObj.firstNum != "" && numObj.firstOpp !== "" && numObj.secondNum == ""){
                    numObj.secondNum = num
                    printSecond.textContent = numObj.secondNum;
                    } else{
                      numObj.secondNum = numObj.secondNum + "" + num
                      printSecond.textContent = numObj.secondNum;
                    }
    
                    
    
        console.log("----------Number Object-------------")
        console.log(numObj);
    }
    
    // set the opperator
    
    var setFirstOpp = function(opp){
    
      if (opp && numObj.firstOpp == ""){
        numObj.firstOpp = opp;
        console.log(numObj)
        printFirstOpp.textContent = numObj.firstOpp;
        } else {
          numObj.secondOpp = opp
          $("#result").empty();
          total()
          }  
      }
    
    // toal the numbers
    
    var total = function total(){
    
      var firstNumber = parseInt(numObj.firstNum);
      var secondNumber = parseInt(numObj.secondNum);
      var opperator = numObj.firstOpp
    
      switch(opperator){
        case "+" :
          numObj.total = firstNumber + secondNumber
          console.log("Total: ",numObj)
          break;
        case "-" :
          numObj.total = firstNumber - secondNumber
          console.log("Total: ",numObj)
          break;
        case "x" :
          numObj.total = firstNumber * secondNumber
          console.log("Total: ",numObj)
          break;
        case "/" :
          numObj.total = firstNumber / secondNumber
          console.log("Total: ",numObj)
          break;
        case "^" :
          numObj.total = firstNumber ^ secondNumber
          console.log("Total: ",numObj)
          break;
        }
    
    
      if (numObj.secondOpp != ""){
    
        numObj.firstNum = numObj.total;
        numObj.firstOpp = numObj.secondOpp;
        numObj.secondOpp = ""
        numObj.secondNum = 0
        numObj.total = 0 
    
        printFirst.textContent = numObj.firstNum;
        $("#second-number").empty();
        printFirstOpp.textContent = numObj.firstOpp;
        console.log("New Shuffled Object: ",numObj)
    
        } else {
            printResult.innerHTML = numObj.total
        }
    
    }
    //-----------------number buttons---------------//
    $(".number").on("click", function(){
        var number = $(this).attr("value")
       storeNumbers(number);
    });
    //------------opperator buttons------------//
    
    $(".operator").on("click", function(){
      var opperator = $(this).attr("value");
      setFirstOpp(opperator)
    })
    //-------------function buttons------------//
    
    $("#button-equal").on("click", function(){
      total()
    });
    
    $("#button-clear").on("click", function(){
      clearNumObj()
      total(numObj.firstOpp)
    });
    
    })