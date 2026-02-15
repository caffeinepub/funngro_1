import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserPlus, Search, Briefcase, DollarSign } from 'lucide-react';

export default function HowItWorksOverview() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Sign Up',
      description: 'Create your profile and showcase your skills and interests.',
    },
    {
      icon: Search,
      title: 'Browse Projects',
      description: 'Explore teen-friendly projects that match your abilities.',
    },
    {
      icon: Briefcase,
      title: 'Complete Work',
      description: 'Deliver quality work and build your portfolio.',
    },
    {
      icon: DollarSign,
      title: 'Get Paid',
      description: 'Receive secure payments for your completed projects.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, index) => (
        <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
          <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
            {index + 1}
          </div>
          <CardHeader>
            <step.icon className="h-10 w-10 text-primary mb-2" />
            <CardTitle className="text-xl">{step.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
