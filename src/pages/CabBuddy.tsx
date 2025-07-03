
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Car, MapPin, Clock, Users, Plus, Search } from 'lucide-react';
import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';

const CabBuddy = () => {
  const [destination, setDestination] = useState('airport');

  const mockRides = [
    {
      id: 1,
      from: 'VIT Campus',
      to: 'Chennai Airport',
      datetime: '2024-01-15 08:00',
      seats: 3,
      vehicle: 'Sedan',
      contact: '+91 9876543210',
      status: 'Open'
    },
    {
      id: 2,
      from: 'VIT Campus',
      to: 'Katpadi Railway Station',
      datetime: '2024-01-16 14:30',
      seats: 2,
      vehicle: 'Hatchback',
      contact: '+91 8765432109',
      status: 'Open'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <StarField />
      <Navigation />
      
      <main className="relative z-10 py-8 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            <Car className="w-4 h-4 mr-2" />
            CabBuddy - Speeder Division
          </Badge>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Share Your Ride to the Stars
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join fellow travelers on their journey to airports, stations, and beyond across the galaxy
          </p>
        </div>

        <Tabs defaultValue="browse" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="browse" className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              Browse Rides
            </TabsTrigger>
            <TabsTrigger value="list" className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              List a Ride
            </TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-muted">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Filter Rides</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="destination-filter">Destination</Label>
                  <Select value={destination} onValueChange={setDestination}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="airport">Airport</SelectItem>
                      <SelectItem value="station">Railway Station</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="date-filter">Date</Label>
                  <Input type="date" id="date-filter" />
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary">
                    Search Rides
                  </Button>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockRides.map((ride) => (
                <Card key={ride.id} className="p-6 bg-card/50 backdrop-blur-sm border-2 border-muted hover:border-primary/50 transition-all duration-300 lightsaber-glow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Car className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">{ride.vehicle}</span>
                    </div>
                    <Badge variant={ride.status === 'Open' ? 'default' : 'secondary'}>
                      {ride.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{ride.from} → {ride.to}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{new Date(ride.datetime).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{ride.seats} seats available</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary">
                      Join Ride
                    </Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Contact
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            
            {mockRides.length === 0 && (
              <Card className="p-12 text-center bg-card/50 backdrop-blur-sm border-2 border-muted">
                <Car className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-foreground">No speeders found</h3>
                <p className="text-muted-foreground">
                  The Imperial fleet is currently docked. Be the first to list a ride!
                </p>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="list" className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-muted">
              <h3 className="text-2xl font-bold mb-6 text-foreground">List Your Ride</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="from">From</Label>
                    <Input id="from" placeholder="Starting location" />
                  </div>
                  <div>
                    <Label htmlFor="to">Destination</Label>
                    <Input id="to" placeholder="Where are you going?" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="datetime">Date & Time</Label>
                    <Input id="datetime" type="datetime-local" />
                  </div>
                  <div>
                    <Label htmlFor="seats">Available Seats</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select seats" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 seat</SelectItem>
                        <SelectItem value="2">2 seats</SelectItem>
                        <SelectItem value="3">3 seats</SelectItem>
                        <SelectItem value="4">4 seats</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="vehicle">Vehicle Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select vehicle" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hatchback">Hatchback</SelectItem>
                        <SelectItem value="sedan">Sedan</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="contact">Contact Number</Label>
                    <Input id="contact" placeholder="+91 9876543210" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea id="notes" placeholder="Any additional information..." />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-lg py-3">
                  Launch Your Ride
                </Button>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default CabBuddy;
