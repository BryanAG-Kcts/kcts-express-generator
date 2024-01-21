import { mainFolder } from './scripts/mainFolder'
import { generate } from './scripts/constants/switchCases'

void (async () => {
  await mainFolder()
  await generate()
})()
