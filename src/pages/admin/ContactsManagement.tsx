import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Trash2, Check } from 'lucide-react';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  created_at: string;
}

const ContactsManagement: React.FC = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    try {
      await supabase.from('contact_submissions').delete().eq('id', id);
      setSubmissions(submissions.filter(s => s.id !== id));
    } catch (error) {
      console.error('Error deleting submission:', error);
    }
  };

  const handleMarkAsRead = async (id: string) => {
    try {
      await supabase
        .from('contact_submissions')
        .update({ status: 'read' })
        .eq('id', id);
      setSubmissions(submissions.map(s => s.id === id ? { ...s, status: 'read' } : s));
    } catch (error) {
      console.error('Error updating submission:', error);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-material-dark-onBg mb-2">Contact Submissions</h1>
        <p className="text-material-dark-onBg/70">Manage messages from your portfolio</p>
      </div>

      {loading ? (
        <div className="text-center py-8 text-material-dark-onBg/70">Loading submissions...</div>
      ) : submissions.length === 0 ? (
        <div className="text-center py-8 text-material-dark-onBg/70">No submissions yet</div>
      ) : (
        <div className="space-y-4">
          {submissions.map((submission) => (
            <div
              key={submission.id}
              className={`bg-material-dark-surface rounded-xl p-6 shadow-lg cursor-pointer transition-colors ${
                selectedId === submission.id ? 'ring-2 ring-material-dark-primary' : ''
              }`}
              onClick={() => setSelectedId(selectedId === submission.id ? null : submission.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-material-dark-onBg">{submission.name}</h3>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        submission.status === 'unread'
                          ? 'bg-material-dark-primary/20 text-material-dark-primary'
                          : 'bg-material-dark-secondary/20 text-material-dark-secondary'
                      }`}
                    >
                      {submission.status}
                    </span>
                  </div>
                  <p className="text-material-dark-onBg/70 text-sm">{submission.email}</p>
                </div>
                <div className="flex gap-2">
                  {submission.status === 'unread' && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMarkAsRead(submission.id);
                      }}
                      className="p-2 bg-material-dark-secondary/10 text-material-dark-secondary rounded-lg hover:bg-material-dark-secondary/20"
                    >
                      <Check size={16} />
                    </button>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(submission.id);
                    }}
                    className="p-2 bg-material-dark-error/10 text-material-dark-error rounded-lg hover:bg-material-dark-error/20"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {selectedId === submission.id && (
                <div className="border-t border-material-dark-elevated pt-4 mt-4">
                  <p className="text-material-dark-onBg/70 text-sm mb-2">
                    <span className="font-medium">Subject:</span> {submission.subject}
                  </p>
                  <p className="text-material-dark-onBg/70 text-sm mb-2">
                    <span className="font-medium">Date:</span>{' '}
                    {new Date(submission.created_at).toLocaleString()}
                  </p>
                  <p className="text-material-dark-onBg mt-4">{submission.message}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactsManagement;
