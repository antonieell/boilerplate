import { render, cleanup } from "@testing-library/react";
import CharactersList from "src/pages/index";

describe("Index Characters List", () => {
  afterEach(cleanup);
  it("should renders without crashing", async () => {
    const component = render(<CharactersList />);
    const text = await component.findByText("boilerplate");
    expect(text).toBeInTheDocument();
  });
});
