import React, { useState } from "react";
import { User, Mail, Shield, Camera, Save } from "lucide-react";

const ProfilePage = () => {
  // État initial de l'utilisateur
  const [user, setUser] = useState({
    name: "Jean Dupont",
    email: "jean.dupont@email.com",
    phone: "+33 6 12 34 56 78",
    bio: "Passionné de trading et d'analyse financière avec 5 ans d'expérience",
    avatar: "JD",
    notifications: true,
    twoFactor: false,
    language: "fr",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempUser, setTempUser] = useState({ ...user });

  const handleSave = () => {
    setUser({ ...tempUser });
    setIsEditing(false);
    // Logique de sauvegarde vers API
    console.log("Profil sauvegardé:", tempUser);
  };

  const handleCancel = () => {
    setTempUser({ ...user });
    setIsEditing(false);
  };

  const handleAvatarChange = () => {
    // Logique pour changer l'avatar
    console.log("Changement d'avatar");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-3 sm:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gray-800 rounded-lg shadow-sm p-4 sm:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">Mon Profil</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Avatar Section */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg shadow-sm p-4 sm:p-6">
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                    {user.avatar}
                  </div>
                  <button
                    onClick={handleAvatarChange}
                    className="absolute bottom-3 sm:bottom-4 right-0 bg-blue-500 hover:bg-blue-600 text-white p-1.5 sm:p-2 rounded-full transition-colors"
                  >
                    <Camera className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
                <h2 className="text-lg sm:text-xl font-semibold mb-2">
                  {user.name}
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm">{user.email}</p>
              </div>

              {/* Quick Actions */}
              <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                <button className="w-full flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm sm:text-base">
                  <User className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Modifier le profil</span>
                  <span className="sm:hidden">Profil</span>
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm sm:text-base">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Sécurité</span>
                  <span className="sm:hidden">Sécurité</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg shadow-sm p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
                <h2 className="text-lg sm:text-xl font-semibold">
                  Informations Personnelles
                </h2>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  {!isEditing ? (
                    <div className="flex gap-2 w-full sm:w-auto">
                      <button
                        onClick={handleCancel}
                        className="px-3 sm:px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm sm:text-base"
                      >
                        Annuler
                      </button>
                      <button
                        onClick={handleSave}
                        className="px-3 sm:px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2 text-sm sm:text-base"
                      >
                        <Save className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Sauvegarder</span>
                        <span className="sm:hidden">Sauver</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto"
                    >
                      Modifier
                    </button>
                  )}
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {/* Nom */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    value={isEditing ? tempUser.name : user.name}
                    onChange={(e) =>
                      setTempUser({ ...tempUser, name: e.target.value })
                    }
                    disabled={!isEditing}
                    className="w-full px-3 sm:px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white disabled:opacity-50 text-sm sm:text-base"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4" />
                    <input
                      type="email"
                      value={isEditing ? tempUser.email : user.email}
                      onChange={(e) =>
                        setTempUser({ ...tempUser, email: e.target.value })
                      }
                      disabled={!isEditing}
                      className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white disabled:opacity-50 text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Téléphone */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={isEditing ? tempUser.phone : user.phone}
                    onChange={(e) =>
                      setTempUser({ ...tempUser, phone: e.target.value })
                    }
                    disabled={!isEditing}
                    className="w-full px-3 sm:px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white disabled:opacity-50 text-sm sm:text-base"
                  />
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                    Biographie
                  </label>
                  <textarea
                    value={isEditing ? tempUser.bio : user.bio}
                    onChange={(e) =>
                      setTempUser({ ...tempUser, bio: e.target.value })
                    }
                    disabled={!isEditing}
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white disabled:opacity-50 resize-none text-sm sm:text-base"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
