import { Meta, StoryFn } from "@storybook/react";
import Evolutions from "../components/Evolutions";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

// Define the metadata for your component's story
export default {
  title: "Components/Evolutions",
  component: Evolutions,
} as Meta;

// Define a template for your story
const Template: StoryFn<{ id: number; color: string }> = (args) => (
  <QueryClientProvider client={queryClient}>
    {" "}
    {/* Wrap with QueryClientProvider */}
    <Evolutions {...args} />
  </QueryClientProvider>
);

// Define your default story with example data
export const Default = Template.bind({});
Default.args = {
  id: 1, // You can change this to any valid Pokémon ID for testing
  color: "#FF5733", // Example color, change as needed
};
