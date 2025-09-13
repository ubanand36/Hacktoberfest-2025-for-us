import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Hacktoberfest 2025 API is running! 🎃',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// API Routes
app.get('/api/stats', (req, res) => {
  // Mock data for demonstration
  const stats = {
    totalPRs: Math.floor(Math.random() * 100) + 50,
    contributors: Math.floor(Math.random() * 50) + 20,
    repositories: 3,
    badges: Math.floor(Math.random() * 30) + 25
  };
  
  res.json(stats);
});

app.get('/api/contributors', (req, res) => {
  // Mock contributors data
  const contributors = [
    { id: 1, name: 'Alice Johnson', prs: 5, avatar: '👩‍💻', joined: '2025-10-01' },
    { id: 2, name: 'Bob Smith', prs: 3, avatar: '👨‍💻', joined: '2025-10-02' },
    { id: 3, name: 'Carol Davis', prs: 7, avatar: '👩‍🎨', joined: '2025-10-01' },
    { id: 4, name: 'David Wilson', prs: 4, avatar: '👨‍🚀', joined: '2025-10-03' },
    { id: 5, name: 'Emma Brown', prs: 6, avatar: '👩‍🔬', joined: '2025-10-02' }
  ];
  
  // Sort by PRs descending
  contributors.sort((a, b) => b.prs - a.prs);
  
  res.json(contributors);
});

app.get('/api/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      name: 'Frontend Dashboard',
      language: 'TypeScript',
      difficulty: 'Beginner',
      issues: 12,
      description: 'React-based dashboard for Hacktoberfest statistics'
    },
    {
      id: 2,
      name: 'Backend API',
      language: 'Node.js',
      difficulty: 'Intermediate',
      issues: 8,
      description: 'Express.js API for managing Hacktoberfest data'
    },
    {
      id: 3,
      name: 'Python Scripts',
      language: 'Python',
      difficulty: 'Beginner',
      issues: 15,
      description: 'Utility scripts for data processing and automation'
    }
  ];
  
  res.json(projects);
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal Server Error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.originalUrl} not found`
  });
});

app.listen(PORT, () => {
  console.log(`🎃 Hacktoberfest 2025 API running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🚀 Health check: http://localhost:${PORT}/health`);
});