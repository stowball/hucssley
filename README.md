# hucssley

## Building



```sh
node-sass --recursive --output dist --output-style expanded --indent-width 2 --source-map true --source-map-contents src

node-sass --watch --recursive --output dist --output-style expanded --indent-width 2 --source-map true --source-map-contents src
```

## Suggested usage

```scss
@import "hucssley/helpers";

@import "styles/variables/index";
  // @import "global/index";
  // @import "classes/index";
  // @import "reset/index";

@import "hucssley/styles";

@import "styles/classes/index";
```