import { copy, ensureDir, ensureDirSync } from 'fs-extra'
import { join } from 'path'
import { dirName } from './getArgs'
export const mainFolder = async (): Promise<void> => {
  try {
    ensureDirSync(dirName)
    const srcFolder = ensureDir(`${dirName}/src`)

    const generalFiles = join(__dirname, '../templates/general')
    const copyFiles = copy(generalFiles, dirName)

    await Promise.all([srcFolder, copyFiles])
  } catch (e) {
    console.log(e)
  }
}
