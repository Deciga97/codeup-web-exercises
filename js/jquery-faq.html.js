"use strict";

$(document).ready(function() {
    $('a.toggle-link').click(function(event) {
        event.preventDefault();
        $('dd').toggleClass('invisible');
    });
});
