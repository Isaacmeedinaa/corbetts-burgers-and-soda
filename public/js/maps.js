(function ($) {
  "use strict";
  if ($("#contact_map").length > 0) {
    google.maps.event.addDomListener(window, "load", init);
    function init() {
      var latLng = { lat: 35.7705, lng: -78.78305 };
      var mapOptions = {
        scrollwheel: false,
        zoom: 12,
        center: latLng,
        styles: [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#c51c23",
              },
            ],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [
              {
                color: "#EFEBEA",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [
              {
                saturation: -100,
              },
              {
                lightness: 45,
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [
              {
                visibility: "simplified",
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [
              {
                color: "#E3E0DF",
              },
              {
                visibility: "on",
              },
            ],
          },
        ],
      };

      var mapElement = document.getElementById("contact_map");
      var map = new google.maps.Map(mapElement, mapOptions);
      var contentString =
        '<div class="contact-info-area">' +
        '<div class="info-address">' +
        "<span>Corbett's Burgers & Soda Bar</span>126 Kilmayne Dr, Cary, NC 27511" +
        '<a href="#0">get direction</a>' +
        "</div>" +
        '<div class="info-phone">' +
        "+1 (919) 466-0055" +
        "</div>" +
        "</div>";
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
      });
      var marker = new google.maps.Marker({
        position: { lat: 35.7705, lng: -78.78305 },
        map: map,
        icon: {
          url: "./images/icon/map4.png",
        },
      });
      marker.addListener("click", function () {
        infowindow.open(map, marker);
      });
    }
  }
})(jQuery);
