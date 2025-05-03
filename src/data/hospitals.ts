
import { Hospital } from '../types/types';

// Sample phone numbers (fictitious for demo purposes)
export const hospitals: Hospital[] = [
  {
    id: '1',
    name: 'Anwer Khan Modern Medical College',
    location: 'Dhanmondi, Dhaka',
    type: 'Private',
    contacts: {
      hotline: '02-9661213',
      ambulance: '01711-123456',
      emergency: '02-9670295'
    },
    googleMapsUrl: 'https://www.google.com/search?q=Anwer+Khan+Modern+Medical+College+Dhaka+map',
    coordinates: {
      latitude: 23.7508,
      longitude: 90.3693
    },
    services: ['Emergency', 'Surgery', 'Cardiology']
  },
  {
    id: '2',
    name: 'Ad-din Akij Medical College Hospital',
    location: 'Khulna',
    type: 'Private',
    contacts: {
      hotline: '041-761509',
      ambulance: '01715-222333',
      emergency: '041-761500'
    },
    googleMapsUrl: 'https://www.google.com/search?q=Ad-din+Akij+Medical+College+Hospital+Khulna+map',
    coordinates: {
      latitude: 22.8456,
      longitude: 89.5403
    },
    services: ['Emergency', 'Gynecology', 'Pediatrics']
  },
  {
    id: '3',
    name: 'Dhaka Medical College & Hospital',
    location: 'Dhaka',
    type: 'Government',
    contacts: {
      hotline: '02-55165088',
      ambulance: '01819-222333',
      emergency: '02-55165060'
    },
    googleMapsUrl: 'https://www.google.com/search?q=Dhaka+Medical+College+%26+Hospital+map',
    coordinates: {
      latitude: 23.7254,
      longitude: 90.3975
    },
    services: ['Emergency', 'Surgery', 'General Medicine', 'Orthopedic']
  },
  {
    id: '4',
    name: 'Bangabandhu Sheikh Mujib Medical University',
    location: 'Shahbag, Dhaka',
    type: 'Government',
    contacts: {
      hotline: '02-9661051',
      ambulance: '01711-456789',
      emergency: '02-9661060'
    },
    googleMapsUrl: 'https://www.google.com/search?q=Bangabandhu+Sheikh+Mujib+Medical+University+map',
    coordinates: {
      latitude: 23.7390,
      longitude: 90.3950
    },
    services: ['Emergency', 'Specialized Care', 'Research']
  },
  {
    id: '5',
    name: 'Evercare Hospital Dhaka',
    location: 'Bashundhara, Dhaka',
    type: 'Private',
    contacts: {
      hotline: '02-55037242',
      ambulance: '01713-141447',
      emergency: '02-55037242'
    },
    googleMapsUrl: 'https://www.google.com/search?q=Evercare+Hospital+Dhaka+map',
    coordinates: {
      latitude: 23.8116,
      longitude: 90.4240
    },
    services: ['Emergency', 'Cardiology', 'Neurology', 'Oncology']
  },
  {
    id: '6',
    name: 'National Institute of Cardiovascular Diseases',
    location: 'Sher-e-Bangla Nagar, Dhaka',
    type: 'Government',
    contacts: {
      hotline: '02-9130603',
      ambulance: '01819-876543',
      emergency: '02-9130607'
    },
    googleMapsUrl: 'https://www.google.com/search?q=National+Institute+of+Cardiovascular+Diseases+Dhaka+map',
    coordinates: {
      latitude: 23.7528,
      longitude: 90.3753
    },
    services: ['Emergency', 'Cardiology', 'Cardiac Surgery']
  },
  {
    id: '7',
    name: 'Labaid Specialized Hospital',
    location: 'Dhanmondi, Dhaka',
    type: 'Private',
    contacts: {
      hotline: '02-9676356',
      ambulance: '01766-662277',
      emergency: '02-9676356'
    },
    googleMapsUrl: 'https://www.google.com/search?q=Labaid+Specialised+Hospital+Dhaka+map',
    coordinates: {
      latitude: 23.7465,
      longitude: 90.3753
    },
    services: ['Emergency', 'General Surgery', 'Internal Medicine']
  },
  {
    id: '8',
    name: 'Chittagong Medical College Hospital',
    location: 'Chittagong',
    type: 'Government',
    contacts: {
      hotline: '031-630335',
      ambulance: '01819-345678',
      emergency: '031-630335'
    },
    googleMapsUrl: 'https://www.google.com/search?q=Chittagong+Medical+College+Hospital+map',
    coordinates: {
      latitude: 22.3569,
      longitude: 91.8317
    },
    services: ['Emergency', 'Surgery', 'Medicine', 'Pediatrics']
  },
  {
    id: '9',
    name: 'Ibn Sina Hospitals',
    location: 'Dhanmondi, Dhaka',
    type: 'Private',
    contacts: {
      hotline: '02-9126625',
      ambulance: '01717-351631',
      emergency: '02-9126625'
    },
    googleMapsUrl: 'https://www.google.com/search?q=Ibn+Sina+Hospitals+Dhaka+map',
    coordinates: {
      latitude: 23.7400,
      longitude: 90.3742
    },
    services: ['Emergency', 'Specialized Care', 'Diagnostics']
  },
  {
    id: '10',
    name: 'Dhaka Shishu Hospital',
    location: 'Sher-e-Bangla Nagar, Dhaka',
    type: 'Government',
    contacts: {
      hotline: '02-9113512',
      ambulance: '01711-987654',
      emergency: '02-9113532'
    },
    googleMapsUrl: 'https://www.google.com/search?q=Dhaka+Shishu+Hospital+map',
    coordinates: {
      latitude: 23.7773,
      longitude: 90.3765
    },
    services: ['Emergency', 'Pediatrics', 'Neonatal Care']
  }
];

export default hospitals;
