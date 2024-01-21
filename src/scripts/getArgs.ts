import argv from 'minimist'
import { SwitchCase } from './constants/switchCases'

export const unknowArgs: string[] = []
export const processArguments = argv(
  process.argv.slice(2),
  {
    unknown: function (arg: string) {
      if (arg.startsWith('-')) {
        unknowArgs.push(arg)
      }

      return true
    }
  }

)

const { _ } = processArguments
export const [dirName] = _
const [typeProject] = unknowArgs
export const mod = typeProject !== undefined ? typeProject.replace('--', '') as SwitchCase : 'common'
