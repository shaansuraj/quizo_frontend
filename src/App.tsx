import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '@pages/LoginPage';
import DashboardPage from '@pages/DashboardPage';
import QuizFormPage from '@pages/QuizFormPage';
import { AuthProvider } from '@context/AuthContext';

/**
 * @file App.tsx
 * @desc Defines the main routes and wraps them with AuthProvider.
 */

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Login page */}
        <Route path="/" element={<LoginPage />} />

        {/* Dashboard page */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Create new quiz */}
        <Route path="/create" element={<QuizFormPage />} />

        {/* Edit existing quiz */}
        <Route path="/edit/:quizId" element={<QuizFormPage />} />

        {/* Catch-all -> redirect to login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
