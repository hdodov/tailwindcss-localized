module.exports = function ({ addVariant, config, e }) {
  const langs = config('theme.languages')
  var data = []

  if (Array.isArray(langs)) {
    data = langs.map(lang => ({ attr: lang, name: lang }))
  } else {
    for (let name in langs) {
      data.push({ attr: langs[name], name })
    }
  }

  if (!data.length) {
    throw new Error('No languages found in theme.')
  }

  addVariant('localized', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return data.map(({ attr, name }) => {
        return `[lang="${ attr }"] .${ e(name + separator + className) }`
      })
    })
  })
}
