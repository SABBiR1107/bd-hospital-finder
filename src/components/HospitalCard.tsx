import React from 'react';
import { Hospital } from '../types/types';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HospitalCardProps {
  hospital: Hospital;
  onSelect: (hospital: Hospital) => void;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ hospital, onSelect }) => {
  // Function to create a proper Google Maps URL for directions
  const getDirectionsUrl = (hospital: Hospital) => {
    // If we have coordinates, create a directions URL pointing to exact coordinates
    if (hospital.coordinates) {
      return `https://www.google.com/maps/dir/?api=1&destination=${hospital.coordinates.latitude},${hospital.coordinates.longitude}&destination_place_id=${encodeURIComponent(hospital.name)}`;
    }
    
    // Otherwise, fall back to a search query with the hospital name and location
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospital.name + ' ' + hospital.location)}`;
  };

  return (
    <Card className="hospital-card">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{hospital.name}</CardTitle>
          <Badge variant={hospital.type === 'Government' ? 'default' : 'secondary'}>
            {hospital.type}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{hospital.location}</p>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-col space-y-1">
          {hospital.distance && (
            <p className="text-sm font-medium">
              Distance: <span className="text-medical-primary">{hospital.distance} km</span>
            </p>
          )}
          {hospital.contacts.hotline && (
            <p className="text-sm">
              Hotline: <span className="font-medium">{hospital.contacts.hotline}</span>
            </p>
          )}
          {hospital.contacts.ambulance && (
            <p className="text-sm flex items-center space-x-1">
              <span>Ambulance:</span>
              <span className="font-medium text-medical-emergency emergency-pulse">
                {hospital.contacts.ambulance}
              </span>
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between">
        <Button size="sm" variant="outline" asChild>
          <a href={getDirectionsUrl(hospital)} target="_blank" rel="noopener noreferrer">
            View on Map
          </a>
        </Button>
        <Button size="sm" variant="default" onClick={() => onSelect(hospital)}>
          Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HospitalCard;
