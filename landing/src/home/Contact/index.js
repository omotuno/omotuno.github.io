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
            heading="Send me a message!"
            text="Got a question or proposal, or just want <br /> to say hello? Go ahead."
          />

          <Button url={`mailto:${EMAIL}`}>
            Say Hello
          </Button>
        </div>
      </StyledContact>
    )
  },
})

export default Contact
