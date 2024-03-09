import { readFileSync } from 'node:fs'
import { defineCommand, runMain } from 'citty'
import { consola } from 'consola'
import path from 'node:path'
import { URL } from 'node:url'
import { definePackageJSON } from 'pkg-types'

function getPackageJSON(base: string) {
  try {
    const rawData = readFileSync(path.join(base, '../package.json'), 'utf8')
    return definePackageJSON(JSON.parse(rawData))
  } catch (error) {
    return { version: '0.0.0' }
  }
}

const __dirname = path.dirname(new URL(import.meta.url).pathname)
const { name: rawName, version, description } = getPackageJSON(__dirname)
const name = rawName?.split('/').pop()
consola.debug('name', name)
consola.debug('version', version)

const main = defineCommand({
  meta: {
    name,
    version,
    description
  },
  args: {
    // TODO:
  },
  async run({ args }) {
    consola.debug('args', args)
  }
})

runMain(main)
