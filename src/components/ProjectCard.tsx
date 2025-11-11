import { Github } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  repoLink?: string; // Link al repositorio
  demoLink?: string; // Link a la página en vivo
  tags: string[];
};

const ProjectCard = ({ title, description, repoLink, demoLink, tags }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col">
      <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
        {description}
      </p>
      
      <div className="flex gap-2 flex-wrap mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto">
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
          >
            <Github size={18} />
            Código
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-900 dark:text-blue-400 hover:underline"
          >
            Ver demo <span>→</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;