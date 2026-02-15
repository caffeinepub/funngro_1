import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'muted';
}

export default function Section({ children, className, id, variant = 'default' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        variant === 'muted' && 'bg-muted/30',
        className
      )}
    >
      <div className="container">{children}</div>
    </section>
  );
}
