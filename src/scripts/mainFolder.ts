import { copy, ensureDir, ensureDirSync, renameSync } from 'fs-extra'
import { join } from 'path'
import { dirName } from './getArgs'
export const mainFolder = async (): Promise<void> => {
  try {
    ensureDirSync(dirName)
    const srcFolder = ensureDir(`${dirName}/src`)

    const generalFiles = join(__dirname, '../templates/general')
    const copyFiles = copy(generalFiles, dirName)

    await Promise.all([srcFolder, copyFiles])
    renameSync(join(dirName, 'kcts'), join(dirName, '.gitignore'))
  } catch (e) {
    console.log(e)
  }
}
