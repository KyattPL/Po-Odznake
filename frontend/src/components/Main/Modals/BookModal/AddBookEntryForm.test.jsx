import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import AddBookEntryForm from "./AddBookEntryForm";
import '@testing-library/jest-dom';
import React from "react";
import mockConsole from "jest-mock-console";

import fetchGetTrips from "../../../../utils/fetchGetTrips";
jest.mock("../../../../utils/fetchGetTrips");

describe('AddBookEntryForm.jsx', () => {

    test('render form', async () => {
        fetchGetTrips.mockResolvedValue([]);

        await act(async () => {
            const restoreConsole = mockConsole();

            render(<table>
                <tbody>
                    <tr>
                        <AddBookEntryForm />
                    </tr>
                </tbody>
            </table>);

            restoreConsole();
        });

    });

    test('fetchGetTrips returned error', async () => {
        fetchGetTrips.mockRejectedValueOnce("500");
        console.error = jest.fn();
        const consoleSpy = jest.spyOn(global.console, 'error');

        await act(async () => {
            render(<table>
                <tbody>
                    <tr>
                        <AddBookEntryForm />
                    </tr>
                </tbody>
            </table>);

            await waitFor(() => expect(consoleSpy).toHaveBeenCalledWith("500"));
        });
    });
});