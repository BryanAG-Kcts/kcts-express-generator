import { logBlue, logYellow } from './logger'

const javaScriptModules = logYellow('JavaScript (modules)')
const javascriptCommonJS = logYellow('Javascript (commonJS)')
const typeScript = logBlue('TypeScript')

export const expressFlavorMapping = {
  [javaScriptModules]: 'mjs',
  [javascriptCommonJS]: 'cjs',
  [typeScript]: 'ts'
} as const

export const expressFlavors = [
  javaScriptModules,
  javascriptCommonJS,
  typeScript
]

export type ExpressFlavor = typeof expressFlavorMapping[keyof typeof expressFlavorMapping]
