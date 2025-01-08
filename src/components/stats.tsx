/* eslint-disable @typescript-eslint/no-explicit-any */
import ProgressBar from "@ramonak/react-progress-bar";

const StatsComponent = ({ stats, color }: any) => {
  console.log({ stats });
  return (
    <div className="space-y-4 p-4">
      {stats?.map(({ stat, index, base_stat }: any) => (
        <div key={index} className="grid grid-cols-3 items-center gap-4">
          {/* Stat Name */}
          <span className="capitalize text-start" style={{ color }}>
            {stat?.name}
          </span>

          {/* Base Stat Value */}
          <span className="text-center">{base_stat}</span>

          {/* Progress Bar */}
          <div className="w-full">
            <ProgressBar
              completed={base_stat}
              customLabel=" "
              maxCompleted={100}
              bgColor={color}
              height="10px"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsComponent;
