function initMap(){
    var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center:{
        lat: 54.5260,
        lng: 15.2551
    }
    });
    
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
    
    var locations = [
        { lat: 51.8840201, lng: 4.6256281 },
        { lat: 47.2905375, lng: -2.1997971 },
        { lat: 45.1935709, lng: 28.7824915},
        { lat: 62.4753238, lng: 6.1507484 },
        { lat: 53.8979255, lng: 11.4377123 }
    ];
    
    var markers = locations.map(function(location,i){
        return new google.maps.Marker({
            position: location ,
            label: labels[i % labels.length]
            });
    });
    
    var markerCluster = new MarkerClusterer(map, markers,{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
