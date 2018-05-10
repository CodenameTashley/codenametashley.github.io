/* Session Stack code */ ! function (a, b) {
    var c = window;
    c.SessionStack = a, c[a] = c[a] || function () {
        c[a].q = c[a].q || [], c[a].q.push(arguments)
    }, c[a].t = b;
    var d = document.createElement("script");
    d.async = 1, d.src = "https://cdn.sessionstack.com/sessionstack.js";
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(d, e);
}("sessionstack", "296508c878fa469cb8993f85680d9379");

/* End of Session Stack code */

$(document).ready(function () {
    $("#profile-card").click(function () {
        $("#profile-card").addClass("auto-height");
        $("#profile-info").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#resume-card").click(function () {
        $("#resume-card").addClass("auto-height");
        $("#resume-info").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#reference-card").click(function () {
        $("#reference-card").addClass("auto-height");
        $("#reference-info").slideToggle("slow");
    });
});