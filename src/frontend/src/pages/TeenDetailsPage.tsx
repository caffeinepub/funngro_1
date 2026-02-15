import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Section from '@/components/marketing/Section';
import FaqAccordion from '@/components/marketing/FaqAccordion';
import EligibilityRequirements from '@/components/marketing/EligibilityRequirements';
import { ArrowRight, Shield, Lock, Eye, UserCheck, FileCheck, Headphones } from 'lucide-react';
import { useEffect } from 'react';
import { useRouteSeo } from '@/hooks/useRouteSeo';

export default function TeenDetailsPage() {
  useRouteSeo('/how-it-works');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const detailedSteps = [
    {
      title: 'Create Your Profile',
      description: 'Sign up with your email and create a compelling profile that showcases your skills, interests, and what makes you unique. Add a professional photo and write a bio that highlights your strengths.',
      tips: [
        'Be honest about your skill level',
        'Highlight any relevant experience or coursework',
        'Upload samples of your work if available',
      ],
    },
    {
      title: 'Browse Available Projects',
      description: 'Explore our curated list of teen-friendly projects. Use filters to find work that matches your skills, interests, and available time. Each project listing includes clear requirements and payment details.',
      tips: [
        'Start with projects that match your current skill level',
        'Read project descriptions carefully',
        'Check the estimated time commitment',
      ],
    },
    {
      title: 'Submit Proposals',
      description: 'When you find a project you like, submit a proposal explaining why you\'re the right person for the job. Be professional, enthusiastic, and specific about how you\'ll complete the work.',
      tips: [
        'Personalize each proposal',
        'Explain your approach to the project',
        'Be realistic about timelines',
      ],
    },
    {
      title: 'Complete the Work',
      description: 'Once selected, communicate regularly with your client, meet deadlines, and deliver quality work. Use our platform\'s messaging system to stay in touch and ask questions when needed.',
      tips: [
        'Set reminders for deadlines',
        'Ask for clarification if needed',
        'Submit work early when possible',
      ],
    },
    {
      title: 'Get Paid & Build Your Reputation',
      description: 'After the client approves your work, you\'ll receive payment through our secure system. Positive reviews will help you land more projects and increase your earning potential.',
      tips: [
        'Request feedback from satisfied clients',
        'Build a portfolio of completed projects',
        'Continuously improve your skills',
      ],
    },
  ];

  const safetyFeatures = [
    {
      icon: UserCheck,
      title: 'Verified Clients',
      description: 'All clients go through a verification process before they can post projects.',
    },
    {
      icon: Eye,
      title: 'Project Screening',
      description: 'Every project is reviewed to ensure it\'s appropriate and safe for teens.',
    },
    {
      icon: Lock,
      title: 'Secure Payments',
      description: 'Payments are held in escrow and released only when work is completed.',
    },
    {
      icon: Shield,
      title: 'Privacy Protection',
      description: 'Your personal information is never shared without your permission.',
    },
    {
      icon: FileCheck,
      title: 'Parental Oversight',
      description: 'Parents can monitor activity and approve projects for users under 18.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our support team is always available to help with any concerns.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-20 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30 -z-10"
          style={{
            backgroundImage: 'url(/assets/generated/funngro-warm-bg.dim_1920x1080.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Your Complete Guide to{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Teen Freelancing
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Everything you need to know about earning money as a teen through Funngro. 
            Learn the process, understand safety measures, and get answers to all your questions.
          </p>
          <Button asChild size="lg">
            <a href="#detailed-steps">
              Start Learning <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </Section>

      {/* Detailed Steps */}
      <Section id="detailed-steps">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Step-by-Step Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow this detailed guide to start your teen freelancing journey and earn money doing what you love.
          </p>
        </div>
        <div className="space-y-8 max-w-4xl mx-auto">
          {detailedSteps.map((step, index) => (
            <Card key={index} className="border-2">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="ml-16">
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-primary">Pro Tips:</h4>
                  <ul className="space-y-1">
                    {step.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Eligibility */}
      <Section id="eligibility" variant="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Can Join?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check if you meet the requirements to start earning money as a teen freelancer on Funngro.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <EligibilityRequirements />
        </div>
      </Section>

      {/* Safety & Trust */}
      <Section id="safety">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Safety Is Our Priority</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've built multiple layers of protection to ensure teen freelancing on Funngro is safe, secure, and trustworthy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">
                <strong className="text-foreground">Parent or Guardian?</strong> You can create a linked account 
                to monitor your teen's activity, approve projects, and ensure they're having a safe experience. 
                We believe in transparency and parental involvement for users under 18.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" variant="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about teen freelancing, payments, safety, and more.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <FaqAccordion />
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Earning?
          </h2>
          <p className="text-lg text-muted-foreground">
            You now have all the information you need. Take the first step toward financial independence 
            and valuable real-world experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/">
                Create Your Profile <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
