import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div className="text-center mt-0  p-2 text-red-500">Please login</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome, {user.username}</h2>
        <p className="text-gray-700">We're glad to have you back!</p>
      </div>
    </div>
  );
}

export default Profile;
