<template>
  <div class="contact-cta">
    <a
      class="email-link"
      :href="`mailto:${email}`"
      aria-label="Send Olusegun an email"
    >{{ email }}</a>

    <button
      class="copy-btn"
      :class="{ copied }"
      @click="copyEmail"
      :aria-label="copied ? 'Copied!' : 'Copy email address'"
      type="button"
    >
      <span>{{ copied ? 'Copied!' : 'Copy' }}</span>
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: 'omotundejunior@gmail.com',
    copied: false,
  }),

  methods: {
    copyEmail() {
      navigator.clipboard.writeText(this.email).then(() => {
        this.copied = true
        setTimeout(() => { this.copied = false }, 2000)
      })
    },
  },
}
</script>

<style scoped>
.contact-cta {
  display: flex;
  align-items: center;
  gap: 1.5em;
  flex-wrap: wrap;
  margin-top: 2em;
}

.email-link {
  font-size: 1.4em;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: inherit;
  text-decoration: none;
  border-bottom: 2px solid currentColor;
  padding-bottom: 0.1em;
  transition: opacity 0.15s ease;
}

.email-link:hover {
  opacity: 0.65;
}

.copy-btn {
  background: none;
  border: 1.5px solid currentColor;
  border-radius: 2em;
  padding: 0.45em 1.1em;
  font-size: 0.85em;
  font-weight: 500;
  letter-spacing: 0.04em;
  cursor: pointer;
  color: inherit;
  transition: background 0.15s ease, color 0.15s ease;
}

.copy-btn:hover,
.copy-btn.copied {
  background: currentColor;
}

.copy-btn:hover span,
.copy-btn.copied span {
  color: #f9f9f9;
  mix-blend-mode: difference;
}
</style>
