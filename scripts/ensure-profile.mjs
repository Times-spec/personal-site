import { access, copyFile } from 'node:fs/promises'
import { constants } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const source = resolve(root, 'assets/profile.temp.json')
const target = resolve(root, 'assets/profile.json')

try {
  await access(source, constants.F_OK)
} catch {
  throw new Error('Missing assets/profile.temp.json')
}

// Always regenerate: a stale generated profile.json (e.g. restored from a
// build cache) must never win over profile.temp.json.
await copyFile(source, target)
console.log('Created assets/profile.json from assets/profile.temp.json')
