import { newSpecPage } from '@stencil/core/testing';
import { AppFaq } from '../app-faq';

describe('app-faq', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppFaq],
      html: `<app-faq></app-faq>`,
    });
    expect(page.root).toEqualHtml(`
      <app-faq>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-faq>
    `);
  });
});
