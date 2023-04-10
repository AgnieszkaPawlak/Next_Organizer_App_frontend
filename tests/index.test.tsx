import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '@/components/button';

describe('Button component', () => {
  test('renders children', () => {
    const { getByText } = render(<Button>Hello World</Button>);
    const button = getByText('Hello World');
    expect(button).toBeInTheDocument();
  });
});
