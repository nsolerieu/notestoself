$(document).ready(function() {

  $.getJSON( "datas.json" , function(data) {

    $.each( data.notes, function( i, note ) {
      $('.feed').append(
        '<div class="one-quote-box quote-' +  data.notes[i].id + '"><div class="one-quote-box__content">' +
            '<p class="quote-text text-color-primary">' + data.notes[i].quote + '</p>' +
            '<p class="quote-author text-color-primary">&mdash;' + data.notes[i].author + '</p>' +
            '<div class="quote-date text-small">' + data.notes[i].date + '</div> &bull; ' +
            '<div class="view-notes text-small">notes</div>' +
            '<div class="notes" style="display:none">' + data.notes[i].notes + '</div>' +
        '</div></div>'
      );

    });
  });
});


$('.view-notes').on('click', function() {
    $(this).next().toggle();
    $(this).toggleClass( "active" );
});

$( ".meta-box__button" ).click(function() {

  $(this).toggleClass( "active" );
  $("body").toggleClass( "light-mode" );

});
