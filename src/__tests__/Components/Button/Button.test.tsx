import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '@/components/Button'; // Import your Button component

describe('Button Component', () => {
  it('renders the button with the provided name', () => {
    render(
      <Button
        name="Click Me"
        icon={<i className="fa fa-check" />}
        onClick={jest.fn()}
      />,
    );
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders the provided icon inside the button', () => {
    render(
      <Button
        name="Click Me"
        icon={<i className="fa fa-check" />}
        onClick={jest.fn()}
      />,
    );
    const iconElement = screen.getByTestId('button-icon');
    expect(iconElement).toBeInTheDocument();
  });

  it('calls the provided onClick function when the button is clicked', () => {
    const onClickMock = jest.fn();
    render(
      <Button
        name="Click Me"
        icon={<i className="fa fa-check" />}
        onClick={onClickMock}
      />,
    );
    const buttonElement = screen.getByText('Click Me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
