import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-primary bg-background-primary">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-center">
            <p className="text-body text-secondary">
              {new Date().getFullYear()} Muhammad Hassan Rajput. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2 text-body-small text-muted">
            <span>Built with</span>
            <span className="text-accent-primary">●</span>
            <span>using Next.js & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;