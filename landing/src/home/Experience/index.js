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
            heading={`Over the <br /> past ${new Date().getFullYear() -
              2018} years,`}
          >
            <p slot="text">
              I've built scalable data pipelines and cloud infrastructure that
              turn complex, multi-source data into reliable systems. My work
              spans ETL/ELT pipeline development, data warehouse architecture
              on Snowflake, and cloud platform engineering on AWS and GCP using
              Python, SQL, PySpark, and Apache Spark.
            </p>

            <p slot="text">
              As an AWS Community Builder, I share knowledge around cloud data
              engineering and contribute to tech-for-good initiatives through
              volunteer analytics work. I hold an M.S. in Applied Statistics
              (Business Analytics and Operations Research) from Bowling Green
              State University and am currently pursuing an MBA in Information
              Technology.
            </p>

            {this.hireable && (
              <p slot="text">
                I'm available for data engineering projects and roles.{' '}
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
