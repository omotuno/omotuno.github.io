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
            heading="AI &amp; Systems Engineer"
          >
            <p slot="text">
              I solve problems across the full stack: data reliability, AI
              systems safety, and organizational security. I started in
              finance, which taught me that numbers matter less than what
              they mean for decisions. That lens carried through data
              engineering (building infrastructure people trust), into AI
              systems (shipping models safely to production), and now into
              cybersecurity and AI evaluation (understanding where systems
              fail and how to catch it before users do).
            </p>

            <p slot="text">
              Over 8 years, I've built data pipelines, analytics systems, and
              production AI across healthcare, finance, enterprise tech, and
              civic technology. The connective thread: discipline. The same
              rigor that makes a data warehouse trustworthy makes an AI
              system safe. The same thinking about security and evaluation
              that protects infrastructure protects AI deployments.
            </p>

            <p slot="text">
              I hold a B.Sc in Finance, MBA in Information Technology, and
              M.Sc in Applied Statistics focused on Business Analytics and
              Operations Research. I'm currently pursuing an M.Sc in
              Cybersecurity because production AI requires security thinking
              from day one, not bolted on after. I'm an AWS Community
              Builder connected to practitioners shipping real systems, and I
              volunteer analytics and engineering work to organizations
              serving under-resourced communities.
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
