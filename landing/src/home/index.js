import Vue from 'vue'
import {
  SECTIONS,
  SECTION_MAP,
  CURRENT_SECTION,
} from '@/constants'
import { getEventPath } from '@mrolaolu/helpers'
import './home-styles'
import { mapState } from 'vuex'
import Contact from './Contact'
import PitchSlate from './PitchSlate'
import Experience from './Experience'
import Cornerstone from './Cornerstone'
import Carriageway from './Carriageway'
import { goToSection as GoToSection, getSections } from '@/helpers'

const Homepage = Vue.component('Homepage', {
  data: () => ({
    revealedSections: [],
  }),
  computed: {
    ...mapState([CURRENT_SECTION]),
    firstSection: { get: () => SECTIONS[0] },
    lastSection: { get: () => SECTIONS[SECTIONS.length - 1] },
    announcement() {
      const sectionName = SECTION_MAP[this.currentSection]
      return `You are now in the "${sectionName}" section.`
    },
  },

  created() {
    this.showConsoleMarketingBanner()
  },

  mounted() {
    // Set current section to the first section by default.
    this.$root.$el.dataset[CURRENT_SECTION] = this.currentSection
    this.revealedSections = [this.currentSection]

    // Fades a section in as soon as it starts entering the viewport, then
    // leaves it visible - normal long-scroll behavior, not a pinned jump.
    // threshold: 0 (not a % of the section's own area) so tall sections
    // reveal immediately instead of staying invisible until deep-scrolled.
    this.revealObserver = new IntersectionObserver(this.handleSectionReveal, {
      threshold: 0,
      rootMargin: '0px 0px -10% 0px',
    })

    // Tracks whichever section is crossing the vertical center of the
    // viewport, to drive the sticky nav's active dot and the header style.
    this.trackObserver = new IntersectionObserver(this.handleSectionTrack, {
      rootMargin: '-45% 0px -45% 0px',
    })

    getSections().forEach(section => {
      this.revealObserver.observe(section)
      this.trackObserver.observe(section)
    })

    document.addEventListener('keydown', this.maybeJumpToEdge)
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.maybeJumpToEdge)
    this.revealObserver && this.revealObserver.disconnect()
    this.trackObserver && this.trackObserver.disconnect()
  },

  methods: {
    /**
     * Determine if the specified section has not yet scrolled into
     * view. Once revealed, a section stays revealed.
     * @param {string} id - the id of the section to check
     * @return {'true' | 'false'}
     */
    isSectionHidden(id) {
      return String(!this.revealedSections.includes(id))
    },

    handleSectionReveal(entries) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return

        const id = entry.target.dataset.section
        if (!this.revealedSections.includes(id)) {
          this.revealedSections = [...this.revealedSections, id]
        }
        this.revealObserver.unobserve(entry.target)
      })
    },

    handleSectionTrack(entries) {
      const visible = entries.find(entry => entry.isIntersecting)
      if (!visible) return

      const id = visible.target.dataset.section
      this.$store.commit(CURRENT_SECTION, id)
      this.$root.$el.dataset[CURRENT_SECTION] = id
      this.$store.commit('headerCompact', id !== this.firstSection)
    },

    /**
     * Configurable fn to scroll to a section - accepts a node
     * Default opts: `{ smooth: true, focus: true }`.
     * Toggle the values to disable/enable smooth scrolling
     * and focusing the section on arrival respectively.
     * @return {void}
     */
    goToSection(...args) {
      if (this.isMediumScreen) return // don't call rAF on medium screens
      return GoToSection(this.$store, ...args)
    },

    /**
     * Go to the section after the current one.
     * @return {void}
     */
    goToNextSection() {
      this.goToSection({ modifier: 'next', node: this.getSection() })
    },

    /**
     * Go to the section before the current one.
     * @return {void}
     */
    goToPrevSection() {
      this.goToSection({ modifier: 'previous', node: this.getSection() })
    },

    /**
     * Jump to the absolute first section on the page.
     * @return {void}
     */
    goToFirstSection() {
      this.goToSection({ node: this.getSection(this.firstSection) })
    },

    /**
     * Jump to the absolute last section on the page.
     * @return {void}
     */
    goToLastSection() {
      this.goToSection({ node: this.getSection(this.lastSection) })
    },

    /**
     * Home/End still jump to the first/last section; all other
     * scrolling (wheel, arrows, touch) is now native browser scroll.
     * @param {KeyboardEvent} event
     * @return {void}
     */
    maybeJumpToEdge(event) {
      if (this.isMediumScreen || !event) return

      const isFormFocused = getEventPath(event)
        .filter(el => el instanceof HTMLElement)
        .some(el => el.tagName === 'FORM')

      if (isFormFocused) return

      if (event.key === 'Home') {
        event.preventDefault()
        this.goToFirstSection()
      } else if (event.key === 'End') {
        event.preventDefault()
        this.goToLastSection()
      }
    },
  },

  render() {
    const { isSectionHidden, announcement } = this
    const [une, deux, trois, quatre, cinq] = SECTIONS

    return (
      <ContentView id="homepage" announcement={announcement} readAnnouncement>
        <PitchSlate name={une} aria-hidden={isSectionHidden(une)} />
        <Cornerstone name={deux} aria-hidden={isSectionHidden(deux)} />
        <Experience name={trois} aria-hidden={isSectionHidden(trois)} />
        <Carriageway name={quatre} aria-hidden={isSectionHidden(quatre)} />
        <Contact name={cinq} aria-hidden={isSectionHidden(cinq)} />
      </ContentView>
    )
  },
})

export default Homepage
