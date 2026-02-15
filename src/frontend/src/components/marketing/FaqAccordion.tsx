import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FaqAccordion() {
  const faqs = [
    {
      question: 'What age do I need to be to join Funngro?',
      answer: 'Funngro is designed for teens aged 13-19. You\'ll need parental consent if you\'re under 18 to create an account and start earning.',
    },
    {
      question: 'How do I get paid for my work?',
      answer: 'Payments are processed securely through our platform. Once you complete a project and it\'s approved, funds are transferred to your linked account. We support various payment methods including bank transfers and digital wallets.',
    },
    {
      question: 'What kind of projects can I work on?',
      answer: 'Projects range from graphic design, content writing, social media management, video editing, tutoring, to simple data entry tasks. All projects are vetted to ensure they\'re appropriate and safe for teens.',
    },
    {
      question: 'Is Funngro safe for teenagers?',
      answer: 'Yes! Safety is our top priority. All clients are verified, projects are screened, and we have built-in communication tools that protect your privacy. We also provide resources and support to ensure a safe working environment.',
    },
    {
      question: 'Do I need any experience to start?',
      answer: 'No prior experience is required! We have projects for all skill levels, from beginners to advanced. You can start with simple tasks and gradually take on more complex projects as you build your skills and confidence.',
    },
    {
      question: 'How much can I earn on Funngro?',
      answer: 'Earnings vary based on the projects you choose and the time you invest. Some teens earn a few hundred dollars per month doing part-time work, while others who are more active can earn significantly more. You set your own schedule and workload.',
    },
    {
      question: 'Can I work on projects while going to school?',
      answer: 'Absolutely! Funngro is designed to be flexible. You can choose projects that fit your schedule, whether that\'s after school, on weekends, or during holidays. You\'re in complete control of your time.',
    },
    {
      question: 'What if I have a problem with a project or client?',
      answer: 'Our support team is here to help! You can reach out anytime through our platform, and we\'ll work to resolve any issues quickly. We also have dispute resolution processes in place to ensure fair outcomes.',
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">
            <h3 className="text-base font-medium">{faq.question}</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">{faq.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
