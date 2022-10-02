$(window).on('load', function (e) {
  $("body").toggleClass( "loading-done" );
})

$(document).ready(function() {

  $.getJSON( "datas.json" , function(data) {

    $.each( data.notes, function( i, note ) {
      $('.feed').append(
        '<div class="row one-quote-box quote-' +  data.notes[i].id + '">' +
          '<div class="col-50">' +
            '<div class="quote-date text-small text-color-secondary">' + data.notes[i].id + ' — ' + data.notes[i].date + '</div>' +
          '</div><div class="col-50">' +
            '<p class="quote-text text-color-primary text-large"> &ldquo;' + data.notes[i].quote + '&rdquo;</p>' +
            '<p class="quote-author text-small">&mdash; ' + data.notes[i].author + '</p>' +
            '<div class="quote-notes text-regular text-color-secondary">' + data.notes[i].notes + '</div>' +
        '</div></div>'
      );

    });
  });

});

$('.mode-switcher__button').on('click', function() {

  $(".mode-switcher__button").toggleClass( "active" );
  $("body").toggleClass( "light-mode" );

});
