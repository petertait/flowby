import Dropbox from '../../dropbox.js';

Dropbox('files/list_folder', {path: ''}, function(result) {
  var stream = document.querySelector('.stream');
  var results = result.entries;
  var resultsLength = results.length;

  for (var i = 0; i < resultsLength; i++) {
    var result = results[i];
    Dropbox('files/get_thumbnail', {path: result.path_lower, size: "w1024h768"}, {
      onComplete: function(result, response, r ){
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(response);

        var resultPreview = document.createElement('img');
        resultPreview.src = imageUrl;

        document.querySelector('.stream').appendChild(resultPreview);
      }
    });
  }
});
