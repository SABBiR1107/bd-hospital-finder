
import React, { useState, useEffect } from 'react';
import { Hospital } from '../types/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';

interface HospitalSearchProps {
  onSearch: (query: string, type: string | null) => void;
  onLocate: () => void;
  loading: boolean;
}

const HospitalSearch: React.FC<HospitalSearchProps> = ({ onSearch, onLocate, loading }) => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, type);
  };

  const handleLocate = () => {
    onLocate();
    toast({
      title: "Locating you",
      description: "Finding your current location...",
      duration: 2000,
    });
  };

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="search">Search Hospitals</Label>
              <Input
                id="search"
                placeholder="Hospital name or location..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Hospital Type</Label>
              <Select value={type || 'all'} onValueChange={(value) => setType(value === 'all' ? null : value)}>
                <SelectTrigger id="type">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Government">Government</SelectItem>
                  <SelectItem value="Private">Private</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button type="submit" className="flex-1 bg-medical-secondary hover:bg-medical-secondary/90">
              Search
            </Button>
            <Button 
              type="button" 
              onClick={handleLocate} 
              disabled={loading} 
              variant="outline"
              className="flex-1 border-medical-primary text-medical-primary hover:bg-medical-primary/10"
            >
              {loading ? 'Locating...' : 'Find Nearby Hospitals'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default HospitalSearch;
