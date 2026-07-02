const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My App Portal</title>
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: Arial, sans-serif;
          background: #f8fafc;
          color: #1f2937;
          line-height: 1.6;
        }

        header {
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          padding: 18px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
        }

        .logo {
          font-size: 22px;
          font-weight: bold;
          color: #1d4ed8;
        }

        nav a {
          text-decoration: none;
          color: #374151;
          margin-left: 20px;
          font-weight: 500;
        }

        nav a:hover {
          color: #1d4ed8;
        }

        .hero {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 24px 40px;
          text-align: center;
        }

        .badge {
          display: inline-block;
          background: #dbeafe;
          color: #1d4ed8;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .hero h1 {
          font-size: 44px;
          margin-bottom: 16px;
          color: #111827;
        }

        .hero p {
          max-width: 760px;
          margin: 0 auto 30px;
          font-size: 18px;
          color: #6b7280;
        }

        .cta-group {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }

        .btn {
          padding: 12px 20px;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          transition: 0.2s ease;
          display: inline-block;
        }

        .btn-primary {
          background: #2563eb;
          color: white;
        }

        .btn-primary:hover {
          background: #1d4ed8;
        }

        .btn-secondary {
          background: white;
          color: #2563eb;
          border: 1px solid #cbd5e1;
        }

        .btn-secondary:hover {
          background: #f1f5f9;
        }

        .status-panel {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 24px 60px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
        }

        .card h3 {
          font-size: 18px;
          margin-bottom: 10px;
          color: #111827;
        }

        .card p {
          color: #6b7280;
          font-size: 15px;
        }

        .value {
          margin-top: 12px;
          font-size: 20px;
          font-weight: bold;
          color: #1d4ed8;
        }

        .features {
          max-width: 1100px;
          margin: 0 auto;
          padding: 20px 24px 80px;
        }

        .section-title {
          text-align: center;
          font-size: 32px;
          margin-bottom: 12px;
        }

        .section-subtitle {
          text-align: center;
          color: #6b7280;
          max-width: 700px;
          margin: 0 auto 40px;
        }

        .footer {
          text-align: center;
          padding: 24px;
          border-top: 1px solid #e5e7eb;
          background: white;
          color: #6b7280;
          font-size: 14px;
        }

        .healthy {
          display: inline-block;
          margin-top: 10px;
          padding: 8px 12px;
          border-radius: 999px;
          background: #dcfce7;
          color: #166534;
          font-size: 14px;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          header {
            flex-direction: column;
            gap: 12px;
            padding: 20px;
          }

          nav a {
            margin: 0 10px;
          }

          .hero h1 {
            font-size: 34px;
          }

          .hero p {
            font-size: 16px;
          }
        }
      </style>
    </head>
    <body>
      <header>
        <div class="logo">My App Portal</div>
        <nav>
          <a href="/">Home</a>
          <a href="/health">Health</a>
          <a href="/api/info">API Info</a>
        </nav>
      </header>

      <section class="hero">
        <div class="badge">Modern Application Portal</div>
        <h1>Welcome to My App</h1>
        <p>
          A clean, professional, and user-friendly portal designed to provide
          a better experience for monitoring, application access, and service visibility.
        </p>

        <div class="cta-group">
          <a class="btn btn-primary" href="/api/info">View API Info</a>
          <a class="btn btn-secondary" href="/health">Check Health</a>
        </div>
      </section>

      <section class="status-panel">
        <div class="grid">
          <div class="card">
            <h3>Environment</h3>
            <p>Current runtime environment</p>
            <div class="value">${ENV}</div>
          </div>

          <div class="card">
            <h3>Application Status</h3>
            <p>System availability overview</p>
            <div class="healthy">Healthy</div>
          </div>

          <div class="card">
            <h3>Health Endpoint</h3>
            <p>Monitor application readiness and uptime</p>
            <div class="value">/health</div>
          </div>

          <div class="card">
            <h3>API Endpoint</h3>
            <p>Access application information</p>
            <div class="value">/api/info</div>
          </div>
        </div>
      </section>

      <section class="features">
        <h2 class="section-title">Why this portal feels better</h2>
        <p class="section-subtitle">
          This improved interface focuses on clarity, visual structure, and a more polished user experience.
        </p>

        <div class="grid">
          <div class="card">
            <h3>Clean Design</h3>
            <p>
              A lighter layout, modern spacing, and better visual hierarchy
              make the application easier to use and more professional.
            </p>
          </div>

          <div class="card">
            <h3>Clear Navigation</h3>
            <p>
              Key links are accessible from the header, helping users quickly
              find health and API information.
            </p>
          </div>

          <div class="card">
            <h3>Better Status Visibility</h3>
            <p>
              Important information such as environment and service health
              is displayed in a clean, readable card layout.
            </p>
          </div>

          <div class="card">
            <h3>Responsive Layout</h3>
            <p>
              The page adapts more gracefully to smaller screens for a smoother
              mobile and tablet experience.
            </p>
          </div>
        </div>
      </section>

      <div class="footer">
        © 2026 My App Portal · Professional UI Experience
      </div>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    environment: ENV,
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.get('/api/info', (req, res) => {
  res.status(200).json({
    name: 'My App Portal',
    version: '1.0.0',
    environment: ENV,
    description: 'A professional and user-friendly Node.js application portal'
  });
});

app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Page Not Found</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f8fafc;
          color: #1f2937;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
        }
        .box {
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
          text-align: center;
          max-width: 500px;
        }
        h1 {
          margin-bottom: 12px;
          color: #dc2626;
        }
        p {
          color: #6b7280;
          margin-bottom: 20px;
        }
        a {
          text-decoration: none;
          color: white;
          background: #2563eb;
          padding: 12px 18px;
          border-radius: 10px;
          font-weight: 600;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/">Back to Home</a>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:\${PORT}\`);
});

