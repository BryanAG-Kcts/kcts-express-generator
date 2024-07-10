const { copySync } = require('fs-extra')
const { join } = require('node:path')

const cwd = process.cwd()
const templates = join(cwd, '/src/shared/templates')
const dist = join(cwd, '/build/shared/templates')
copySync(templates, dist)
