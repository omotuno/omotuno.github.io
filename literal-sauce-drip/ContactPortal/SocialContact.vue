<template>
  <StyledSocialContact class="social-contact">
    <NavItem external :href="_.github" ariaLabel="Olusegun on GitHub">
      GH
    </NavItem>
    <NavItem external :href="_.medium" ariaLabel="Olusegun on Medium">
      MD
    </NavItem>
    <NavItem external :href="_.awsBuilder" ariaLabel="Olusegun on AWS Builder Center">
      AWS
    </NavItem>
  </StyledSocialContact>
</template>

<script>
import NavItem from '../NavItem'
import styled from 'vue-styled-components'

const StyledSocialContact = styled.ul`
  position: relative;

  li {
    display: inline-block;

    &:not(:last-of-type) {
      margin-right: 2.5em;
    }
  }

  a {
    color: currentColor;
  }
`

export default {
  computed: {
    _() {
      return this.socialProfiles
    },
  },

  components: {
    NavItem,
    StyledSocialContact,
  },
}

StyledSocialContact.name = 'StyledSocialContact'
</script>
