import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

export default function renderWithRouter(children) {
	function Wrapper({ children }) {
		return <BrowserRouter>{children}</BrowserRouter>;
	}
	return render(<Wrapper>{children}</Wrapper>);
}
