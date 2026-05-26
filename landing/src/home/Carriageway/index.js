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
                heading="I build <br/> data systems"
                text="AI projects, <br/> data pipelines <br/> and cloud apps."
              />

              <Button url={this.workURL}>See my work</Button>
            </div>

            <div class="lane">
              <Cavalier
                heading="I write, <br/> sometimes"
                text="About data engineering, <br/> cloud platforms, <br/> and tech for good."
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
