# letter-avatar-generator

[![npm](https://img.shields.io/npm/v/letter-avatar-generator)](https://www.npmjs.com/package/letter-avatar-generator)

The function allows you to generate an image with the first character of a string in Base64 format. A background color is assigned to each Cyrillic or Latin character. `#757575` is used as a fallback background for other characters. You can use the parameters to set your own background color or gradient, as well as the image size and text color.

## Install

To install the library, run this command:

```sh
npm install  letter-avatar-generator
```

## Usage

### Parameters

- `content: string` — the text whose first character will be used;
- `color?: string` — text color (default: #FFFFFF);
- `backgroundColor?: string` — custom background color;
- `backgroundGradient?: string[]` — sets the background gradient (the property overrides the `backgroundColor`);
- `size?: number` — the size of the final image is in pixels (default: 120);
- `font?: {ratio?: number, family?: string, weight?: number}` — configuring font settings.

### Example

```jsx
const avatar = generateLetterAvatar({
  content: "Potato",
  backgroundGradient: ["yellow", "orange"],
  size: 200,
  font: { ratio: "0.8", weight: 600, family: "Tahoma" },
});

<img src={avatar} alt="" />;
```
