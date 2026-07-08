import Vue from 'vue'
import StyledCornerstone from './styles'

const Cornerstone = Vue.component('Cornerstone', {
  props: ['name'],
  render() {
    return (
      <StyledCornerstone name={this.name}>
        <div class="inner-content">
          <Cavalier heading="Data Infrastructure You Can Trust">
            <p slot="text">
              I build data systems that let leadership make confident
              decisions. Most reporting problems aren't statistical. They're
              infrastructure problems: broken pipelines, inconsistent
              definitions, warehouses nobody fully understands. I trace
              problems back to source and rebuild them so answers are right
              the first time. The outcome: reporting stops bottlenecking
              decisions, and you stop double-checking your own numbers. I've
              done this across healthcare, finance, and enterprise tech where
              constraints change constantly. What matters is constant: data
              that's reliable, traceable, and fast enough to actually get
              used.
            </p>
          </Cavalier>

          <Cavalier heading="AI Systems Built for Production">
            <p slot="text">
              LLMs are powerful but dangerous alone. Every AI system I build
              wraps the core model with three critical layers: tools that
              take action in the real world (Model Context Protocol),
              knowledge that grounds it in your actual data (RAG pipelines),
              and memory for coherent reasoning across interactions
              (conversation state and persistent storage). Without these
              layers, you get hallucinations, outdated answers, and systems
              that can't do anything useful.
            </p>

            <p slot="text">
              What separates production from demos is evaluation. I build it
              into every layer from day one: automated testing of LLM
              outputs for accuracy and safety, retrieval quality monitoring,
              tool execution validation, memory consistency checks. These
              catch failures before users do.
            </p>

            <p slot="text">
              I'm not loyal to frameworks. I choose RAG, fine-tuning, agents,
              or simpler solutions based on what your team can operate and
              afford. Every choice gets evaluated against real constraints:
              latency, cost, accuracy, maintainability.
            </p>

            <p slot="text">
              Success is boring: the system still works safely and correctly
              six months after I've moved on.
            </p>
          </Cavalier>

          <Cavalier heading="Where Data and AI Meet">
            <p slot="text">
              The best AI systems run on data infrastructure that actually
              works. I've seen teams build sophisticated models on pipelines
              they didn't understand, then spend months debugging why
              predictions degraded. I build data systems that support AI
              demands: versioning, lineage tracking, quality monitoring,
              reproducibility. And when I build AI systems, I start by
              understanding the data pipeline underneath. That foundation
              separates systems that work from systems that fail
              mysteriously in production.
            </p>
          </Cavalier>
        </div>
      </StyledCornerstone>
    )
  },
})

export default Cornerstone
