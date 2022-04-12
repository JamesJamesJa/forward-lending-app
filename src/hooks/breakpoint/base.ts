import { Breakpoints, MediaQueries } from './type'

export const breakpointMap: { [key: string]: number } = {
	xs: 320,
	sm: 576,
	md: 852,
	lg: 968,
	xl: 1080,
	xxl: 1200,
}

const breakpoints: Breakpoints = Object.values(breakpointMap).map(breakpoint => `${breakpoint}px`)

const mediaQueries: MediaQueries = {
	xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
	sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
	md: `@media screen and (min-width: ${breakpointMap.md}px)`,
	lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
	xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
	xxl: `@media screen and (min-width: ${breakpointMap.xxl}px)`,
	nav: `@media screen and (min-width: ${breakpointMap.lg}px)`,
}

const base = {
	breakpoints,
	mediaQueries,
}

export default base
