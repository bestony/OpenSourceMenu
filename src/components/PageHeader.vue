<template>
  <div class="page-header">
    <nav class="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/"> <img src="@/assets/logo.png" width="112" height="28" /></router-link>
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
          <router-link class="navbar-item" to="/">Home</router-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <router-link class="navbar-link" to="/community">Community</router-link>

            <div class="navbar-dropdown">
              <a class="navbar-item">China Mainland</a>
              <a class="navbar-item">Taiwan</a>
              <a class="navbar-item">Hongkong</a>
              <hr class="navbar-divider" />
              <router-link class="navbar-item" to="/community">More...</router-link>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
             <router-link class="navbar-link" to="/company">Company</router-link>

            <div class="navbar-dropdown">
              <a class="navbar-item">China Mainland</a>
              <a class="navbar-item">Taiwan</a>
              <a class="navbar-item">Hongkong</a>
              <hr class="navbar-divider" />
              <router-link class="navbar-item" to="/company">More...</router-link>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <b-icon icon="github-circle" size="is-medium"></b-icon>
              <b-icon icon="twitter" size="is-medium"></b-icon>
              <b-icon icon="facebook" size="is-medium"></b-icon>
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
