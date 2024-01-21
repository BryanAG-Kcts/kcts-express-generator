import { pkgJsonTs } from './constants/packagejson'
import { join } from 'path'
import { copy, ensureFile, writeJSON } from 'fs-extra'
import { dirName } from './getArgs'

export const generateTs = async (): Promise<void> => {
  const moduleTemplate = join(__dirname, '../templates/typescript')
  const sourceProject = dirName
  const packagejsonDir = `${dirName}/package.json`

  try {
    const index = copy(moduleTemplate, sourceProject)
    const packagejson = ensureFile(packagejsonDir)

    await index
    await packagejson
    await writeJSON(packagejsonDir, pkgJsonTs)
  } catch (error) {
    console.log(error)
  }
}
