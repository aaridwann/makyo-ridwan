import { render, fireEvent } from '@testing-library/react';

import InputComponent from './Input.component';

describe('Input Component', () => {
  it('should call onChange when typing', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(<InputComponent value="" onChange={onChangeMock} />);
    const input = getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Hello' } });

    expect(onChangeMock).toHaveBeenCalledWith('Hello');
  });

  it('should call onReset when reset icon clicked', () => {
    const onResetMock = jest.fn();
    const { getByTestId } = render(
      <InputComponent value="Hi" onChange={() => {}} onReset={onResetMock} />,
    );

    const resetIcon = getByTestId('reset-icon');

    if (resetIcon) {fireEvent.click(resetIcon);}

    expect(onResetMock).toHaveBeenCalled();
  });
});
