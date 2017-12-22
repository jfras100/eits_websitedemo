//Simple plug-in
(function($) {
    $.fn.changeTitle = function() {
        $(this).click(function(){
            $(this).animate({
            backgroundColor: '#dba087',
            fontSize: '40px',
            color: 'rgb(191, 80, 40)',
            padding: '12px',
            borderColor: 'black',
            borderWidth: "1.5px",
        }, 800);
                
            });
            
        }
})(jQuery);


//calling plug-in
$(document).ready(function() {
    $('#page-title').changeTitle();

});

//calling UI Accordion plug-in
$(document).ready(function() {
    $('#accordion').accordion();

});

//changes first div of recipe page to a dfferent color
$(document).ready(function() {
    $("#recipe1div").hover(function() {
        $(this).animate({
            backgroundColor: '#dba087'
        }, 700);

    });
});

//changes second div of recipe page to a dfferent color
$(document).ready(function() {
    $("#recipe2div").hover(function() {
        $(this).animate({
            backgroundColor: '#dba087'
        }, 700);

    });
});

//changes third div of recipe page to a dfferent color
$(document).ready(function() {
    $("#recipe3div").hover(function() {
        $(this).animate({
            backgroundColor: '#dba087'
        }, 700);

    });
});

//enlarges div on home page on hover and returns to normal on mouseleave
$(document).ready(function() {
    $("#homeDiv").hover(function() {
        $(this).animate({
            padding: '23px'
        }, 100);

    });
    $("#homeDiv").mouseleave(function() {
        $("#homeDiv").animate({
            padding: '10px'
        }, 100);
    })
});

//enlarges div on home page on hover and returns to normal on mouseleave
$(document).ready(function() {
    $("#homeDiv2").hover(function() {
        $(this).animate({
            padding: '23px'
        }, 100);

    });
    $("#homeDiv2").mouseleave(function() {
        $("#homeDiv2").animate({
            padding: '10px'
        }, 100);
    })
});

//enlarges div on home page on hover and returns to normal on mouseleave
$(document).ready(function() {
    $("#homeDiv3").hover(function() {
        $(this).animate({
            padding: '23px'
        }, 100);

    });
    $("#homeDiv3").mouseleave(function() {
        $("#homeDiv3").animate({
            padding: '10px'
        }, 100);
    })
});

//enlarges div on home page on hover and returns to normal on mouseleave
$(document).ready(function() {
    $("#homeDiv4").hover(function() {
        $(this).animate({
            padding: '23px'
        }, 100);

    });
    $("#homeDiv4").mouseleave(function() {
        $("#homeDiv4").animate({
            padding: '10px'
        }, 100);
    })
});

//enlarges p tags font size and returns to normal on mouseleave
$(document).ready(function() {
    $('p').hover(function() {
        $(this).animate({
            fontSize: '22px'
        }, 50);
    });


    $("p").mouseleave(function() {
        $("p").animate({
            fontSize: '16px'
        }, 50);
    })
});

//adds user message once mouse is over submit button on contact page, then message leaves on mouseleave
document.getElementById("mailBtn").addEventListener("mouseover", function() {
    document.getElementById("mail-send").innerHTML = "Click to send mail";
});

document.getElementById("mailBtn").addEventListener("mouseleave", function() {
    document.getElementById("mail-send").innerHTML = "";
});
//adds directions to the address on click, in the contact page
document.getElementById("address").addEventListener("click", function() {
    document.getElementById("directions").innerHTML = "Directions: Take 35W S, exit for 94/11th St, stay on 11th and the turn west onto Andrew";
});
//once mouce leaves div, directions disappear
document.getElementById("address-div").addEventListener("mouseleave", function() {
    document.getElementById("directions").innerHTML = "";
});
//adds a focus method to comment section of contact page
document.getElementById("textarea").addEventListener("focus", function() {
    document.getElementById("textarea").style.backgroundColor = "#dba087";
}, true);
//adds blur to same comment section above
document.getElementById("myForm").addEventListener("blur", function() {
    document.getElementById("textarea").style.backgroundColor = "";
}, true);

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "recipes.xml", true);
    xhttp.send();
}

function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var display = "<h3>Recipe</h3>";
    var x = xmlDoc.getElementsByTagName("first-recipe");
    for (i = 0; i < x.length; i++) {
        display += "<p>" +
             x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("subtitleOne")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("ingredients")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("subtitleTwo")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("preparation")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("subtitleThree")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("instructions")[0].childNodes[0].nodeValue +
            "<p><br />";
    }
    document.getElementById("recipe1").innerHTML = display;
}

function loadDoc2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction2(this);
        }
    };
    xhttp.open("GET", "recipes.xml", true);
    xhttp.send();
}

function myFunction2(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var display = "<h3>Recipe</h3>";
    var x = xmlDoc.getElementsByTagName("second-recipe");
    for (i = 0; i < x.length; i++) {
        display += "<p>" +
             x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("subtitleOne")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("ingredients")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("subtitleTwo")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("preparation")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("subtitleThree")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("instructions")[0].childNodes[0].nodeValue +
            "<p><br />";
    }
    document.getElementById("recipe2").innerHTML = display;
}
function loadDoc3() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction3(this);
        }
    };
    xhttp.open("GET", "recipes.xml", true);
    xhttp.send();
}

function myFunction3(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var display = "<h3>Recipe</h3>";
    var x = xmlDoc.getElementsByTagName("third-recipe");
    for (i = 0; i < x.length; i++) {
        display += "<p>" +
            x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("subtitleOne")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("ingredients")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("subtitleTwo")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("preparation")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("subtitleThree")[0].childNodes[0].nodeValue +
            "<p><br />" +
            x[i].getElementsByTagName("instructions")[0].childNodes[0].nodeValue +
            "<p><br />";
    }
    document.getElementById("recipe3").innerHTML = display;
}