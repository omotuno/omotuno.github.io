<template>
  <StyledWork
    id="work"
    title="Work - Olusegun Omotunde"
    description="Data engineering projects, AI applications, and full stack systems by Olusegun Omotunde"
  >
    <PageHeader
      title="work"
      desc="Projects coming soon."
    />

    <section class="work-container coming-soon-container">
      <div class="coming-soon">
        <p>
          I'm currently building out this section with AI and data engineering
          projects. Check back soon, or follow my work on
          <a href="https://github.com/omotuno" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </div>
    </section>
  </StyledWork>
</template>

<script>
import projectsData from './data'
import Layout from '~/layouts/Default'
import { hyphenateName } from '~/helpers'
import { default as styled, injectGlobal } from 'vue-styled-components'

injectGlobal`
  .is-tabbing .project__link:focus {
    outline: none;

    & + .project__logo {
      filter: contrast(0.8);
    }
  }
`

const StyledWork = styled(Layout)`
  main {
    max-width: 1280px;
  }

  .page-header__heading {
    margin-bottom: 0;
  }

  .coming-soon-container {
    margin-top: 3rem;
  }

  .coming-soon {
    padding: 3rem 2rem;
    border-radius: 0.5rem;
    background: rgba(0, 207, 180, 0.06);
    border: 1px solid rgba(0, 207, 180, 0.2);

    p {
      margin: 0;
      font-size: 1.1em;
      line-height: 1.8;
    }

    a {
      color: var(--electric-blue);
    }
  }

  #projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .project {
    flex-grow: 0;
    flex-shrink: 1;
    overflow: hidden;
    position: relative;
    margin-bottom: 1.2em;
    border-radius: 0.2rem;
    background-color: #fff;
    box-shadow: 0px 8px 6px -6px rgba(235, 234, 242, 0.58);
    transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    transition-property: transform, box-shadow;

    @media (max-width: 659px) {
      width: 100%;
    }

    @media (min-width: 660px) and (max-width: 939px) {
      flex-basis: calc((100% - 1em) / 2);
    }

    @media (min-width: 940px) {
      flex-basis: calc((100% - 2em) / 3);
    }

    &:hover {
      transform: translateY(-8px);
      box-shadow: 15px 8px 6px -6px rgba(235, 234, 242, 0.58);
    }

    &__logo {
      margin: 0;
      height: 10em;
      display: flex;
      align-items: center;
      transition: filter 0.3s;
      justify-content: center;
      background: rgba(245, 244, 252, 0.62);
    }

    &__info {
      padding: 2em;

      &__siteName {
        white-space: pre;
      }
    }

    h5 {
      margin: 0;
    }

    &__link {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 80%;
      overflow: hidden;
      text-indent: -9999px;
      z-index: 0;
      transition: none;
      -webkit-tap-highlight-color: transparent;
    }
  }
`

export default {
  components: { StyledWork },
  created() {
    this.showConsoleMarketingBanner()
  },

  computed: {
    projects() {
      return projectsData.map(project => ({
        ...project,
        summaryLinkLabel: project.internalPage
          ? null
          : project.name + ' live demo.',
        siteURL: !!project.siteName ? 'https://' + project.siteName : null,
        path: '/work/' + hyphenateName(project.name),
      }))
    },
  },

  metaInfo: {
    title: 'Work',
  },
}
</script>
