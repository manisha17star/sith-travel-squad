
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface TravelCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  route: string;
  glowColor: string;
}

const TravelCard = ({ title, description, icon: Icon, route, glowColor }: TravelCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-muted hover:border-primary/50 transition-all duration-500 lightsaber-glow">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className={`p-4 rounded-full bg-gradient-to-br from-${glowColor} to-primary/20 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        
        <Button
          asChild
          className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/25"
        >
          <Link to={route}>
            Enter the {title.split('Buddy')[0]} Realm
          </Link>
        </Button>
      </div>
      
      {/* Animated border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] rounded-lg">
        <div className="w-full h-full bg-card rounded-lg" />
      </div>
    </Card>
  );
};

export default TravelCard;
