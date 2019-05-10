# hucssley

## Building



```sh
node-sass --recursive --output dist --output-style expanded --indent-width 2 --source-map true --source-map-contents src

node-sass --watch --recursive --output dist --output-style expanded --indent-width 2 --source-map true --source-map-contents src
```

## Suggested usage

```scss
@import "hucssley/helpers";

@import "hucssley/variables/global/index";
@import "custom/variables/global";

@import "hucssley/variables/classes/index";
@import "custom/variables/classes"; // set class overrides before if you don't need access to the defaults

@import "hucssley/variables/reset/index";
@import "custom/variables/reset";

@import "hucssley/styles";
@import "custom/classes";
```