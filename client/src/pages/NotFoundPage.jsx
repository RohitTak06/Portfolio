import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { IconSpaceCat } from '../components/AnimatedIcon';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-24 text-center">
      <div className="glass-card max-w-md p-8 rounded-2xl border border-border space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary mx-auto flex items-center justify-center">
          <IconSpaceCat size={36} />
        </div>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-foreground">
          404
        </h1>
        <h2 className="font-bold text-lg text-foreground">Page Not Found</h2>
        <p className="text-sm text-muted-foreground">
          The requested page route could not be found. Let's return back to Rohit Tak's main portfolio.
        </p>
        <div className="pt-2">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
