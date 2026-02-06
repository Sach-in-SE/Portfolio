import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, CreditCard as Edit, Trash2, Save, X } from 'lucide-react';
import { Skill } from '../../types';

const SkillsManagement: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<Partial<Skill>>({
    name: '',
    icon: '',
    category: 'frontend',
    level: 1
  });

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('category', { ascending: true });
      if (error) throw error;
      setSkills(data || []);
    } catch (error) {
      console.error('Error fetching skills:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      if (editingSkill) {
        const { error } = await supabase
          .from('skills')
          .update(formData)
          .eq('id', editingSkill.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('skills')
          .insert([formData]);
        if (error) throw error;
      }
      
      await fetchSkills();
      handleCancel();
    } catch (error) {
      console.error('Error saving skill:', error);
      alert('Failed to save skill');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this skill?')) return;
    
    try {
      const { error } = await supabase
        .from('skills')
        .delete()
        .eq('id', id);
      if (error) throw error;
      
      setSkills(skills.filter(s => s.id !== id));
    } catch (error) {
      console.error('Error deleting skill:', error);
      alert('Failed to delete skill');
    }
  };

  const handleEdit = (skill: Skill) => {
    setEditingSkill(skill);
    setFormData(skill);
    setIsCreating(false);
  };

  const handleCreate = () => {
    setIsCreating(true);
    setEditingSkill(null);
    setFormData({
      name: '',
      icon: '',
      category: 'frontend',
      level: 1
    });
  };

  const handleCancel = () => {
    setEditingSkill(null);
    setIsCreating(false);
    setFormData({});
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-material-dark-onBg mb-2">Skills Management</h1>
          <p className="text-material-dark-onBg/70">Manage your technical skills</p>
        </div>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 px-6 py-3 bg-material-dark-primary text-material-dark-onBg rounded-lg hover:bg-material-dark-primary/90 transition-colors"
        >
          <Plus size={18} /> Add Skill
        </button>
      </div>

      {(isCreating || editingSkill) && (
        <div className="bg-material-dark-surface rounded-xl p-8 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-material-dark-onBg mb-6">
            {editingSkill ? 'Edit Skill' : 'Create New Skill'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-material-dark-onBg font-medium mb-2">Name</label>
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-material-dark-elevated rounded-lg text-material-dark-onBg"
                placeholder="e.g., React, Node.js"
              />
            </div>

            <div>
              <label className="block text-material-dark-onBg font-medium mb-2">Icon</label>
              <input
                type="text"
                value={formData.icon || ''}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                className="w-full px-4 py-2 bg-material-dark-elevated rounded-lg text-material-dark-onBg"
                placeholder="e.g., react, nodejs"
              />
            </div>

            <div>
              <label className="block text-material-dark-onBg font-medium mb-2">Category</label>
              <select
                value={formData.category || 'frontend'}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                className="w-full px-4 py-2 bg-material-dark-elevated rounded-lg text-material-dark-onBg"
              >
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
              </select>
            </div>

            <div>
              <label className="block text-material-dark-onBg font-medium mb-2">Level (1-5)</label>
              <input
                type="number"
                min="1"
                max="5"
                value={formData.level || 1}
                onChange={(e) => setFormData({ ...formData, level: parseInt(e.target.value) })}
                className="w-full px-4 py-2 bg-material-dark-elevated rounded-lg text-material-dark-onBg"
              />
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-3 bg-material-dark-primary text-material-dark-onBg rounded-lg hover:bg-material-dark-primary/90 transition-colors"
            >
              <Save size={18} /> Save
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 px-6 py-3 bg-material-dark-elevated text-material-dark-onBg rounded-lg hover:bg-material-dark-elevated/80 transition-colors"
            >
              <X size={18} /> Cancel
            </button>
          </div>
        </div>
      )}

      {loading ? (
        <div className="text-center py-8 text-material-dark-onBg/70">Loading skills...</div>
      ) : skills.length === 0 ? (
        <div className="text-center py-8 text-material-dark-onBg/70">No skills yet</div>
      ) : (
        <div className="space-y-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="bg-material-dark-surface rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-material-dark-onBg mb-4 capitalize">
                {category} Skills
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorySkills.map((skill) => (
                  <div key={skill.id} className="bg-material-dark-elevated rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-material-dark-onBg">{skill.name}</h4>
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleEdit(skill)}
                          className="p-1 bg-material-dark-secondary/10 text-material-dark-secondary rounded hover:bg-material-dark-secondary/20"
                        >
                          <Edit size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete(skill.id)}
                          className="p-1 bg-material-dark-error/10 text-material-dark-error rounded hover:bg-material-dark-error/20"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-material-dark-onBg/70">
                      <span>Icon: {skill.icon}</span>
                      <span>•</span>
                      <span>Level: {skill.level}/5</span>
                    </div>
                    
                    <div className="mt-2">
                      <div className="w-full bg-material-dark-bg rounded-full h-2">
                        <div
                          className="bg-material-dark-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsManagement;