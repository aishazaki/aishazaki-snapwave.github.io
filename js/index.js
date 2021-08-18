$(document).ready(function () {
    //لتحديث  تاريخ  حقوق  الملكية
    let date = new Date();
    $("#copyright-year").text(date.getFullYear());

    new WOW().init();
});