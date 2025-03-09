import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import DashboardLayout from './components/layout/DashboardLayout';
import AdminLayout from './components/layout/AdminLayout';
import MainPage from './pages/Dashboard/MainPage';
import HistoryPage from './pages/Dashboard/HistoryPage';
import SettingsPage from './pages/Dashboard/SettingsPage';
import TranslatorPage from './pages/Dashboard/TranslatorPage';
import GroupTranslatorPage from './pages/Dashboard/GroupTranslatorPage';
import UserManagementPage from './pages/Admin/UserManagementPage';
import PlanManagementPage from './pages/Admin/PlanManagementPage';
import TranslationHistoryPage from './pages/Admin/TranslationHistoryPage';
import UserCreditsPage from './pages/Admin/UserCreditsPage';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Routes>
      {/* Маршруты панели администратора */}
      <Route
        path="/admin"
        element={
          <PrivateRoute requiredRole="admin">
            <AdminLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Navigate to="/admin/users" replace />} />
        <Route path="users" element={<UserManagementPage />} />
        <Route path="plans" element={<PlanManagementPage />} />
        <Route path="translations" element={<TranslationHistoryPage />} />
        <Route path="credits" element={<UserCreditsPage />} />
        <Route path="stats" element={<div>Статистика (в разработке)</div>} />
        <Route path="settings" element={<div>Настройки админки (в разработке)</div>} />
      </Route>

      {/* Маршруты личного кабинета */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute requiredRole="user">
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<MainPage />} />
        <Route path="translator" element={<TranslatorPage />} />
        <Route path="group-translator" element={<GroupTranslatorPage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      {/* Публичные маршруты */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/register" element={<div>Страница регистрации (в разработке)</div>} />
      <Route path="/about" element={<div>О нас (в разработке)</div>} />
      <Route path="/contact" element={<div>Контакты (в разработке)</div>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;