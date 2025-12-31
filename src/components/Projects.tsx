import { useState } from 'react';
import ProjectCard from './ProjectCard';
import photomint from '../assets/img/mint.png';
import phototopia from '../assets/img/topia.png';
import photoumai from '../assets/img/umai.png'
import photowowi from "../assets/img/wowi.png"

// Datos de proyectos
const allProjects = [
  {
    title: "App de Finanzas Personales",
    description: "Aplicación colaborativa para control de finanzas de manera ágil y sencilla.",
    imageUrl: photomint,
    demoLink: "https://front-mint.onrender.com",
    repoLink: "https://github.com/JasielSGarcia",
    tags: ["React Native", "Expo", "Finanzas"],
    category: 'App'as const, 
  },
  {
    title: "Sistema de Web de Inventario - DIF Municipal Topia, Durango",
    description: "Sistema desarrollado durante mi estadía universitaria para gestionar inventario.",
    imageUrl: phototopia,
    repoLink: "https://github.com/JasielSGarcia",
    tags: ["React", "Topia", "Inventario"],
    category: 'Web' as const,
  },
  {
    title: "Software de Control Forestal",
    description: "Informe de rendimiento y control de inventario para un ejido forestal.",
    imageUrl: photowowi,
    repoLink: "https://github.com/JasielSGarcia/wowi.git",
    tags: ["React", "Inventario", "Reportes"],
    category: 'Web' as const,
  },
  {
    title: "UI/UX - UMAI App",
    description: "Diseño completo de UMAI App usando Figma.",
    imageUrl: photoumai,
    demoLink: "https://www.figma.com/design/GJvWhtnPQSp56VroSZJ0cG/UMAI?node-id=16-232&t=ZsFSVYhD2UF3KvC3-1",
    tags: ["Figma", "UI/UX", "Diseño Web"],
    category: 'Design' as const,
  },
];

// Tipos de categorías para los filtros
type ProjectCategory = 'All' | 'Video' | 'Web' | 'App' | 'Design';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  // Filtra los proyectos basados en el filtro activo
  const filteredProjects = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === activeFilter);

  return (
    <section id="proyectos" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Título y Subtítulo */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Portafolio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            Mis trabajos más recientes
          </p>
        </div>

        {/* Botones de Filtro */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {(['All', 'Video', 'Web', 'App', 'Design', ] as ProjectCategory[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-6 py-2 rounded-full text-lg font-medium transition-all duration-200
                ${activeFilter === category
                  ? 'bg-gray-900 text-white dark:bg-blue-600 dark:text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video */}
        {activeFilter === 'Video' && (
          <div className="mb-12">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/watch?v=RjwFWlLBSGM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-b-2xl">
              <h4 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Demo de Desarrollo</h4>
              <p className="text-gray-600 dark:text-gray-300">Proceso de desarrollo y creación de interfaces modernas.</p>
            </div>
          </div>
        )}


        {/* Grid de proyectos filtrados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              repoLink={project.repoLink}
              demoLink={project.demoLink}
              tags={project.tags}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
