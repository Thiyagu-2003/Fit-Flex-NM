import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Award, Flame, Target } from 'lucide-react';

const data = [
  { name: 'Mon', weight: 75, calories: 2100 },
  { name: 'Tue', weight: 74.8, calories: 2200 },
  { name: 'Wed', weight: 74.6, calories: 2000 },
  { name: 'Thu', weight: 74.4, calories: 2300 },
  { name: 'Fri', weight: 74.2, calories: 2150 },
  { name: 'Sat', weight: 74, calories: 2400 },
  { name: 'Sun', weight: 73.8, calories: 2250 },
];

export function Progress() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Progress Tracking</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-3 mb-2">
            <Target className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Weekly Goal</h2>
          </div>
          <p className="text-3xl font-bold">85%</p>
          <p className="text-gray-600 dark:text-gray-400">Complete</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-3 mb-2">
            <Flame className="h-6 w-6 text-orange-600" />
            <h2 className="text-xl font-semibold">Calories Burned</h2>
          </div>
          <p className="text-3xl font-bold">15,400</p>
          <p className="text-gray-600 dark:text-gray-400">This week</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-3 mb-2">
            <Award className="h-6 w-6 text-purple-600" />
            <h2 className="text-xl font-semibold">Achievements</h2>
          </div>
          <p className="text-3xl font-bold">12</p>
          <p className="text-gray-600 dark:text-gray-400">Badges earned</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Weight Progress</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="weight" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Calories Burned</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="calories" stroke="#16a34a" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}