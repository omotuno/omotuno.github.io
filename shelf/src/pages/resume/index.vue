<template>
  <StyledResume
    noBanners
    id="resume"
    :isPDF="isPDF"
    title="Olusegun's Résumé"
    :description="
      `Work experience of Olusegun Omotunde, Data Engineer with ${YOE}+ years of experience building scalable data pipelines and cloud infrastructure`
    "
  >
    <aside class="meta">
      <a
        class="no-marker"
        href="mailto:omotundejunior@gmail.com"
        aria-label="Send Olusegun a mail"
        @click="$ga.event('Resume', 'click', 'Mail Button')"
      >
        <MailIcon />
      </a>
      <span
        :hidden="isPDF"
        class="no-marker resume-coming-soon"
        aria-label="PDF resume coming soon."
        style="opacity: 0.5; cursor: not-allowed; display: inline-flex; align-items: center; gap: 0.4em;"
      >
        <DownloadIcon />
        Coming soon
      </span>
    </aside>

    <div id="resume-outlines">
      <section>
        <a href="https://github.com/omotuno" aria-label="GitHub profile">github.com/omotuno</a>
        <span>United States</span>
        <a
          href="mailto:omotundejunior@gmail.com"
          @click="$ga.event('Resume', 'click', 'Mail Link in Sidebar')"
        >
          omotundejunior@gmail.com
        </a>
      </section>

      <section>
        <h3>Core Technologies:</h3>
        <ul>
          <!-- prettier-ignore -->
          <li v-for="(tech, index) in data.technologies" :key="index">{{ tech }}</li>
        </ul>
      </section>

      <section>
        <h3>Others:</h3>
        <ul>
          <!-- prettier-ignore -->
          <li
            v-for="(proficiency, index) in data.otherProficiencies"
            :key="index"
          >{{ proficiency }}</li>
        </ul>
      </section>
    </div>

    <article>
      <header id="profile-summary">
        <h1 id="name">Olusegun <br />Omotunde</h1>
        <h2>Data Engineer &amp; Cloud Infrastructure Specialist.</h2>
        <p>
          6+ years building scalable data pipelines, ETL/ELT systems, and cloud
          infrastructure on AWS and GCP. M.S. Applied Statistics (Business
          Analytics), AWS Community Builder.
        </p>
      </header>

      <section id="experience">
        <h3 class="heading">Experience</h3>

        <p>
          Detailed work history available upon request. See my projects at
          <a href="/work">olusegun.dev/work</a>.
        </p>

        <ul id="companies">
          <li
            v-for="(company, index) in data.companies"
            :key="index"
            class="company"
          >
            <header>
              <!-- prettier-ignore -->
              <h4>{{ company.name }} <span>{{ company.role }}</span></h4>
              <span class="period">{{ company.period }}</span>
            </header>

            <p>{{ company.intro }}</p>

            <ul class="points">
              <li v-for="(point, index) in company.points" :key="index">
                {{ point }}
              </li>
            </ul>

            <p v-html="company.outro" class="outro" />
          </li>
        </ul>
      </section>

      <section id="projects">
        <h3 class="heading">Projects</h3>
        <p>
          Links to my work can be found at
          <a
            href="/work"
            @click="
              $ga.event('Resume', 'click', 'Work link', { transport: 'beacon' })
            "
          >
            /work
          </a>
          and details provided upon request.
        </p>
      </section>

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
    h3,
    h4,
    a:not(.no-marker) {
      font-weight: bold;
      display: inline-block;

      &:not(.color-off) {
        color: var(--electric-blue);
      }
    }

    .heading,
    a:not(.no-marker) {
      z-index: 1;
      position: relative;

      &:after {
        content: '';
        background: var(--lime);
        height: 0.4em;
        width: 109%;
        display: block;
        margin-top: -0.6rem;
        margin-left: -4%;
        position: absolute;
        z-index: -1;
      }
    }

    a:not(.no-marker) {
      &:after {
        transform: none;
        transition: transform 0.3s;
      }

      &:hover:after {
        transform: translateY(0.2em) scaleY(0.5);
      }
    }
  }
}
</style>

<script>
import data from './data'
import StyledResume from './styles'
import { createMeta } from '~/helpers'
import { MailIcon, DownloadIcon } from '@saucedrip/core/icons'

export default {
  name: 'Résumé',
  data: () => ({ data }),

  computed: {
    isPDF() {
      return this.$route.query.pdf === 'true'
    },

    YOE() {
      return new Date().getFullYear() - 2018
    },
  },

  metaInfo: {
    title: `My Résumé`,
  },

  components: {
    MailIcon,
    StyledResume,
    DownloadIcon,
  },
}
</script>
