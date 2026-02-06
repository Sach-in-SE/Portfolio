import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Skill } from '../types';

export const useSkills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('category', { ascending: true });
      
      if (error) throw error;
      setSkills(data || []);
    } catch (err) {
      console.error('Error fetching skills:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch skills');
      // Fallback to hardcoded data if database fails
      const { skills: fallbackSkills } = await import('../data/skills');
      setSkills(fallbackSkills);
    } finally {
      setLoading(false);
    }
  };

  return { skills, loading, error, refetch: fetchSkills };
};