/* eslint-disable */

(function() {
  // the minimum version of jQuery we want
  var v = '2.2.2';

  function initMyBookmarklet() {
    (window.myBookmarklet = function() {
      var location = window.location.href;
      var $html = $(
        '<iframe id="gzbkmrklt" onBlur="closegzbkrmklt()" src="https://gazet.com/bookmarklet.html#' +
          location +
          '"></iframe>',
      );
      // var $css = '<link rel="stylesheet" href="https://gazet.com/public/bookmarklet.css">';
      var $closeButton =
        '<img id="gzbkmrkltbtn" onClick="closegzbkrmklt()" src="https://gazet.com/bookmarklet/close.svg"/>';
      var $closeScript =
        '<script type="text/javascript">var closegzbkrmklt = function() {$("#gzbkmrklt").remove();$("#gzbkmrkltbtn").remove();};</script>';
      $('body').append($closeScript);
      $('body').append($html);
      $('body').append($closeButton);
      // $('body').append($css);
    })();
  }

  function closeIFrame() {
    $('#gzbkmrklt').remove();
  }

  // check prior inclusion and version
  if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
    var done = false;
    var script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/' + v + '/jquery.min.js';
    script.onload = script.onreadystatechange = function() {
      if (
        !done &&
        (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')
      ) {
        done = true;
        initMyBookmarklet();
      }
    };
    document.getElementsByTagName('head')[0].appendChild(script);
  } else {
    initMyBookmarklet();
  }
})();
