import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 px-6 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Trabajemos Juntos
        </h3>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente? Me encantaría saber más sobre él y cómo puedo ayudarte.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {/* GitHub*/}
          <a
            href="https://github.com/JasielSGarcia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="linkedin.com/in/jasiel-solís-garcía-a163a53a2" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>

          {/* Email*/}
          <a
            href="mailto:jasielsolisgarcia08@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;