import { dirName } from '../getArgs'
export const pkg = {
  name: dirName,
  version: '1.0.0',
  description: '',
  main: 'src/index.js',
  scripts: {},
  keywords: [],
  author: '',
  license: 'ISC',
  devDependencies: {},
  dependencies: {
    dotenv: '^16.3.1',
    express: '^4.18.2'
  }
}

export const pkgJsonCommon = {
  ...pkg,
  devDependencies: {
    standard: '^17.1.0'
  },
  eslintConfig: {
    extends: './node_modules/standard/eslintrc.json'
  }

}

export const pkgJsonModule = {
  ...pkgJsonCommon,
  type: 'module'
}
