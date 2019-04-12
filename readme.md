# tailwindcss-localized

Allows you to create utilities that have an effect only on certain page languages. Since content looks differently across translations, those utilities can help you tweak your site so that it always looks great.

## Installation

```
npm i tailwindcss-localized -D
```

## Usage

In your Tailwind config, simply `require()` the plugin and specify the languages you want to target in the `theme` object:

```js
{
  theme: {
    languages: ['de', 'fr']
  },
  variants: {
    fontSize: ['responsive', 'localized']
  },
  plugins: [
    require('tailwindcss-localized')
  ]
}
```

...and you'll get similar classes:

```css
[lang="de"] .de\:text-xs,
[lang="fr"] .fr\:text-xs {
  font-size: .75rem;
}

@media (min-width: 640px) {
  [lang="de"] .sm\:de\:text-xs,
  [lang="fr"] .sm\:fr\:text-xs {
    font-size: .75rem;
  }
}
```

If you want a prefix that is different from the attribute value, specify the languages as an object:

```js
{
  theme: {
    languages: {
      german: 'de',
      french: 'fr'
    }
  }
}
```

...and you get:

```css
[lang="de"] .german\:text-xs,
[lang="fr"] .french\:text-xs {
  font-size: .75rem;
}
```

This is useful for avoiding conflicts in responsive classes when one of your screen names matches a language code.