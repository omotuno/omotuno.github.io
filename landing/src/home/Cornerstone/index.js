import {
  SquareofDots,
  CornerstonePatternsLeft,
  CornerstonePatternsRight,
} from '@/assets'
import Vue from 'vue'
import StyledCornerstone from './styles'

const Cornerstone = Vue.component('Cornerstone', {
  props: ['name'],
  render() {
    return (
      <StyledCornerstone name={this.name}>
        <div class="inner-content">
          <Cavalier heading="Data Engineering">
            <p slot="text">
              I design and build high-throughput data processing systems using
              Python, SQL, PySpark, and Apache Spark. My expertise spans ETL/ELT
              pipeline development, data warehouse architecture on Snowflake, and
              migrating legacy systems to modern cloud platforms &mdash; with a
              focus on reliability and scale.
            </p>

            <SquareofDots
              data-shape
              slot="inContent"
              aria-hidden="true"
              class="square-of-dots"
            />

            <CornerstonePatternsRight
              data-shape
              aria-hidden="true"
              id="cs-pattern-right"
            />
          </Cavalier>

          <Cavalier heading="Cloud Infrastructure">
            <p slot="text">
              I specialize in AWS and GCP cloud platform engineering, building
              automated data quality frameworks and monitoring solutions that
              ensure data reliability at scale. As an AWS Community Builder, I
              bring best practices in cloud architecture to every system I
              design &mdash; resilient, observable, and production-grade.
            </p>

            <CornerstonePatternsLeft
              data-shape
              aria-hidden="true"
              id="cs-pattern-left"
            />
          </Cavalier>
        </div>
      </StyledCornerstone>
    )
  },
})

export default Cornerstone
