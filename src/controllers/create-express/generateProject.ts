import { log, error } from '../../shared/constants/cli/logger'
import { ExpressFlavor } from '../../shared/constants/cli/projectTypes'
import { closing, emptySourceFoldersName, projectFailed, projectSuccess } from './constants'
import { copy, ensureDir, rename } from 'fs-extra'
import { join } from 'path'

export const generateProjectController = {
  async generateProject (projectName: string, expressFlavor: ExpressFlavor) {
    const cwd = process.cwd()

    try {
      const mainProject = join(cwd, projectName)
      await ensureDir(mainProject)

      const expressFolder = join(__dirname, `../../../public/templates/template-${expressFlavor}`)
      await copy(expressFolder, mainProject)

      const _gitIgnore = join(cwd, `${projectName}/_gitignore`)
      const gitIgnore = join(cwd, `${projectName}/.gitignore`)

      const emptySourceFolders = join(cwd, `${projectName}/src`)
      const publicFolder = join(cwd, `${projectName}/public`)

      await Promise.all([
        rename(_gitIgnore, gitIgnore),
        this.generateFolders(emptySourceFoldersName, emptySourceFolders),
        this.generateFolders(['public'], publicFolder)
      ])

      log(projectSuccess)
    } catch (err) {
      log(projectFailed)
      error((err as Error).message)
      log(closing)
      process.exit(1)
    }
  },
  async generateFolders (folders: string[], dest: string) {
    const promiseFolder = folders.map(async folder => {
      const path = join(dest, folder)
      return await ensureDir(path)
    })

    return await Promise.all(promiseFolder)
  }
}
