import ReactDOM from "react-dom";
import React from "react";
import { FrontPage } from "../Quiz.jsx";
import { MemoryRouter } from "react-router-dom";

describe("quiz application", () => {
    it("shows that front page header is right", () => {
        const element = document.createElement("div");
        ReactDOM.render(
            <MemoryRouter>
                {" "}
                <FrontPage />
            </MemoryRouter>,
            element
        );
        // tester h1
        expect(element.querySelector("h1").innerHTML).toEqual("Quiz App");
        // tester snapshots av diven
        expect(element.innerHTML).toMatchSnapshot();
    });
});