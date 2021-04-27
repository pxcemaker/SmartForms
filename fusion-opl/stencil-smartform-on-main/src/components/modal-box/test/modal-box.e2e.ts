import { newE2EPage } from '@stencil/core/testing';

describe('modal-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<modal-box></modal-box>');

    const element = await page.find('modal-box');
    expect(element).toHaveClass('hydrated');
  });
});
