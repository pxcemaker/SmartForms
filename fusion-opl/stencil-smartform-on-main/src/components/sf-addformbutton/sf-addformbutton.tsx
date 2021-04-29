import { Component, h } from '@stencil/core';

@Component({
  tag: 'sf-addformbutton',
  styleUrl: 'sf-addformbutton.css',
  shadow: true,
})
export class SfAddformbutton {
  render() {
    return (
      <div class="survey-grid-container">
        <div class="survey-grid-item">
          <a href="umfrage.php">
            <div class="surveyplate empty-plate">
              <p class="empty-plus">+</p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
