/* eslint-disable @typescript-eslint/no-explicit-any */
import ProgressBar from "@ramonak/react-progress-bar";

const StatsComponent = ({ stats, color }: any) => {
  console.log({ stats });
  return (
    <div className="space-y-4 p-4">
      {stats?.map(
        ({ stat, index, base_stat }: any) => (
          console.log({ stat }),
          (
            <div
              key={index}
              className="flex items-center justify-between gap-4"
            >
              <span className="capitalize" style={{ color }}>
                {stat?.name}
              </span>
              <span>{base_stat}</span>
              <ProgressBar
                completed={base_stat}
                customLabel=" "
                maxCompleted={100}
                bgColor={color}
                height="10px"
                className="w-3/4"
              />
            </div>
          )
        )
      )}
    </div>
  );
};

export default StatsComponent;
