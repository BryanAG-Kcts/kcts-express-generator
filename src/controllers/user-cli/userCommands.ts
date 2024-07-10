import { expressFlavorMapping, expressFlavors } from '../../shared/constants/cli/projectTypes'
import { expressFlavorPrompt, leaveText, projectNamePrompt, welcomeText } from './constants'
import { textListPrompt } from '../../shared/constants/prompts/listPrompts'
import { textPrompt } from '../../shared/constants/prompts/textPrompts'
import { log, logGreen } from '../../shared/constants/cli/logger'

export const userCommandsController = {
  userWelcome () {
    log(welcomeText)
  },
  async projectName () {
    const projectName = await textPrompt(projectNamePrompt, 'Kactuswow')
    return projectName ?? 'Kactuswow'
  },
  async selectProjectFlavor () {
    const expressFlavor = await textListPrompt(expressFlavorPrompt, expressFlavors[0], expressFlavors)
    return expressFlavorMapping[expressFlavor]
  },
  instructions (projectName: string) {
    log(`
  All right. To run your express application:
  1. cd ${logGreen(projectName)}
  2. npm ${logGreen('install')} / pnpm ${logGreen('install')} / yarn ${logGreen('install')}
  3. npm run ${logGreen('dev')} / pnpm run ${logGreen('dev')} / yarn ${logGreen('dev')}
    `)
  },
  userLeave () {
    log(leaveText)
  }
}
