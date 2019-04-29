# hucssley

## Building



```sh
node-sass --recursive --output dist --output-style expanded --indent-width 2 --source-map true --source-map-contents src

node-sass --watch --recursive --output dist --output-style expanded --indent-width 2 --source-map true --source-map-contents src
```

## Suggested usage

```scss
@import "hucssley/functions/index";
@import "hucssley/mixins/index";
@import "hucssley/variables/index";

@import "styles/variables/index";
  // @import "global/index";
  // @import "classes/index";
  // @import "reset/index";

@import "hucssley/reset/index";
@import "hucssley/classes/index";

@import "styles/classes/index";
```