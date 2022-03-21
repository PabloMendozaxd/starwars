import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import data from "./data.json";

describe('starwars app', () => {

  beforeAll(() => jest.spyOn(window, "fetch"));

  it("should show a list of characters from the API", async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => data,
    });

    render(<App />);
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(
      "http://swapi.dev/api/people/"
    );
    
    for (let character of data.results) {
      expect(await screen.findByText(character.name)).toBeInTheDocument();
    }
  });

  it('Should show an error message when has a network error', async ()=>{
    window.fetch.mockRejectedValueOnce(new Error('Network Error'));
    render(<App />);
    expect(await screen.findByText("Network Error")).toBeInTheDocument();
  })

});
