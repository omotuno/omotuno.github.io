<template>
  <StyledResume
    noBanners
    id="resume"
    title="Olusegun's Résumé"
    description="Résumé of Olusegun Omotunde, Data Engineer with 6+ years of experience building scalable data pipelines and cloud infrastructure"
  >
    <aside class="meta">
      <a
        class="no-marker"
        href="mailto:omotundejunior@gmail.com"
        aria-label="Send Olusegun a mail"
      >
        <MailIcon />
      </a>
    </aside>

    <article>
      <header id="profile-summary">
        <h1 id="name">Olusegun <br />Omotunde</h1>
        <h2>Data Engineer &amp; Cloud Infrastructure Specialist.</h2>
        <p>
          Résumé coming soon. In the meantime, reach out at
          <a href="mailto:omotundejunior@gmail.com">omotundejunior@gmail.com</a>
          or view my work on
          <a href="https://github.com/omotuno" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </header>

      <SauceDripLogo id="logo" />
    </article>
  </StyledResume>
</template>

<style lang="scss">
#resume {
  --base-font-size: 16px;

  @media (min-width: 1441px) {
    --base-font-size: 19.2px;
  }

  body {
    transition: none;
    background-color: #fff;
  }

  #main {
    a {
      color: var(--electric-blue);
      font-weight: bold;
    }
  }
}
</style>

<script>
import StyledResume from './styles'
import { MailIcon } from '@saucedrip/core/icons'

export default {
  name: 'Résumé',

  metaInfo: {
    title: `My Résumé`,
  },

  components: {
    MailIcon,
    StyledResume,
  },
}
</script>
