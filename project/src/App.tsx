import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Workouts } from './pages/Workouts';
import { Diet } from './pages/Diet';
import { Progress } from './pages/Progress';
import { SplashScreen } from './components/SplashScreen';
import { OnboardingScreen } from './components/OnboardingScreen';

function App() {
  const [showSplash, setShowSplash] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = (provider: 'google' | 'email' | 'apple') => {
    console.log(`Logging in with ${provider}`);
    // TODO: Implement actual authentication
    setIsAuthenticated(true);
  };

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  if (!isAuthenticated) {
    return <OnboardingScreen onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;