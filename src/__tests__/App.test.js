/**
 * @jest-environment jsdom
 */

// Import required testing and React libraries.
import '@testing-library/jest-dom';
import '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';

// Import the main app component to be tested.
import App from '../App';

// Define the test suite.
describe('renders the app', () => {
  
  // Mock the fetch API used on the stats page and the about page.
  const jsonMock = jest.fn(() => Promise.resolve({}));
  const textMock = jest.fn(() => Promise.resolve(''));
  global.fetch = jest.fn(() => Promise.resolve({
    json: jsonMock,
    text: textMock,
  }));

  // Mock the scrollTo API used when navigating to a new page.
  window.scrollTo = jest.fn();

  // Define the container variable to be used for mounting the component.
  let container;

  // Before each test, create a new div container and render the App into it.
  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    await act(async () => {
      await ReactDOM.createRoot(container).render(<App />);
    });
  });

  // After each test, cleanup by removing the container from the body and clear all mocks.
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    jest.clearAllMocks();
  });

  // Test if the app is rendered.
  it('should render the app', async () => {
    expect(document.body).toBeInTheDocument();
  });

  // Test if the title is correctly set.
  it('should render the title', async () => {
    expect(document.title).toBe("Anthony Lieu");
  });

  // Test if navigation to /about works and check its effects.
  it('can navigate to /about', async () => {
    expect.assertions(7);
    const aboutLink = document.querySelector('#header > nav > ul > li:nth-child(1) > a');
    expect(aboutLink).toBeInTheDocument();
    await act(async () => {
      await aboutLink.click();
    });
    expect(document.title).toContain('About |');
    expect(window.location.pathname).toBe('/about');
    expect(window.scrollTo).toHaveBeenNthCalledWith(1, 0, 0);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(jsonMock).toHaveBeenCalledTimes(0);
    expect(textMock).toHaveBeenCalledTimes(1);
  });

  // The following test cases follow the same pattern as the /about test case,
  // testing navigation to /resume, /projects, /stats, and /contact respectively.

  it('can navigate to /resume', async () => {
    // .....
  });

  it('can navigate to /projects', async () => {
    // .....
  });

  it('can navigate to /stats', async () => {
    // .....
  });

  it('can navigate to /contact', async () => {
    // .....
  });
});
