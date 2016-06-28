import Dropbox from './dropbox.js';

Dropbox.authenticate( { client_id: 'qbryowo5frs09ht', redirect_uri: window.location.href }, function(){
  Dropbox('files/list_folder', {path: ''}, function(result) {

    var stream = document.querySelector('.stream');
    var results = result.entries;
    var resultsLength = results.length;

    for (var i = 0; i < resultsLength; i++) {
      var result = results[i];
      Dropbox('files/get_thumbnail', {path: result.path_lower}, {
        onComplete: function(result, response, r ){
          console.log(response);

          var urlCreator = window.URL || window.webkitURL;
          var imageUrl = urlCreator.createObjectURL(response);
          var resultPreview = document.createElement('img');

          resultPreview.classList.add('preview');
          resultPreview.src = imageUrl;

          document.querySelector('#stream').appendChild(resultPreview);
        }
      });
    }
  });
});
