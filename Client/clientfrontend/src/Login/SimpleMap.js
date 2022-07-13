import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from '@react-google-maps/api';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Circle } from '@react-google-maps/api';

const libraries = ['places', 'geometry'];
const mapContainerStyle = {
  width: '100%',
  height: '60vh',
};
const center = {
  lat: 10.9108,
  lng: 79.8634,
};

const options = {
  zoomControl: true,
};

const circleOptions = {
  strokeColor: '#00a3a6',
  strokeOpacity: 0.4,
  strokeWeight: 2,
  fillColor: '#00a3a6',
  fillOpacity: 0.1,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 1050,
  zIndex: 1,
};



export default function SimpleMap(data) {

  center.lat = Number(data.lat);
  center.lng = Number(data.lng);



  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBltgxLK8Nz-TI7IDzaRjXTxGIoO8QHCgI",
    libraries,
  });





  const renderMap = () => {

    const lat = center.lat;
    const lng = center.lng;

    return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        options={options}
        center={center}
      >


        <Circle center={center} options={circleOptions} />
        {<Marker position={{ lat, lng }} />}
      </GoogleMap>
    );
  };



  if (loadError) return 'Error Loading Maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <>
      <div>{renderMap(center.lat, center.lng)}</div>
    </>
  );
}
