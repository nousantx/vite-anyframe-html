import { property as txProps } from '@tenoxui/property'
import { merge, createProperty, transformClasses } from '@nousantx/someutils'

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
      bg: {
        '--bg-opacity': '{1}% || 100%',
        backgroundColor: 'rgb({0} / var(--bg-opacity)) || rgb(255 0 0)'
      }
    }),
    {
      display: {
        flex: 'flex'
      }
    }
  )
}
