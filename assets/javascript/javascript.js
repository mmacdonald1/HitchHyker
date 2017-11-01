//Global variables//Global variables
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
$(document).ready(function(){
    travelCalc = {
        //Chose budget type
        budgetType: function(){
            $("input[type='radio']").on('change',(function() {
            category = $(this).attr('id');
            if(category === "budget-unknown"){
                $("#budget-unknown").attr('value','true');
                $("#budget-known").attr('value', 'false');
                $('#budget-input').detach();
            }else if(category === "budget-known") {
                $("#budget-unkown").attr('value', 'false');
                $("#budget-known").attr('value', 'true');
                budgetInput= $('<input>');
                budgetInput.attr('id', "budget-input")
                $('#insertAfter').after(budgetInput);
                $(budgetInput).attr('placeholder',"Enter Budget");
            }
        }));        
       
       },
        expenses: function (){
          
          $("#gas-div").on('change', function() {
          if ($(this).is(':checked')) {
            $(this).attr('value', 'true');
              gasInput= $("<input>");
              $(gasInput).attr('placeholder',"Enter avg. price of gas");
              mpg= $("<input>");
              $(mpg).attr('placeholder',"Miles per gallon of car");
              miles= $("<input>");
              $(miles).attr('placeholder',"Distance of drive");
            $("#gas-input").append(gasInput,mpg,miles);
          } else {
            $(this).attr('value', 'false');
            
          }
            console.log($("#gas-div").val());
    });
          $("#food-div").on('change', function() {
          if ($(this).is(':checked')) {
            $(this).attr('value', 'true');
              foodInput= $("<input>");
              $(foodInput).attr('placeholder',"Daily budget for food");
            $("#food-input").append(foodInput);
          } else {
            $(this).attr('value', 'false');
            
          }
            
    });
          $("#lodging-div").on('change', function() {
          if ($(this).is(':checked')) {
            $(this).attr('value', 'true');
              LodgingInput= $("<input>");
              $(LodgingInput).attr('placeholder',"Cost per night");
            $("#lodging-input").append(LodgingInput);
          } else {
            $(this).attr('value', 'false');
            
          }
            
    });
          $("#tolls-div").on('change', function() {
          if ($(this).is(':checked')) {
            $(this).attr('value', 'true');
              tollInput= $("<input>");
              $(tollInput).attr('placeholder',"Toll money");
            $("#toll-input").append(tollInput);
          } else {
            $(this).attr('value', 'false');
            
          }
            
    });  
          $("#ent-div").on('change', function() {
          if ($(this).is(':checked')) {
            $(this).attr('value', 'true');
              entInput= $("<input>");
              $(entInput).attr('placeholder',"Fun Money");
            $("#ent-input").append(entInput);
          } else {
            $(this).attr('value', 'false');
            
          }
            
    });  
}
    }
    travelCalc.budgetType();
    travelCalc.expenses();    
});
//Chose budget type
//Budget unknown
    //on click append gas div with user inputs
        // var = .append input & .attr placeholder for each box
        // var subtot= append div 
    //on click detach user inputs
    //function gas
        //var1/var2 *var3 =subtot
    //function tot
        //sub1+sub2 = total
//Budget known
    //add input budget 
    //.change total to balence
    //on click append gas div with user inputs
        // var = .append input & .attr placeholder for each box
        // var subtot= append div 
    //on click detach user inputs
    //function gas
        //var1/var2 *var3 =subtot
    //function tot 
        //budget- sub1 - sub2 =balence
