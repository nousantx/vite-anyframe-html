// import AnyFrame from './plugin.js'
import AnyFrame from 'vite-plugin-anyframe'

export default {
  plugins: [
    AnyFrame({
      debug: {
        enabled: true,
        showClassNames: true,
        showFileChanges: true,
        showStylesheet: true,
        logPrefix: '[AnyFrame Debug]'
      }
    })
  ]
}
