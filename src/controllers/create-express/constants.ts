import { logGreen, logMagenta, logRed } from '../../shared/constants/cli/logger'

export const projectSuccess = logGreen('Project generated successfully ✨')
export const projectFailed = logMagenta('Failed to generate project')
export const closing = logRed('Closing application 💥')
