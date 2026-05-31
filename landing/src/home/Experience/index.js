import Vue from 'vue'
import { mapState } from 'vuex'
import StyledExperience from './styles'
import { CURRENT_SECTION } from '@/constants'

const Experience = Vue.component('Experience', {
  computed: mapState([CURRENT_SECTION]),

  render() {
    return (
      <StyledExperience name={this.name}>
        <div class="inner-content">
          <Cavalier
            theme="lime"
            heading="Over the <br /> past 8 years,"
          >
            <p slot="text">
              I have built scalable data and analytics infrastructure, and
              increasingly, production AI systems that turn business problems
              into working solutions. I am tool-agnostic by principle. I evaluate
              technologies against your actual constraints, not trends. My work
              spans data engineering, analytics systems, ETL/ELT pipelines, data
              warehouse architecture, ML model deployment, and AI infrastructure
              across healthcare, finance, enterprise tech, and civic technology.
            </p>

            <p slot="text">
              AWS Community Builder sharing knowledge on cloud data engineering.
              I hold a B.Sc in Finance, an MBA in Information Technology, and an
              M.Sc in Applied Statistics specializing in Business Analytics and
              Operations Research. I am currently pursuing an M.Sc in
              Cybersecurity as AI system security becomes essential. I volunteer
              analytics and data engineering work that solves social problems and
              supports less privileged communities.
            </p>

            {this.hireable && (
              <p slot="text">
                I am available for data engineering and AI projects.{' '}
                <a
                  href={`mailto:omotundejunior@gmail.com?subject=${encodeURIComponent(
                    "Let's Work Together"
                  )}`}
                >
                  Get in touch.
                </a>
              </p>
            )}
          </Cavalier>
        </div>
      </StyledExperience>
    )
  },
  props: ['name'],
})

export default Experience
