import Vue from 'vue'
import { AvatarShapes } from '@/assets'
import styled from 'vue-styled-components'

export default Vue.component('Visage', {
  render() {
    return (
      <StyledFigure class="visage">
        <AvatarShapes id="avatar-shapes" data-shape />
        <span class="handsome" aria-label="Photo of Olusegun." role="img" />
      </StyledFigure>
    )
  },
})

const StyledFigure = styled.figure`
  margin: 0;
  z-index: 1;
  width: 23.334em;
  height: 24.67em;
  position: relative;
  border: 0.115rem solid #fff;
  overflow: hidden;

  .handsome {
    width: 100%;
    display: block;
    height: 100%;
    margin: 0;
    background-color: #fff;
    background-size: cover;
    background-position: center top;
    background-image: url(/img/handsome.png);
  }

  #avatar-shapes {
    top: -25%;
    width: 40em;
    z-index: -1;
    height: 126%;
    right: -5.4em;
    position: absolute;
  }
`
StyledFigure.name = 'StyledFigure'
