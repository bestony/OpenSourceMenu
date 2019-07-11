<template>
  <div class="page-header">
    <nav class="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="@/assets/logo.png" width="112" height="28" />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">Home</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Community</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">China Mainland</a>
              <a class="navbar-item">Taiwan</a>
              <a class="navbar-item">Hongkong</a>
              <hr class="navbar-divider" />
              <a class="navbar-item">More</a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Company</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">China Mainland</a>
              <a class="navbar-item">Taiwan</a>
              <a class="navbar-item">Hongkong</a>
              <hr class="navbar-divider" />
              <a class="navbar-item">More</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <b-button type="is-primary">Signup</b-button>
              <b-button type="is-light">Login</b-button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
