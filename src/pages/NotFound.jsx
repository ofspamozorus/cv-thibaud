import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from 'components/AppIcon';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
            <Icon name="AlertTriangle" size={48} color="white" />
          </div>
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">Page non trouvée</h2>
          <p className="text-text-secondary mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={handleGoHome}
            className="w-full bg-accent hover:bg-warning text-surface px-6 py-3 rounded-interactive font-medium transition-all duration-micro ease-micro hover-scale focus-visible"
          >
            Retour à l'accueil
          </button>
          
          <button
            onClick={() => window.history.back()}
            className="w-full border border-border text-text-primary hover:bg-background px-6 py-3 rounded-interactive font-medium transition-all duration-micro ease-micro hover-scale focus-visible"
          >
            Page précédente
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;