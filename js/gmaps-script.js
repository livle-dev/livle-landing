$(document).ready(function(){




   var map=new GMaps({
      div: '.map',
      lat: 37.4047828,
      lng: 127.1038105,
      zoom: 15
    });

   map.addMarker({
  lat: 37.4066628,
  lng: 127.1028105,
  title: 'Livle',

    });
});

