/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const layoutBandCss = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

export default function LayoutBand({ children }) {
  return (
    <div
      css={layoutBandCss}
    >
      {children}
    </div>
  )
}