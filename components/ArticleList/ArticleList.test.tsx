import { render, screen } from "@testing-library/react";
import { ArticleList } from "./ArticleList";
describe("<ArticleList/>", () => {
  it("should render no articles correctly", () => {
    render(<ArticleList articles={[]} />);
    screen.findByText("Sorry there are no articles matching your query");
  });

  it("should display a list of articles", () => {
    const articles = [
      {
        filePath: "string",
        metadata: {
          title: "string",
        },
      },
    ];
    render(<ArticleList articles={articles} />);

    // get each article list item
    const articleList = screen.getByRole("list");
    expect(articleList).toBeInTheDocument();
  });
});
