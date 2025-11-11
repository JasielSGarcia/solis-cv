import SkillItem from './SkillItem';

// Definimos tus habilidades aquí para que sea más fácil de editar
const frontendSkills = [
  { name: "React", level: "Intermedio / Avanzado" },
  { name: "JavaScript", level: "Intermedio" },
  { name: "Tailwind CSS", level: "Intermedio" },
  { name: "HTML & CSS", level: "Avanzado" },
];

const mobileSkills = [
  { name: "React Native", level: "Intermedio" },
  { name: "Expo", level: "Intermedio" },
  { name: "Flutter", level: "Básico" },
];

const designSkills = [
  { name: "Figma", level: "Intermedio" },
  { name: "Prototipado", level: "Intermedio" },
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Título y Subtítulo */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Habilidades
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            Mi nivel técnico
          </p>
        </div>

        {/* Contenedor de las tarjetas de habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Tarjeta 1: Front-end */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Desarrollo Front-end
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {frontendSkills.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          {/* Tarjeta 2: Móvil y Diseño */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Móvil y Diseño UI/UX
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {mobileSkills.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} level={skill.level} />
              ))}
              {designSkills.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;