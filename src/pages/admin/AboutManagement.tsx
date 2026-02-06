import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Save, X } from 'lucide-react';

interface AboutContent {
  id: string;
  bio_paragraph_1: string;
  bio_paragraph_2: string;
  bio_paragraph_3: string;
  profile_image: string;
  resume_url: string;
}

const AboutManagement: React.FC = () => {
  const [content, setContent] = useState<AboutContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<Partial<AboutContent>>({});

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const { data, error } = await supabase
        .from('about_content')
        .select('*')
        .maybeSingle();
      if (error) throw error;
      if (data) {
        setContent(data);
        setFormData(data);
      }
    } catch (error) {
      console.error('Error fetching about content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (content?.id) {
        await supabase
          .from('about_content')
          .update(formData)
          .eq('id', content.id);
      } else {
        const { data } = await supabase
          .from('about_content')
          .insert([formData])
          .select()
          .single();
        if (data) setContent(data);
      }
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Failed to save content');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-material-dark-onBg mb-2">About Section</h1>
        <p className="text-material-dark-onBg/70">Manage your about page content</p>
      </div>

      {loading ? (
        <div className="text-center py-8 text-material-dark-onBg/70">Loading...</div>
      ) : (
        <div className="bg-material-dark-surface rounded-xl p-8 shadow-lg max-w-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-material-dark-onBg font-medium mb-2">
                Paragraph 1
              </label>
              <textarea
                value={formData.bio_paragraph_1 || ''}
                onChange={(e) => setFormData({ ...formData, bio_paragraph_1: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 bg-material-dark-elevated rounded-lg text-material-dark-onBg placeholder-material-dark-onBg/50"
              />
            </div>

            <div>
              <label className="block text-material-dark-onBg font-medium mb-2">
                Paragraph 2
              </label>
              <textarea
                value={formData.bio_paragraph_2 || ''}
                onChange={(e) => setFormData({ ...formData, bio_paragraph_2: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 bg-material-dark-elevated rounded-lg text-material-dark-onBg placeholder-material-dark-onBg/50"
              />
            </div>

            <div>
              <label className="block text-material-dark-onBg font-medium mb-2">
                Paragraph 3
              </label>
              <textarea
                value={formData.bio_paragraph_3 || ''}
                onChange={(e) => setFormData({ ...formData, bio_paragraph_3: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 bg-material-dark-elevated rounded-lg text-material-dark-onBg placeholder-material-dark-onBg/50"
              />
            </div>

            <div>
              <label className="block text-material-dark-onBg font-medium mb-2">
                Profile Image URL
              </label>
              <input
                type="url"
                value={formData.profile_image || ''}
                onChange={(e) => setFormData({ ...formData, profile_image: e.target.value })}
                className="w-full px-4 py-2 bg-material-dark-elevated rounded-lg text-material-dark-onBg placeholder-material-dark-onBg/50"
                placeholder="https://..."
              />
            </div>

            <div>
              <label className="block text-material-dark-onBg font-medium mb-2">
                Resume URL
              </label>
              <input
                type="url"
                value={formData.resume_url || ''}
                onChange={(e) => setFormData({ ...formData, resume_url: e.target.value })}
                className="w-full px-4 py-2 bg-material-dark-elevated rounded-lg text-material-dark-onBg placeholder-material-dark-onBg/50"
                placeholder="https://..."
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center gap-2 px-6 py-3 bg-material-dark-primary text-material-dark-onBg rounded-lg hover:bg-material-dark-primary/90 transition-colors disabled:opacity-50"
              >
                <Save size={18} /> {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutManagement;
