import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Section from '@/components/marketing/Section';
import TrustSignals from '@/components/marketing/TrustSignals';
import HowItWorksOverview from '@/components/marketing/HowItWorksOverview';
import { ArrowRight, Sparkles, Clock, Shield, TrendingUp, BookOpen, Users } from 'lucide-react';
import { useEffect } from 'react';
import { useRouteSeo } from '@/hooks/useRouteSeo';

export default function TeenLandingPage() {
  useRouteSeo('/');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Earn Real Money',
      description: 'Get paid for your skills and hard work. Build financial independence while you\'re still in school.',
    },
    {
      icon: BookOpen,
      title: 'Learn Valuable Skills',
      description: 'Gain real-world experience in your areas of interest. Develop skills that will benefit you for life.',
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Work on your own time. Balance school, activities, and freelancing without stress.',
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'All projects are vetted and clients are verified. Your safety and privacy are our top priorities.',
    },
    {
      icon: Users,
      title: 'Build Your Network',
      description: 'Connect with other teen freelancers and mentors. Grow your professional network early.',
    },
    {
      icon: Sparkles,
      title: 'Showcase Your Talent',
      description: 'Create a portfolio of real projects. Stand out when applying to colleges or future jobs.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-20 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-10" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit">
              <Sparkles className="h-3 w-3 mr-1" />
              For Teens Aged 13-19
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Turn Your Skills Into{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Real Income
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Join thousands of teens earning money through paid projects. Build your skills, gain experience, 
              and achieve financial independence—all while balancing school and life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/how-it-works">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <a href="#how-it-works">Learn More</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/assets/generated/funngro-teen-hero.dim_1600x900.png"
              alt="Teen working on laptop with positive energy and modern workspace"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </Section>

      {/* Trust Signals */}
      <Section variant="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Teens Everywhere</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a growing community of young freelancers making real money and building valuable skills.
          </p>
        </div>
        <TrustSignals />
      </Section>

      {/* Benefits Section */}
      <Section id="benefits">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Teen Freelancing with Funngro?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the benefits of earning money as a teen through our safe, flexible platform designed just for you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <benefit.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* How It Works Overview */}
      <Section id="how-it-works" variant="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started with teen freelancing is easy. Follow these simple steps to begin earning money today.
          </p>
        </div>
        <HowItWorksOverview />
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/how-it-works">
              View Detailed Guide <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Testimonial Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="pt-8">
              <div className="text-center space-y-4">
                <div className="text-4xl">"</div>
                <p className="text-xl md:text-2xl font-medium">
                  Funngro helped me earn my first $1,000 while still in high school. I learned so much about 
                  graphic design and now I have a portfolio that helped me get into my dream college!
                </p>
                <div className="pt-4">
                  <p className="font-semibold">Sarah M.</p>
                  <p className="text-sm text-muted-foreground">17, Graphic Designer</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Your Freelancing Journey?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of teens who are earning money, building skills, and creating their future with Funngro.
          </p>
          <Button asChild size="lg" className="text-lg">
            <Link to="/how-it-works">
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
