import { pkgJsonModule } from './constants/packagejson'
import { join } from 'path'
import { copy, ensureFile, writeJSON } from 'fs-extra'
import { dirName } from './getArgs'
export const generateModules = async (): Promise<void> => {
  const moduleTemplate = join(__dirname, '../templates/modules')
  const sourceProject = `${dirName}/src`
  const packagejsonDir = `${dirName}/package.json`

  try {
    const index = copy(moduleTemplate, sourceProject)
    const packagejson = ensureFile(packagejsonDir)

    await index
    await packagejson
    await writeJSON(packagejsonDir, pkgJsonModule)
  } catch (error) {
    console.log(error)
  }
}
