import { Meta, StoryFn } from "@storybook/react";
import Evolutions from "../components/Evolutions";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default {
  title: "Components/Evolutions",
  component: Evolutions,
} as Meta;

const Template: StoryFn<{ id: number; color: string }> = (args) => (
  <QueryClientProvider client={queryClient}>
    {" "}
    <Evolutions {...args} />
  </QueryClientProvider>
);

export const Default = Template.bind({});
Default.args = {
  id: 1,
  color: "#FF5733",
};
