import React from "react";
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

import Search from "../../components/Search"
import { LocateCepProvider } from "../../providers/CepProvider";
import api from '../../services'
import MockAdapter from 'axios-mock-adapter'

const apiMock = new MockAdapter(api)

describe("Search Page", () => {
    it("should be able to search", async () => {
        const setCepNumber = jest.fn();
        apiMock.onGet("15045050").replyOnce(200, {})

        render(
            <LocateCepProvider value={{ setCepNumber }} >
                <Search />
            </LocateCepProvider>
        )

        const cepField = screen.getByPlaceholderText("Insira o CEP")

        const searchButton = screen.getByText("Buscar pelo CEP")


        fireEvent.change(cepField, { target: { value: 15045050 } })

        fireEvent.click(searchButton)



        await waitFor(() => {
            expect(cepField).toHaveValue(15045050)
        })
    })
})