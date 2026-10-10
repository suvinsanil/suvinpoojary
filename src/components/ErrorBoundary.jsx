import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-stone-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 flex flex-col items-center justify-center p-6 text-center transition-colors duration-500">
          <div className="bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] p-8 rounded-2xl max-w-lg w-full shadow-lg">
            <h1 className="text-3xl font-bold mb-4 text-red-500">Something went wrong</h1>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 font-mono text-sm bg-zinc-100 dark:bg-black/50 p-4 rounded-xl overflow-x-auto text-left">
              {this.state.error?.toString()}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-medium rounded-xl hover:from-violet-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:focus:ring-offset-[#09090b] transition-all"
            >
              Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
