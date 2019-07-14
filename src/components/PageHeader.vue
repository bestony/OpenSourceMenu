<template>
  <div class="page-header">
    <nav class="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="@/assets/logo.png"height="40" />
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
          <div class="navbar-item has-dropdown is-hoverable">
            <router-link class="navbar-link" to="/about">About</router-link>

            <div class="navbar-dropdown">
              <router-link
                class="navbar-item"
                :to="about.path"
                v-bind:key="about.path"
                v-for="about in aboutList"
              >{{about.name}}</router-link>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <b-button type="is-text" @click="viewGithub">
                <b-icon icon="github-circle" size="is-medium"></b-icon>
              </b-button>
              <b-button type="is-text" @click="shareTwitter">
                <b-icon icon="twitter" size="is-medium"></b-icon>
              </b-button>
              <b-button type="is-text" @click="shareFacebook">
                <b-icon icon="facebook" size="is-medium"></b-icon>
              </b-button>
            </div>
          </div>
          <div class="navbar-item">
            <b-dropdown aria-role="list" position="is-bottom-left">
              <button class="button is-primary" slot="trigger">
                <span>{{lang}}</span>
                <b-icon icon="menu-down"></b-icon>
              </button>
              <b-dropdown-item
                @click="changeLang(lang.name)"
                data-id="lang.name"
                v-for="lang in langList"
                v-bind:key="lang.name"
                aria-role="listitem"
              >{{lang.flag}} {{lang.displayName}}</b-dropdown-item>
            </b-dropdown>
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
          name: "🇨🇳 China Mainland",
          path: "/community/cn"
        },
        {
          name: "🇭🇰 Hong Kong",
          path: "/community/hk"
        },
        {
          name: "Taiwan",
          path: "/community/tw"
        }
      ],
      companyList: [
        {
          name: "🇨🇳 China Mainland",
          path: "/company/cn"
        },
        {
          name: "🇭🇰 Hong Kong",
          path: "/company/hk"
        },
        {
          name: "Taiwan",
          path: "/company/tw"
        }
      ],
      aboutList: [
        {
          name: "❤️ About",
          path: "/about"
        },
        {
          name: "🧡 Author",
          path: "/author"
        },
        {
          name: "💛 Build With",
          path: "/build_with"
        },
        {
          name: "💚 Other Project",
          path: "/other"
        }
      ],
      langList: [
        {
          displayName: "English",
          name: "en-US",
          flag: "🇺🇸"
        },
        {
          displayName: "简体中文",
          name: "zh-CN",
          flag: "🇨🇳"
        },
        {
          displayName: "繁体中文",
          name: "zh-TW",
          flag: "🇹🇼"
        }
      ]
    };
  },
  computed: {
    lang() {
      return this.$store.state.lang;
    }
  },
  methods: {
    changeLang(e) {
      this.$store.commit("changeLang", e);
    },
    viewGithub() {
      window.open("https://github.com/bestony/OpensourceLists");
    },
    shareTwitter() {
      let url = "https://opensourcelists.com/";
      let text = encodeURIComponent(
        `Use #OpensourceLists Find my local Open Source Community, by @xiqingongzi ${url}`
      );
      window.open(`https://twitter.com/intent/tweet?text=${text}`);
    },
    shareFacebook() {
      let url = "https://opensourcelists.com/";
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)
    }
  }
};
</script>
