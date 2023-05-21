import { render } from "@testing-library/react";

// Import Header component
import Footer from "../components/Footer";

// This simple unit test tests that the footer is rendered successfully on the page
test("renders blog header", () => {
  render(Footer());
  //const h1 = screen.getByText("Dragonflier Blog");
  expect(document.querySelector("p").textContent).toBe(
    "bloop bleep"
  );
});
