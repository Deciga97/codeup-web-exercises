"use strict";
(function(){
    // Use jQuery to select an element by the id. Alert the contents of the element.
    // let contents = $('#second-id').html();
    // alert(contents);

    // Update the jQuery code to select and alert a different id.
    // let contents = $('#third-id').html();
    // alert(contents);

    // Use the same id on 2 elements. How does this change the jQuery selection?
    // let contents = $('#third-id').html();
    // alert(contents);
    //
    // let contents = $('#third-id').html();
    // alert(contents);

    // Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
    // $('.codeup').css('boarder' , '1px solid-red')

// Add jQuery code that will change the background color of an h1 element when clicked.

    $('h1').click(function() {
        $(this).css('background-color' , 'blue');
    })



    // Make all paragraphs have a font size of 18px when they are double-clicked.
    $('p').dblclick(function() {
        $(this).css('font-size' , '18px');
    })




    // Set all li text color to red when the mouse is hovering; reset to black when it is not.
    $('li').hover(
        function() {
            $(this).css('background-color', 'red');
        },
        function() {
            $(this).css('background-color', 'black');
        }
    );














})();