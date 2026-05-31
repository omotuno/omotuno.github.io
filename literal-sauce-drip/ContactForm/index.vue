<template>
  <StyledContactForm class="contact-form">
    <form action="https://formspree.io/f/xgoqbdko" method="POST">
      <div class="form-row">
        <InputGroup
          required
          name="name"
          id="full-name"
          label="Your Name"
          placeholder="Enter your name"
        />

        <InputGroup
          required
          id="email"
          type="email"
          name="email"
          label="Email Address"
          placeholder="Enter your email address"
        />
      </div>

      <div class="form-row">
        <InputGroup
          textarea
          required
          id="message"
          name="message"
          label="Your Message"
          :inputAttrs="{ minlength: 30 }"
          placeholder="Hi Olusegun, I'd love to discuss a data engineering project..."
        />
      </div>

      <Button type="submit" id="submit-button">Send Message</Button>
    </form>
  </StyledContactForm>
</template>

<script>
import Button from '../Button'
import InputGroup from '../InputGroup'
import StyledContactForm from './styles'

export default {
  components: { StyledContactForm, InputGroup, Button },
}
</script>
