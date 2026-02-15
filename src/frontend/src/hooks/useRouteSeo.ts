import { useEffect } from 'react';
import { routeMetadata, getCanonicalUrl } from '@/seo/routeMetadata';

export function useRouteSeo(path: string) {
  useEffect(() => {
    const metadata = routeMetadata[path];
    if (!metadata) return;

    // Set document title
    document.title = metadata.title;

    // Set or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', metadata.description);

    // Set or update robots meta
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', metadata.robots);

    // Set or update canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = getCanonicalUrl(metadata.canonicalPath);
  }, [path]);
}
