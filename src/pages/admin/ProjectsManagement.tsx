import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Edit, Trash2, Save, X, ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';

const ProjectsManagement: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    description: '',
    image: '',
    tags: [],
    demoUrl: '',
    githubUrl: '',
    featured: false,
    category: 'web'
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const projectData = {
        ...formData,
        tags: Array.isArray(formData.tags) ? formData.tags : 
              typeof formData.tags === 'string' ? formData.tags.split(',').map(t => t.trim()) : []
      };

      if (editingProject) {
        const { error } = await supabase
          .from('projects')
          .update(projectData)
          .eq('id', editingProject.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('projects')
          .insert([projectData]);
        if (error) throw error;
      }
      
      await fetchProjects();
      handleCancel();
    } catch (error) {
      console.error('Error saving project:', error);
      alert('Failed to save project');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);
      if (error) throw error;
      
      setProjects(projects.filter(p => p.id !== id));
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Failed to delete project');
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      ...project,
      tags: Array.isArray(project.tags) ? project.tags.join(', ') : project.tags
    });
    setIsCreating(false);
  };

  const handleCreate = () => {
    setIsCreating(true);
    setEditingProject(null);
    setFormData({
      title: '',
      description: '',
      image: '',
      tags: '',
      demoUrl: '',
      githubUrl: '',
      featured: false,
      category: 'web'
    });
  };

  const handleCancel = () => {
    setEditingProject(null);
    setIsCreating(false);
    setFormData({});
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-material-dark-onBg mb-2">Projects Management</h1>
          <p className="text-material-dark-onBg/70">Manage your portfolio projects</p>
        </div>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 px-6 py-3 bg-material-dark-primary text-material-dark-onBg rounded-lg hover:bg-material-dark-primary/90 transition-colors"
        >
          <Plus size={18} /> Add Project
        </button>
      </div>

      {(isCreating || editingProject) && (
        <div className="bg-material-dark-surface rounded-xl p-8 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-material-dark-onBg mb-6">
            {editingProject ? 'Edit Project' : 'Create New Project'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-material-dark-onBg font-medium mb-2">Title</label>
              <input
                type="text"
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 bg-material-dark-elevated rounded-lg text-material-dark-onBg"
                placeholder="Project title"
              />
            </div>

            <div>
              <label className="block text-material-dark-onBg font-medium mb-2">Category</label>
              <select
                value={formData.category || 'web'}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                className="w-full px-4 py-2 bg-material-dark-elevated rounded-lg text-material-dark-onBg"
              >
                <option value="web">Web App</option>
                <option value="mobile">Mobile App</option>
                <option value="open-source">Open Source</option>
                <option value="ai">AI & ML</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-material-dark-onBg font-medium mb-2">Description</label>
              <textarea
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 bg-material-dark-elevated rounded-lg text-material-dark-onBg"
                placeholder="Project description"
              />
            </div>

            <div>
              <label className="block text-material-dark-onBg font-medium mb-2">Image URL</label>
              <input
                type="url"
                value={formData.image || ''}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-4 py-2 bg-material-dark-elevated rounded-lg text-material-dark-onBg"
                placeholder="https://..."
              />
            </div>

            <div>
              <label className="block text-material-dark-onBg font-medium mb-2">Tags (comma separated)</label>
              <input
                type="text"
                value={formData.tags || ''}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full px-4 py-2 bg-material-dark-elevated rounded-lg text-material-dark-onBg"
                placeholder="React, Node.js, MongoDB"
              />
            </div>

            <div>
              <label className="block text-material-dark-onBg font-medium mb-2">Demo URL</label>
              <input
                type="url"
                value={formData.demoUrl || ''}
                onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                className="w-full px-4 py-2 bg-material-dark-elevated rounded-lg text-material-dark-onBg"
                placeholder="https://..."
              />
            </div>

            <div>
              <label className="block text-material-dark-onBg font-medium mb-2">GitHub URL</label>
              <input
                type="url"
                value={formData.githubUrl || ''}
                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                className="w-full px-4 py-2 bg-material-dark-elevated rounded-lg text-material-dark-onBg"
                placeholder="https://github.com/..."
              />
            </div>

            <div className="md:col-span-2">
              <label className="flex items-center gap-2 text-material-dark-onBg">
                <input
                  type="checkbox"
                  checked={formData.featured || false}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="rounded"
                />
                Featured Project
              </label>
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
        <div className="text-center py-8 text-material-dark-onBg/70">Loading projects...</div>
      ) : projects.length === 0 ? (
        <div className="text-center py-8 text-material-dark-onBg/70">No projects yet</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-material-dark-surface rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {project.featured && (
                  <div className="absolute top-2 right-2 bg-material-dark-primary text-material-dark-onBg px-2 py-1 rounded text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-material-dark-onBg mb-2">{project.title}</h3>
                <p className="text-material-dark-onBg/70 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {(Array.isArray(project.tags) ? project.tags : []).slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-material-dark-primary/10 text-material-dark-primary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-material-dark-elevated text-material-dark-onBg rounded hover:bg-material-dark-primary/20"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-material-dark-elevated text-material-dark-onBg rounded hover:bg-material-dark-primary/20"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(project)}
                      className="p-2 bg-material-dark-secondary/10 text-material-dark-secondary rounded hover:bg-material-dark-secondary/20"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="p-2 bg-material-dark-error/10 text-material-dark-error rounded hover:bg-material-dark-error/20"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsManagement;