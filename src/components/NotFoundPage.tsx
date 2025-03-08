import React from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          Oops! Looks like you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mb-8">
          <code className="bg-gray-100 dark:bg-slate-800 p-3 rounded-lg text-sm block overflow-x-auto">
            <span className="text-red-500">Error</span>: <span className="text-gray-800 dark:text-gray-200">Page not found at route "{window.location.pathname}"</span>
          </code>
        </div>
        <a
          href="/"
          className="btn btn-primary inline-flex items-center"
        >
          <Home size={18} className="mr-2" />
          Back to Home
        </a>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;