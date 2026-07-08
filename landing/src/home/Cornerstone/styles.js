import { media } from '@/helpers'
import { Section } from '@/components'
import styled from 'vue-styled-components'

const StyledCornerstone = styled(Section)`
  .inner-content {
    flex-direction: column;

    ${media.minWidth('>medium')`
      align-items: center;
    `}

    .cavalier {
      display: flex;
      width: 100%;

      ${media.minWidth('>medium')`
        max-width: 44em;
      `}

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
