import Vue from 'vue'
import { mapState } from 'vuex'
import StyledExperience from './styles'
import { OlaoluWorkIllo } from '@/assets'
import { CURRENT_SECTION } from '@/constants'

const Experience = Vue.component('Experience', {
  computed: mapState([CURRENT_SECTION]),

  render() {
    const isVisible = this.currentSection === 'trois'

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
              transform complex, multi-source data into reliable systems driving
              business outcomes. My work spans ETL/ELT pipeline development,
              data warehouse architecture, and cloud platform engineering.
            </p>

            <p slot="text">
              My core competencies include designing high-throughput data
              processing systems using Python, SQL, and modern cloud platforms
              (AWS, GCP), with expertise in Snowflake, PySpark, and Apache
              Spark. I specialize in migrating legacy data systems to modern
              cloud architectures and implementing automated data quality
              frameworks.
            </p>

            <p slot="text">
              As an AWS Community Builder, I'm passionate about sharing
              knowledge and best practices around cloud data engineering. Beyond
              professional work, I'm committed to using data and technology for
              social good through volunteer analytics projects.
            </p>

            <p slot="text">
              My academic journey includes an M.S. in Applied Statistics
              (Business Analytics &amp; Operations Research) from Bowling Green
              State University, and I'm currently pursuing an MBA focused on
              Information Technology. Earlier in my career, I worked in aviation
              data analysis and financial systems in Nigeria.
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

          <figure class="work-illo" aria-hidden={!isVisible}>
            <OlaoluWorkIllo />
            <figcaption class="visuallyhidden">
              Illustration of Olusegun and his data engineering work.
            </figcaption>
          </figure>
        </div>
      </StyledExperience>
    )
  },
  props: ['name'],
})

export default Experience
