
export interface Hospital {
  id: string;
  name: string;
  location: string;
  type: 'Government' | 'Private';
  contacts: {
    hotline?: string;
    ambulance?: string;
    emergency?: string;
  };
  googleMapsUrl: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  services?: string[];
  distance?: number;
}

export interface GeolocationPosition {
  coords: {
    latitude: number;
    longitude: number;
    accuracy: number;
  };
  timestamp: number;
}

export interface GeolocationError {
  code: number;
  message: string;
}
