import { newE2EPage } from '@stencil/core/testing';

describe('app-dokumentation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-dokumentation></app-dokumentation>');

    const element = await page.find('app-dokumentation');
    expect(element).toHaveClass('hydrated');
  });
});
