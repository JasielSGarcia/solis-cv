import { Github } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  repoLink?: string;
  demoLink?: string;
  tags: string[];
  category:  'Video' | 'Web' | 'App' | 'Design' ;
};

const ProjectCard = ({ title, imageUrl, repoLink, demoLink }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
      {/* Imagen del Proyecto */}
      <div className="relative w-full h-48 sm:h-56 bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
        {/* Usa object-cover para que la imagen ocupe todo el espacio y se recorte si es necesario */}
        <img 
          src={imageUrl} 
          alt={`Captura de pantalla de ${title}`} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
        
        <div className="flex gap-4 items-center">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Demo <span>→</span>
            </a>
          )}
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
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;