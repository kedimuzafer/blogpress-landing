import { useState, useEffect, useCallback } from 'react';
import { useDebounce } from './useDebounce';

interface DomainCheckResult {
  available: boolean;
  slug: string;
  domain: string;
  suggestions: string[];
  message: string;
}

interface UseDomainCheckReturn {
  slug: string;
  domain: string;
  isAvailable: boolean | null;
  isChecking: boolean;
  message: string;
  suggestions: string[];
  error: string | null;
}

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://api.blogpress.dev';

export function useDomainCheck(siteName: string): UseDomainCheckReturn {
  const [slug, setSlug] = useState('');
  const [domain, setDomain] = useState('');
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [message, setMessage] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Debounce site name input (300ms)
  const debouncedSiteName = useDebounce(siteName, 300);

  const checkDomain = useCallback(async (name: string) => {
    if (!name || name.trim().length < 3) {
      setSlug('');
      setDomain('');
      setIsAvailable(null);
      setMessage('');
      setSuggestions([]);
      setError(null);
      return;
    }

    setIsChecking(true);
    setError(null);

    try {
      const response = await fetch(
        `${BACKEND_URL}/api/domains/check?name=${encodeURIComponent(name)}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Domain kontrol edilemedi');
      }

      const data: DomainCheckResult = await response.json();

      setSlug(data.slug);
      setDomain(data.domain);
      setIsAvailable(data.available);
      setMessage(data.message);
      setSuggestions(data.suggestions || []);
    } catch (err) {
      console.error('Domain check error:', err);
      setError(err instanceof Error ? err.message : 'Bir hata oluştu');
      setIsAvailable(null);
    } finally {
      setIsChecking(false);
    }
  }, []);

  useEffect(() => {
    checkDomain(debouncedSiteName);
  }, [debouncedSiteName, checkDomain]);

  return {
    slug,
    domain,
    isAvailable,
    isChecking,
    message,
    suggestions,
    error,
  };
}
