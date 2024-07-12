import { copy, ensureDir, rename } from 'fs-extra'
import { log, error } from '../../shared/constants/cli/logger'
import { ExpressFlavor } from '../../shared/constants/cli/projectTypes'
import { closing, emptySourceFolders, projectFailed, projectSuccess } from './constants'
import { join } from 'path'

export const generateProjectController = {
  async generateProject (projectName: string, expressFlavor: ExpressFlavor) {
    const cwd = process.cwd()

    try {
      await ensureDir(projectName)

      const folder = join(cwd, `/public/templates/template-${expressFlavor}`)
      const _gitIgnore = join(cwd, `${projectName}/_gitignore`)
      const gitIgnore = join(cwd, `${projectName}/.gitignore`)
      await copy(folder, projectName)

      const createdEmptySourceFolders = this.generateFolders(emptySourceFolders, `${projectName}/src`)
      const publicFolder = this.generateFolders(['public'], projectName)

      await rename(_gitIgnore, gitIgnore)
      await createdEmptySourceFolders
      await publicFolder

      log(projectSuccess)
    } catch (err) {
      log(projectFailed)
      error((err as Error).message)
      log(closing)
      process.exit(1)
    }
  },

  async generateFolders (folders: string[], dest: string) {
    const cwd = process.cwd()
    const promiseFolder = folders.map(async folder => {
      const path = join(cwd, `${dest}/${folder}`)
      return await ensureDir(path)
    })

    return await Promise.all(promiseFolder)
  }
}
