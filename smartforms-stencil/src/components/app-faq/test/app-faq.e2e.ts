import { newE2EPage } from '@stencil/core/testing';

describe('app-faq', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-faq></app-faq>');

    const element = await page.find('app-faq');
    expect(element).toHaveClass('hydrated');
  });
});
