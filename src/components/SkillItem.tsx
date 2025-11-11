import { CheckCircle2 } from 'lucide-react';

type SkillItemProps = {
  name: string;
  level: string;
};

const SkillItem = ({ name, level }: SkillItemProps) => {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 size={20} className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{level}</p>
      </div>
    </div>
  );
};

export default SkillItem;