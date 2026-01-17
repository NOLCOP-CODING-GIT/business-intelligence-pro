import React from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Brain,
  BarChart3,
  Shield,
  ArrowRight,
  Zap,
  Target,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Business Intelligence
              <span className="text-blue-400"> Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Plateforme de trading assistée par IA avec analyses en temps réel,
              signaux intelligents et gestion de portfolio avancée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Accéder au Dashboard
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Fonctionnalités de Trading Avancées
            </h2>
            <p className="text-lg text-gray-400">
              Tout ce dont vous avez besoin pour trader intelligemment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-900 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-lg mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Signaux IA
              </h3>
              <p className="text-gray-400">
                Algorithmes de machine learning pour des signaux de trading
                précis avec scores de confiance.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-900 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-lg mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Analyse Temps Réel
              </h3>
              <p className="text-gray-400">
                Suivi des prix, volumes et indicateurs techniques en temps réel
                sur multiples marchés.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-900 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-lg mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Graphiques Avancés
              </h3>
              <p className="text-gray-400">
                Visualisations interactives avec indicateurs techniques,
                patterns et analyses prédictives.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-900 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-lg mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Gestion de Risque
              </h3>
              <p className="text-gray-400">
                Outils avancés pour le calcul du risque, drawdown et
                optimisation du portfolio.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-900 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-lg mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Trading Automatisé
              </h3>
              <p className="text-gray-400">
                Stratégies automatisées avec backtesting et optimisation des
                paramètres.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-900 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600 rounded-lg mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Sécurité Maximale
              </h3>
              <p className="text-gray-400">
                Protection des données et fonds avec chiffrement de bout en bout
                et authentification 2FA.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Markets Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Marchés Disponibles
            </h2>
            <p className="text-lg text-gray-400">
              Accédez à tous les marchés financiers depuis une seule plateforme
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">BTC</div>
              <p className="text-white font-medium">Bitcoin</p>
              <p className="text-green-400 text-sm">+5.2%</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">ETH</div>
              <p className="text-white font-medium">Ethereum</p>
              <p className="text-green-400 text-sm">+3.8%</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">AAPL</div>
              <p className="text-white font-medium">Apple</p>
              <p className="text-green-400 text-sm">+2.1%</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                GOLD
              </div>
              <p className="text-white font-medium">Or</p>
              <p className="text-red-400 text-sm">-0.5%</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à dominer les marchés ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez des milliers de traders qui utilisent déjà notre IA pour
            optimiser leurs performances
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Commencer à Trader
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
