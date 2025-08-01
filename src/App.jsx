import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { User, Lock } from 'lucide-react';

// Composant de la page d'accueil
const HomePage = () => (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8 font-sans">
    <div className="bg-white p-10 rounded-3xl shadow-2xl text-center w-full max-w-2xl">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Bienvenue dans l'application de gestion de restaurant
      </h1>
      <p className="text-gray-600 mb-8 text-lg">
        Choisissez votre profil pour continuer.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Link
          to="/client"
          className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <User size={20} />
          <span>Client</span>
        </Link>
        <Link
          to="/login"
          className="bg-green-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <Lock size={20} />
          <span>Personnel</span>
        </Link>
      </div>
    </div>
  </div>
);

// Composant du tableau de bord client
const ClientDashboard = () => (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8 text-center font-sans">
    <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-2xl">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Espace Client
      </h2>
      <p className="text-gray-600 text-lg">
        Ceci est l'interface client. Le menu s'affichera ici.
      </p>
      <Link to="/" className="mt-8 inline-block text-blue-600 hover:underline">
        Retour à l'accueil
      </Link>
    </div>
  </div>
);

// Composant du tableau de bord du personnel
const StaffDashboard = () => (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8 text-center font-sans">
    <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-2xl">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Tableau de bord du Personnel
      </h2>
      <p className="text-gray-600 text-lg">
        Ceci est l'interface du personnel. Les commandes et la gestion du menu seront disponibles ici.
      </p>
      <Link to="/" className="mt-8 inline-block text-green-600 hover:underline">
        Retour à l'accueil
      </Link>
    </div>
  </div>
);

// Composant de la page de connexion
const LoginPage = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8 font-sans">
    <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Connexion
      </h2>
      <p className="text-gray-600 text-lg mb-6">
        Formulaire de connexion pour le personnel.
      </p>
      {/* Redirection vers le tableau de bord du personnel après connexion simulée */}
      <Link to="/staff" className="bg-green-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-2">
        <Lock size={20} />
        <span>Se connecter</span>
      </Link>
      <Link to="/" className="mt-8 inline-block text-green-600 hover:underline">
        Retour à l'accueil
      </Link>
    </div>
  </div>
);

// Composant principal de l'application
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/client" element={<ClientDashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/staff" element={<StaffDashboard />} />
      </Routes>
    </Router>
  );
}
