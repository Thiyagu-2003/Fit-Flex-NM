import React from 'react';
import { Activity, Target, Utensils, TrendingUp, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UserProfileForm } from '../components/UserProfileForm';
import { UserProfile } from '../types/user';

export function Home() {
  const [profile, setProfile] = React.useState<UserProfile | null>(null);

  const handleProfileSubmit = (newProfile: UserProfile) => {
    setProfile(newProfile);
    localStorage.setItem('userProfile', JSON.stringify(newProfile));
  };

  React.useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  if (!profile) {
    return (
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome to FitFlex</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Let's get started with your profile</h2>
          <UserProfileForm onSubmit={handleProfileSubmit} />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome back, {profile.name}!</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">Your AI-Powered Fitness Companion</p>
      </section>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-gray-600 dark:text-gray-400">Age</p>
            <p className="text-2xl font-bold">{profile.age}</p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400">Height</p>
            <p className="text-2xl font-bold">{profile.height} cm</p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400">Weight</p>
            <p className="text-2xl font-bold">{profile.weight} kg</p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400">Gender</p>
            <p className="text-2xl font-bold capitalize">{profile.gender}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link
          to="/workouts"
          className="p-6 rounded-lg bg-blue-50 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors"
        >
          <Activity className="h-8 w-8 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Workout Routines</h2>
          <p className="text-gray-600 dark:text-gray-400">Personalized exercise plans for your goals</p>
        </Link>

        <Link
          to="/diet"
          className="p-6 rounded-lg bg-green-50 dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-gray-700 transition-colors"
        >
          <Utensils className="h-8 w-8 text-green-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Diet Plans</h2>
          <p className="text-gray-600 dark:text-gray-400">Nutrition guidance tailored to your needs</p>
        </Link>

        <Link
          to="/progress"
          className="p-6 rounded-lg bg-purple-50 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-gray-700 transition-colors"
        >
          <TrendingUp className="h-8 w-8 text-purple-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Progress Tracking</h2>
          <p className="text-gray-600 dark:text-gray-400">Monitor your fitness journey</p>
        </Link>

        <div className="p-6 rounded-lg bg-orange-50 dark:bg-gray-800">
          <Target className="h-8 w-8 text-orange-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Daily Goal</h2>
          <p className="text-gray-600 dark:text-gray-400">Complete 3 exercises today</p>
        </div>
      </div>

      <section className="mt-12">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
          alt="Fitness motivation"
          className="w-full h-64 object-cover rounded-lg"
        />
      </section>

      <footer className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Project Staff</h3>
            <div className="space-y-2">
              <p className="font-medium">Staff in Charge:</p>
              <p className="text-gray-600 dark:text-gray-400">Prof. G. DEEPA, M.Sc. (CS), B.Ed., M.Phil., (PhD)</p>
            </div>
            <div className="space-y-2">
              <p className="font-medium">Student Developers:</p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                <li>S Thiyagu</li>
                <li>R Guru Deva</li>
                <li>J Rohan</li>
                <li>V Surendra Babu</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <a href="mailto:contact@fitflex.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  contact@fitflex.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <p className="text-gray-600 dark:text-gray-400">
                  123 Fitness Street, Health City, Exercise State 12345
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <p className="text-center text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} FitFlex. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}