import { media } from '@/helpers'
import { Section } from '@/components'
import styled from 'vue-styled-components'

const StyledCornerstone = styled(Section)`
  .inner-content {
    flex-direction: column;

    .cavalier {
      display: flex;

      &:not(:last-of-type) {
        margin-bottom: 6vh;

        ${media.minWidth('>medium')`
          margin-bottom: 8vh;
        `}
      }
    }
  }
`

export default {
  ...StyledCornerstone,
  name: 'StyledCornerstone',
}
