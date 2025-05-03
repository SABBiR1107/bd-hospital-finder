import React from 'react';
import { Hospital } from '../types/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface HospitalDetailProps {
  hospital: Hospital | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const HospitalDetail: React.FC<HospitalDetailProps> = ({ hospital, open, onOpenChange }) => {
  if (!hospital) {
    return null;
  }

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-start">
            <span>{hospital.name}</span>
            <Badge variant={hospital.type === 'Government' ? 'default' : 'secondary'}>
              {hospital.type}
            </Badge>
          </DialogTitle>
          <DialogDescription>{hospital.location}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="text-sm font-medium mb-2">Emergency Contacts</h4>
            <div className="space-y-2">
              {hospital.contacts.hotline && (
                <div className="flex justify-between">
                  <span className="text-sm">Hotline:</span>
                  <a href={`tel:${hospital.contacts.hotline}`} className="text-sm font-medium text-medical-primary">
                    {hospital.contacts.hotline}
                  </a>
                </div>
              )}
              {hospital.contacts.ambulance && (
                <div className="flex justify-between">
                  <span className="text-sm">Ambulance:</span>
                  <a href={`tel:${hospital.contacts.ambulance}`} className="text-sm font-medium text-medical-emergency emergency-pulse">
                    {hospital.contacts.ambulance}
                  </a>
                </div>
              )}
              {hospital.contacts.emergency && (
                <div className="flex justify-between">
                  <span className="text-sm">Emergency:</span>
                  <a href={`tel:${hospital.contacts.emergency}`} className="text-sm font-medium text-medical-emergency">
                    {hospital.contacts.emergency}
                  </a>
                </div>
              )}
            </div>
          </div>

          {hospital.services && hospital.services.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2">Services</h4>
              <div className="flex flex-wrap gap-2">
                {hospital.services.map((service, index) => (
                  <Badge key={index} variant="outline">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {hospital.distance && (
            <div>
              <h4 className="text-sm font-medium mb-1">Distance from your location</h4>
              <p className="text-medical-primary font-medium">{hospital.distance} kilometers</p>
            </div>
          )}
        </div>
        <DialogFooter className="flex sm:justify-between">
          <Button variant="outline" asChild>
            <a href={getDirectionsUrl(hospital)} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
            </a>
          </Button>
          {hospital.contacts.ambulance && (
            <Button variant="destructive" asChild>
              <a href={`tel:${hospital.contacts.ambulance}`}>
                Call Ambulance
              </a>
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HospitalDetail;
