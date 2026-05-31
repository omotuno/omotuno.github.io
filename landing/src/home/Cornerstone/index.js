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
          <Cavalier heading="Data Engineering and Analytics">
            <p slot="text">
              I design and build data pipelines and analytics systems that power
              business decisions. My expertise spans ETL/ELT architecture, data
              warehouse design on Snowflake, and analytics engineering using
              Python, SQL, and PySpark. I combine data engineering fundamentals
              with analytics rigor to create systems that are both reliable and
              business-focused.
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

          <Cavalier heading="AI Systems and Production ML">
            <p slot="text">
              I design and build AI systems that work in production. My expertise
              spans RAG architecture, transformer model fine-tuning, ML
              infrastructure deployment, and choosing the right tool for the
              actual problem. I work with Python, SQL, LangChain, vector
              databases, and cloud platforms. Every system is built to be
              reliable, observable, and operationally feasible.
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
