#!/usr/bin/env/ node
import { log } from './shared/constants/cli/logger'
import { expressFlavorMapping, expressFlavors } from './shared/constants/cli/projectTypes'
import { expressFlavorPrompt, projectNamePrompt, welcomeText } from './shared/constants/local/main'
import { textListPrompt } from './shared/constants/prompts/listPrompts'
import { textPrompt } from './shared/constants/prompts/textPrompts'

void (async () => {
  log(welcomeText)
  const projectName = await textPrompt(projectNamePrompt, 'Kactuswow')

  const rawExpressFlavor = await textListPrompt(expressFlavorPrompt, expressFlavors[0], expressFlavors)
  console.log(projectName, rawExpressFlavor, expressFlavorMapping)
})()
