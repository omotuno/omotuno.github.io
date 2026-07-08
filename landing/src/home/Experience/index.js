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
              I have built the data and analytics infrastructure businesses
              actually run on: pipelines, warehouses, and reporting systems
              across healthcare, finance, enterprise tech, and civic
              technology. My path here started in finance, not software: a
              B.Sc in Finance and an MBA in Information Technology taught me
              to ask what a number actually means for the business before I
              ever wrote a line of production code. AI systems have been a
              natural extension of that same work, not a pivot. The
              discipline that makes a data pipeline trustworthy is the same
              discipline that makes an AI system safe to put in front of real
              users.
            </p>

            <p slot="text">
              I hold an M.Sc in Applied Statistics focused on Business
              Analytics and Operations Research. I'm also an AWS Community
              Builder, a program that keeps me connected to a network of
              practitioners I can trade ideas and real production lessons
              with, and gives me a channel to share my own work publicly. I'm
              currently pursuing an M.Sc in Cybersecurity, because as AI
              systems move from pilot to production, security and evaluation
              stop being optional. They're the difference between something
              that's actually safe to ship and something that just looks
              impressive in a demo. Outside client work, I volunteer
              analytics and data engineering time to organizations serving
              under-resourced communities.
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
