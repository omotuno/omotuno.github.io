import Vue from 'vue'
import StyledContact from './styles'

const EMAIL = 'omotundejunior@gmail.com'

const Contact = Vue.component('Contact', {
  props: ['name'],
  render() {
    return (
      <StyledContact name={this.name}>
        <div class="inner-content">
          <Cavalier
            heading="Let's work together."
            text="Got a question or proposal, or just want to say hello?"
          />

          <a
            class="email-cta"
            href={`mailto:${EMAIL}`}
          >
            {EMAIL}
          </a>
        </div>
      </StyledContact>
    )
  },
})

export default Contact
