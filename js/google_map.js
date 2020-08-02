

    // Maps

    var map;
        $(document).ready(function(){
            map = new GMaps({
                el: '#map',
                lat:40.7322483,
                lng: -74.0039488,
                zoomControl : false, 
                zoomControlOpt: {
                style : 'SMALL',
                position: 'TOP_LEFT'
            },
            panControl : false,
            streetViewControl : false, 
            mapTypeControl: false,
            scrollwheel: false,
            zoom:17,
            overviewMapControl: false
        });
        map.addMarker({
            lat:40.7322483,
            lng: -74.0039488,
            title: 'Jones Street', 
        });
    });