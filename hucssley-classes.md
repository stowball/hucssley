# Hucssley classes

Hucssley provides over 110 classes out-of-the-box, which have been sensibly pre-configured to get up and running, fast. Some are placeholders with empty variables for more complex things, like `box-shadow`, `grid` and `transform` that either don't map 1:1 to a property/value pair, and/or are more likely unable to be standardised to suit your project.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Understanding class configuration](#understanding-class-configuration)
  - [Modules](#modules)
    - [Advanced modules](#advanced-modules)
  - [Simple types](#simple-types)
    - [Lists](#lists)
    - [Maps](#maps)
  - [Advanced types](#advanced-types)
  - [Aliases](#aliases)
- [Configuring classes](#configuring-classes)
- [What's in the box?](#whats-in-the-box)
  - [hu-align-content](#hu-align-content)
  - [hu-align-items](#hu-align-items)
  - [hu-align-self](#hu-align-self)
  - [hu-animation](#hu-animation)
  - [hu-animation-count](#hu-animation-count)
  - [hu-animation-delay](#hu-animation-delay)
  - [hu-animation-direction](#hu-animation-direction)
  - [hu-animation-duration](#hu-animation-duration)
  - [hu-animation-easing](#hu-animation-easing)
  - [hu-animation-mode](#hu-animation-mode)
  - [hu-animation-name](#hu-animation-name)
  - [hu-animation-state](#hu-animation-state)
  - [hu-appearance](#hu-appearance)
  - [hu-backface-visibility](#hu-backface-visibility)
  - [hu-background-color](#hu-background-color)
  - [hu-background-image](#hu-background-image)
  - [hu-background-position-x](#hu-background-position-x)
  - [hu-background-position-y](#hu-background-position-y)
  - [hu-background-repeat](#hu-background-repeat)
  - [hu-background-size](#hu-background-size)
  - [hu-blend-mode](#hu-blend-mode)
  - [hu-border-collapse](#hu-border-collapse)
  - [hu-border-color](#hu-border-color)
  - [hu-border-radius](#hu-border-radius)
  - [hu-border-style](#hu-border-style)
  - [hu-border-width](#hu-border-width)
  - [hu-box-shadow](#hu-box-shadow)
  - [hu-box-sizing](#hu-box-sizing)
  - [hu-color](#hu-color)
  - [hu-columns](#hu-columns)
  - [hu-content](#hu-content)
  - [hu-cursor](#hu-cursor)
  - [hu-display](#hu-display)
  - [hu-flex](#hu-flex)
  - [hu-flex-basis](#hu-flex-basis)
  - [hu-flex-direction](#hu-flex-direction)
  - [hu-flex-flow](#hu-flex-flow)
  - [hu-flex-grow](#hu-flex-grow)
  - [hu-flex-shrink](#hu-flex-shrink)
  - [hu-flex-wrap](#hu-flex-wrap)
  - [hu-float](#hu-float)
  - [hu-font-family](#hu-font-family)
  - [hu-font-size](#hu-font-size)
  - [hu-font-smoothing](#hu-font-smoothing)
  - [hu-font-style](#hu-font-style)
  - [hu-font-weight](#hu-font-weight)
  - [hu-grid](#hu-grid)
  - [hu-grid-area](#hu-grid-area)
  - [hu-grid-auto-columns](#hu-grid-auto-columns)
  - [hu-grid-auto-flow](#hu-grid-auto-flow)
  - [hu-grid-auto-rows](#hu-grid-auto-rows)
  - [hu-grid-column](#hu-grid-column)
  - [hu-grid-column-end](#hu-grid-column-end)
  - [hu-grid-column-gap](#hu-grid-column-gap)
  - [hu-grid-column-start](#hu-grid-column-start)
  - [hu-grid-gap](#hu-grid-gap)
  - [hu-grid-row](#hu-grid-row)
  - [hu-grid-row-end](#hu-grid-row-end)
  - [hu-grid-row-gap](#hu-grid-row-gap)
  - [hu-grid-row-start](#hu-grid-row-start)
  - [hu-grid-template](#hu-grid-template)
  - [hu-grid-template-areas](#hu-grid-template-areas)
  - [hu-grid-template-columns](#hu-grid-template-columns)
  - [hu-grid-template-rows](#hu-grid-template-rows)
  - [hu-height](#hu-height)
  - [hu-justify-content](#hu-justify-content)
  - [hu-justify-items](#hu-justify-items)
  - [hu-letter-spacing](#hu-letter-spacing)
  - [hu-line-height](#hu-line-height)
  - [hu-list-style](#hu-list-style)
  - [hu-margin](#hu-margin)
  - [hu-max-height](#hu-max-height)
  - [hu-max-width](#hu-max-width)
  - [hu-min-height](#hu-min-height)
  - [hu-min-width](#hu-min-width)
  - [hu-momentum-scrolling](#hu-momentum-scrolling)
  - [hu-opacity](#hu-opacity)
  - [hu-order](#hu-order)
  - [hu-outline](#hu-outline)
  - [hu-overflow](#hu-overflow)
  - [hu-overflow-x](#hu-overflow-x)
  - [hu-overflow-y](#hu-overflow-y)
  - [hu-overscroll-behavior](#hu-overscroll-behavior)
  - [hu-padding](#hu-padding)
  - [hu-pointer-events](#hu-pointer-events)
  - [hu-pos](#hu-pos)
  - [hu-position](#hu-position)
  - [hu-rotate](#hu-rotate)
  - [hu-scale](#hu-scale)
  - [hu-scroll-behavior](#hu-scroll-behavior)
  - [hu-svg-fill-color](#hu-svg-fill-color)
  - [hu-svg-fill-rule](#hu-svg-fill-rule)
  - [hu-svg-stroke-color](#hu-svg-stroke-color)
  - [hu-table-layout](#hu-table-layout)
  - [hu-text-align](#hu-text-align)
  - [hu-text-decoration](#hu-text-decoration)
  - [hu-text-shadow](#hu-text-shadow)
  - [hu-text-transform](#hu-text-transform)
  - [hu-theme-background-color](#hu-theme-background-color)
  - [hu-theme-border-color](#hu-theme-border-color)
  - [hu-theme-color](#hu-theme-color)
  - [hu-transform](#hu-transform)
  - [hu-transition](#hu-transition)
  - [hu-transition-delay](#hu-transition-delay)
  - [hu-transition-duration](#hu-transition-duration)
  - [hu-transition-easing](#hu-transition-easing)
  - [hu-transition-property](#hu-transition-property)
  - [hu-translate-x](#hu-translate-x)
  - [hu-translate-y](#hu-translate-y)
  - [hu-truncate-text](#hu-truncate-text)
  - [hu-vertical-align](#hu-vertical-align)
  - [hu-visibility](#hu-visibility)
  - [hu-visually-hidden](#hu-visually-hidden)
  - [hu-white-space](#hu-white-space)
  - [hu-width](#hu-width)
  - [hu-z-index](#hu-z-index)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Understanding class configuration

### Modules

Each class will have an appropriately named `$hu-[class-name]-modules` variable, which determines what module types (if any), it is generated for.

The variable accepts either a list or map. If it is a list, it will accept the following values: `(base, focus, hover, hocus, state, group-hover, group-state, reduced-motion, print)` or empty `()`. The order of the modules is not important, as Hucssley will intelligently order them for you to produce the desired output.

#### Advanced modules

If the variable is a map, it requires a property called `core` whose value is a list of modules as above. You can also provide keys of `parents` and `pseudos`, whose values will be a list of parent and pseudo selectors that will be generated for all of the `core` modules.

For instance you could override the `display` classes like this:

```scss
$hu-display-modules: (
  core: $hu-display-modules, // Use the existing list of modules as the `core` property
  pseudos: ("::before", ":first-child"),
  parents: (eqio-<400),
);
```

### Simple types

Each class will have an appropriately name `$hu-[class-name]-types` variable, which determines what class name suffixes and values that will be used.

`$hu-[class-name]-types` can either accept a list or a map.

#### Lists

If using a list, the suffix and value will be identical, for example:

```scss
$hu-justify-items-types: (
  auto,
  baseline,
  center,
);
```

Will generate:

```css
.justify-items:auto {
  justify-items: auto;
}

.justify-items:baseline {
  justify-items: baseline;
}

.justify-items:center {
  justify-items: center;
}
```

#### Maps

If using a map, the majority of class names will use the map keys as the class name suffix, and the map values as the CSS value. This allows you to customize the class names to suit your workflow, or fix [mistakes in CSS](https://wiki.csswg.org/ideas/mistakes).

The following variable:

```scss
$hu-flex-wrap-types: (
  no-wrap: nowrap,
  wrap: wrap,
  wrap-reverse: wrap-reverse,
);
```

Will generate:

```css
.flex-wrap:no-wrap {
  flex-wrap: nowrap;
}

.flex-wrap:wrap {
  flex-wrap: wrap;
}

.flex-wrap:wrap-reverse {
  flex-wrap: wrap-reverse;
}
```

### Advanced types

Some classes, also have a `$hu-[class-name]-scale` variable, in which case, they use both `$hu-[class-name]-types` and `$hu-[class-name]-scale` to determine the class name suffix, values **and CSS properties** generated.

As with the simple types, both variables could be either a list or a map, but would generally both be maps.

A good example is `border-radius`:

```scss
$hu-border-radius-scale: (
  0: 0,
  100: 1px,
  200: 2px,
  300: 3px,
  1000: 1000px,
);

$hu-border-radius-types: (
  border-radius: border-radius,
  border-radius-bottom: (border-bottom-left-radius, border-bottom-right-radius),
  border-radius-left: (border-bottom-left-radius, border-top-left-radius),
  border-radius-right: (border-bottom-right-radius, border-top-right-radius),
  border-radius-top: (border-top-left-radius, border-top-right-radius),
);
```

which would generate the following classes:

```css
.border-radius:100 {
  border-radius: 1px;
}

.border-radius-bottom:100 {
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
}

.border-radius-left:100 {
  border-bottom-left-radius: 1px;
  border-top-left-radius: 1px;
}

.border-radius-right:100 {
  border-bottom-right-radius: 1px;
  border-top-right-radius: 1px;
}

.border-radius-top:100 {
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
}

.border-radius:200 {
  border-radius: 2px;
}

.border-radius-bottom:200 {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}

.border-radius-left:200 {
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
}

.border-radius-right:200 {
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
}

.border-radius-top:200 {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
```

Hopefully you can see how the maps controlled the resultant class name format, properties and values.

### Aliases

Every class provided by Hucssley can have the “property” part of its class name customized through its `$hu-[class-name]-alias` variable (where applicable). While the majority of classes use the same value for the class name and CSS property, the following deviate slightly for improved comprehension and legibility:

```css
animation-count -> animation-iteration-count
animation-easing -> animation-timing-function
animation-mode -> animation-fill-mode
animation-state -> animation-play-state
blend-mode -> mix-blend-mode
border-radius-[side] -> border-[side]-radius
content -> :[pseudo]-content
momentum-scrolling -> -webkit-overflow-scrolling
pos-[bottom,left,right,top] -> bottom,left,right,top
rotate -> transform: rotate
scale -> transform: scale
svg-fill-color -> fill
svg-fill-rule -> fill-rule
svg-stroke-color -> stroke
transition-easing -> transition-timing-function
translate-x -> transform: translateX
translate-y -> transform: translateY
```

Should you wish to change the class name, you can pass a string to the `$hu-[class-name]-alias` variable, like so:

```scss
$hu-background-color-alias: bg-color;

// ->
.bg-color:blue-1000 {
  background-color: #172e3a;
}

// instead of ->
.background-color:blue-1000 {
  background-color: #172e3a;
}
```

```scss
$hu-visually-hidden-alias: screenreader-only;

// ->
.screenreader-only {
  … existing .visually-hidden declarations
}

// instead of ->
.visually-hidden {
  … existing .visually-hidden declarations
}
```

Some classes, like `border-`, `margin`, `padding` and `pos` are too complex so don’t use an `$-alias` variable, but can be customized through their `$-sides` or `$-type` variables instead.

*Note: when passing an empty string `""` to an `$-alias` variable, the class name will use the CSS property value.*

---

## Configuring classes

To customize the modules, types and scales used, you simply need to re-assign the relevant variable in a custom Sass stylesheet.

When importing and using Hucssley, we recommend taking this approach to customize and override existing classes and variables.

```scss
@import "hucssley/helpers";

@import "hucssley/variables/global/index";
@import "custom/variables/global/index";

@import "hucssley/variables/classes/index";
@import "custom/variables/classes/index";
// set class overrides before if you don't need access to the defaults & want changes to flow through referenced vars

@import "hucssley/variables/reset/index";
@import "custom/variables/reset/index";

@import "hucssley/styles";
@import "custom/classes/index";
```

## What's in the box?

Below is a complete list of all the classes in Hucssley by default, and their individual configurations. You'll see that some classes reference the same variables, to make customizing them to your specific project easier.

*Note: Classes map 1:1 to with CSS properties unless otherwise specified.*

### hu-align-content

```scss
$hu-align-content-alias: "";

$hu-align-content-modules: (base, responsive);

$hu-align-content-types: (
  baseline,
  center,
  end,
  flex-end,
  flex-start,
  normal,
  space-around,
  space-between,
  space-evenly,
  start,
  stretch,
);
```

### hu-align-items

```scss
$hu-align-items-alias: "";

$hu-align-items-modules: (base, responsive);

$hu-align-items-types: (
  auto,
  center,
  end,
  flex-end,
  flex-start,
  normal,
  self-end,
  self-start,
  start,
);
```

### hu-align-self

```scss
$hu-align-self-alias: "";

$hu-align-self-modules: (base, responsive);

$hu-align-self-types: $hu-align-items-types;
```

### hu-animation

```scss
$hu-animation-alias: "";

$hu-animation-modules: ();

$hu-animation-types: ();
```

### hu-animation-count

```
animation-count -> animation-iteration-count
```

```scss
$hu-animation-count-alias: animation-count;

$hu-animation-count-modules: ();

$hu-animation-count-types: ();
```

### hu-animation-delay

```scss
$hu-animation-delay-alias: "";

$hu-animation-delay-modules: ();

$hu-animation-delay-types: ();
```

### hu-animation-direction

```scss
$hu-animation-direction-alias: "";

$hu-animation-direction-modules: ();

$hu-animation-direction-types: (
  alternate,
  alternate-reverse,
  normal,
  reverse,
);
```

### hu-animation-duration

```scss
$hu-animation-duration-alias: "";

$hu-animation-duration-modules: ();

$hu-animation-duration-types: ();
```

### hu-animation-easing

```
animation-easing -> animation-timing-function
```

```scss
$hu-animation-easing-alias: animation-easing ;

$hu-animation-easing-modules: ();

$hu-animation-easing-types: (
  ease: ease,
  ease-in: ease-in,
  ease-in-out: ease-in-out,
  ease-in-back: cubic-bezier(0.600, -0.280, 0.735, 0.045),
  ease-in-circ: cubic-bezier(0.600, 0.040, 0.980, 0.335),
  ease-in-cubic: cubic-bezier(0.550, 0.055, 0.675, 0.190),
  ease-in-expo: cubic-bezier(0.950, 0.050, 0.795, 0.035),
  ease-in-quad: cubic-bezier(0.550, 0.085, 0.680, 0.530),
  ease-in-quart: cubic-bezier(0.895, 0.030, 0.685, 0.220),
  ease-in-quint: cubic-bezier(0.755, 0.050, 0.855, 0.060),
  ease-in-sine: cubic-bezier(0.470, 0.000, 0.745, 0.715),
  ease-in-out-back: cubic-bezier(0.680, -0.550, 0.265, 1.550),
  ease-in-out-circ: cubic-bezier(0.785, 0.135, 0.150, 0.860),
  ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1.000),
  ease-in-out-expo: cubic-bezier(1.000, 0.000, 0.000, 1.000),
  ease-in-out-quad: cubic-bezier(0.455, 0.030, 0.515, 0.955),
  ease-in-out-quart: cubic-bezier(0.770, 0.000, 0.175, 1.000),
  ease-in-out-quint: cubic-bezier(0.860, 0.000, 0.070, 1.000),
  ease-in-out-sine: cubic-bezier(0.445, 0.050, 0.550, 0.950),
  ease-out: ease-out,
  ease-out-back: cubic-bezier(0.175,  0.885, 0.320, 1.275),
  ease-out-circ: cubic-bezier(0.075, 0.820, 0.165, 1.000),
  ease-out-cubic: cubic-bezier(0.215, 0.610, 0.355, 1.000),
  ease-out-expo: cubic-bezier(0.190, 1.000, 0.220, 1.000),
  ease-out-quad: cubic-bezier(0.250, 0.460, 0.450, 0.940),
  ease-out-quart: cubic-bezier(0.165, 0.840, 0.440, 1.000),
  ease-out-quint: cubic-bezier(0.230, 1.000, 0.320, 1.000),
  ease-out-sine: cubic-bezier(0.390, 0.575, 0.565, 1.000),
  linear: linear,
  step-start: step-start,
  step-end: step-end,
);
```

### hu-animation-mode

```
animation-mode -> animation-fill-mode
```

```scss
$hu-animation-mode-alias: animation-mode;

$hu-animation-mode-modules: ();

$hu-animation-mode-types: (
  backwards,
  both,
  forwards,
  none,
);
```

### hu-animation-name

```scss
$hu-animation-name-alias: "";

$hu-animation-name-modules: ();

$hu-animation-name-types: ();
```

### hu-animation-state

```
animation-state -> animation-play-state
```

```scss
$hu-animation-state-alias: animation-state;

$hu-animation-state-modules: ();

$hu-animation-state-types: (
  paused,
  running,
);
```


### hu-appearance

```scss
$hu-appearance-alias: "";

$hu-appearance-modules: (base);

$hu-appearance-types: (
  none,
  textfield,
);
```

### hu-backface-visibility

```scss
$hu-backface-visibility-alias: "";

$hu-backface-visibility-modules: (base);

$hu-backface-visibility-types: (
  hidden,
  visible,
);
```

### hu-background-color

```scss
$hu-background-color-alias: "";

$hu-background-color-modules: (base, hocus, group-hover, group-state, state);

$hu-background-color-types: $hu-colors;
```

### hu-background-image

```scss
$hu-background-image-alias: "";

$hu-background-image-modules: ();

$hu-background-image-types: ();
```

### hu-background-position-x

```scss
$hu-background-position-x-alias: "";

$hu-background-position-x-modules: (base);

$hu-background-position-x-types: (
  left,
  center,
  right,
);
```

### hu-background-position-y

```scss
$hu-background-position-y-alias: "";

$hu-background-position-y-modules: (base);

$hu-background-position-y-types: (
  bottom,
  center,
  top,
);
```

### hu-background-repeat

```scss
$hu-background-repeat-alias: "";

$hu-background-repeat-modules: (base);

$hu-background-repeat-types: (
  repeat: repeat,
  repeat-no: no-repeat,
  repeat-space: space,
  repeat-round: round,
  repeat-x: repeat-x,
  repeat-y: repeat-y,
);
```

### hu-background-size

```scss
$hu-background-size-alias: "";

$hu-background-size-modules: (base);

$hu-background-size-types: (
  auto,
  contain,
  cover,
);
```

### hu-blend-mode

```scss
$hu-blend-mode-alias: blend-mode;

$hu-blend-mode-modules: (base);

$hu-blend-mode-types: (
  color,
  color-burn,
  color-dodge,
  darken,
  difference,
  exclusion,
  hard-light,
  hue,
  lighten,
  luminosity,
  multiply,
  normal,
  overlay,
  saturation,
  screen,
  soft-light,
);
```

### hu-border-collapse

```scss
$hu-border-collapse-alias: "";

$hu-border-collapse-modules: (base);

$hu-border-collapse-types: (
  collapse,
  separate,
);
```

### hu-border-color

```scss
$hu-border-color-modules: $hu-border-modules;

$hu-border-color-sides: $hu-border-sides;

$hu-border-color-types: $hu-colors;
```

### hu-border-radius

```scss
$hu-border-radius-modules: (base, responsive);

$hu-border-radius-scale: (
  0: 0,
  100: 1px,
  200: 2px,
  300: 3px,
  400: 4px,
  500: 5px,
  1000: 1000px,
);

$hu-border-radius-types: (
  border-radius: border-radius,
  border-radius-bottom: (border-bottom-left-radius, border-bottom-right-radius),
  border-radius-bottom-left: border-bottom-left-radius,
  border-radius-bottom-right: border-bottom-right-radius,
  border-radius-left: (border-bottom-left-radius, border-top-left-radius),
  border-radius-right: (border-bottom-right-radius, border-top-right-radius),
  border-radius-top: (border-top-left-radius, border-top-right-radius),
  border-radius-top-left: border-top-left-radius,
  border-radius-top-right: border-top-right-radius,
);
```

### hu-border-style

```scss
$hu-border-style-modules: $hu-border-modules;

$hu-border-style-sides: $hu-border-sides;

$hu-border-style-types: (
  none,
  dashed,
  double,
  dotted,
  solid,
);
```

### hu-border-width

```scss
$hu-border-width-alias: "";

$hu-border-width-modules: $hu-border-modules;

$hu-border-width-sides: $hu-border-sides;

$hu-border-width-types: (
  0: 0,
  100: 1px,
  200: 2px,
);
```

### hu-box-shadow

```scss
$hu-box-shadow-alias: "";

$hu-box-shadow-modules: ();

$hu-box-shadow-types: ();
```

### hu-box-sizing

```scss
$hu-box-sizing-alias: "";

$hu-box-sizing-modules: (base);

$hu-box-sizing-types: (
  border-box,
  content-box,
);
```

### hu-color

```scss
$hu-color-alias: "";

$hu-color-modules: $hu-background-color-modules;

$hu-color-types: $hu-colors;
```

### hu-columns

```scss
$hu-columns-alias: "";

$hu-columns-modules: ();

$hu-columns-types: ();
```

### hu-content

```
content -> :[pseudo]-content
```

```scss
$hu-content-alias: "";

$hu-content-modules: (base);

$hu-content-pseudos: (
  "::after", 
  "::before"
);

$hu-content-types: (
  "",
);

```

### hu-cursor

```scss
$hu-cursor-alias: "";

$hu-cursor-modules: (base, state);

$hu-cursor-types: (
  auto,
  default,
  not-allowed,
  pointer,
  progress,
  text,
  wait,
);
```

### hu-display

```scss
$hu-display-alias: "";

$hu-display-modules: (base, focus, hover, hocus, group-hover, group-state, print, responsive, state);

$hu-display-types: (
  block,
  flex,
  grid,
  inline,
  inline-block,
  inline-flex,
  inline-grid,
  none,
  table,
  table-cell,
  table-row,
);
```

### hu-flex

```scss
$hu-flex-alias: "";

$hu-flex-modules: ();

$hu-flex-types: ();
```

### hu-flex-basis

```scss
$hu-flex-basis-alias: "";

$hu-flex-basis-modules: ();

$hu-flex-basis-types: ();
```

### hu-flex-direction

```scss
$hu-flex-direction-alias: "";

$hu-flex-direction-modules: (base, responsive);

$hu-flex-direction-types: (
  column,
  column-reverse,
  row,
  row-reverse,
);
```

### hu-flex-flow

```scss
$hu-flex-flow-alias: "";

$hu-flex-flow-modules: ();

$hu-flex-flow-types: ();
```

### hu-flex-grow

```scss
$hu-flex-grow-alias: "";

$hu-flex-grow-modules: (base, responsive);

$hu-flex-grow-types: (
  0,
  1,
  2,
  3,
  4,
  5,
  auto,
);
```

### hu-flex-shrink

```scss
$hu-flex-shrink-alias: "";

$hu-flex-shrink-modules: (base, responsive);

$hu-flex-shrink-types: $hu-flex-grow-types;
```

### hu-flex-wrap

```scss
$hu-flex-wrap-alias: "";

$hu-flex-wrap-modules: (base, responsive);

$hu-flex-wrap-types: (
  no-wrap: nowrap,
  wrap: wrap,
  wrap-reverse: wrap-reverse,
);
```

### hu-float

```scss
$hu-float-alias: "";

$hu-float-modules: ();

$hu-float-types: ();
```

### hu-font-family

```scss
$hu-font-family-alias: "";

$hu-font-family-modules: (base);

$hu-font-family-types: (
  mono: (Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace),
  sans: (system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif),
  serif: (Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif),
);
```

### hu-font-size

```scss
$hu-font-size-alias: "";

$hu-font-size-modules: (base, responsive);

$hu-font-size-types: (
  100: hu-rem(10),
  200: hu-rem(12),
  300: hu-rem(14),
  400: hu-rem(16),
  500: hu-rem(18),
  600: hu-rem(20),
  700: hu-rem(22),
  800: hu-rem(24),
  900: hu-rem(26),
  1000: hu-rem(28),
);
```

### hu-font-smoothing

```scss
$hu-font-smoothing-alias: font-smoothing;

$hu-font-smoothing-modules: (base);
```

```css
.font-smoothing {
  -moz-osx-font-smoothing: grayscale #{hu-important()};
  -webkit-font-smoothing: antialiased #{hu-important()};
}
```

### hu-font-style

```scss
$hu-font-style-alias: "";

$hu-font-style-modules: (base);

$hu-font-style-types: (
  italic,
  normal,
  oblique,
);
```

### hu-font-weight

```scss
$hu-font-weight-alias: "";

$hu-font-weight-modules: (base);

$hu-font-weight-types: (
  400,
  700,
);
```

### hu-grid

```scss
$hu-grid-alias: "";

$hu-grid-modules: ();

$hu-grid-types: ();
```

### hu-grid-area

```scss
$hu-grid-area-alias: "";

$hu-grid-area-modules: ();

$hu-grid-area-types: ();
```

### hu-grid-auto-columns

```scss
$hu-grid-auto-columns-alias: "";

$hu-grid-auto-columns-modules: ();

$hu-grid-auto-columns-types: ();
```

### hu-grid-auto-flow

```scss
$hu-grid-auto-flow-alias: "";

$hu-grid-auto-flow-modules: ();

$hu-grid-auto-flow-types: ();
```

### hu-grid-auto-rows

```scss
$hu-grid-auto-rows-alias: "";

$hu-grid-auto-rows-modules: ();

$hu-grid-auto-rows-types: ();
```

### hu-grid-column

```scss
$hu-grid-column-alias: "";

$hu-grid-column-modules: ();

$hu-grid-column-types: ();
```

### hu-grid-column-end

```scss
$hu-grid-column-end-alias: "";

$hu-grid-column-end-modules: ();

$hu-grid-column-end-types: ();
```

### hu-grid-column-gap

```scss
$hu-grid-column-gap-alias: "";

$hu-grid-column-gap-modules: ();

$hu-grid-column-gap-types: ();
```

### hu-grid-column-start

```scss
$hu-grid-column-start-alias: "";

$hu-grid-column-start-modules: ();

$hu-grid-column-start-types: ();
```

### hu-grid-gap

```scss
$hu-grid-gap-alias: "";

$hu-grid-gap-modules: ();

$hu-grid-gap-types: ();
```

### hu-grid-row

```scss
$hu-grid-row-alias: "";

$hu-grid-row-modules: ();

$hu-grid-row-types: ();
```

### hu-grid-row-end

```scss
$hu-grid-row-end-alias: "";

$hu-grid-row-end-modules: ();

$hu-grid-row-end-types: ();
```

### hu-grid-row-gap

```scss
$hu-grid-row-gap-alias: "";

$hu-grid-row-gap-modules: ();

$hu-grid-row-gap-types: ();
```

### hu-grid-row-start

```scss
$hu-grid-row-start-alias: "";

$hu-grid-row-start-modules: ();

$hu-grid-row-start-types: ();
```

### hu-grid-template

```scss
$hu-grid-template-alias: "";

$hu-grid-template-modules: ();

$hu-grid-template-types: ();
```

### hu-grid-template-areas

```scss
$hu-grid-template-areas-alias: "";

$hu-grid-template-areas-modules: ();

$hu-grid-template-areas-types: ();
```

### hu-grid-template-columns

```scss
$hu-grid-template-columns-alias: "";

$hu-grid-template-columns-modules: ();

$hu-grid-template-columns-types: ();
```

### hu-grid-template-rows

```scss
$hu-grid-template-rows-alias: "";

$hu-grid-template-rows-modules: ();

$hu-grid-template-rows-types: ();
```

### hu-height

```scss
$hu-height-alias: "";

$hu-height-modules: (base, print);

$hu-height-types: (
  0: 0,
  100: 100%,
  100vh: 100vh,
  auto: auto,
);
```

### hu-justify-content

```scss
$hu-justify-content-alias: "";

$hu-justify-content-modules: (base, responsive);

$hu-justify-content-types: (
  center,
  end,
  flex-end,
  flex-start,
  left,
  normal,
  right,
  space-around,
  space-between,
  space-evenly,
  start,
  stretch,
);
```

### hu-justify-items

```scss
$hu-justify-items-alias: "";

$hu-justify-items-modules: (base, responsive);

$hu-justify-items-types: (
  auto,
  baseline,
  center,
  end,
  flex-end,
  flex-start,
  left,
  normal,
  right,
  self-end,
  self-start,
  start,
  stretch,
);
```

### hu-letter-spacing

```scss
$hu-letter-spacing-alias: "";

$hu-letter-spacing-modules: (base);

$hu-letter-spacing-types: (
  -200: -0.2em,
  -100: -0.1em,
  0: 0,
  100: 0.1em,
  200: 0.2em,
  normal: normal,
);
```

### hu-line-height

```scss
$hu-line-height-alias: "";

$hu-line-height-modules: (base, responsive);

$hu-line-height-types: (
  0: 0,
  100: 1,
  200: 1.2,
  300: 1.4,
  400: 1.6,
  500: 1.8,
  600: 2,
  700: 2.2,
  800: 2.4,
  900: 2.6,
  1000: 2.8,
);
```

### hu-list-style

```scss
$hu-list-style-alias: "";

$hu-list-style-modules: (base);

$hu-list-style-types: (
  circle,
  decimal,
  decimal-leading-zero,
  disc,
  lower-alpha,
  lower-roman,
  none,
  square,
  upper-alpha,
  upper-roman,
);
```

### hu-margin

```scss
$hu-margin-modules: (base, responsive);

$hu-margin-scale: $hu-spacing-scale;

$hu-margin-types: (
  margin: margin,
  margin-bottom: margin-bottom,
  margin-left: margin-left,
  margin-right: margin-right,
  margin-top: margin-top,
  margin-horizontal: (margin-left, margin-right),
  margin-vertical: (margin-bottom, margin-top),
);
```

For every numeric `$hu-margin-scale` value, negative `-[value]` classes are also created.

### hu-max-height

```scss
$hu-max-height-alias: "";

$hu-max-height-modules: (base, print);

$hu-max-height-types: $hu-height-types;
```

### hu-max-width

```scss
$hu-max-width-alias: "";

$hu-max-width-modules: (base);

$hu-max-width-types: (
  100: 100%,
);
```

### hu-min-height

```scss
$hu-min-height-alias: "";

$hu-min-height-modules: (base);

$hu-min-height-types: (
  0: 0,
  100: 100%,
  100vh: 100vh,
  none: none,
);
```

### hu-min-width

```scss
$hu-min-width-alias: "";

$hu-min-width-modules: (base);

$hu-min-width-types: (
  0: 0,
  100: 100%,
  100vw: 100vw,
  none: none,
);
```

### hu-momentum-scrolling

```
momentum-scrolling -> -webkit-overflow-scrolling
```

```scss
$hu-momentum-scrolling-alias: momentum-scrolling;

$hu-momentum-scrolling-modules: (base);
```

```css
.momentum-scrolling {
  -webkit-overflow-scrolling: touch;
}
```

### hu-opacity

```scss
$hu-opacity-alias: "";

$hu-opacity-modules: (base, focus, hover, hocus, group-hover, group-state, state);

$hu-opacity-types: (
  0: 0,
  10: 0.1,
  20: 0.2,
  25: 0.25,
  30: 0.3,
  40: 0.4,
  50: 0.5,
  60: 0.6,
  70: 0.7,
  75: 0.75,
  80: 0.8,
  90: 0.9,
  100: 1,
);
```

### hu-order

```scss
$hu-order-alias: "";

$hu-order-modules: (base, responsive);

$hu-order-types: (
  0,
  1,
  2,
  3,
  4,
  5,
);
```

### hu-outline

```scss
$hu-outline-alias: "";

$hu-outline-modules: (focus, hocus);

$hu-outline-types: (
  none,
);
```

### hu-overflow

```scss
$hu-overflow-alias: "";

$hu-overflow-modules: (base, print, responsive);

$hu-overflow-types: (
  auto,
  hidden,
  visible,
);
```

### hu-overflow-x

```scss
$hu-overflow-x-alias: "";

$hu-overflow-x-modules: $hu-overflow-modules;

$hu-overflow-x-types: $hu-overflow-types;
```

### hu-overflow-y

```scss
$hu-overflow-y-alias: "";

$hu-overflow-y-modules: $hu-overflow-modules;

$hu-overflow-y-types: $hu-overflow-types;
```

### hu-overscroll-behavior

```scss
$hu-overscroll-behavior-alias: "";

$hu-overscroll-behavior-modules: (base);

$hu-overscroll-behavior-types: (
  auto,
  contain,
  none,
);
```

### hu-padding

```scss
$hu-padding-modules: $hu-margin-modules;

$hu-padding-scale: $hu-spacing-scale;

$hu-padding-types: (
  padding: padding,
  padding-bottom: padding-bottom,
  padding-left: padding-left,
  padding-right: padding-right,
  padding-top: padding-top,
  padding-horizontal: (padding-left, padding-right),
  padding-vertical: (padding-bottom, padding-top),
);
```

### hu-pointer-events

```scss
$hu-pointer-events-modules: (base, group-state, state);

$hu-pointer-events-types: (
  auto,
  none,
);
```

### hu-pos

```
pos -> bottom, left, right, top
```

```scss
$hu-pos-modules: (base, group-state, responsive, state);

$hu-pos-scale: (
  0: 0,
  50: 50%,
  100: 100%,
  auto: auto,
);

$hu-pos-types: (
  pos-bottom: bottom,
  pos-bottom-left: (bottom, left),
  pos-bottom-right: (bottom, right),
  pos-left: left,
  pos-right: right,
  pos-top: top,
  pos-top-left: (left, top),
  pos-top-left-bottom-right: (bottom, left, right, top),
  pos-top-right: (right, top),
);
```

### hu-position

```scss
$hu-position-alias: "";

$hu-position-modules: (base, hocus, group-hover, group-state, responsive, state);

$hu-position-types: (
  absolute,
  fixed,
  relative,
  static,
  sticky,
);
```

### hu-rotate

```
rotate -> transform: rotate
```

```scss
$hu-rotate-alias: rotate;

$hu-rotate-modules: ();

$hu-rotate-types: (
  -360: -360deg,
  -270: -270deg,
  -180: -180deg,
  -90: -90deg,
  -45: -45deg,
  0: 0,
  45: 45deg,
  90: 90deg,
  180: 180deg,
  270: 270deg,
  360: 360deg,
);
```

### hu-scale

```
scale -> transform: scale
```

```scss
$hu-scale-alias: scale;

$hu-scale-modules: (hocus);

$hu-scale-types: (
  0: 0,
  50: 0.5,
  80: 0.8,
  85: 0.85,
  90: 0.9,
  95: 0.95,
  100: 1,
  105: 1.05,
  110: 1.1,
  115: 1.15,
  120: 1.2,
  150: 1.5,
);
```

### hu-scroll-behavior

```scss
$hu-scroll-behavior-alias: "";

$hu-scroll-behavior-modules: (base);

$hu-scroll-behavior-types: (
  auto,
  smooth,
);
```

### hu-svg-fill-color

```
svg-fill-color -> fill
```

```scss
$hu-svg-fill-color-alias: svg-fill-color;

$hu-svg-fill-color-modules: (base, group-hover);

$hu-svg-fill-color-types: map-merge((current: (current: currentColor)), $hu-colors);
```

### hu-svg-fill-rule

```
svg-fill-rule -> fill-rule
```

```scss
$hu-svg-fill-rule-alias: svg-fill-rule;

$hu-svg-fill-rule-modules: (base);

$hu-svg-fill-rule-types: (
  even-odd: evenodd,
);
```

### hu-svg-stroke-color

```
svg-stroke-color -> stroke
```

```scss
$hu-svg-stroke-color-alias: svg-stroke-color;

$hu-svg-stroke-color-modules: $hu-svg-fill-color-modules;

$hu-svg-stroke-color-types: $hu-svg-fill-color-types;
```

### hu-table-layout

```scss
$hu-table-layout-alias: "";

$hu-table-layout-modules: (base);

$hu-table-layout-types: (
  auto,
  fixed,
);
```

### hu-text-align

```scss
$hu-text-align-alias: "";

$hu-text-align-modules: (base, responsive);

$hu-text-align-types: (
  center,
  justify,
  left,
  right,
);
```

### hu-text-decoration

```scss
$hu-text-decoration-alias: "";

$hu-text-decoration-modules: (base, hocus);

$hu-text-decoration-types: (
  line-through,
  none,
  underline,
);
```

### hu-text-shadow

```scss
$hu-text-shadow-alias: "";

$hu-text-shadow-modules: ();

$hu-text-shadow-types: ();
```

### hu-text-transform

```scss
$hu-text-transform-alias: "";

$hu-text-transform-modules: (base);

$hu-text-transform-types: (
  capitalize,
  lowercase,
  none,
  uppercase,
);
```

### hu-theme-background-color

```
theme__[$hu-background-color-alias] -> background-color
```

*Inherits all of `hu-background-color`’s `alias`, `modules` and `types` variables.*

### hu-theme-border-color

```
theme__border-color -> border-color
```

*Inherits all of `hu-border-color`’s `modules`, `sides` and `types` variables.*

### hu-theme-color

```
theme__[$hu-color-alias] -> color
```

*Inherits all of `hu-color`’s `alias`, `modules` and `types` variables.*

### hu-transform

```scss
$hu-transform-alias: "";

$hu-transform-modules: ();

$hu-transform-types: ();
```

### hu-transition

```scss
$hu-transition-alias: "";

$hu-transition-modules: ();

$hu-transition-types: ();
```

### hu-transition-delay

```scss
$hu-transition-delay-alias: "";

$hu-transition-delay-modules: (base, group-hover, group-state, reduced-motion, state);

$hu-transition-delay-types: (
  0: 0s,
  100: 0.1s,
  200: 0.2s,
  300: 0.3s,
  400: 0.4s,
  500: 0.5s,
  1000: 1s,
);
```

### hu-transition-duration

```scss
$hu-transition-duration-alias: "";

$hu-transition-duration-modules: (base, group-hover, group-state, reduced-motion, state);

$hu-transition-duration-types: (
  0: 0s,
  100: 0.1s,
  200: 0.2s,
  300: 0.3s,
  400: 0.4s,
  500: 0.5s,
  1000: 1s,
);
```

### hu-transition-easing

```
transition-easing -> transition-timing-function
```

```scss
$hu-transition-easing-alias: transition-easing;

$hu-transition-easing-modules: (base, group-hover, group-state, reduced-motion, state);

$hu-transition-easing-types: $hu-animation-easing-types;
```

### hu-transition-property

```scss
$hu-transition-property-alias: "";

$hu-transition-property-modules: (base, group-hover, group-state, reduced-motion, state);

$hu-transition-property-types: (
  all,
  background-color,
  color,
  height,
  opacity,
  transform,
  visibility,
  width,
  none,
);
```

### hu-translate-x

```
translate-x -> transform: translateX
```

```scss
$hu-translate-x-alias: translate-x;

$hu-translate-x-modules: (base);

$hu-translate-x-types: (
  -100: -100%,
  -50: -50%,
  0: 0,
  50: 50%,
  100: 100%,
);
```

### hu-translate-y

```
translate-y -> transform: translateY
```
```scss
$hu-translate-y-alias: translate-y;

$hu-translate-y-modules: $hu-translate-x-modules;

$hu-translate-y-types: $hu-translate-x-types;
```

### hu-truncate-text

```scss
$hu-truncate-text-alias: "";

$hu-truncate-text-modules: (base);
```

```css
.truncate-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

### hu-vertical-align

```scss
$hu-vertical-align-alias: "";

$hu-vertical-align-modules: (base);

$hu-vertical-align-types: (
  baseline,
  bottom,
  middle,
  text-bottom,
  text-top,
  top,
);
```

### hu-visibility

```scss
$hu-visibility-alias: "";

$hu-visibility-modules: (base, hocus, group-hover, group-state, print, responsive, state);

$hu-visibility-types: (
  hidden,
  visible,
);
```

### hu-visually-hidden

```scss
$hu-visually-hidden-alias: visually-hidden;

$hu-visually-hidden-modules: (base);
```

```css
.visually-hidden {
  border: none;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

### hu-white-space

```scss
$hu-white-space-alias: "";

$hu-white-space-modules: (base);

$hu-white-space-types: (
  no-wrap: nowrap,
  normal: normal,
  pre: pre,
  pre-line: pre-line,
  pre-wrap: pre-wrap,
);
```

### hu-width

```scss
$hu-width-alias: "";

$hu-width-modules: (base, print, responsive);

$hu-width-types: (
  0: 0,
  5: 5%,
  10: 10%,
  16: 16.66667%,
  20: 20%,
  25: 25%,
  30: 30%,
  33: 33.33333%,
  40: 40%,
  50: 50%,
  60: 60%,
  70: 70%,
  75: 75%,
  80: 80%,
  83: 83.33333%,
  90: 90%,
  100: 100%,
  100vw: 100vw,
  auto: auto,
);
```

### hu-z-index

```scss
$hu-z-index-alias: "";

$hu-z-index-modules: (base, hocus, group-hover, group-state, state);

$hu-z-index-types: (
  auto,
  inherit,
  -1,
  0,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  1000,
  9999,
);
```