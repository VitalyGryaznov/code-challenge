import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import MovieButton from './MovieButton';
import flushPromises from 'flush-promises';

describe('MovieButton', () => {
  afterEach(cleanup);

  it('renders', () => {
    const wrapper = render(<MovieButton label="label" />);
    expect(wrapper.container).toMatchSnapshot();
  });

  it('does handle click', () => {
    const mock = vi.fn();
    expect(mock).not.toHaveBeenCalledOnce();
    render(<MovieButton onClick={mock} label="label" />);
    fireEvent.click(screen.getByText('label'));
    expect(mock).toHaveBeenCalledOnce();
  });

  it('does not handle click several times', async () => {
    const mock = vi.fn();
    expect(mock).not.toHaveBeenCalledOnce();
    render(<MovieButton onClick={mock} label="label" />);
    fireEvent.click(screen.getByText('label'));
    await flushPromises();
    fireEvent.click(screen.getByText('label'));
    fireEvent.click(screen.getByText('label'));
    await flushPromises();
    expect(mock).toHaveBeenCalledOnce();
  });
});
