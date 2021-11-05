import React from "react";
import { render, screen } from '@testing-library/react'
import { Button } from "semantic-ui-react"


describe("Button Component", () => {
    test("should be able to render an button", () => {
        render(<Button >Buscar pelo CEP</Button>)

        expect(screen.getAllByText("Buscar pelo CEP")[0]).toBeInTheDocument()
    })

    test("if is disabled", () => {
        render(<Button disabled >Buscar pelo CEP</Button>)

        expect(screen.getAllByText("Buscar pelo CEP")[0]).toHaveAttribute("disabled")
        expect(screen.getAllByText("Buscar pelo CEP")[0]).toBeDisabled
    })
})