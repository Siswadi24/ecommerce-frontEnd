// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      // 'vue/no-v-model-argument': 'off',
      'vue/no-multiple-template-root': 'off',
      'html-self-closing': ['warn', {
        html: {
          void: 'any',
        },
      }],
    }
  }
)
