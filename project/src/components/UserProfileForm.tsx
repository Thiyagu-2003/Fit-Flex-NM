import React from 'react';
import { UserProfile } from '../types/user';

interface UserProfileFormProps {
  onSubmit: (profile: UserProfile) => void;
}

export function UserProfileForm({ onSubmit }: UserProfileFormProps) {
  const [profile, setProfile] = React.useState<UserProfile>({
    name: '',
    age: 25,
    height: 170,
    weight: 70,
    gender: 'male'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(profile);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2"
          required
        />
      </div>

      <div>
        <label htmlFor="age" className="block text-sm font-medium">
          Age
        </label>
        <input
          type="number"
          id="age"
          value={profile.age}
          onChange={(e) => setProfile({ ...profile, age: parseInt(e.target.value) })}
          className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2"
          min="16"
          max="100"
          required
        />
      </div>

      <div>
        <label htmlFor="height" className="block text-sm font-medium">
          Height (cm)
        </label>
        <input
          type="number"
          id="height"
          value={profile.height}
          onChange={(e) => setProfile({ ...profile, height: parseInt(e.target.value) })}
          className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2"
          min="100"
          max="250"
          required
        />
      </div>

      <div>
        <label htmlFor="weight" className="block text-sm font-medium">
          Weight (kg)
        </label>
        <input
          type="number"
          id="weight"
          value={profile.weight}
          onChange={(e) => setProfile({ ...profile, weight: parseInt(e.target.value) })}
          className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2"
          min="30"
          max="200"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Gender</label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="male"
              checked={profile.gender === 'male'}
              onChange={(e) => setProfile({ ...profile, gender: e.target.value as 'male' | 'female' })}
              className="mr-2"
            />
            Male
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="female"
              checked={profile.gender === 'female'}
              onChange={(e) => setProfile({ ...profile, gender: e.target.value as 'male' | 'female' })}
              className="mr-2"
            />
            Female
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Save Profile
      </button>
    </form>
  );
}