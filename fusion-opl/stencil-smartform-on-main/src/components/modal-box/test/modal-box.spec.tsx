import { newSpecPage } from '@stencil/core/testing';
import { ModalBox } from '../modal-box';

describe('modal-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ModalBox],
      html: `<modal-box></modal-box>`,
    });
    expect(page.root).toEqualHtml(`
      <modal-box>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </modal-box>
    `);
  });
});
