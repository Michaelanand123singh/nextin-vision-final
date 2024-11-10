// src/components/TestComponent.jsx
export default function TestComponent() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="card">
          <h1 className="text-3xl font-bold text-primary mb-4">
            Tailwind CSS is working!
          </h1>
          <p className="text-gray-600 mb-4">
            This is a test component with custom styling.
          </p>
          <button className="btn-primary">
            Test Button
          </button>
        </div>
      </div>
    );
  }