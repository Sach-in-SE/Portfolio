import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { FileText, Briefcase, MessageSquare, BarChart3 } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    projects: 0,
    skills: 0,
    submissions: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [projects, skills, submissions] = await Promise.all([
        supabase.from('projects').select('count', { count: 'exact' }),
        supabase.from('skills').select('count', { count: 'exact' }),
        supabase.from('contact_submissions').select('count', { count: 'exact' }),
      ]);

      setStats({
        projects: projects.count || 0,
        skills: skills.count || 0,
        submissions: submissions.count || 0,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ icon: Icon, label, value }: any) => (
    <div className="bg-material-dark-surface rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-material-dark-onBg/70 text-sm">{label}</p>
          <p className="text-3xl font-bold text-material-dark-onBg mt-2">{value}</p>
        </div>
        <div className="p-4 bg-material-dark-primary/10 rounded-lg">
          <Icon size={24} className="text-material-dark-primary" />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-material-dark-onBg mb-2">Dashboard</h1>
        <p className="text-material-dark-onBg/70">Welcome to your portfolio admin panel</p>
      </div>

      {loading ? (
        <div className="text-center py-8 text-material-dark-onBg/70">Loading stats...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard icon={Briefcase} label="Projects" value={stats.projects} />
          <StatCard icon={FileText} label="Skills" value={stats.skills} />
          <StatCard icon={MessageSquare} label="Contact Submissions" value={stats.submissions} />
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
