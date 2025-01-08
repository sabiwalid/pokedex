import { Meta, StoryFn } from "@storybook/react";
import Stats from "../components/stats";

export default {
  title: "Components/StatsComponent",
  component: Stats,
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: StoryFn<{ stats: any[]; color: string }> = (args) => (
  <Stats {...args} />
);

export const Default = Template.bind({});
Default.args = {
  stats: [
    { stat: { name: "speed" }, base_stat: 80, index: 1 },
    { stat: { name: "attack" }, base_stat: 50, index: 2 },
    { stat: { name: "defense" }, base_stat: 70, index: 3 },
  ],
  color: "#FF5733",
};
