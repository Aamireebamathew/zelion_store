import React from "react";

const ProfilePage = () => {
  // Simulated profile info
  const user = {
    name: "Aami Reeba",
    email: "aami@example.com",
    joined: "June 2024",
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">👤 My Profile</h1>

      <div className="bg-white p-4 rounded shadow space-y-2">
        <div>
          <strong>Name:</strong> {user.name}
        </div>
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        <div>
          <strong>Joined:</strong> {user.joined}
        </div>

        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
