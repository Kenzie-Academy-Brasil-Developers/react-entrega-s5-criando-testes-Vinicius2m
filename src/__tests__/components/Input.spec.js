import React from "react";
import { render, screen } from '@testing-library/react'
import { Input } from "semantic-ui-react"


describe("Input Component", () => {
    test("should be able to render an input", () => {
        render(<Input placeholder="Insira o CEP" />)

        expect(screen.getAllByPlaceholderText("Insira o CEP")).toBeTruthy()
    })

    test("Should be able to have type number", () => {
        render(<Input placeholder="Insira o CEP" type="number" />)

        expect(screen.getByPlaceholderText("Insira o CEP")).toHaveAttribute("type", "number")
    })
})
