import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
      navigate('/admin');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-material-dark-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-material-dark-surface rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-material-dark-onBg mb-2 text-center">
            Admin Portal
          </h1>
          <p className="text-material-dark-onBg/70 text-center mb-8">
            {isSignUp ? 'Create new admin account' : 'Sign in to dashboard'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-material-dark-onBg mb-2 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-material-dark-elevated rounded-lg text-material-dark-onBg placeholder-material-dark-onBg/50 focus:outline-none focus:ring-2 focus:ring-material-dark-primary"
                placeholder="admin@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-material-dark-onBg mb-2 font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-material-dark-elevated rounded-lg text-material-dark-onBg placeholder-material-dark-onBg/50 focus:outline-none focus:ring-2 focus:ring-material-dark-primary"
                placeholder="Enter password"
                required
              />
            </div>

            {error && (
              <div className="p-4 bg-material-dark-error/10 border border-material-dark-error rounded-lg">
                <p className="text-material-dark-error text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-material-dark-primary text-material-dark-onBg rounded-lg font-medium hover:bg-material-dark-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-material-dark-primary hover:text-material-dark-primary/80 transition-colors"
            >
              {isSignUp ? 'Already have account? Sign In' : 'Need account? Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
