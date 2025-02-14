import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from '@pages/LoginPage';
import DashboardPage from '@pages/DashboardPage';
import QuizFormPage from '@pages/QuizFormPage';
import Layout from '@components/Layout';

/**
 * @file Router.tsx
 * @desc Centralizes all the routes for the application. 
 */
function AppRouter() {
  return (
    <Routes>
      {/* Public route: Login */}
      <Route path="/" element={<LoginPage />} />

      {/* Protected routes (using Layout) */}
      <Route 
        path="/dashboard" 
        element={
          <Layout>
            <DashboardPage />
          </Layout>
        } 
      />
      <Route 
        path="/create" 
        element={
          <Layout>
            <QuizFormPage />
          </Layout>
        } 
      />
      <Route 
        path="/edit/:quizId" 
        element={
          <Layout>
            <QuizFormPage />
          </Layout>
        } 
      />

      {/* Catch-all -> redirect to login */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRouter;
