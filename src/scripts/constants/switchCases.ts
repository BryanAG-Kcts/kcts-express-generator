import { generateCommon } from '../common'
import { generateModules } from '../modules'
import { generateTs } from '../typescript'
import { mod } from '../getArgs'

export const switchCases = {
  module: generateModules,
  common: generateCommon,
  ts: generateTs
}

export type SwitchCase = keyof typeof switchCases

export const generate = async (): Promise<void> => {
  if (mod in switchCases) {
    await switchCases[mod]()
    return
  }

  await switchCases.common()
}
