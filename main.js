// img and text animation
setInterval(makeFadeInFadeUpBecome, 4000);
setInterval(makeFadeInFadeUpNinja, 4000);
setInterval(makeFadeInFadeUpBtn, 4000);
setInterval(makeFadeInFadeUpImage, 4000);

function makeFadeInFadeUpBecome() {
    if ($("#become").hasClass("animate__slideOutUp")) {
        $("#become").removeClass("animate__slideOutUp").addClass("animate__slideInDown");
    } else {
        $("#become").removeClass("animate__slideInDown").addClass("animate__slideOutUp");
    }
}
function makeFadeInFadeUpNinja() {
    if ($("#ninja").hasClass("animate__slideOutUp")) {
        $("#ninja").removeClass("animate__slideOutUp").addClass("animate__slideInDown");
    } else {
        $("#ninja").removeClass("animate__slideInDown").addClass("animate__slideOutUp");
    }
}
function makeFadeInFadeUpBtn() {
    if ($("#btn").hasClass("animate__slideOutUp")) {
        $("#btn").removeClass("animate__slideOutUp").addClass("animate__slideInDown");
    } else {
        $("#btn").removeClass("animate__slideInDown").addClass("animate__slideOutUp");
    }
}
function makeFadeInFadeUpImage() {
    if ($("#image").hasClass("animate__slideOutRight")) {
        $("#image").removeClass("animate__slideOutRight").addClass("animate__slideInRight");
    } else {
        $("#image").removeClass("animate__slideInRight").addClass("animate__slideOutRight");
    }
}
