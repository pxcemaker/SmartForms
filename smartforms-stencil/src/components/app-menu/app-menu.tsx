import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-menu',
  styleUrl: 'app-menu.css',
  shadow: true,
})
export class AppMenu {
  render() {
    return (
      <div>
        <header>
          <nav class="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
            <div class="container">
              <div class="navbar-brand">
                <stencil-route-link url="/">
                  <img src="assets/img//smartform-logo.png" alt=""></img>
                </stencil-route-link>
              </div>

              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="lni-menu"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto w-100 justify-content-end clearfix">
                  <li class="nav-item">
                    <div class="nav-link">
                      <stencil-route-link url="/how-to">HowTo</stencil-route-link>
                    </div>
                  </li>
                  <li class="nav-item">
                    <div class="nav-link">
                      <stencil-route-link url="/faq">FAQ</stencil-route-link>
                    </div>
                  </li>
                  <li class="nav-item">
                    <div class="nav-link">
                      <stencil-route-link url="/profile/stencil">LOGIN</stencil-route-link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <app-hero></app-hero>
        </header>
      </div>
    );
  }
}
