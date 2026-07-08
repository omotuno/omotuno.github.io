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
              I build the data infrastructure that lets a business trust its
              own numbers. That means tracing reporting problems back to
              their source (broken pipelines, inconsistent definitions,
              warehouses nobody fully understands) and rebuilding them so the
              answer is right the first time. I've done that across
              healthcare, finance, and enterprise tech, where the constraint
              is never the same twice. What stays constant is the outcome:
              leadership makes decisions on numbers they don't have to
              double-check, and the reporting cycle stops being the
              bottleneck.
            </p>
          </Cavalier>

          <Cavalier heading="AI Systems and Production ML">
            <p slot="text">
              AI systems fail in production for boring reasons: nobody owns
              them once the demo ends, or they were built to impress rather
              than to hold up under real usage. I build for the boring part,
              retrieval systems that don't hallucinate, evaluation pipelines
              that catch regressions before users do, and guardrails that
              keep a model inside the boundaries it's actually allowed to
              operate in. I'm not loyal to any single framework. I choose
              RAG, fine-tuning, or something simpler, depending on what a
              team can actually operate, monitor, and afford to maintain.
              Success looks like the system still working, safely, after
              I've moved on to the next problem.
            </p>
          </Cavalier>
        </div>
      </StyledCornerstone>
    )
  },
})

export default Cornerstone
