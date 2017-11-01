//Global variables
var travelCalc;
var budgetKnown;
var budgetUnknown;
var travOptions;

//DOM manipulations

$(document).ready(function(){
    travelCalc = {
        //Chose budget type
        budgetType: function(){

        $("#budget-unknown").on('change', function() {
          if ($(this).is(':checked')) {
            $(this).attr('value', 'true');
          } else {
            $(this).attr('value', 'false');
          }
            console.log($("#budget-unknown").val());

}); 

        }
    }
    travelCalc.budgetType();    
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
