import { readFile } from 'fs/promises'
import { PATH_FILER_RE, PLUGIN_NAME, SOURCE_APPENDIX } from './constants.js'

const appendSource = async (path) => {
  const contents = await readFile(path, 'utf8')
  return `${contents}\n${SOURCE_APPENDIX}`
}

export default {
  name: PLUGIN_NAME,
  setup: ({ onLoad }) => {
    onLoad({ filter: PATH_FILER_RE }, async (args) => ({
      contents: await appendSource(args.path),
      loader: 'default'
    }))
  }
}
