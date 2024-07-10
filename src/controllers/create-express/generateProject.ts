import { copy, ensureDir, rename } from 'fs-extra'
import { log, error } from '../../shared/constants/cli/logger'
import { ExpressFlavor } from '../../shared/constants/cli/projectTypes'
import { join } from 'path'
import { closing, projectFailed, projectSuccess } from './constants'

export const generateProjectController = {
  async generateProject (projectName: string, expressFlavor: ExpressFlavor) {
    const cwd = process.cwd()

    try {
      await ensureDir(projectName)
      const folder = join(cwd, `/src/shared/templates/template-${expressFlavor}`)
      await copy(folder, projectName)
      await rename(`${projectName}/_gitignore`, `${projectName}/.gitignore`)
      log(projectSuccess)
    } catch (err) {
      log(projectFailed)
      error((err as Error).message)
      log(closing)
      log(' ')
      process.exit(1)
    }
  }
}
