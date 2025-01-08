import { render, screen } from "@testing-library/react";
import StatsComponent from "../components/stats";
import "@testing-library/jest-dom";

// Mock the ProgressBar component
jest.mock("@ramonak/react-progress-bar", () => {
  return jest.fn(() => <div data-testid="progress-bar" />);
});

describe("StatsComponent", () => {
  const stats = [
    {
      stat: { name: "speed" },
      index: 1,
      base_stat: 50,
    },
    {
      stat: { name: "attack" },
      index: 2,
      base_stat: 80,
    },
  ];

  const color = "blue";

  it("renders the stats component correctly", () => {
    render(<StatsComponent stats={stats} color={color} />);

    // Check if the stat names are rendered
    expect(screen.getByText("speed")).toBeInTheDocument();
    expect(screen.getByText("attack")).toBeInTheDocument();

    // Check if the base stat values are rendered
    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("80")).toBeInTheDocument();

    // Check if the progress bars are rendered
    expect(screen.getAllByTestId("progress-bar").length).toBe(stats.length);
  });
});
