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
                console.log($("#gas-div").val());
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
                } else {
                    $(this).attr('value', 'false');
                    $('#ent-in').detach();

                }

            });
        },
        submit: function(e) {
            $('#bk').submit(function(e) {
                e.preventDefault();
                chart();
            });

        },

    }

    travelCalc.budgetType();
    travelCalc.submit();
    travelCalc.expenses();
});

function chart() {
    var ctx = document.getElementById("myChart");
    var num1 = $("#gas-in").val();
            var num2 = $("#mpg-input").val();
            var num3 = $("#miles-input").val();
            var gasResult = ((num1 / num2) * num3);
            console.log(gasResult);
//lodging
    var lodge1= $("#lodging-in").val();
    var lodge2= $("#nights-in").val();
    var lodgingResult= (lodge1 * lodge2);
    console.log(lodgingResult);

    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Gas", "Entertainment", "Food", "Lodging", "Tolls"],
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
                data: [gasResult, entInput.val(), foodInput.val(), lodgingResult, tollInput.val()]
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
