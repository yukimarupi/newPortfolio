import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
            Frontend Developer
            <br />
            <span className="text-red-600">Yuumi Iida</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 mb-12 max-w-2xl">
            Crafting beautiful and functional web experiences with modern technologies.
            Specialized in HTML, CSS, JavaScript, TypeScript, and React.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
            >
              View Projects
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-base font-medium rounded-md text-zinc-900 dark:text-white bg-transparent hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Frontend Development</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              HTML, CSS, JavaScript, TypeScript, React
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">UI/UX Design</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Responsive Design, Modern UI Patterns, User Experience
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Tools & Technologies</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Git, VS Code, Tailwind CSS
            </p>
          </div>
        </div>

        <div className="py-12 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-zinc-600 dark:text-zinc-300 hover:text-red-600">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-zinc-600 dark:text-zinc-300 hover:text-red-600">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="text-zinc-600 dark:text-zinc-300 hover:text-red-600">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}