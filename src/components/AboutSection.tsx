
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, Users, MapPin, Star } from 'lucide-react';

const AboutSection = () => {
  const journeySteps = [
    {
      icon: MapPin,
      title: 'List',
      description: 'Create your travel listing across the galaxy',
      color: 'text-primary'
    },
    {
      icon: Users,
      title: 'Discover',
      description: 'Find fellow travelers seeking the same adventure',
      color: 'text-secondary'
    },
    {
      icon: Rocket,
      title: 'Join',
      description: 'Connect with your travel companions',
      color: 'text-galactic-blue'
    },
    {
      icon: Star,
      title: 'Travel',
      description: 'Embark on your epic journey together',
      color: 'text-yellow-400'
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 border-primary text-primary">
          About the Dark Side
        </Badge>
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          Built by VITians from the Dark Side
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          VITravelBuddy was forged in the depths of the Sith Academy to unite travelers across Earth and beyond. 
          Our mission: to bring balance to the Force of travel companionship in the VIT galaxy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {journeySteps.map((step, index) => (
          <Card key={step.title} className="relative p-6 bg-card/50 backdrop-blur-sm border-2 border-muted hover:border-primary/50 transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            
            <div className="relative text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {index + 1}. {step.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-2 border-primary/20">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary">
            "Your journey to find the perfect travel companion begins here"
          </h3>
          <p className="text-muted-foreground italic">
            - Master Yoda (probably)
          </p>
        </div>
      </Card>
    </section>
  );
};

export default AboutSection;
