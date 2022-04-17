// 1
// Source: (https://stackoverflow.com/questions/7992342/run-javascript-function-when-the-dom-is-ready, accessed 9 April 2022)
$(window).on('DOMContentLoaded', function() {
    console.log('Let’s get ready to party with jQuery!'); 
}); 

// 2 
$('a').children('img').addClass('image-center');

// 3
$('p').eq('5').remove();

// 4
// Source: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random, accessed 9 April 2022)
$('h1').css('font-size', `${Math.floor(Math.random() * 100)}px`);

// 5
$('ol').append('<li>Lists come in handy from time to time.</li>'); 

// 6
$('ol').remove();
$('h4').after('<p>Real quick, sorry for the exitence of that list. It isn\'t necessary. Please continue reading.</p>');

// 7
// Source: (https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event, accessed 9 April 2022)
// Source: (https://stackoverflow.com/questions/12717782/jquery-input-element-unselect-text-event, accessed 9 April 2022)
$('.form-control').blur(function() {
    $('body').css('background-color', `rgb(${$('.form-control').eq(0).val()}, ${$('.form-control').eq(1).val()}, ${$('.form-control').eq(2).val()})`);
});

// 8
$('img').on('click', function() {
    $(this).remove();
}); 

// MARK - Movies App
$('#submit').on('click', function() {
    // Source: (https://stackoverflow.com/questions/2702862/jquery-check-length-of-input-field, accessed 9 April 2022)
    var movieTitle = $('#movie-title').val();

    if (($('#rating').val() >= 0) && ($('#rating').val() <= 10) && (movieTitle.length >= 2)) {
        $('#movies').append(`<li>${$('#movie-title').val()}, Rating: ${$('#rating').val()}</li><button id="remove">Remove</button>`);
    } else {
        alert('Rating must be between 0 and 10 and movie title must have at least two characters.');
    }
}); 

$('#movies').on('click', '#remove', function() {
    $(this).parent().remove();
});

$('#sort-alpha').on('click', function() {
    // Source: (https://stackoverflow.com/questions/1134976/how-may-i-sort-a-list-alphabetically-using-jquery, accessed 16 April 2022)
    // Source: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare, accessed 16 April 2022)
    $('#movies').each(function(){
        $(this).children('li').sort((a, b) => a.innerText.localeCompare(b.innerText)).appendTo(this);
    });
}); 

$('#sort-low-to-high').on('click', function() {
    
}); 

