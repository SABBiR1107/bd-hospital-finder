
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
          <a href={hospital.googleMapsUrl} target="_blank" rel="noopener noreferrer">
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
