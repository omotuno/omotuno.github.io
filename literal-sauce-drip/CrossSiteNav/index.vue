<template>
  <ul
    v-if="isHome"
    itemscope
    class="cross-site-nav"
    itemtype="http://schema.org/SiteNavigationElement"
  >
    <NavItem :href="workURL">My Work</NavItem>
    <NavItem :href="shelfURL" external>My Blog</NavItem>
    <NavItem :href="resumeURL" external>My Résumé</NavItem>
  </ul>

  <ul
    v-else
    itemscope
    class="cross-site-nav"
    itemtype="http://schema.org/SiteNavigationElement"
  >
    <NavItem :href="landingURL">Home</NavItem>
    <NavItem :href="workURL" v-if="isShelf">My Work</NavItem>
    <NavItem :href="shelfURL" external v-else>My Blog</NavItem>
    <NavItem :href="resumeURL" external>My Résumé</NavItem>
  </ul>
</template>
