import React from 'react';
import { Code, Palette, Terminal } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">About Me</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
              Hi, I'm Yuumi Iida, a passionate frontend developer with a keen eye for design and a love for creating
              seamless user experiences. I specialize in building modern web applications using HTML, CSS, JavaScript,
              and React.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
              With a strong foundation in web technologies, I enjoy turning complex problems into simple,
              beautiful, and intuitive solutions. I'm constantly learning and exploring new technologies to stay
              at the forefront of web development.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
              <Code className="text-red-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Frontend Development</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Proficient in modern frontend technologies
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
              <Terminal className="text-red-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Clean Code</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Writing maintainable and scalable code following best practices
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
              <Palette className="text-red-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">UI/UX Design</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Creating beautiful and intuitive user interfaces
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Responsive Design', 'Tailwind CSS', 'Git'].map((skill, index) => (
              <div
                key={index}
                className="p-4 bg-white dark:bg-zinc-800 rounded-lg text-center shadow-sm"
              >
                <span className="text-zinc-900 dark:text-white">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}