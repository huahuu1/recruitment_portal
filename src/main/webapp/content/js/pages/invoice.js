//[Javascript]

$(function () {
  'use strict';

  $('#print2').click(function () {
    var mode = 'iframe'; //popup
    var close = mode == 'popup';
    var options = {
      mode: mode,
      popClose: close,
    };
    $('section.printableArea').printArea(options);
  });
}); // End of use strict
