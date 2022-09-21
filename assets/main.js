$(window).on('load', function (e) {
  $("body").toggleClass( "loading-done" );
})

$(document).ready(function() {

  $.getJSON( "datas.json" , function(data) {

    $.each( data.notes, function( i, note ) {
      $('.feed').append(
        '<div class="one-quote-box quote-' +  data.notes[i].id + '">' +
            '<p class="quote-text text-color-primary"> &ldquo;' + data.notes[i].quote + '&rdquo;</p>' +
            '<p class="quote-author text-small">&mdash;' + data.notes[i].author + '</p>' +
            '<div class="quote-date text-small">' + data.notes[i].date + '</div>' +
            '<div class="quote-notes">' + data.notes[i].notes + '</div>' +
        '</div>'
      );

    });
  });

});

$('.meta-box__button').on('click', function() {

  $(this).toggleClass( "active" );
  $("body").toggleClass( "light-mode" );

});
