import Vue from 'vue'
import StyledCarriageway from './styles'

const Carriageway = Vue.component('Carriageway', {
  props: ['name'],
  render() {
    return (
      <StyledCarriageway name={this.name}>
        <div class="inner-content">
          <div class="lanes">
            <div class="lane">
              <Cavalier
                heading="I build"
                text="Data systems, analytics pipelines, <br /> and AI infrastructure <br /> that solve business problems."
              />

              <Button url={this.workURL}>See my work</Button>
            </div>

            <div class="lane">
              <Cavalier
                heading="I write"
                text="About data engineering, <br /> AI systems, cloud platforms, <br /> and responsible deployment."
              />

              <Button url={this.shelfURL}>Read my Blog</Button>
            </div>
          </div>
        </div>
      </StyledCarriageway>
    )
  },
})

export default Carriageway
