<template>
  <StyledContactForm
    class="contact-form"
    @submit.native.prevent="handleSubmit"
  >
    <div v-if="succeeded" class="form-success" role="alert">
      Thanks for reaching out! I'll get back to you soon.
    </div>

    <template v-else>
      <div v-if="errorMessage" class="form-error" role="alert">
        {{ errorMessage }}
      </div>

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

      <Button type="submit" id="submit-button" :disabled="submitting">
        {{ submitting ? 'Sending…' : 'Send Message' }}
      </Button>
    </template>
  </StyledContactForm>
</template>

<script>
import Button from '../Button'
import InputGroup from '../InputGroup'
import StyledContactForm from './styles'

export default {
  components: { StyledContactForm, InputGroup, Button },

  data: () => ({
    submitting: false,
    succeeded: false,
    errorMessage: null,
  }),

  methods: {
    async handleSubmit(event) {
      this.submitting = true
      this.errorMessage = null

      try {
        const data = new FormData(event.target)
        const response = await fetch('https://formspree.io/f/xgoqbdko', {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        })

        if (response.ok) {
          this.succeeded = true
          event.target.reset()
        } else {
          const json = await response.json()
          this.errorMessage =
            json.errors?.map(e => e.message).join(', ') ||
            'Something went wrong. Please try again.'
        }
      } catch {
        this.errorMessage = 'Network error. Please check your connection and try again.'
      } finally {
        this.submitting = false
      }
    },
  },
}
</script>
