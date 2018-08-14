var resafetyWeb = function (){
    var resafetyWeb = function(){
        var options = {}
    };
    resafetyWeb.prototype = {
    
        init: function(){
            require.config(
                {
                    paths:{
                        jquery:"./plugins/jquery-3.1.1.min",
                        nav: "../modules/nav/js/nav"
                    }
                }
            );
            require(['jquery', 'nav'], function($, nav){
                console.log( nav );
                resafetyWeb.a = nav;
            })
        }
    }
    return new resafetyWeb();
}();