import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react"; // Import useState hook
import { Tabs } from "../components/Tabs"; // Import your Tabs component

export default {
  title: "Components/Tabs", // Story title
  component: Tabs, // Component to display
} as Meta;

// Template for rendering the Tabs component
const Template: StoryFn<{
  tabs: { label: string; content: React.ReactNode }[];
  backgroundColor: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}> = (args: any) => {
  const [activeTab, setActiveTab] = useState(1); // Manage active tab state

  return <Tabs {...args} activeTab={activeTab} setActiveTab={setActiveTab} />;
};

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: "Tab 1", content: "Content for Tab 1" },
    { label: "Tab 2", content: "Content for Tab 2" },
    { label: "Tab 3", content: "Content for Tab 3" },
  ],
  backgroundColor: "#3498db", // Example background color
};
