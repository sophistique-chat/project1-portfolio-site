//Adds animation to the side menu upon tap/click//

$(".side-info").click(function () {
    $("body").toggleClass("open");
});

//Enlarges featured work examples upon tap/click, does not apply to the links in the cards//

$(".one").click(function () {
    $("body").toggleClass("enlarge-one");
    $("body").removeClass("enlarge-two");
    $("body").removeClass("enlarge-three");
    $("body").removeClass("enlarge-four");
    $("body").removeClass("enlarge-five");
    $("body").removeClass("enlarge-six");
});

$(".two").click(function () {
    $("body").toggleClass("enlarge-two");
    $("body").removeClass("enlarge-one");
    $("body").removeClass("enlarge-three");
    $("body").removeClass("enlarge-four");
    $("body").removeClass("enlarge-five");
    $("body").removeClass("enlarge-six");
});

$(".three").click(function () {
    $("body").toggleClass("enlarge-three");
    $("body").removeClass("enlarge-two");
    $("body").removeClass("enlarge-four");
    $("body").removeClass("enlarge-four");
    $("body").removeClass("enlarge-five");
    $("body").removeClass("enlarge-six");
});

$(".four").click(function () {
    $("body").toggleClass("enlarge-four");
    $("body").removeClass("enlarge-one");
    $("body").removeClass("enlarge-two");
    $("body").removeClass("enlarge-three");
    $("body").removeClass("enlarge-five");
    $("body").removeClass("enlarge-six");
});

$(".five").click(function () {
    $("body").toggleClass("enlarge-five");
    $("body").removeClass("enlarge-one");
    $("body").removeClass("enlarge-two");
    $("body").removeClass("enlarge-three");
    $("body").removeClass("enlarge-four");
    $("body").removeClass("enlarge-six");
});

$(".six").click(function () {
    $("body").toggleClass("enlarge-six");
    $("body").removeClass("enlarge-one");
    $("body").removeClass("enlarge-two");
    $("body").removeClass("enlarge-three");
    $("body").removeClass("enlarge-five");
    $("body").removeClass("enlarge-four");
});

//Turns central image upside down upon tap/click on the text "Creativity is the key", clicking second time will return the image back in place//

$(".cent-text").click(function () {
    $("body").toggleClass("enlarge-central");
    $("body").removeClass("enlarge-dev");
    $("body").removeClass("enlarge-header");
});
