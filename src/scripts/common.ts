import { pkgJsonCommon } from './constants/packagejson'
import { join } from 'path'
import { copy, ensureFile, writeJSON } from 'fs-extra'
import { dirName } from './getArgs'
export const generateCommon = async (): Promise<void> => {
  const commonTemplate = join(__dirname, '../templates/common')
  const sourceProject = `${dirName}/src`
  const packagejsonDir = `${dirName}/package.json`

  try {
    const index = copy(commonTemplate, sourceProject)
    const packagejson = ensureFile(packagejsonDir)

    await index
    await packagejson
    await writeJSON(packagejsonDir, pkgJsonCommon)
  } catch (error) {
    console.log(error)
  }
}
