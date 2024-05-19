# react-textarea-auto-witdth-height

[![codecov](https://codecov.io/gh/wwf410918701/react-textarea-auto-witdth-height/graph/badge.svg?token=Q941RAZ85H)](https://codecov.io/gh/wwf410918701/react-textarea-auto-witdth-height) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release) [![Github All Releases](https://img.shields.io/npm/dm/react-textarea-auto-witdth-height)]() ![example workflow](https://github.com/wwf410918701/react-textarea-auto-witdth-height/actions/workflows/quality-checks.yaml/badge.svg)

An easy to use replacement for textarea that can automatically resizes both horizontally and vertically as content changes.

```typescript
  import { AutoTextArea } from 'react-textarea-auto-witdth-height'

  const somePlace = () => (
    <div>
      <AutoTextArea/>
    </div>
  )
```

## Demo

https://react-textarea-auto-witdth-height-8j96.vercel.app/

## Install

`npm i react-textarea-auto-witdth-height`

## Props

Props are almost identical as native textarea, except `rows` and `cols` are not supported, please use `min-height` and `max-height` to style the component instead.

## FAQ

### How to focus

Reference the inner textarea

```js
<TextareaAutosize ref={(ref) => (this.current = ref)} />
```

Then focus on the ref

```js
this.current.focus();
```
