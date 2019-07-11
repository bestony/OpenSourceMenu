<template>
  <div class="page-header">
    <nav class="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="@/assets/logo.png" width="112" height="28" />
        </router-link>
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
              <router-link
                class="navbar-item"
                :to="community.path"
                v-bind:key="community.path"
                v-for="community in communityList"
              >{{community.name}}</router-link>

              <hr class="navbar-divider" />
              <router-link class="navbar-item" to="/community">More...</router-link>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <router-link class="navbar-link" to="/company">Company</router-link>

            <div class="navbar-dropdown">
              <router-link
                class="navbar-item"
                :to="company.path"
                v-bind:key="company.path"
                v-for="company in companyList"
              >{{company.name}}</router-link>
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
export default {
  data() {
    return {
      communityList: [
        {
          name: "China Mainland",
          path: "/community/cn"
        },
        {
          name: "Hong Kong",
          path: "/community/hk"
        },
        {
          name: "Taiwan",
          path: "/community/tw"
        }
      ],
      companyList: [
        {
          name: "China Mainland",
          path: "/company/cn"
        },
        {
          name: "Hong Kong",
          path: "/company/hk"
        },
        {
          name: "Taiwan",
          path: "/company/tw"
        }
      ]
    };
  }
};
</script>
