interface RouteMetadata {
  title: string;
  description: string;
  robots: string;
  canonicalPath: string;
}

const CANONICAL_BASE_URL = import.meta.env.VITE_CANONICAL_URL || 'https://funngro.com';

export const routeMetadata: Record<string, RouteMetadata> = {
  '/': {
    title: 'Funngro - Teen Freelancing Platform | Earn Money as a Teen',
    description: 'Join thousands of teens earning real money through paid projects. Build skills, gain experience, and achieve financial independence with Funngro - the safe freelancing platform for teens aged 13-19.',
    robots: 'index, follow',
    canonicalPath: '/',
  },
  '/how-it-works': {
    title: 'How It Works - Teen Freelancing Guide | Funngro',
    description: 'Learn how to start earning money as a teen freelancer. Complete guide to getting started, safety features, eligibility requirements, and FAQs about teen freelancing on Funngro.',
    robots: 'index, follow',
    canonicalPath: '/how-it-works',
  },
};

export function getCanonicalUrl(path: string): string {
  return `${CANONICAL_BASE_URL}${path}`;
}
