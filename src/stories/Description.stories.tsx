import { Meta, StoryFn } from "@storybook/react";
import Description from "../components/Description"; // Adjust the path as needed
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default {
  title: "Components/Description",
  component: Description,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} as Meta;

// Template for the Description component
const Template: StoryFn<{ idOrName: string | undefined }> = (args) => (
  <Description {...args} />
);

export const Default = Template.bind({});
Default.args = {
  idOrName: "pikachu", // You can change this to any Pokémon ID or name
};

export const NoDescription = Template.bind({});
NoDescription.args = {
  idOrName: "nonexistent", // Use an invalid or nonexistent Pokémon name/ID
};
