import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function EligibilityRequirements() {
  const requirements = [
    'Be between 13-19 years old',
    'Have parental consent (if under 18)',
    'Possess basic internet and communication skills',
    'Have access to a computer or smartphone',
    'Be willing to learn and grow',
    'Commit to delivering quality work on time',
  ];

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-2xl">Eligibility Requirements</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {requirements.map((requirement, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{requirement}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          Meeting these requirements ensures you're ready to start your freelancing journey with Funngro. 
          We're here to support you every step of the way!
        </p>
      </CardContent>
    </Card>
  );
}
