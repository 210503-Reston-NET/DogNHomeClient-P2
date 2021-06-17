import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';

/// <reference types="google.maps" />
// import {} from 'google.maps';

import { Loader } from "@googlemaps/js-api-loader"

import WebMap from '@arcgis/core/WebMap';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import Expand from '@arcgis/core/widgets/Expand';
import rTask from '@arcgis/core/tasks/RouteTask';
import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import RouteParameters from '@arcgis/core/tasks/support/RouteParameters';
import FeatureSet from '@arcgis/core/tasks/support/FeatureSet';

// import { loadModules } from 'esri-loader';
// import esri = __esri;

// let map: google.maps.Map;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  // @ViewChild('mapViewNode', { static: true }) private mapViewEl?: ElementRef;

  // makeDirections(){
  //   var directionsService = new google.maps.DirectionsService();
  //   var directionsRenderer = new google.maps.DirectionsRenderer();
  //   var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  //   var mapOptions = {
  //     zoom:7,
  //     center: chicago
  //   }
  //   var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  //   directionsRenderer.setMap(map);
  // }
  
  // function calcRoute() {
  //   var start = document.getElementById('start').value;
  //   var end = document.getElementById('end').value;
  //   var request = {
  //     origin: start,
  //     destination: end,
  //     travelMode: 'DRIVING'
  //   };
  //   directionsService.route(request, function(result, status) {
  //     if (status == 'OK') {
  //       directionsRenderer.setDirections(result);
  //     }
  //   });
  // }

  initMap(): void {
    
    const additionalOptions = {};
    // [START maps_programmatic_load_promise]
    const loader = new Loader({
      apiKey: "",
      version: "weekly",
      ...additionalOptions,
    });

    loader.load().then(() => {

      let directionsService = new google.maps.DirectionsService();
      let directionsRenderer = new google.maps.DirectionsRenderer();
      const chicago = new google.maps.LatLng(41.850033, -87.6500523);
      const mapOptions = {
        zoom:7,
        center: chicago
      }
      let map: google.maps.Map; 

      map = new google.maps.Map(document.getElementById("map") as HTMLElement, mapOptions);

      directionsRenderer.setMap(map);

      const request = {
        origin: 'Chicago, IL',
        destination: 'Los Angeles, CA',
        travelMode: google.maps.TravelMode.DRIVING,
        transitOptions: undefined,
        drivingOptions: undefined,
        unitSystem: null,
        waypoints: [],
        optimizeWaypoints: false,
        provideRouteAlternatives: false,
        avoidFerries: false,
        avoidHighways: false,
        avoidTolls: false,
        region: "US"
      };

      // directionsService.route( request, function(result, status) {
      //   if (status == 'OK') {
      //     directionsRenderer.setDirections(result);
      //   }
      // })


    });

    

    // map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    //   center: { lat: -34.397, lng: 150.644 },
    //   zoom: 8,
    // });
  }

  // public view: any = null;
  // // private mapViewEl: any;

  // @ViewChild('mapViewNode', { static: true }) private mapViewEl?: ElementRef;

  // makeARoute(){
  //   // create a new route task
  //   let routeTask = new rTask({
  //     url: "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World"
  //   })

  //   // create layer to display the route
  //   var routeLayer = new GraphicsLayer();

  //   // set params
  //   var routeParams = new RouteParameters({
  //     // An authorization string used to access the routing service
  //     apiKey: "",
  //     stops: new FeatureSet(),
  //     outSpatialReference: {
  //       // autocasts as new SpatialReference()
  //       wkid: 3857
  //     }
  //   });

  //   // Define the symbology used to display the stops
  //   var stopSymbol = {
  //     type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
  //     style: "cross",
  //     size: 15,
  //     outline: {
  //       // autocasts as new SimpleLineSymbol()
  //       width: 4
  //     }
  //   };


  //   // Define the symbology used to display the route
  //   var routeSymbol = {
  //     type: "simple-line", // autocasts as SimpleLineSymbol()
  //     color: [0, 0, 255, 0.5],
  //     width: 5
  //   };


  //   // put the route layer over the map
  //   var map = new Map({
  //     basemap: "streets-navigation-vector",
  //     layers: [routeLayer] // Add the route layer to the map
  //   });

  //   var view = new MapView({
  //     container: "mapView", // Reference to the scene div created in step 5
  //     map: map, // Reference to the map object created before the scene
  //     center: [-117.195, 34.057],
  //     zoom: 13
  //   });

  //   function addStop() {

  //     let point1 = {
  //       type: "point", 
  //       longitude: -117.195,
  //       latitude: 34.057
  //     };
  //     let point2 = {
  //       type: "point", 
  //       longitude: -119.195,
  //       latitude: 42.057
  //     };
  //     // Add a point at the location of the map click
  //     let stop1 = new Graphic?({
  //       geometry: point1,
  //       symbol: stopSymbol,
  //     }): Graphic

  //     console.log(stop1)

  //     // routeLayer.add(stop);

  //     let stttt = new Graphic

  //     // stttt = stop1();


  //     let stop2 = new Graphic({
  //       geometry: point2,
  //       symbol: stopSymbol
  //     });

  //     routeLayer.add(stop1);
  //     routeLayer.add(stop2);

  //     // routeParams.stops.features.

  //     routeParams.stops.features.push(stop1);
  //     routeParams.stops.features.push(stop2);

  //     routeTask.solve(routeParams).then(showRoute);
  //     // Execute the route task if 2 or more stops are input
  //     // routeParams.stops.features.push(stop);
  //     // if (routeParams.stops.features.length >= 2) {
  //     //   routeTask.solve(routeParams).then(showRoute);
  //     // }
  //   }

  //   function showRoute(data: any) {
  //     var routeResult = data.routeResults[0].route;
  //     routeResult.symbol = routeSymbol;
  //     routeLayer.add(routeResult);
  //   }

  //   // routeTask.solve(routeParams).then(showRoute);

  //   addStop()
  // }




  // initializeMap(): Promise<any> {
  //   const container = this.mapViewEl?.nativeElement;

    
  //   const webmap = new WebMap({
  //     portalItem: {
  //       id: 'aa1d3f80270146208328cf66d022e09c',
  //     },
  //   });

  //   const view = new MapView({
  //     container,
  //     map: webmap
  //   });

  //   const bookmarks = new Bookmarks({
  //     view,
  //     // allows bookmarks to be added, edited, or deleted
  //     editingEnabled: true,
  //   });

  //   const bkExpand = new Expand({
  //     view,
  //     content: bookmarks,
  //     expanded: true,
  //   });

  //   // Add the widget to the top-right corner of the view
  //   view.ui.add(bkExpand, 'top-right');

  //   // bonus - how many bookmarks in the webmap?
  //   webmap.when(() => {
  //     if (webmap.bookmarks && webmap.bookmarks.length) {
  //       console.log('Bookmarks: ', webmap.bookmarks.length);
  //     } else {
  //       console.log('No bookmarks in this webmap.');
  //     }
  //   });

  //   this.view = view;
  //   // this.view.goTo();
  //   return this.view.when();
  // }

  ngOnInit(): any {
    // Initialize MapView and return an instance of MapView
    // this.initializeMap().then(() => {
    //   // The map has been initialized
    //     console.log('The map is ready.');
    // });
    // this.makeARoute()
    this.initMap()
  }

  // ngOnDestroy(): void {
  //   if (this.view) {
  //     // destroy the map view
  //     this.view.destroy();
  //   }
  // }

}
