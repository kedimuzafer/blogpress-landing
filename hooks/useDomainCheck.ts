import { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';

interface UseDomainCheckReturn {
  slug: string;
  domain: string;
  isAvailable: boolean | null;
  isChecking: boolean;
  message: string;
  suggestions: string[];
  error: string | null;
}

// Helper function to generate slug from site name
function generateSlug(siteName: string): string {
  return siteName
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Mock domain check hook - no backend required
 * Always returns available=true for demo purposes
 */
export function useDomainCheck(siteName: string): UseDomainCheckReturn {
  const [slug, setSlug] = useState('');
  const [domain, setDomain] = useState('');
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  // Debounce site name input (300ms)
  const debouncedSiteName = useDebounce(siteName, 300);

  useEffect(() => {
    if (!debouncedSiteName || debouncedSiteName.trim().length < 3) {
      setSlug('');
      setDomain('');
      setIsAvailable(null);
      return;
    }

    // Simulate checking
    setIsChecking(true);

    // Simulate API delay
    const timeout = setTimeout(() => {
      const generatedSlug = generateSlug(debouncedSiteName);
      setSlug(generatedSlug);
      setDomain(`${generatedSlug}.blogpress.dev`);
      setIsAvailable(true); // Always available in demo mode
      setIsChecking(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [debouncedSiteName]);

  return {
    slug,
    domain,
    isAvailable,
    isChecking,
    message: isAvailable ? 'Domain müsait!' : '',
    suggestions: [],
    error: null,
  };
}
