import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Description from "../components/Description";

// Create a query client instance for the test
const queryClient = new QueryClient();

const MockDescription = ({ idOrName }: { idOrName: string }) => (
  <QueryClientProvider client={queryClient}>
    <Description idOrName={idOrName} />
  </QueryClientProvider>
);

describe("Description Component", () => {
  it('should render "No Description Found!" if the data is not available', async () => {
    render(<MockDescription idOrName="nonexistent" />);

    // Wait for the component to finish loading and render the fallback message
    await waitFor(() => screen.getByText("No Description Found!"));

    expect(screen.getByText("No Description Found!")).toBeInTheDocument();
  });

  it("should render a description when data is fetched", async () => {
    render(<MockDescription idOrName="bulbasaur" />);

    // Ensure the description text appears after fetching data
    await waitFor(() => screen.getByText(/bulbasaur/i));

    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
  });
});
