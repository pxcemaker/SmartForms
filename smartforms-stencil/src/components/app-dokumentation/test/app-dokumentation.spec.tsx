import { newSpecPage } from '@stencil/core/testing';
import { AppDokumentation } from '../app-dokumentation';

describe('app-dokumentation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppDokumentation],
      html: `<app-dokumentation></app-dokumentation>`,
    });
    expect(page.root).toEqualHtml(`
      <app-dokumentation>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-dokumentation>
    `);
  });
});
