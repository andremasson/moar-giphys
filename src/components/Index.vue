<template>
  <div class="index">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand herf="#">Moar GIPHY</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item href="#">Trending</b-nav-item>
            <b-nav-item href="#">Reactions</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    <b-container>
      <b-jumbotron>
        <transition>
          <keep-alive>
            <router-view/>
          </keep-alive>
        </transition>
      </b-jumbotron>
    </b-container>
    <router-view name="footer"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Componente Index'
    }
  }
}
</script>
