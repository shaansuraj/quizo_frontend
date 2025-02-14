import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '@context/AuthContext';
import { Button } from '@components/ui/button';
import { Card } from '@components/ui/card';
import Layout from '@components/Layout';

interface Quiz {
  id: number;
  title: string;
  description: string;
  teacher_id: number;
  created_at: string;
}

function DashboardPage() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [error, setError] = useState('');

  // Hard-coded teacher ID for demonstration
  const teacherId = 1;

  useEffect(() => {
    // If not logged in, redirect to login
    if (!isLoggedIn) {
      navigate('/');
      return;
    }
    fetchQuizzes();
    // eslint-disable-next-line
  }, [isLoggedIn]);

  const fetchQuizzes = async () => {
    try {
      // GET /api/quizzes?teacher_id=1
      const res = await api.get('/quizzes', {
        params: { teacher_id: teacherId },
      });
      setQuizzes(res.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to load quizzes.');
    }
  };

  const handleDelete = async (quizId: number) => {
    try {
      // DELETE /api/quizzes/:id
      await api.delete(`/quizzes/${quizId}`);
      setQuizzes((prev) => prev.filter((q) => q.id !== quizId));
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to delete quiz.');
    }
  };

  return (
    <Layout>
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">My Quizzes</h1>
          <Link to="/create">
            <Button variant="default">Create New Quiz</Button>
          </Link>
        </div>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {quizzes.map((quiz) => (
            <Card key={quiz.id} className="p-4 space-y-2">
              <h2 className="text-lg font-semibold">{quiz.title}</h2>
              <p className="text-sm text-gray-600">{quiz.description}</p>
              <p className="text-xs text-gray-400">
                Created At:{' '}
                {new Date(quiz.created_at).toLocaleString()}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => navigate(`/edit/${quiz.id}`)}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(quiz.id)}
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default DashboardPage;
