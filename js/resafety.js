require.config(
    {
        paths:{
            jquery:"./plugins/jquery-3.1.1.min",
            nav: "../modules/nav/js/nav"
        }
    }
);
require(['jquery', 'nav'], function($, nav){
    console.log( nav )
})