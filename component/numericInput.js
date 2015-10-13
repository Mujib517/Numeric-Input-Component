var component=angular.module('numericInputModule',[]);

component.directive('numericInput',function(){
   return{
       restrict:"A",
       link:function(scope,elem,attr){
           elem.bind('keydown keypress',function(event){
               if (event.which>=65&&event.which<=90) {
                   event.preventDefault();
               }
           });
       }
   }
});