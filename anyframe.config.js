import { property as txProps } from '@tenoxui/property'
import { merge, createProperty, transformClasses } from '@nousantx/someutils'
import { generateColors } from '@nousantx/color-generator'
import { allColors as color } from '@nousantx/color-library'

export default {
  include: ['index.html', 'src/**/*.{js,jsx}'],
  property: { ...txProps },
  classes: merge(
    transformClasses({
      center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      // custom utilities
      bg: {
        '--bg-opacity': '{1}% || 100%',
        backgroundColor: 'rgb({0} / var(--bg-opacity)) || rgb(255 0 0)'
      },
      text: {
        '--text-opacity': '{1}% || 100%',
        color: 'rgb({0} / var(--text-opacity)) || rgb(255 0 0)'
      }
    }),
    {
      display: {
        flex: 'flex'
      }
    }
  ),
  values: {
    ...generateColors({
      color,
      option: {
        format: 'object2',
        output: 'rgb-only'
      }
    })
  },
  // example of creating a theme
  theme: {
    apply: {
      SINGLE_RULE: [
        "@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');"
      ],
      "[data-theme='light']": '[--white]-red',
      "[data-theme='dark']": '[--white]-blue'
    }
  },
  // add base style
  base: {
    apply: {
      '*, *::before, *::after': '[m,p]-0 [box-sizing]-border-box family-[Inter,Sans-Serif]'
    }
  },
  components: {
    apply: {
      'body > header > nav > span': 'fs-inherit'
    }
  }
}
