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
var tot;
var num1;
var num2;
var num3;
var lodge1;
var lodge2;
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
                     $('#rem-output').text('');
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
                    $(gasInput).val('0');
                    $('#mpg-input').detach();
                    $(mpg).val('0');
                    $('#miles-input').detach();
                    $(miles).val('0');
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
                    $(foodInput).val('0');
                }
            });
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
                    $(lodgingInput).val('0');
                    $('#nights-in').detach();
                    $(nightsInput).val('0');
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
                    $(tollChart).val('0');
                    $('#toll-in').detach();
                    $(tollInput).val('0');
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
                    $(entInput).val('0');
                }
            });
        },
        submit: function(e) {
            $('#bk').submit(function(e) {
                e.preventDefault();
                var flag = false
                if (typeof(gasInput) == 'undefined') {
                    num1 = 0
                    num2 = 0
                    num3 = 0
                    gasChart = 0
                } else {
                    flag = true
                    gasChart = gasInput.val()
                }
                if (typeof(foodInput) == 'undefined') {
                    foodChart = 0
                } else {
                    flag = true
                    foodChart = foodInput.val()
                }
                if (typeof(lodgingInput) == 'undefined') {
                    lodge1 = 0
                    lodge2 = 0
                    lodgingChart = 1
                } else {
                    flag = true
                    lodgingChart = lodgingInput.val()
                }
                if (typeof(tollInput) == 'undefined') {
                    tollChart = 0
                } else {
                    flag = true
                    tollChart = tollInput.val()
                }
                if (typeof(entInput) == 'undefined') {
                    entChart = 0
                } else {
                    flag = true
                    entChart = entInput.val()
                }
                if (flag) {
                    chart()
                }
                console.log("i can read");
                if (category === "budget-known") {
                    console.log("this is known");
                    travelCalc.totknown();
                } else {
                    console.log("this is unknown");
                    travelCalc.totunknown();
                }
            });
        },
        totknown: function() {
            bud = parseInt($('#budget-input').val());
            console.log(bud);
            //tot = bud - parseInt(gasChart) - parseInt(entChart) - parseInt(foodChart) - parseInt(lodgingChart) - parseInt(tollChart);
            console.log(tot);
               if ((typeof(gasInput) == 'undefined') && (typeof(lodgingInput) == 'undefined')) {
                tot =  bud - parseInt(entChart) - parseInt(foodChart)  - parseInt(tollChart);
                console.log(tot);
                $('#tot-input').text("Total budget: $" + tot);}
            else if (typeof(lodgingInput) == 'undefined') {
                tot = bud - parseInt(gasChart) - parseInt(entChart) - parseInt(foodChart) - parseInt(tollChart);
                console.log(tot);
                $('#tot-input').text("Total budget: $" + tot);
            } else if (typeof(gasInput) == 'undefined') {
                tot = bud - parseInt(entChart) - parseInt(foodChart) - parseInt(lodgingChart) - parseInt(tollChart);
                console.log(tot);
                $('#tot-input').text("Total budget: $" + tot);
            }
             else {
                tot = bud - parseInt(gasChart) - parseInt(entChart) - parseInt(foodChart) - parseInt(lodgingChart) - parseInt(tollChart);
                console.log(tot);
                $('#tot-input').text("Total budget: $" + tot);
            }
            if (tot >= 0) {
                $('#tot-input').text("Total Budget: $" + bud);
                $('#rem-output').text("Remaining Budget: $" + tot);
                console.log("pos tot");
            } else {
                alert("You are over your budget " + tot + "dollars");
                console.log("neg tot");
            }
        },
        totunknown: function() {
            console.log(num1);
            console.log(num2);
            console.log(num3);
            console.log(gasChart);
            console.log(parseInt(gasChart));
            console.log(entChart);
            console.log(foodChart);
            console.log(lodge1);
            console.log(lodge2);
            console.log(parseInt(lodgingChart));
            console.log(tollChart);
            if ((typeof(gasInput) == 'undefined') && (typeof(lodgingInput) == 'undefined')) {
                tot = parseInt(entChart) + parseInt(foodChart)  + parseInt(tollChart);
                console.log(tot);
                $('#tot-input').text("Total budget: $" + tot);}
            else if (typeof(lodgingInput) == 'undefined') {
                tot = parseInt(gasChart) + parseInt(entChart) + parseInt(foodChart) + parseInt(tollChart);
                console.log(tot);
                $('#tot-input').text("Total budget: $" + tot);
            } else if (typeof(gasInput) == 'undefined') {
                tot = parseInt(entChart) + parseInt(foodChart) + parseInt(lodgingChart) + parseInt(tollChart);
                console.log(tot);
                $('#tot-input').text("Total budget: $" + tot);
            }
             else {
                tot = parseInt(gasChart) + parseInt(entChart) + parseInt(foodChart) + parseInt(lodgingChart) + parseInt(tollChart);
                console.log(tot);
                $('#tot-input').text("Total budget: $" + tot);
            }
        },
    }
    travelCalc.budgetType();
    travelCalc.submit();
    travelCalc.expenses();
});
function chart() {
    ctx = document.getElementById("myChart");
    num1 = parseFloat($("#gas-in").val());
    num2 = parseInt($("#mpg-input").val());
    num3 = parseInt($("#miles-input").val());
    gasChart = ((num3 / num2) * num1);
    //lodging
    lodge1 = parseInt($("#lodging-in").val());
    lodge2 = parseInt($("#nights-in").val());
    lodgingChart = (lodge1 * lodge2);
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
                data: [gasChart, lodgingChart, tollChart, entChart, foodChart]
                //gasChart, entChart, foodChart
            }]
        }
    });
}
