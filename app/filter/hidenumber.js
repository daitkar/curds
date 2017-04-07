/**
 * Created by ng-graphic on 26-02-2017.
 */
app.filter('hidenumber',function(){

return function(number)
{

 var   number=''+number;
   return number.replace(/\d+/g,"XXXXX");

}

});