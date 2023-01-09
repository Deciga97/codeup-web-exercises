"use strict";

$(document).ready(function() {
    $('a.toggle-link').click(function(event) {
        event.preventDefault();
        $('dd').toggleClass('invisible');
    });

    $('#highlight-button').click(function() {
        $('li:last-child').css('background-color', 'yellow');
    });

    $('h3').click(function() {
        $(this).next('ul').find('li').css('font-weight', 'bold');
    });

    $('li').click(function() {
        $(this).parent().find('li:first-child').css('color', 'blue');
    });
});
