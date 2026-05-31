import Vue from 'vue'
import StyledPitchSlate from './styles'
import { Navigation } from '@/components'
import { LogomarkOutline } from '@/assets'
import { NAVIGATION_ID } from '@/constants'

const PitchSlate = Vue.component('PitchSlate', {
  props: ['name'],
  methods: {
    renderHighlights({ vocalize = false }) {
      return (
        <ul
          aria-hidden={!vocalize}
          aria-label={!vocalize ? null : 'Highlights.'}
          class={'highlights' + (vocalize ? ' visuallyhidden' : '')}
        >
          <li>
            6+ years building scalable data infrastructure and analytics systems on AWS and GCP.
          </li>
          <li>
            18+ months shipping production AI systems: RAG pipelines, fine-tuned models, ML deployment infrastructure.
          </li>
        </ul>
      )
    },
  },

  render() {
    return (
      <StyledPitchSlate name={this.name}>
        <div class="inner-content primary">
          {!this.isMediumScreen && (
            <LogomarkOutline id="sauce-drip-outline" data-shape />
          )}

          <Cavalier
            theme="lime"
            text="I solve business problems with AI. I start with the actual constraint and build backward to the right solution, not the fanciest technology."
          >
            <h1 slot="heading" aria-label="AI Engineer">
              <span aria-hidden="true">
                AI
                <br /> Engineer
                <span>.</span>
              </span>
            </h1>

            {this.renderHighlights({ vocalize: true })}
          </Cavalier>

          {!this.isPortrait && <Visage />}
        </div>

        <div class="inner-content bottom">
          {this.renderHighlights({ vocalize: false })}

          {!this.isMediumScreen && <Navigation id={NAVIGATION_ID} />}
        </div>

        {this.isPortrait && (
          <div class="mobile-avatar">
            <Visage />
          </div>
        )}
      </StyledPitchSlate>
    )
  },
})

export default PitchSlate
