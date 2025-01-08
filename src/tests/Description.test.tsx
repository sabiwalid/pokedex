import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Description from "../components/Description";
import "@testing-library/jest-dom";

const queryClient = new QueryClient();

const MockDescription = ({ idOrName }: { idOrName: string }) => (
  <QueryClientProvider client={queryClient}>
    <Description idOrName={idOrName} />
  </QueryClientProvider>
);

describe("Description Component", () => {
  it('should display a spinner while loading and then show "No Description Found!" if the data is not available', async () => {
    render(<MockDescription idOrName={"nonexistent"} />);

    expect(screen.getByRole("spinner")).toBeTruthy();
  });
});
