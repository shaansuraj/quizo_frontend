import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @file Layout.tsx
 * @desc A shared layout component providing consistent page structure,
 *       such as a header and main content area.
 */

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Navbar */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/dashboard" className="text-lg font-bold">
            Quizo
          </Link>
          <nav className="space-x-4">
            <Link to="/dashboard" className="text-blue-600 hover:underline">
              Dashboard
            </Link>
            <Link to="/create" className="text-blue-600 hover:underline">
              Create Quiz
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Quizo - All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Layout;
