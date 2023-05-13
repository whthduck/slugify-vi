# Vietnamese Slugify

This package provides a simple and efficient way to convert Vietnamese strings to slugs by removing diacritics, converting spaces to hyphens, and stripping out any non-alphanumeric characters. For example, the string "Cái gì thế này" would be converted to "cai-gi-the-nay".

A slug is a text that is used in URLs to identify a resource in a human-readable way. Slugs typically include only alphanumeric characters (0-9, a-z, A-Z) as well as hyphens to separate words.

## Installation

The package is easy to use and can be installed via NPM or Yarn. It can be used in both Node.js and browser environments, making it a versatile tool for any web development project.

```bash
npm install @whthduck/slugify-vi

yarn add @whthduck/slugify-vi
```

## Quick start

```javascript
import { slugify } from '@whthduck/slugify-vi';

const vietnameseString = 'Cái gì thế này';
const slug = slugify(vietnameseString);

console.log(slug); // Output: "cai-gi-the-nay"
```

## License
The Vietnamese Slugify is released under the MIT License. Feel free to use, modify, and distribute it as you see fit.
[MIT](https://opensource.org/licenses/MIT)
