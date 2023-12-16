var nav = document.getElementById('nav');
window.onscroll = function() {
    if (window.pageYOffset > 200) {
        nav.style.background = "black";
        nav.style.marginTop = "0";
    } else {
        nav.style.background = "transparent";
        nav.style.marginTop = "30px";
    }
}


var i = 1;
var j = 1;

function typer() {
    var name = "HELLO!  MY NAME IS OLUSEGUN OMOTUNDE";
    if (i <= name.length) {
        var txt = name.substring(0, i);
        document.getElementById("name").innerHTML = txt;
        setTimeout("typer()", 100);
        i++;
    } else {
        i = 1;
        document.getElementById("name").innerHTML = name;
    }

}

function typer1() {
    var title = "Welcome to my web page! Let's go for a ride!!";
    if (j <= title.length) {
        var txt2 = title.substring(0, j);
        document.getElementById("title").innerHTML = txt2;
        setTimeout("typer1()", 100);
        j++;
    } else {
        j = 1;
        document.getElementById("title").innerHTML = title;
    }
}



window.onload = typer();
window.onload = typer1();

(function() {
    'use strict';

    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        )
        document.querySelector('head').appendChild(msViewportStyle)
    }

})();

function analytics() {
    $("#dataScience").hide();
    $("#engineering").hide();
    $("#dataAnalytics").show();
};

function science() {
    $("#dataAnalytics").hide();
    $("#engineering").hide();
    $("#dataScience").show();
};

function engr() {
    $("#dataAnalytics").hide();
    $("#engineering").show();
    $("#dataScience").hide();
};

function init() {
    science();
};

init();

d3.select("#science").on("click", science);
d3.select("#analytics").on("click", analytics);
d3.select("#engr").on("click", engr);