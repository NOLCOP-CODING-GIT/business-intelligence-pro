import React, { useState } from "react";
import {
  Bell,
  Shield,
  Moon,
  Sun,
  Monitor,
  Lock,
  Database,
  Trash2,
} from "lucide-react";

const SettingsPage = () => {
  // État des paramètres
  const [settings, setSettings] = useState({
    // Notifications
    emailNotifications: true,
    pushNotifications: false,
    tradingAlerts: true,
    priceAlerts: true,

    // Apparence
    theme: "dark", // dark, light, auto
    language: "fr", // fr, en, es
    compactMode: false,

    // Sécurité
    twoFactorAuth: false,
    sessionTimeout: 30, // minutes
    loginAlerts: true,

    // Confidentialité
    profileVisibility: "public", // public, private, friends
    showOnlineStatus: true,
    dataSharing: false,

    // Avancés
    autoSave: true,
    cacheSize: 100, // MB
    exportFormat: "json", // json, csv, pdf
  });

  const [activeTab, setActiveTab] = useState("notifications");

  const handleSave = () => {
    // Logique de sauvegarde vers API
    console.log("Paramètres sauvegardés:", settings);
  };

  const handleReset = () => {
    // Réinitialiser aux paramètres par défaut
    console.log("Réinitialisation des paramètres");
  };

  const handleExport = () => {
    // Exporter les données
    console.log("Export des données");
  };

  const tabs = [
    { id: "notifications", name: "Notifications", icon: Bell },
    { id: "appearance", name: "Apparence", icon: Monitor },
    { id: "security", name: "Sécurité", icon: Shield },
    { id: "privacy", name: "Confidentialité", icon: Lock },
    { id: "advanced", name: "Avancés", icon: Database },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-3 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gray-800 rounded-lg shadow-sm p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold">Paramètres</h1>
            <div className="flex gap-2">
              <button
                onClick={handleReset}
                className="px-3 sm:px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm sm:text-base"
              >
                Réinitialiser
              </button>
              <button
                onClick={handleSave}
                className="px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 text-sm sm:text-base"
              >
                Sauvegarder
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg shadow-sm p-3 sm:p-4">
              <nav className="space-y-1 sm:space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">{tab.name}</span>
                    <span className="sm:hidden text-xs">
                      {tab.name.slice(0, 4)}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800 rounded-lg shadow-sm p-4 sm:p-6">
              {/* Notifications Tab */}
              {activeTab === "notifications" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">Notifications</h2>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Notifications email</p>
                        <p className="text-sm text-gray-400">
                          Recevoir les alertes par email
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          setSettings({
                            ...settings,
                            emailNotifications: !settings.emailNotifications,
                          })
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.emailNotifications
                            ? "bg-blue-600"
                            : "bg-gray-600"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.emailNotifications
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Notifications push</p>
                        <p className="text-sm text-gray-400">
                          Alertes sur mobile
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          setSettings({
                            ...settings,
                            pushNotifications: !settings.pushNotifications,
                          })
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.pushNotifications
                            ? "bg-blue-600"
                            : "bg-gray-600"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.pushNotifications
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Alertes de trading</p>
                        <p className="text-sm text-gray-400">
                          Signaux IA et opportunités
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          setSettings({
                            ...settings,
                            tradingAlerts: !settings.tradingAlerts,
                          })
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.tradingAlerts ? "bg-blue-600" : "bg-gray-600"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.tradingAlerts
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Appearance Tab */}
              {activeTab === "appearance" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">Apparence</h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Thème
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { value: "light", label: "Clair", icon: Sun },
                          { value: "dark", label: "Sombre", icon: Moon },
                          { value: "auto", label: "Auto", icon: Monitor },
                        ].map((theme) => (
                          <button
                            key={theme.value}
                            onClick={() =>
                              setSettings({ ...settings, theme: theme.value })
                            }
                            className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
                              settings.theme === theme.value
                                ? "bg-blue-600 border-blue-600 text-white"
                                : "bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600"
                            }`}
                          >
                            <theme.icon className="w-4 h-4" />
                            {theme.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Langue
                      </label>
                      <select
                        value={settings.language}
                        onChange={(e) =>
                          setSettings({ ...settings, language: e.target.value })
                        }
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                      >
                        <option value="fr">Français</option>
                        <option value="en">English</option>
                        <option value="es">Español</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Mode compact</p>
                        <p className="text-sm text-gray-400">
                          Interface plus dense
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          setSettings({
                            ...settings,
                            compactMode: !settings.compactMode,
                          })
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.compactMode ? "bg-blue-600" : "bg-gray-600"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.compactMode
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === "security" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">Sécurité</h2>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">
                          Authentification à deux facteurs
                        </p>
                        <p className="text-sm text-gray-400">
                          Protection supplémentaire du compte
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          setSettings({
                            ...settings,
                            twoFactorAuth: !settings.twoFactorAuth,
                          })
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.twoFactorAuth ? "bg-blue-600" : "bg-gray-600"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.twoFactorAuth
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Délai d'expiration de session (minutes)
                      </label>
                      <input
                        type="number"
                        value={settings.sessionTimeout}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            sessionTimeout: parseInt(e.target.value),
                          })
                        }
                        min="5"
                        max="120"
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Alertes de connexion</p>
                        <p className="text-sm text-gray-400">
                          Notifier des nouvelles connexions
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          setSettings({
                            ...settings,
                            loginAlerts: !settings.loginAlerts,
                          })
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.loginAlerts ? "bg-blue-600" : "bg-gray-600"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.loginAlerts
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Privacy Tab */}
              {activeTab === "privacy" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Confidentialité
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Visibilité du profil
                      </label>
                      <select
                        value={settings.profileVisibility}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            profileVisibility: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                      >
                        <option value="public">Public</option>
                        <option value="private">Privé</option>
                        <option value="friends">Amis uniquement</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Statut en ligne</p>
                        <p className="text-sm text-gray-400">
                          Montrer votre disponibilité
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          setSettings({
                            ...settings,
                            showOnlineStatus: !settings.showOnlineStatus,
                          })
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.showOnlineStatus
                            ? "bg-blue-600"
                            : "bg-gray-600"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.showOnlineStatus
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Partage de données</p>
                        <p className="text-sm text-gray-400">
                          Autoriser l'analyse anonyme
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          setSettings({
                            ...settings,
                            dataSharing: !settings.dataSharing,
                          })
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.dataSharing ? "bg-blue-600" : "bg-gray-600"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.dataSharing
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Advanced Tab */}
              {activeTab === "advanced" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Paramètres avancés
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Sauvegarde automatique</p>
                        <p className="text-sm text-gray-400">
                          Sauvegarder les modifications
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          setSettings({
                            ...settings,
                            autoSave: !settings.autoSave,
                          })
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.autoSave ? "bg-blue-600" : "bg-gray-600"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.autoSave
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Taille du cache (MB)
                      </label>
                      <input
                        type="number"
                        value={settings.cacheSize}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            cacheSize: parseInt(e.target.value),
                          })
                        }
                        min="10"
                        max="500"
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Format d'export
                      </label>
                      <select
                        value={settings.exportFormat}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            exportFormat: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                      >
                        <option value="json">JSON</option>
                        <option value="csv">CSV</option>
                        <option value="pdf">PDF</option>
                      </select>
                    </div>

                    <div className="pt-4 border-t border-gray-700">
                      <h3 className="text-lg font-medium mb-4 text-red-400">
                        Actions dangereuses
                      </h3>
                      <div className="space-y-3">
                        <button
                          onClick={handleExport}
                          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                        >
                          <Database className="w-4 h-4" />
                          Exporter les données
                        </button>
                        <button
                          onClick={() => console.log("Suppression du compte")}
                          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          Supprimer le compte
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
