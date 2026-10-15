// Font Awesome icons imported as inline SVGs, so the full icon fonts aren't downloaded
import BreadSliceSvg from '@fortawesome/fontawesome-free/svgs/solid/bread-slice.svg?react'
import LocationDotSvg from '@fortawesome/fontawesome-free/svgs/solid/location-dot.svg?react'
import EnvelopeSvg from '@fortawesome/fontawesome-free/svgs/regular/envelope.svg?react'
import XmarkSvg from '@fortawesome/fontawesome-free/svgs/solid/xmark.svg?react'
import BarsSvg from '@fortawesome/fontawesome-free/svgs/solid/bars.svg?react'
import MobileButtonSvg from '@fortawesome/fontawesome-free/svgs/solid/mobile-button.svg?react'
import './icons.scss'

// size: undefined (1em), 'lg' (1.25em) or '2x' (2em) — mirrors fa-lg / fa-2x
const withIcon = (svgComponent) => {
  const Svg = svgComponent
  const Icon = ({ size, className = '' }) => (
    <Svg
      className={`icon${size ? ` icon--${size}` : ''} ${className}`.trim()}
      aria-hidden="true"
      focusable="false"
    />
  )
  return Icon
}

export const BreadSliceIcon = withIcon(BreadSliceSvg)
export const LocationDotIcon = withIcon(LocationDotSvg)
export const EnvelopeIcon = withIcon(EnvelopeSvg)
export const XmarkIcon = withIcon(XmarkSvg)
export const BarsIcon = withIcon(BarsSvg)
export const MobileButtonIcon = withIcon(MobileButtonSvg)
