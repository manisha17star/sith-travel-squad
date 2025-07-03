
import { Car, Plane, Users } from 'lucide-react';
import StarField from '@/components/StarField';
import Navigation from '@/components/Navigation';
import TravelCard from '@/components/TravelCard';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  const travelOptions = [
    {
      title: 'CabBuddy',
      description: 'Share rides to airports, stations, and beyond. Split costs with fellow Sith apprentices on your journey to the stars.',
      icon: Car,
      route: '/cabbuddy',
      glowColor: 'primary/20'
    },
    {
      title: 'TripBuddy',
      description: 'Discover new worlds and galaxies with fellow explorers. Plan epic adventures across different planets and dimensions.',
      icon: Plane,
      route: '/tripbuddy',
      glowColor: 'secondary/20'
    },
    {
      title: 'OutingBuddy',
      description: 'Join local gatherings, events, and missions. Connect with your fellow Dark Side practitioners for memorable experiences.',
      icon: Users,
      route: '/outingbuddy',
      glowColor: 'galactic-blue/20'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <StarField />
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto hyperspace-enter">
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
              VITravelBuddy
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 audiowide">
              "Find your perfect travel companion across the galaxy"
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full pulse-glow"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Built for VIT college students to discover, list, and join cab rides, epic trips, and memorable outings. 
              Your journey to the stars begins here.
            </p>
          </div>
        </section>

        {/* Travel Options */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Choose Your Path to Adventure
              </h2>
              <p className="text-xl text-muted-foreground">
                Select your preferred method of galactic travel
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {travelOptions.map((option, index) => (
                <div
                  key={option.title}
                  className="hyperspace-enter"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <TravelCard {...option} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Call to Action */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of VIT students already exploring the galaxy together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105">
                Join the Dark Side
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
