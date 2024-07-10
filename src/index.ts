#!/usr/bin/env/ node
import { generateProjectController } from './controllers/create-express/generateProject'
import { userCommandsController } from './controllers/user-cli/userCommands'

void (async () => {
  userCommandsController.userWelcome()
  const projectName = await userCommandsController.projectName()
  const expressFlavor = await userCommandsController.selectProjectFlavor()
  await generateProjectController.generateProject(projectName, expressFlavor)
  userCommandsController.instructions(projectName)
  userCommandsController.userLeave()
})()
