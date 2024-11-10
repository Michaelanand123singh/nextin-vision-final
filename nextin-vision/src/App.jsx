import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';
import { AnimatePresence } from 'framer-motion';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Process = React.lazy(() => import('./pages/Process'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h2>
            <button 
              onClick={() => window.location.reload()} 
              className="btn-premium"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading component with premium styling
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <LoadingSpinner className="w-12 h-12 text-blue-600" />
  </div>
);

// AnimatedRoutes component for page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          } 
        />
        <Route 
          path="/services" 
          element={
            <Suspense fallback={<PageLoader />}>
              <Services />
            </Suspense>
          } 
        />
        <Route 
          path="/portfolio" 
          element={
            <Suspense fallback={<PageLoader />}>
              <Portfolio />
            </Suspense>
          } 
        />
        <Route 
          path="/process" 
          element={
            <Suspense fallback={<PageLoader />}>
              <Process />
            </Suspense>
          } 
        />
        <Route 
          path="/about" 
          element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;