import { render, screen } from "@testing-library/react";
import Post from ".";

describe("Testes para o Post", () => {
  test("Deve renderizar a imagem corretamente", () => {
    render(<Post children={undefined} imageUrl={""} />);

    expect(screen.getByTestId("imagemDoComentario")).toBeInTheDocument();
  });
});
