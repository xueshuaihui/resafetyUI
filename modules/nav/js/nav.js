define(['jquery'], function($){
    var nav = function(){
        this.options = function(){

        }

    }
    nav.prototype = {
        init: function(){
            el: ''
        },
        createNav: function(){
            return $('<div class="nav">');
        },
        setNav: function( $nav ){
            this.$nav = $nav;
            return this;
        },
        getNav: function(){
            return this.$nav;
        },
        // 父导航
        creatParentNav: function(){
            return $('<ul class="clear-float">');
        },
        setParentNav: function( $navUl ){
            this.$navUl = $navUl;
            return this;
        },
        getParentNav: function(){
            return this.$navUl;
        }
        // 子导航

    }
    return {
        init: nav
    }
})