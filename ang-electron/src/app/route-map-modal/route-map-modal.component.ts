import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { VehicleRouteDto } from '../../VehicleRouteDto';
import { ViewChild } from '@angular/core';
import {  } from '@types/googlemaps';
import { request } from 'http';

@Component({
  selector: 'app-route-map-modal',
  templateUrl: './route-map-modal.component.html',
  styleUrls: ['./route-map-modal.component.css']
})
export class RouteMapModalComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor(public dialogRef: MatDialogRef<RouteMapModalComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: VehicleRouteDto) {
    this.vehicleRoute = data;
   }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    // var colors = ['ff0000' , '#00468c', 'ff00ee', 'a500ff', '0800ff', '00e5ff', 
    //               '15f23e', 'a8544b', 'dee519', '14544f', 'e58919', '000000']
    var colors = ['red', 'blue', 'green', 'yellow', 'black', 'gray', 'white'];

    directionsDisplay.setMap(map);

    directionsDisplay.setOptions({
      polylineOptions: {
        strokeWeight: 8,
        strokeOpacity: 0.7,
        strokeColor:  '#00468c' 
      }
    });

    var requestArray = [], renderArray = [];
    var cur = 0;
    for(var i = 0; i < this.vehicleRoute.subRoutes.length; i++) {
      var request : google.maps.DirectionsRequest = {
        destination: this.vehicleRoute.subRoutes[i].addressDestiny.formattedAddress,
        origin: this.vehicleRoute.subRoutes[i].addressOrigin.formattedAddress,
        travelMode: google.maps.TravelMode.DRIVING
      };
      requestArray.push(request);
    }

    if(requestArray.length > 0) {
      directionsService.route(requestArray[cur], directionResults);
    }  

    var depotMarker = "C:/Users/Richard/Desktop/VRP_FrontEnd/ang-electron/src/app/route-map-modal/depotMarker.jpg";
    var clientMarker = "C:/Users/Richard/Desktop/VRP_FrontEnd/ang-electron/src/app/route-map-modal/clientMarker.png";
    var that = this;
    function directionResults(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        renderArray[cur] = new google.maps.DirectionsRenderer();
        renderArray[cur].setMap(map);
        renderArray[cur].setDirections(result);
        renderArray[cur].setOptions({ suppressMarkers: true, polylineOptions: { strokeColor: colors[cur % 7] }});

        var step = Math.floor(result.routes[0].legs[0].steps.length / 2);
        var duration = that.vehicleRoute.subRoutes[cur].duration.toString().split('T')[1];
        var infowindow2 = new google.maps.InfoWindow();
        infowindow2.setContent(that.vehicleRoute.subRoutes[cur].distance + "<br>" +
          duration + "<br>" + 
          "Route " + cur);
        infowindow2.setPosition(result.routes[0].legs[0].steps[step].end_location);
        infowindow2.open(map);

        if(cur == 0) {
          var positionOrigin = {lat: that.vehicleRoute.subRoutes[cur].addressOrigin.latitude,
                                lng: that.vehicleRoute.subRoutes[cur].addressOrigin.longitude }
          makeMarker(positionOrigin, getDepotMarker(), "Depot " + requestArray[cur].origin , map);
          var positionDestiny = {lat: that.vehicleRoute.subRoutes[cur].addressDestiny.latitude,
                                 lng: that.vehicleRoute.subRoutes[cur].addressDestiny.longitude }
          makeMarker(positionDestiny, getClientMarker(), requestArray[cur].destination, map,);
        }
        else if (cur == (that.vehicleRoute.subRoutes.length - 1)) {
          var positionOrigin = {lat: that.vehicleRoute.subRoutes[cur].addressOrigin.latitude,
            lng: that.vehicleRoute.subRoutes[cur].addressOrigin.longitude }
          makeMarker(positionOrigin,  getClientMarker(), requestArray[cur].origin, map);
          var positionDestiny = {lat: that.vehicleRoute.subRoutes[cur].addressDestiny.latitude,
            lng: that.vehicleRoute.subRoutes[cur].addressDestiny.longitude }
          makeMarker(positionDestiny, getDepotMarker(), "Depot " + requestArray[cur].destination , map);
        }
        else {
          var positionOrigin = {lat: that.vehicleRoute.subRoutes[cur].addressOrigin.latitude,
            lng: that.vehicleRoute.subRoutes[cur].addressOrigin.longitude }
          makeMarker(positionOrigin,  getClientMarker(), requestArray[cur].origin, map);
          var positionDestiny = {lat: that.vehicleRoute.subRoutes[cur].addressDestiny.latitude,
            lng: that.vehicleRoute.subRoutes[cur].addressDestiny.longitude }
          makeMarker(positionDestiny,  getClientMarker(), requestArray[cur].destination, map);
        }
      }
      cur++;
      if(cur < requestArray.length) {
        directionsService.route(requestArray[cur], directionResults);
      }
    }

    function makeMarker(position, icon, title, map, label?) {
      new google.maps.Marker({
          position: position,
          draggable: false,
          map: map,
          icon: icon,
          title: title,
          label: label ? label : ''
      });
    }

    function getDepotMarker(){
      var image = {
        url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
      };
      return image;
    }

    function getClientMarker(){
      var image = {
        url: 'C:/Users/Richard/Desktop/VRP_FrontEnd/ang-electron/src/app/route-map-modal/markers/markers.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(32, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point((65), (215)),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
      };
      return image;
    }
  }
  
  close(): void { this.dialogRef.close(this.data); }

  public vehicleRoute: VehicleRouteDto;
}
