// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'vue/no-multiple-template-root': 'off',
      'html-self-closing': ['warn', {
        html: {
          void: 'any',
        },
      }],
    }
  }
)
