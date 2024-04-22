import { Component, QueryList, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ConsultaEnderecoServices } from '../../shared/services/consulta-endereco.service';
import Swal from 'sweetalert2';

declare var google: any;

export interface Marker {
  position: google.maps.LatLngLiteral;
  label?: google.maps.MarkerLabel;
  title?: string;
  info?: string;
  options?: google.maps.MarkerOptions;
}

@Component({
  selector: 'app-consulta-endereco',
  templateUrl: './consulta-endereco.component.html',
  styleUrls: ['./consulta-endereco.component.scss']
})
export class ConsultaEnderecoComponent {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow;

  zoom = 12;
  center!: google.maps.LatLngLiteral;
  options?: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom: 15,
    minZoom: 8,
  };
  markers: Marker =  {
    position: {
      lat: 0,
      lng: 0
    }
  };

  infoContent = '';

  responseConsultaEndereco: any;

  latitude: any;
  longitude: any;

  constructor(private consultaEnderecoService: ConsultaEnderecoServices){

  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  click(event: any) {
    console.log(event);
  }

  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()));
  }

  addMarker(event: any) {
    const latLng = event.latLng;
    if (latLng) {
      const lat = latLng.lat();
      const lng = latLng.lng();
      this.markers = {
        position: {
          lat: lat,
          lng: lng,
        }
      };
    }
  }

  consultaEndereco(){
    this.consultaEnderecoService.consultaEndereco(this.markers.position).subscribe((res)=>{
      this.responseConsultaEndereco = res.results;
    },
    (error:any)=>{
      console.log('error: ' , error.error)
      Swal.fire({
        icon: "error",
        title: error.error ? error.error : "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.",
        timer: 3000,
        showConfirmButton: false,
      })
    })
  }

  onInputChange(event: any, coordType: string) {
    const value = event.target.value;
    this.updateMarkerPosition(coordType, value);
  }

  updateMarkerPosition(coordType: string, value: string) {
    console.log('entrou aqui')
    if (this.markers) {
      console.log('entrou aqui2')
      const newPosition = { ...this.markers.position };
      const parsedValue = parseFloat(value);
      if (!isNaN(parsedValue)) {
        if (coordType === 'lat') {
          newPosition.lat = parsedValue;
        } else if (coordType === 'lng') {
          newPosition.lng = parsedValue;
        }
        this.markers.position = newPosition;
      }
    }else{

    }
  }


}
