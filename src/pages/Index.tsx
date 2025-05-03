
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HospitalSearch from '../components/HospitalSearch';
import HospitalCard from '../components/HospitalCard';
import HospitalDetail from '../components/HospitalDetail';
import { Hospital } from '../types/types';
import { hospitals } from '../data/hospitals';
import useGeolocation from '../hooks/useGeolocation';
import { toast } from '@/components/ui/use-toast';

const Index: React.FC = () => {
  const [filteredHospitals, setFilteredHospitals] = useState<Hospital[]>(hospitals);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const { position, error, loading, getPosition, calculateDistance } = useGeolocation();

  const handleSearch = (query: string, type: string | null) => {
    const filtered = hospitals.filter((hospital) => {
      const matchesQuery =
        query === '' ||
        hospital.name.toLowerCase().includes(query.toLowerCase()) ||
        hospital.location.toLowerCase().includes(query.toLowerCase());
      
      const matchesType = type === null || hospital.type === type;
      
      return matchesQuery && matchesType;
    });
    
    setFilteredHospitals(filtered);
    
    if (filtered.length === 0) {
      toast({
        title: "No hospitals found",
        description: "Try adjusting your search criteria",
        variant: "destructive",
      });
    }
  };

  const handleLocate = () => {
    getPosition();
  };

  const handleSelectHospital = (hospital: Hospital) => {
    setSelectedHospital(hospital);
    setIsDetailOpen(true);
  };

  // Calculate distances when position changes
  useEffect(() => {
    if (position && position.coords) {
      const hospitalsWithDistance = hospitals.map((hospital) => {
        if (hospital.coordinates) {
          const distance = calculateDistance(
            position.coords.latitude,
            position.coords.longitude,
            hospital.coordinates.latitude,
            hospital.coordinates.longitude
          );
          return { ...hospital, distance };
        }
        return hospital;
      });
      
      // Sort by distance
      hospitalsWithDistance.sort((a, b) => {
        if (a.distance && b.distance) {
          return a.distance - b.distance;
        }
        return 0;
      });
      
      setFilteredHospitals(hospitalsWithDistance);
      
      toast({
        title: "Location found",
        description: "Showing hospitals nearest to you",
      });
    }
  }, [position]);

  // Handle errors
  useEffect(() => {
    if (error) {
      toast({
        title: "Location Error",
        description: error.message,
        variant: "destructive",
      });
    }
  }, [error]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-6 flex-grow">
        <section className="mb-6">
          <h1 className="text-3xl font-bold text-center mb-2">Find Hospitals in Bangladesh</h1>
          <p className="text-muted-foreground text-center">
            Locate the nearest hospital with emergency contact information
          </p>
        </section>

        <HospitalSearch 
          onSearch={handleSearch} 
          onLocate={handleLocate} 
          loading={loading} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHospitals.map((hospital) => (
            <HospitalCard 
              key={hospital.id} 
              hospital={hospital} 
              onSelect={handleSelectHospital} 
            />
          ))}
        </div>

        {filteredHospitals.length === 0 && (
          <div className="text-center py-10">
            <h3 className="text-xl font-medium">No hospitals found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your search criteria</p>
          </div>
        )}
      </main>

      <HospitalDetail 
        hospital={selectedHospital} 
        open={isDetailOpen} 
        onOpenChange={setIsDetailOpen} 
      />
      
      <Footer />
    </div>
  );
};

export default Index;
