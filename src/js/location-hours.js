function initMap() {
    
    var latLng = {lat: 39.250555, lng: -121.027204};
    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: latLng,
        disableDefaultUI: true
    });

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: '815 Zion St'
    });
}