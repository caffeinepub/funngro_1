import { Card, CardContent } from '@/components/ui/card';
import { Users, TrendingUp, Award } from 'lucide-react';

export default function TrustSignals() {
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Active Teen Freelancers',
    },
    {
      icon: TrendingUp,
      value: '$2M+',
      label: 'Earned by Teens',
    },
    {
      icon: Award,
      value: '50,000+',
      label: 'Projects Completed',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
          <CardContent className="pt-6 text-center">
            <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
            <div className="text-3xl font-bold mb-2">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
