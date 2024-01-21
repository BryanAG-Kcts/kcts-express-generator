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
  scripts: {
    dev: 'node --watch src/index.js'
  },
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

export const pkgJsonTs = {
  ...pkg,
  main: 'src/index.ts',
  scripts: {
    build: 'tsc',
    dev: 'ts-node-dev src/index.ts'
  },
  devDependencies: {
    'ts-standard': '^12.0.2',
    typescript: '^5.3.3',
    '@types/express': '^4.17.21'
  },
  eslintConfig: {
    extends: './node_modules/ts-standard/eslintrc.json',
    parserOptions: {
      project: './tsconfig.json'
    },
    rules: {
      '@typescript-eslint/no-misused-promises': 'off'
    }
  }

}
