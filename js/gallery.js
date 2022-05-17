function showALLGallery() {
    $.getJSON('data/gallery.json', function (data) {
  
      let gallery = data.gallery;
  
      $.each(gallery, function (i, data) {
        $('#list-gallery').append('<div class="customer" href = "images/' + data.img + '"><img class = "customer image"src = "images/' + data.img + '"></a> </div >');
      });
    });
  }
  
  showALLGallery();
  