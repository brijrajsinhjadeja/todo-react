// src/HomePage.js
import React from 'react';
import './homePage.css'; // Custom CSS for styling


const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header">
        <div className="logo"><img src="/logo.png" alt="Taskyfy Logo" className="logo-img" />
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <div className="login-buttons">
      <button className="admin-login">Admin Login</button>
      <button className="user-login">User Login</button>
    </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Simplify Your Life, One Task at a Time</h1>
        <p>Stay on top of your to-do list with Taskyfy—your ultimate productivity companion.</p>
        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Why Choose Taskyfy?</h2>
        <div className="feature-grid">
          <div className="feature">
            <h3>Easy Task Management</h3>
            <p>Create, organize, and track tasks effortlessly.</p>
          </div>
          <div className="feature">
            <h3>Smart Reminders</h3>
            <p>Never miss a deadline with intelligent notifications.</p>
          </div>
          <div className="feature">
            <h3>Collaborative Tools</h3>
            <p>Work seamlessly with your team.</p>
          </div>
          <div className="feature">
            <h3>Cross-Platform Sync</h3>
            <p>Access your tasks anytime, anywhere.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Create Tasks</h3>
            <p>Add tasks with one tap.</p>
          </div>
          <div className="step">
            <h3>2. Set Priorities</h3>
            <p>Organize by importance and due date.</p>
          </div>
          <div className="step">
            <h3>3. Achieve Goals</h3>
            <p>Track progress and celebrate wins.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <h2>Choose a Plan That Fits Your Needs</h2>
        <div className="pricing-cards">
          <div className="card">
            <h3>Free Plan</h3>
            <p>Basic task features.</p>
            <p>$0/month</p>
          </div>
          <div className="card">
            <h3>Pro Plan</h3>
            <p>Advanced tools like reminders and integrations.</p>
            <p>$9.99/month</p>
          </div>
          <div className="card">
            <h3>Team Plan</h3>
            <p>Collaboration and analytics tools.</p>
            <p>$19.99/month</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Taskify. All rights reserved.</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
};



export default HomePage;
