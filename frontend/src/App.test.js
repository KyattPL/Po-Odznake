import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

import fetchStatus from "./utils/fetchStatus";

jest.mock('./utils/fetchStatus');

describe('App.js', () => {

	test('render App', () => {
		console.error = jest.fn();
		fetchStatus.mockRejectedValueOnce("err");

		render(<App />);
	});

	test('fetchStatus returns None id', async () => {
		fetchStatus.mockResolvedValueOnce({ "user_id": "None" });

		render(<App />);
		await waitFor(() => expect(screen.getByTestId("loginButton")).toBeInTheDocument());
	});

	test('fetchStatus gives correct id', async () => {
		fetchStatus.mockResolvedValueOnce({ "user_id": 'harg' });
		const mockSetState = jest.fn();
		const useState = (state) => [state, mockSetState];
		jest.spyOn(React, 'useState').mockImplementationOnce(useState);

		render(<App />);
		await waitFor(() => expect(mockSetState).toHaveBeenCalledWith(true));
	});
});