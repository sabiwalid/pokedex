import { Meta, StoryFn } from "@storybook/react";
import Stats from "../components/stats";

// Define the metadata for your component's story
export default {
  title: "Components/StatsComponent",
  component: Stats,
} as Meta;

// Define a template for your story
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: StoryFn<{ stats: any[]; color: string }> = (args) => (
  <Stats {...args} />
);

// Define your default story with example data
export const Default = Template.bind({});
Default.args = {
  stats: [
    { stat: { name: "speed" }, base_stat: 80, index: 1 },
    { stat: { name: "attack" }, base_stat: 50, index: 2 },
    { stat: { name: "defense" }, base_stat: 70, index: 3 },
  ],
  color: "#FF5733", // Example color, change as needed
};
