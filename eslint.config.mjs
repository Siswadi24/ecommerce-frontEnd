// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'html-self-closing': ['warn', {
        html: {
          void: 'any',
        },
      }],
    }
  }
)
