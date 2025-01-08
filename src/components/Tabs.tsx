type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (tabIndex: number) => void;
  backgroundColor: string;
};

export function Tabs({
  tabs,
  activeTab,
  setActiveTab,
  backgroundColor,
}: TabsProps) {
  return (
    <div role="tablist" className="tabs gap-10 mt-10">
      {tabs.map((tab, index) => {
        const tabIndex = index + 1;
        const isActive = activeTab === tabIndex;
        return (
          <a
            key={tab.label}
            role="tab"
            className={`tab border-none rounded-full w-52 ${
              isActive ? "tab-active" : ""
            }`}
            style={{
              backgroundColor: isActive ? backgroundColor : "transparent",
              color: isActive ? "white" : backgroundColor,
            }}
            onClick={() => setActiveTab(tabIndex)}
          >
            {tab.label}
          </a>
        );
      })}
    </div>
  );
}
