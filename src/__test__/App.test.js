import renderer from "react-test-renderer";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../App";

const recipeDetails = {
  name: "Idly sambhar",
  author: "Jagriti",
  countryFlagurl: "https://flagcdn.com/in.svg",
  description: "tasty",
  image:
    "https://foodhistoria.com/wp-content/uploads/2020/09/Ghee-Sambar-Idli-5-e1600157946772.jpg",
  instructions: "make at home",
  id: 1,
  ingredients: [
    {
      quantity: "3 cup",
      ingredient: "Toor dal",
    },
    {
      quantity: "3 cup",
      ingredient: "Rawa",
    },
    {
      quantity: "1 cup",
      ingredient: "Water",
    },
    {
      quantity: "1.5 cup",
      ingredient: "Curd",
    },
  ],
};

const server = setupServer(
  rest.get("http://localhost:3001/recipes", (req, res, ctx) => {
    return res(ctx.json([recipeDetails]));
  }),
  rest.get("http://localhost:3001/recipes/1", (req, res, ctx) => {
    return res(ctx.json(recipeDetails));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("loads and recipes are browsable", async () => {
    // ARRANGE
    render(<App />);

    await userEvent.click(screen.getByText("Browse Recipes"));
    await waitFor(() => {
      expect(screen.getByText("Idly sambhar")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("See more")).toBeInTheDocument();
    });
  });
});
