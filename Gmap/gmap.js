function initMap() {
    var map = null;
    var radius_circle = null;
    var markers_on_map = [];
    var my_marker = [];
    var i;
    var address_lat_lng = null;

    // initialize map on document ready
    $(document).ready(function(){ 
        // show your current location
        navigator.geolocation.getCurrentPosition(
                (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                infoWindow.setPosition(pos);
                infoWindow.setContent("<h5>My Location</h5>");
                infoWindow.open(map);
                map.setCenter(pos);
                // show close pharmacies of my location 
                showMyCloseLocations(pos);
                getLanguageByData(pos)
                },
                () => {
                handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        var myOptions = {
            zoom: 14,
            mapTypeControl: true,
            mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
            navigationControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        // create map
        map = new google.maps.Map(document.getElementById("map"), myOptions);
        // show close pharmacies when click on map 
        google.maps.event.addListener(map, 'click', showCloseLocations);
        // show mark when click on map
        google.maps.event.addListener(map, 'click', showClickedLocations);

        // show my location
        let infoWindow = new google.maps.InfoWindow();
        const locationButton = document.getElementById("myLocationButton");
        locationButton.textContent = "My Current Location";
        locationButton.classList.add("custom-map-control-button");
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
        locationButton.addEventListener("click", () => {
            if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                infoWindow.setPosition(pos);
                infoWindow.setContent("<h5>My Location.</h5>");
                infoWindow.open(map);
                map.setCenter(pos);
                showMyCloseLocations(pos);
                },
                () => {
                handleLocationError(true, infoWindow, map.getCenter());
                }
            );
            } else {
            handleLocationError(false, infoWindow, map.getCenter());
            }
        });
    });
    
    // show close pharmacies when click on map 
    function showCloseLocations(e) {
        var radius_km = $('#radius_km').val();
        showLocationCircle(radius_km);
        function showLocationCircle(radius_km) {
            removeAllRadiusAndMarkers()                
            address_lat_lng = e.latLng;
            console.log(radius_km)
            radius_circle = new google.maps.Circle({
                center: address_lat_lng,
                radius: radius_km * 1000,
                clickable: false,
                map: map,
                strokeColor: "rgb(0, 117, 252)",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "rgb(0, 117, 252)",
                fillOpacity: 0.20,
            });
            if(radius_circle) map.fitBounds(radius_circle.getBounds());
            getLanguageByData(address_lat_lng)
        }
    } 
    
    // show close pharmacies of my location 
    function showMyCloseLocations(myPosition) { 
        var my_radius_km = "1";
        showMyLocationCircle(my_radius_km);
        function showMyLocationCircle(my_radius_km) {
            removeAllRadiusAndMarkers()              
            address_lat_lng = myPosition;
            radius_circle = new google.maps.Circle({
                center: address_lat_lng,
                radius: my_radius_km * 1000,
                clickable: false,
                map: map,
                strokeColor: "rgb(0, 117, 252)",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "rgb(0, 117, 252)",
                fillOpacity: 0.20,
            });
            if(radius_circle) map.fitBounds(radius_circle.getBounds());
            var address_lat_lng_new = new google.maps.LatLng(address_lat_lng.lat, address_lat_lng.lng);
            getLanguageByData(address_lat_lng_new)
        }
    }
    
    // remove all radius and markers from map before displaying new ones
    function removeAllRadiusAndMarkers() {
        if (radius_circle) {
            radius_circle.setMap(null);
            radius_circle = null;
        }
        for (i = 0; i < markers_on_map.length; i++) {
            if (markers_on_map[i]) {
                markers_on_map[i].setMap(null);
                markers_on_map[i] = null;
            }
        }
    }

    // function to get lat,lons and info by English, Sinhala and Tamil language
    function getLanguageByData(address_lat_lng) {
        // Default table -- English Table
        language = "english"
        getPharmacyData(language);
        
        // table -- Sinhala Table, Tamil Table
        $('#languageDropdown a').click(function(event) {
            var language = this.textContent;
            console.log(language)
            getPharmacyData(language);
        })

        function getPharmacyData(language) {
            $.getJSON(`../Data/${language}.json`, function (data) {
                $.each(data, function (key, value) {
                    var radius_km = $('#radius_km').val();
                    let infoWindow = new google.maps.InfoWindow();
                    var latitude = parseFloat(value.Latitude)
                    var longitude = parseFloat(value.Longitude)
                    var coords = {lat:latitude,lng:longitude}
                    var name = value.Name
                    var address = value.Address
                    var phone = value.Phone
                    var whatsApp = value.WhatsApp
                    var whatsAppWithoutPlus = whatsApp.replace(/[^0-9]/g,'')
                    var viber = value.Viber
                    var viberWithoutPlus = viber.replace(/[^0-9]/g,'')
                    var info = `<h4>${name}</h4>` 
                    + `<h6>${address}</h6>` 
                    + `<a href="tel:+${phone}">Phone : ${phone}</a>`
                    + `<br/>`
                    + `<a href="https://api.whatsapp.com/send?phone=${whatsAppWithoutPlus}">WhatsApp :<img src="../images/whatsapp.png"></img> ${whatsApp}</a>`
                    + `<br/>`
                    + `<a href="viber://contact?number=%2B${viberWithoutPlus}">Viber :<img src="../images/viber.png"></img> ${viber}</a>`
                    var marker_lat_lng = new google.maps.LatLng(latitude, longitude);
                    var distance_from_location = google.maps.geometry.spherical.computeDistanceBetween(address_lat_lng, marker_lat_lng); //distance in meters between your location and the marker
                    if (distance_from_location <= radius_km * 1000) {
                        var new_marker = new google.maps.Marker({
                            position: marker_lat_lng,
                            map: map,
                            title: name,
                            icon:'/images/cross.png'
                        });
                        google.maps.event.addListener(new_marker, 'click', function () {
                            const pos = {
                                lat: latitude,
                                lng: longitude,
                            };
                            distance_from_location = distance_from_location/1000
                            infoWindow.setPosition(pos);
                            infoWindow.setContent(`${info}  <h5> Distance From Selected Point: ${distance_from_location.toFixed(2)}  Km </h5>`);
                            infoWindow.open(map);
                            map.setCenter(pos);
                        });
                        markers_on_map.push(new_marker);
                    }
                });
            });
        }
    }

    // show mark when click on map
    function showClickedLocations(e) {
        var address_lat_lng = e.latLng;
        for (var i = 0; i < my_marker.length; i++) {
            my_marker[i].setMap(null);
        }
        my_marker = [];
        var my_new_marker = new google.maps.Marker({
            position: address_lat_lng,
            map: map,
            title: name,
            icon:'/images/location.png'
        });
        my_marker.push(my_new_marker);
    }

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}

// language dropdown visible
$('#dropdownForLanguage').click(function(){
    $('#languageDropdown').toggleClass('show');
});
