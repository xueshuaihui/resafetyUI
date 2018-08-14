require.config(
    {
        paths:{
            jquery:"./plugins/jquery-3.1.1.min",
            resafety: "./resafety",
            nav: "../modules/nav/js/nav"
        }
    }
);
require(['jquery', 'resafety'], function($, nav){
    console.log( arguments )
})