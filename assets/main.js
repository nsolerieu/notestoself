$(document).ready(function() {

  $.getJSON( "datas.json" , function(data) {

    $.each( data.notes, function( i, note ) {
      $('.feed').append(
        '<div class="one-quote-box quote-' +  data.notes[i].id + '">' +
            '<p class="quote-id">' + data.notes[i].id + '</p>' +
            '<h2 class="quote-text">' + data.notes[i].quote + '</h2>' +
            '<p class="quote-author">&mdash;' + data.notes[i].author + '</p>' +
            '<p class="date">' + data.notes[i].date + '</p>' +
            '<p class="notes">' + data.notes[i].notes + '</p>' +
        '</div>'
      );

    });
  });
});
