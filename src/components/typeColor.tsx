import { typeColors } from "../types/colors";
type TypeBadgeProps = {
  type: string | undefined;
};

const TypeBadge = ({ type }: TypeBadgeProps) => {
  const backgroundColor = typeColors[type ?? "normal"] || "#9CA3AF"; // Fallback to gray

  return (
    <span
      className="px-2 py-1 text-white w-44 h-16 flex items-center justify-center rounded-full"
      style={{ backgroundColor }}
    >
      {type}
    </span>
  );
};

export default TypeBadge;
