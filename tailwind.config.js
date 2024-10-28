module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
    theme: {
      colors: {
        'black' : '#000000',
        'white': '#ffffff',
        'light-gray': '#f5f5f5',
        'gray': '#cccccc',
        'gray-2': '#B1B1B1',
        'gray-3': '#aaaaaa',
        'gray-4': '#DBDBDB',
        'gray-5': '#ECECEC',
        'mine-shaft': '#2a2a2a',
        'tundora': '#434343',
        'scorpion': '#595959',
        'scorpion-2': '#797979',
        'red': '#f20000',
        'fern': '#5DBB63',
        'blue': '#0000ff',
      },
      fontFamily: {
        sans: ['DM Sans'],
        body: ['DM Sans'],
        serif: ['Times New Roman'],
        headline: ['League Gothic'],
        arial: ['Arial'],
        calibri: ['Calibri'],
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '960px',
          xl: '960px',
          '2xl': '1200px',
        },
      },
      extend: {
        lineHeight: {
          'inherit': 'inherit',
        },
      }
    },
    variants: {
      extend: {
        display: ['group-hover'],
      },
    },
  }