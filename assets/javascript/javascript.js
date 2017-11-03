//Global variables
var travelCalc;
var budgetKnown;
var budgetUnknown;
var travOptions;
var budgetInput;
var gasInput;
var miles;
var mpg;
var foodInput;
var lodgingInput;
var tollInput;
var entInput;
var category;
var foodChart = 0;
var gasChart = 0;
var entChart = 0;
var lodgingChart = 0;
var tollChart = 0;
var entChart = 0;
var tot;
var num1;
var num2;
var num3;
var lodge1;
var lodge2;
var gasTot;
var lodgingTot;


//DOM manipulations
$(document).ready(function() {
    travelCalc = {
        //Chose budget type
        budgetType: function() {
            $("input[type='radio']").on('change', (function() {
                category = $(this).attr('id');
                if (category === "budget-unknown") {
                    $("#budget-unknown").attr('value', 'true');
                    $("#budget-known").attr('value', 'false');
                    $('#budget-input').detach();
                } else if (category === "budget-known") {
                    $("#budget-unkown").attr('value', 'false');
                    $("#budget-known").attr('value', 'true');
                    budgetInput = $('<input>');
                    budgetInput.attr('id', "budget-input");
                    $('#insertAfter').after(budgetInput);
                    $(budgetInput).attr('placeholder', "Enter Budget");
                    $(budgetInput).attr('type', 'number');
                    console.log(budgetInput.val());
                }
            }));

        },
        expenses: function() {
            $("#gas-div").on('change', function() {
                if ($(this).is(':checked')) {
                    $(this).attr('value', 'true');
                    gasInput = $("<input>");
                    $(gasInput).attr('placeholder', "Enter avg. price of gas");
                    $(gasInput).attr('id', "gas-in");
                    mpg = $("<input>");
                    $(mpg).attr('placeholder', "Miles per gallon of car");
                    $(mpg).attr('id', "mpg-input");
                    miles = $("<input>");
                    $(miles).attr('placeholder', "Distance of drive");
                    $(miles).attr('id', "miles-input");
                    $("#gas-input").append(gasInput, mpg, miles);
                } else {
                    $(this).attr('value', 'false');
                    $('#gas-in').detach();
                    $('#mpg-input').detach();
                    $('#miles-input').detach();
                }
            });
            $("#food-div").on('change', function() {
                if ($(this).is(':checked')) {
                    $(this).attr('value', 'true');
                    foodInput = $("<input>");
                    $(foodInput).attr('placeholder', "Daily budget for food");
                    $(foodInput).attr('id', "food-in");
                    $("#food-input").append(foodInput);
                } else {
                    $(this).attr('value', 'false');
                    $('#food-in').detach();
                    
                    
                }

            });

            // if ($("#food-div").val()=== true) {
            //         foodChart = foodInput.val();
            //       }else{
            //         foodChart = 0;
            //       };
            $("#lodging-div").on('change', function() {
                if ($(this).is(':checked')) {
                    $(this).attr('value', 'true');
                    lodgingInput = $("<input>");
                    $(lodgingInput).attr('placeholder', "Cost per night");
                    $(lodgingInput).attr('id', "lodging-in");
                    nightsInput = $("<input>");
                    $(nightsInput).attr('placeholder', "Number of Nights");
                    $(nightsInput).attr('id', "nights-in");
                    $("#lodging-input").append(lodgingInput, nightsInput);
                } else {
                    $(this).attr('value', 'false');
                    $('#lodging-in').detach();
                    $('#nights-in').detach();
                }
            });
            $("#tolls-div").on('change', function() {
                if ($(this).is(':checked')) {
                    $(this).attr('value', 'true');
                    tollInput = $("<input>");
                    $(tollInput).attr('placeholder', "Toll money");
                    $(tollInput).attr('id', "toll-in");
                    $("#toll-input").append(tollInput);
                    tollChart = tollInput.val();
                } else {
                    $(this).attr('value', 'false');
                    $('#toll-in').detach();
                }
            });
            $("#ent-div").on('change', function() {
                if ($(this).is(':checked')) {
                    $(this).attr('value', 'true');
                    entInput = $("<input>");
                    $(entInput).attr('placeholder', "Fun Money");
                    $(entInput).attr('id', "ent-in");
                    $("#ent-input").append(entInput);
                    entChart = entInput.val();
                } else {
                    $(this).attr('value', 'false');
                    $('#ent-in').detach();

                }

            });
        },
        submit: function(e) {
            $('#bk').submit(function(e) {
                e.preventDefault();

                var flag = false
                if(typeof(gasInput) == 'undefined'){
                  gasChart = 0
                }else{
                  flag = true
                  gasChart = gasInput.val()
                }
                if(typeof(foodInput) == 'undefined'){
                  foodChart = 0
                }else{
                  flag = true
                  foodChart = foodInput.val()
                }
                if(typeof(lodgingInput) == 'undefined'){
                  lodgingChart = 0
                }else{
                  flag = true
                  lodgingChart = lodgingInput.val()
                }
                if(typeof(tollInput) == 'undefined'){
                  tollChart = 0
                }else{
                  flag = true
                  tollChart = tollInput.val()
                }
                if(typeof(entInput) == 'undefined'){
                  entChart = 0
                }else{
                  flag = true
                  entChart = entInput.val()
                }
                if(flag){
                  chart()

                console.log("i can read");
                if (category === "budget-known"){
                    console.log("this is known");
                    travelCalc.totknown();
                }
                
                else{
                    console.log("this is unknown");
                    travelCalc.totunknown();

                }
            });

        },

        totknown: function(){
             num1 = $("#gas-in").val();
             num2 = $("#mpg-input").val();
             num3 = $("#miles-input").val();
            gasTot = ((num1 / num2) * num3);
            console.log(gasTot);
        //lodging
             lodge1= $("#lodging-in").val();
             lodge2= $("#nights-in").val();
             lodgingTot= (lodge1 * lodge2);
            console.log(lodgingTot);
            
            
            bud= parseInt($('#budget-input').val());
            console.log(bud);
            tot= bud- parseInt(gasTot)- parseInt(entInput.val())- parseInt(foodInput.val())- parseInt(lodgingTot) -parseInt(tollInput.val());
            console.log(tot);
            
            if (tot>=0){
                $('#tot-input').text("Total Budget: $"+bud);
                $('#rem-output').text("Remaining Budget: $"+tot);
                console.log("pos tot");
            }
            else{
               alert("You are over your budget " + tot + "dollars");
                console.log("neg tot");
            }
            
        },
        
        totunknown:function(){
            num1 = $("#gas-in").val();
             num2 = $("#mpg-input").val();
             num3 = $("#miles-input").val();
            gasTot = ((num1 / num2) * num3);
            console.log(gasTot);
        //lodging
             lodge1= $("#lodging-in").val();
             lodge2= $("#nights-in").val();
             lodgingTot= (lodge1 * lodge2);
            console.log(lodgingTot);
            
            tot= parseInt(gasTot)+ parseInt(entInput.val())+ parseInt(foodInput.val())+ parseInt(lodgingTot)+ parseInt(tollInput.val());
            console.log(tot);
            $('#totInput').text("$"+tot);
               
        },
        
        
    }
    
    travelCalc.budgetType();
    travelCalc.submit();
    travelCalc.expenses();
});

function chart() {
    var ctx = document.getElementById("myChart");

     num1 = $("#gas-in").val();
     num2 = $("#mpg-input").val();
     num3 = $("#miles-input").val();
    var gasResult = ((num1 / num2) * num3);

//lodging
     lodge1= $("#lodging-in").val();
     lodge2= $("#nights-in").val();
    var lodgingResult= (lodge1 * lodge2);


    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Gas", "Lodging", "Toll", "Entertainment", "Food"],
            datasets: [{
                backgroundColor: [
                    "#2ecc71",
                    "#3498db",
                    "#95a5a6",
                    "#9b59b6",
                    "#f1c40f",
                    "#e74c3c",
                    "#34495e"
                ],
                data: [ gasChart, lodgingChart, tollChart, entChart, foodChart]
                //gasChart, entChart, foodChart
            }]
        }
    });
}

    // function gasTotal() {
    //         var num1 = $("#gas-in").val();
    //         var num2 = $("#mpg-input").val();
    //         var num3 = $("#miles-input").val();
    //         var gasResult = ((num1 / num2) * num3);
    //         console.log(gasResult)
    //     }
