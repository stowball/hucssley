# Hucssley

Hucssley is very different to traditional frameworks like Bootstrap or Semantic UI, as it contains zero pre-built UI components, instead providing you with the atomic building blocks necessary for **you** to create any UI component.

It honours the groundwork laid by earlier utility class libraries such as [Tachyons](https://tachyons.io) and [Tailwind](https://tailwindcss.com), while hoping to address some of their deficiencies.

To that end, Hucssley has a few goals:

1. To be incredibly easy to learn and use, by providing a system of atomic classes that mostly map 1:1 with existing CSS properties.
2. To allow anyone of any skill to rapidly build for the web without unknowingly causing CSS bloat or fighting against some of CSS’s core, but sometimes difficult to understand principals.
3. To provide the tools required to build UI for any breakpoint, user interaction or UI state.
4. To be completely platform agnostic and portable between front-end stacks, with Sass being the only dependency.
5. To be highly flexible to your needs, with the ability to easily customize existing classes and create new ones.

To understand the reasoning behind its creation, please read [Rethinking CSS](/rethinking-css.md).

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [What’s in the box?](#whats-in-the-box)
- [A working example](#a-working-example)
- [Why Hucssley?](#why-hucssley)
- [Installation](#installation)
- [Modules](#modules)
  - [Base: `base`](#base-base)
    - [Non-parent modules: `visited, focus, hocus, hover, active, print, reduced-motion, responsive`](#non-parent-modules-visited-focus-hocus-hover-active-print-reduced-motion-responsive)
  - [State modules: `state`](#state-modules-state)
  - [Group modules: `group-focus, group-hover, group-hocus, group-state`](#group-modules-group-focus-group-hover-group-hocus-group-state)
  - [Custom parent modules](#custom-parent-modules)
  - [Combining modules: `responsive` and `visited, focus, hover, hocus, active, state, group-hover, group-state`](#combining-modules-responsive-and-visited-focus-hover-hocus-active-state-group-hover-group-state)
- [Scales](#scales)
- [Configuration](#configuration)
  - [Configuration helpers](#configuration-helpers)
    - [`hu-append` and `hu-prepend`](#hu-append-and-hu-prepend)
    - [`hu-get`](#hu-get)
    - [`hu-em` and `hu-rem`](#hu-em-and-hu-rem)
    - [`hu-tint` and `hu-shade`](#hu-tint-and-hu-shade)
  - [Reset](#reset)
  - [Global](#global)
    - [Colors: `$hu-colors`](#colors-hu-colors)
    - [Media queries: `$hu-media-queries`](#media-queries-hu-media-queries)
    - [UI states: `$hu-states`](#ui-states-hu-states)
    - [Spacing scale: `$hu-spacing-scale`](#spacing-scale-hu-spacing-scale)
    - [Borders: `$hu-border-modules`, `$hu-border-sides` and `$hu-border-types`](#borders-hu-border-modules-hu-border-sides-and-hu-border-types)
    - [Controlling focus: `$hu-focus-parent` and `$hu-focus-pseudo`](#controlling-focus-hu-focus-parent-and-hu-focus-pseudo)
    - [Themes: `$hu-themes`](#themes-hu-themes)
    - [Namespace: `$hu-namespace`](#namespace-hu-namespace)
    - [Use important: `$hu-use-important`](#use-important-hu-use-important)
    - [Debug: `$hu-debug`](#debug-hu-debug)
  - [Classes](#classes)
- [Creating custom classes](#creating-custom-classes)
  - [Customizing “placeholder” classes](#customizing-placeholder-classes)
  - [Creating new, “basic” classes](#creating-new-basic-classes)
    - [Generic classes: `hu-classes`](#generic-classes-hu-classes)
      - [Basic](#basic)
      - [Custom class name](#custom-class-name)
      - [Unique class with multiple declarations](#unique-class-with-multiple-declarations)
      - [Pseudo classes](#pseudo-classes)
      - [Parent classes](#parent-classes)
    - [Pseudo classes: `hu-pseudo-classes`](#pseudo-classes-hu-pseudo-classes)
    - [Parent classes: `hu-parent-classes`](#parent-classes-hu-parent-classes)
  - [Creating new, “more complex” classes](#creating-new-more-complex-classes)
    - [Helper Functions](#helper-functions)
      - [`hu-class-name`](#hu-class-name)
      - [`hu-format-modules`](#hu-format-modules)
      - [`hu-important`](#hu-important)
    - [Mixins](#mixins)
      - [`hu-generic`](#hu-generic)
      - [`hu-responsive`](#hu-responsive)
      - [`hu-parent`](#hu-parent)
      - [`hu-parent-responsive`](#hu-parent-responsive)
      - [`hu-pseudo`](#hu-pseudo)
      - [`hu-pseudo-responsive`](#hu-pseudo-responsive)
    - [Defining the variables](#defining-the-variables)
    - [Writing the class logic](#writing-the-class-logic)
      - [Creating custom pseudo classes](#creating-custom-pseudo-classes)
      - [Creating custom parent classes](#creating-custom-parent-classes)
- [Creating components](#creating-components)
  - [Component definition](#component-definition)
  - [Using the component](#using-the-component)
- [Increasing specificity](#increasing-specificity)
  - [Forcing `!important`](#forcing-important)
  - [Quarantining with a descendent selector](#quarantining-with-a-descendent-selector)
- [Controlling file size](#controlling-file-size)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

## What’s in the box?

Currently, Hucssley provides utility classes for over 110 CSS properties, of which multiple, sensible default values are generated. Each utility is also created for various “modules”, whether that’s at certain media queries, UI states, user interactions, for print or more.

Each utility is completely customizable; they can be partially renamed, have values changed, have their modules altered or be omitted entirely.

By default, Hucssley does not output classes for things that don’t map explicitly to specific property types (such as `box-shadow`, background gradients and `transform`), but it does provide placeholder variables for these to make tailored, [custom classes simple to create](#creating-custom-classes).

Hucssley also provides utility classes for truncating text and making elements “visually hidden” for accessibility purposes.

For a complete list of the class names provided and how they can be customized, read [Hucssley classes](/hucssley-classes.md).

Hucssley also comes with:

* A sensible, optional CSS reset to make building UI easier and more consistent.
* Functions for converting `px` values to `em` and `rem` for improved accessibilty.
* Functions to incrementally darken (`shade`) or lighten (`tint`) colors.
* The ability to theme elements based off a parent selector.
* The ability to create classes scoped to custom parent selectors.
* The ability to create classes that map to pseudo-classes and pseudo-selectors.

---

## A working example

The following example demonstrates how you can use Hucssley out-of-the-box to easily create a responsive, accessible, interactive component.

```html
<div class="
  background-color:blue-0
  padding:500
">
  <div class="
    align-items:center
    background-color:neutral-0
    border-color:neutral-200
    border-radius:500
    border-style:solid
    border-width:100
    display:flex
    flex-direction:column
    padding:500
    text-align:center
    @mq-768--flex-direction:row
    @mq-768--text-align:left
  ">
   <img
      alt=""
      class="
        background-color:blue-600
        border-color:neutral-100
        border-radius:1000
        border-style:solid
        border-width:200
        margin-bottom:400
        width:50
        @mq-600--width:30
        @mq-768--margin-bottom:0
        @mq-768--margin-right:500
        @mq-768--width:20
      "
      src="https://hireup.cdn.prismic.io/hireup/89e15301c28e6396927d85e38e9c5d5833ebab09_kyle_357-bonnie.png"
    />
    <div>
      <p class="
        font-size:600
        font-weight:700
        line-height:200
        margin-bottom:400
      ">
        Disability support workers who love what you love
      </p>
      <a
        class="
          background-color:blue-900
          border-color:neutral-700
          color:neutral-0
          display:inline-block
          padding-horizontal:400
          padding-vertical:300
          transition-duration:200
          transition-easing:ease
          transition-property:all
          &:hocus--background-color:blue-600
          &:hocus--scale:105
          @mq-768--padding-horizontal:500
          @mq-768--padding-vertical:400
        "
        href="#"
      >
        Find your connection
      </a>
    </div>
  </div>
</div>
```

**You can see a live version here: https://codepen.io/stowball/full/WBoxOj**

---

## Why Hucssley?

With [so many CSS utility libraries](https://css-tricks.com/need-css-utility-library/) already in existence, and with Tailwind being an extremely popular, close alternative, why does Hucssley exist and why might you want to use it?

Well, we wanted to [solve a lot of the problems](/rethinking-css.md) developers have with “normal” CSS and the ones Adam Silver poses in [The problem with atomic CSS](https://adamsilver.io/articles/the-problem-with-atomic-css/).

Firstly, most utility libraries are hard to read, and more importantly hard to learn. They often use an obtuse, inconsistent syntax which has you reaching for the docs more often than you should. With Hucssley, the focus has been: “if you know CSS properties, you know Hucssley”.

Also, by using Sass under the hood, it supports an extremely deep pool of developers who already know the language and its wealth of features, and has great documentation and resources to boot.

With other libraries, while the initial implementation period is very promising, it’s when you hit the harder, more uncommon issues that you start to struggle. Out-of-the-box, Hucssley wants to provide you with all of the tools to build any UI regardless of the condition. This means we support every type of media query, theming, pseudo selectors, user interaction states (`:hover`, `:focus-visible`), UI states (`is-expanded`, `is-loading`), and any kind of parent selector (for use with things like browser detection libraries, or element query polyfills).

Lastly, Hucssley tries to be extremely flexible and easily configurable. While it provides many more classes and features than other libraries OOTB, if it doesn’t provide something you need, it’s hopefully very easy to build what you need in a consistent, Hucssley manner.

So with you now intrigued, read the rest of the docs, have a play, and fall in love with building UI…

---

## Installation

While Hucssley is still in early development, it has not been published to npm. However, you can still add it as a `dependency` of your project with:

```sh
npm install github:stowball/hucssley#master
```

If you want to use Hucssley as it comes, then it’s as simple as:

```scss
@import "path_to_node_modules/hucssley/src/index";
```

However, if you want to customize Hucssley, we recommend taking this approach:

```scss
@import "path_to_node_modules/hucssley/src/helpers";

@import "path_to_node_modules/hucssley/src/variables/global/index";
// @import "custom/variables/global/index";

@import "path_to_node_modules/hucssley/src/variables/classes/index";
// @import "custom/variables/classes/index";
// set class overrides before if you don’t need access to the defaults & want changes to flow through referenced vars

@import "path_to_node_modules/hucssley/src/variables/reset/index";
// @import "custom/variables/reset/index";

@import "path_to_node_modules/hucssley/src/styles";
// @import "custom/classes/index";
```


*Note: If you are using webpack, you can leverage [its advanced mechanism to resolve files](https://github.com/webpack-contrib/sass-loader#imports) by replacing the path to `node_modules` with a `~`, like so:*

```scss
@import "~hucssley/src/index";
```

---

## Modules

The following core modules are available for all classes: `base`, `focus`, `hover`, `hocus`, `state`, `group-hover`, `group-state`, `reduced-motion`, `print` and `responsive`.

You can also use modules to generate pseudo and custom parent classes. Please read [Understanding class configuration: Modules](/hucssley-classes.md#modules) and [Generic classes: `hu-classes`](#generic-classes-hu-classes) for more information.

### Base: `base`

Base classes in Hucssley roughly equate to a standard version of a CSS property and value:

This declaration:

```css
align-items: flex-end;
```

would be available as the following base class:

```css
.align-items:flex-end
```

The property becomes the class name preceding the `:` and the value follows it.

Some classes deviate by default though:

```css
animation-count -> animation-iteration-count
animation-easing -> animation-timing-function
animation-mode -> animation-fill-mode
animation-state -> animation-play-state
momentum-scrolling -> -webkit-overflow-scrolling
pos-[bottom,left,right,top] -> bottom,left,right,top
rotate -> transform: rotate
scale -> transform: scale
size -> height & width
svg-fill-color -> fill
svg-fill-rule -> fill-rule
svg-stroke-color -> stroke
transition-easing -> transition-timing-function
translate-x -> transform: translateX
translate-y -> transform: translateY
```

All of the above aliases – and every other class alias – can be changed to your liking, however. Please read [Understanding class configuration: Aliases](/hucssley-classes.md#aliases) for more details.

*Note: If a global namespace has been configured, it will always precede the base class name.*

#### Non-parent modules: `visited, focus, hocus, hover, active, print, reduced-motion, responsive`

When you want to use class names scoped to “non-parent” modules, it follows a pattern of `[module-name][-module-variant]?--[base-class]`, for instance:

```css
.@mq-768--align-items:center
.&:hocus--color:neutral-1000
.@print--flex-direction:column
```

In the above example, `&:hocus` is a shortcut module for `:hover, :focus`, and `@mq-768` is for a `(min-width: 768px)` media query.

The `:active`, `:focus`, `:hover` and `:visited` pseudo-classes are automatically ordered to the [LVHA system](https://developer.mozilla.org/en-US/docs/Web/CSS/:active) to ensure links and buttons are styled predictably.

*Note: top-level pseudo classes are prefixed with `&`.*

### State modules: `state`

State modules allow you to change the UI based on a particular state, and follows the pattern `[state-name]--[base-class]`:

```css
.is-expanded--visibility:visible
.is-disabled--opacity:30
```

For state classes to become active, you need to apply the raw state name as an additional class on the element (often via JavaScript):

```diff
<div class="
  display:none
  is-open--display:block
+ is-open
"></div>
```

### Group modules: `group-focus, group-hover, group-hocus, group-state`

With groups, you can style child elements when interacting with a generic parent element (`:focus` and/or `:hover`), or when it’s in a particular UI state. Their syntax is `group[group-type]__[base-class]`:

```
.group:focus__scale:110
.group:hover__scale:110
.group:hocus__scale:110 // both :focus and :hover
.group-is-selected__background-color:blue-300
```

For `group` classes to take effect, a parent has to be given the raw `.group` class, and raw state class if applicable:

```diff
<html>
  …
  <div class="
    group
+   is-selected
  ">
    <ul class="
      group:hover__scale:110
      group-is-selected__background-color:blue-300
    "></ul>
  </div>
</html>
```

Be careful when using groups, because they will affect all `.group…__` children. A child `.group` does not reset the actions of a parent `.group`, so you could end up with unexpected behaviour. It’s recommended to use groups on ancestors that are near to leaf nodes.

### Custom parent modules

Similar to groups, Hucssley allows you to use any kind of parent selector to affect and style children. However, unlike groups, custom parent selectors allow you to explicitly quarantine and contain these styling side effects.

Possible use cases are for a browser detection library that may add `browser-mobile`, `browser-ie` etc to `<html>`, or an element/container queries alternative like [eqio](https://github.com/stowball/eqio), that adds classes such as `eqio->400` to a parent element, and would be targetable with `eqio->400__flex-direction:row` for example.

Their syntax is `[parent-name]__[base-class]`:

```html
<html class="browser-mobile">
  …
  <div class="browser-mobile__font-size:700">
    …
  </div>
</html>
```

In the above example, we used a `browser-mobile__font-size:700` class name, which, while not included in Hucssley by default, hopefully illustrates how it can be used to style elements by any library or approach that adds a class like `browser-mobile` to a parent element.

For more information, please read [Parent classes](#parent-classes-hu-parent-classes).

### Combining modules: `responsive` and `visited, focus, hover, hocus, active, state, group-hover, group-state`

When a particular class is configured to use the `responsive` module, it will also output `focus`, `hover`, `hocus`, `state`, `group-hover` and `group-state` classes should they have also been configured.

Here the syntax is:

* `@mq-[responsive-scale]:visited--[base-class]` for `visited`
* `@mq-[responsive-scale]:focus--[base-class]` for `focus`
* `@mq-[responsive-scale]:hover--[base-class]` for `hover`
* `@mq-[responsive-scale]:hocus--[base-class]` for `hocus`
* `@mq-[responsive-scale]:active--[base-class]` for `active`
* `@mq-[responsive-scale]-[state-name]--[base-class]` for `state`s
* `group:hover__@mq-[responsive-scale]--[base-class]` for `group-hover`
* `group-[state-name]__@mq-[responsive-scale]--[base-class]` for `group-state`

Which results in:

```css
.@mq-480:active--color:neutral-1000
.@mq-600-is-expanded--display:flex
.group:hover__@mq-768--display:block
.group-is-collapsed__@mq-1024--height:0
```

## Scales

Where it makes sense, and compared with other libraries, Hucssley favours a millennial scale (`0` - `1000`) to represent values instead of “names” like `xxl`, `mama-bear` etc. This can of course be completely customized.

By default, the following classes use a millennial scale:

* `background-color`
* `border-color`
* `border-radius`
* `border-width`
* `color`
* `font-size`
* `letter-spacing`
* `line-height`
* `margin`
* `padding`
* `transition-delay`
* `transition-duration`

While others, like `opacity` and `scale` use values more relevant to your conceptual model.

## Configuration

To override the default configuration in Hucssley, you’ll need to understand the basic syntax of Sass [variables](https://sass-lang.com/documentation/variables), [lists](https://sass-lang.com/documentation/values/lists) and [maps](https://sass-lang.com/documentation/values/maps).

Hucssley’s configuration is split in to 3 sections: `reset`, `global` and `classes`.

* **Reset** configuration uses plain variables to customize “generic” styles like whether `box-sizing: border-box` should be used by default.
* **Global** configuration mostly uses maps to handle things like the default media queries, colors, spacings, UI states and themes.
* **Classes** provides list and map variables to adjust the modules, and values for each class individually. Some classes (like those which deal with color) inherit from the same base variable by default, so only 1 change is required to affect all `border-color`, `background-color` and `color` classes. All classes can be generated at the individual modules described above.

As detailed in the [Installation](#installation) section, there is a preferred way of organizing any configuration overrides.

### Configuration helpers

Hucssley provides several functions that can assist you with modifying the existing configuration or configuring custom classes:

#### `hu-append` and `hu-prepend`

```scss
@function hu-append($source, $target);

hu-append((a, b), (c));
// -> (a, b, c)
```

Will append the `$target` list or map to the `$source` list or map.

```scss
@function hu-prepend($source, $target);

hu-prepend((a, b), (c));
// -> (c, a, b)
```

Will prepend the `$target` list or map to the `$source` list or map.

With both of the above functions, they have to be of the same type. When used with maps, they actually perform a `map-merge`, so existing keys in `$source` will also be overwritten with `$target`'s, should they exist there.

#### `hu-get`

```scss
@function hu-get($list-or-map, $path, $stack-trace-name?);

hu-get($hu-colors, neutral 1000);
// -> #1a1a1a

hu-get($hu-font-weight-types, 700);
// -> 700
```

Gets the value at a specific path within a map or list.

#### `hu-em` and `hu-rem`

```scss
@function hu-em($target, $context: 16);

hu-em(20px);
// -> 1.25em
```

Will convert a target pixel value to its `em` equivalent.

```scss
@function hu-rem($target, $context: 16);

hu-rem(24px);
// -> 1.5rem
```

Will convert a target pixel value to its `rem` equivalent.

#### `hu-tint` and `hu-shade`

```scss
@function hu-tint($color, $percentage);

hu-tint(#361110, 40);
// -> #be3c38;
```

Will mix the specified `$color` with a `$percentage` of white.

```scss
@function hu-shade($color, $percentage);

hu-shade(#361110, 40);
// -> #200a0a;
```

Will mix the specified `$color` with a `$percentage` of black.

### Reset

Here is a list of variables and default values that are available to customize the CSS reset:

```scss
$hu-reset: true;
$hu-reset-box-sizing: border-box;
$hu-reset-html-background-color: #fff;
$hu-reset-html-color: null;
$hu-reset-html-font-family: sans-serif;
$hu-reset-html-font-size: $hu-f-rem-context;
$hu-reset-html-font-smoothing: true;
$hu-reset-html-line-height: 1.25;
$hu-reset-html-overflow-y: null;
$hu-reset-img-responsive: false;
$hu-reset-input-placeholder-color: #767676;
$hu-reset-remove-number-input-spinners: true;
$hu-reset-text-input-appearance: textfield;
```

Hopefully the variables are self explanatory, but if not, please [review the source code](/src/reset/_index.scss) to see how they affect the reset styles.

If you wish to disable default values, you can simply set the appropriate variable to `null`.

You can also use [`hu-get`](#hu-get) to set the variables to values defined in other list and map variables, for example:

```scss
$hu-reset-html-color: hu-get($hu-colors, "neutral" 800);
```

### Global

#### Colors: `$hu-colors`

To get you started, Hucssley provides a generous palette of colors in the spectrum at multiple scales, as well as for keywords like `inherit` and `transparent`:

```scss
$hu-colors: (
  "neutral": (
    0: #ffffff,
    …
    500: #858585,
    …
    1000: #131313,
  ),
  "red": (
    0: #fdf2f1,
    …
    500: #de3f35,
    …
    1000: #1f0705,
  ),
  "orange": (
    0: #fef7f2,
    …
    500: #f58949,
    …
    1000: #271002,
  ),
  "yellow": (
    0: #fefaeb,
    …
    500: #f4cb39,
    …
    1000: #251d02,
  ),
  "green": (
    0: #f0fcf5,
    …
    500: #2dd86c,
    …
    1000: #051d0e,
  ),
  "blue": (
    0: #f0f7fc,
    …
    500: #2d8dd8,
    …
    1000: #05121d,
  ),
  "indigo": (
    0: #f3f0fc,
    …
    500: #5a2dd8,
    …
    1000: #0b051d,
  ),
  "violet": (
    0: #fcf0fb,
    …
    500: #d82dc7,
    …
    1000: #1d051a,
  ),
);
```

**You can see the rendered palette here: https://codepen.io/stowball/full/JqbGvK**

To customize the palette, you can either `hu-append` or `hu-prepend` other maps to complement the existing, or start fresh by re-assigning `$hu-colors` to a new map of colors entirely.

We recommend also `hu-append`ing `$hu-colors-keywords` to your brand new palette to ensure you can use classes like `background-color:transparent` and `color:inherit`;

Here is an example of setting a completely new palette:

```scss
$hu-colors: hu-append($hu-colors-keywords, (
  neutral: (
    0: #fff,
    100: #fafbfd,
    200: #f9fafc,
    300: #f1f4f8,
    400: #f1f1f1,
    500: #e0e1e2,
    600: #aeaeae,
    700: #888,
    800: #626262,
    900: #495b60,
    1000: #140a01,
  ),
  blue: (
    100: #f3f9ff,
    300: #cff5fa,
    400: #afeff7,
    600: #00c2da,
    1000: #003453,
  ),
  yellow: (
    200: #fdf8c2,
    300: #fbf5ac,
  ),
  green: (
    1000: #17653b,
  ),
  red: (
    100: #fffdfc,
    1000: #b40b00,
  ),
));
```

#### Media queries: `$hu-media-queries`

Out-of-the-box, Hucssley provides the following 5 breakpoint values, with all being output for every `responsive` class name. It can be modified or replaced entirely to suit your project.

```scss
$hu-media-queries: (
  480: hu-em(480),
  600: hu-em(600),
  768: hu-em(768),
  1024: hu-em(1024),
  1280: hu-em(1280),
);
```

If the value of an `$hu-media-queries` key is a number, it will compile it to a `(min-width: [value])` media query.

If, however, you provide a map with any of the following keys: `min-h`, `max-h`, `min-w`, `max-w`, and `orientation`, then appropriate `(min-height)`, `(max-height)`, `(min-width)`, `(max-width)` and `(orientation)` media queries will be output.

Another special `other` key is also supported, which, when supplied with a map of key/value pairs will also output those as media query conditions, which will allow you to target every kind of [feature](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features).

If multiple keys exist, each media query condition will be combined with the `and` operator.

To demonstrate:

```scss
$hu-media-queries: (
  600: hu-em(600),
  min-h-200: (min-h: hu-em(200)),
  max-h-400: (max-h: hu-em(400)),
  min-w-300: (min-w: hu-em(300)),
  max-w-500: (max-w: hu-em(500)),
  min-w-300-max-w-500: (min-w: hu-em(300), max-w: hu-em(500)),
  landscape: (orientation: landscape),
  coarse: (other: (pointer: coarse)),
  min-res-200: (other: (min-resolution: 200dpi)),
  all: (
    min-h: hu-em(200),
    max-h: hu-em(400),
    min-w: hu-em(300),
    max-w: hu-em(500),
    orientation: landscape,
    other: (pointer: coarse, min-resolution: 200dpi)
  ),
);
```

would generate the following `@mq-` classes:

```css
@media (min-width: 37.5em) {
  .@mq-600--… { … }
}

@media (min-height: 12.5em) {
  .@mq-min-h-200--… { … }
}

@media (max-height: 25em) {
  .@mq-max-h-400--… { … }
}

@media (min-width: 18.75em) {
  .@mq-min-w-300--… { … }
}

@media (max-width: 31.25em) {
  .@mq-max-w-500--… { … }
}

@media (min-width: 18.75em) and (max-width: 31.25em) {
  .@mq-min-w-300-max-w-500--… { … }
}

@media (orientation: landscape) {
  .@mq-landscape--… { … }
}

@media (pointer: coarse) {
  .@mq-coarse--… { … }
}

@media (min-resolution: 200dpi) {
  .@mq-min-res-200--… { … }
}

@media (min-height: 12.5em) and (max-height: 25em) and (min-width: 18.75em) and (max-width: 31.25em) and (orientation: landscape) and (pointer: coarse) and (min-resolution: 200dpi) {
  .@mq-all--… { … }
}
```

Notice how, apart from the `@mq-` prefix, Hucssley does not dictate the media query class name format, so, should you wish to use ranges like `small` or `medium`, or device types like `tablet`, or `desktop`, it’s entirely up to you.

#### UI states: `$hu-states`

Out-of-the-box, Hucssley provides the following 10 UI state values, with all being output for every `state` and `group-state` class name. It can be modified or replaced entirely to suit your project.

```scss
$hu-states: (
  is-closed,
  is-collapsed,
  is-disabled,
  is-expanded,
  is-hidden,
  is-loading,
  is-open,
  is-pressed,
  is-selected,
  is-visible,
);
```

*Note: UI states generated by class names are not sufficient enough to produce fully accessible interfaces, so please ensure you also implement the correct [ARIA states and properties](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties) where necessary.*

#### Spacing scale: `$hu-spacing-scale`

By default, `margin` and `padding` classes are generated from the spacing scale defined in `$hu-spacing-scale`.

```scss
$hu-spacing-scale: (
  0: 0,
  100: hu-rem(2),
  200: hu-rem(4),
  300: hu-rem(8),
  400: hu-rem(16),
  500: hu-rem(24),
  600: hu-rem(32),
  700: hu-rem(48),
  800: hu-rem(64),
  auto: auto,
);
```

You can easily amend or override any of these values to suit your project.

#### Borders: `$hu-border-modules`, `$hu-border-sides` and `$hu-border-types`

By default, `.border-color`, `.border-style` and `.border-width` classes use 2 or 3 of the global border variables to control which modules, sides and colors they’re output at.

```scss
$hu-border-modules: (base);

$hu-border-sides: (
  border: border,
  border-bottom: border-bottom,
  border-left: border-left,
  border-right: border-right,
  border-top: border-top,
  border-horizontal: (border-left, border-right),
  border-vertical: (border-bottom, border-top),
);

$hu-border-types: $hu-colors;
```

In conjunction with variables specific to each class name, classes like the following are generated:

```css
.border-color:neutral-0
.border-vertical-color:blue-600
.border-bottom-style:none
.border-horizontal-width:200
```

#### Controlling focus: `$hu-focus-parent` and `$hu-focus-pseudo`

By default, the `focus`, `group-focus`, `hocus` and `group-hocus` modules generate classes which use a `:focus` pseudo-class. This can be customized, should you wish to use `:focus-visible` or even in conjunction with a polyfill.

```scss
$hu-focus-pseudo: ":focus-visible";

/* ->
.&:focus--[class-name]:focus-visible,
.&:hocus--[class-name]:focus-visible {
  // declarations
}

.group:focus-visible group:focus__[class-name],
.group:focus-visible group:hocus__[class-name] {
  // declarations
}
*/
```

or

```scss
$hu-focus-parent: ".js-focus-visible";
$hu-focus-pseudo: ":focus:not(.focus-visible)";

/* ->
.js-focus-visible .&:focus--[class-name]:focus:not(.focus-visible),
.js-focus-visible .&:hocus--[class-name]:focus:not(.focus-visible) {
  // declarations
}

.js-focus-visible .group:focus:not(.focus-visible) group:focus__[class-name],
.js-focus-visible .group:focus:not(.focus-visible) group:hocus__[class-name] {
  // declarations
}
*/
```

#### Themes: `$hu-themes`

As well as the standard `$hu-colors`, `background-color`, `border-color` and `color` classes can also be generated for theming your application based on the key/vaue pairs in this map.

By default, no themes are provided, but making your own is easy:

```scss
$hu-themes: (
  broncos: (
    primary: #6c1d45,
    secondary: #9e2b64,
    highlight: #f8cc0d,
  ),
  knights: (
    primary: #003b73,
    secondary: #1d54a6,
    highlight: #e82c2a,
  ),
  sharks: (
    primary: #1f7eb2,
    secondary: #27a3e6,
    highlight: #95d1f2,
  ),
);
```

This would allow you to theme your entire application simply by changing a single, parent level `theme:[theme-name]` class by utilizing all the generated classes, like:

```css
.theme:broncos .theme__background-color:primary {
  background-color: #6c1d45;
}

.theme:knights .theme__color:highlight {
  color: #e82c2a;
}

.theme:sharks .theme__border-color:secondary {
  border-color: #27a3e6;
}
```

#### Namespace: `$hu-namespace`

As mentioned earlier, Hucssley provides you the opportunity to namespace the class names generated, to help ensure there’s no conflict or pollution with other possible frameworks.

```scss
$hu-namespace: `hu-`;

/* ->
.hu-align-content:center {}
…
.@mq-480--hu-flex-direction:column {}
…
.group__is-open--hu-display:flex {}
```

#### Use important: `$hu-use-important`

Determines whether all CSS declarations (including those in the [CSS reset](#reset)) are suffixed with the `!important` rule. Default is `false`.

```scss
$hu-use-important: true;

/* ->
.align-content:baseline {
  align-content: baseline !important;
}

…

.align-items:auto {
  align-items: auto !important;
}

…
*/
```

#### Debug: `$hu-debug`

With Hucssley generating every class for you, you may encounter scenarios where you need to debug the output when using [webpack’s style-loader](https://webpack.js.org/loaders/style-loader) which outputs the CSS within a `<style>` tag in the `<head>`.

By setting `$hu-debug: true;` before `@import "path_to_node_modules/hucssley/src/styles";` all of the CSS will be printed to the screen, above your UI for you to review and debug.

### Classes

Every class in Hucssley can be completely customized to individually change the properties, values and modules used.

**For details of all the classes provided by default and their configuration, please read [Hucssley classes](/hucssley-classes.md).**

---

## Creating custom classes

While Hucssley provides an abundance of classes out-of-the-box, there will absolutely be times where you need to create your own to achieve your desired UI, which is hopefully straight-forward to achieve.

### Customizing “placeholder” classes

Some of the default classes in Hucssley are merely provided as empty placeholders, because their usage is too specific to be generically useful for all projects. These placeholders help to reduce some of the “ceremony” needed with creating completely custom classes.

A good example of this is for (box) shadows. By overriding the empty `$hu-box-shadow-modules` and `$hu-box-shadow-types` variables, developers can easily output `box-shadow`s appropriate for their project.

The following snippet also demonstrates how you can use [configuration helper](#configuration-helpers) methods within your definitions:

```scss
$hu-box-shadow-modules: (base);

$hu-box-shadow-types: (
  100: 0 hu-rem(2) hu-rem(10) rgba(hu-get($hu-colors, neutral 1000), 0.1),
  200: 0 hu-rem(4) hu-rem(12) rgba(hu-get($hu-colors, neutral 1000), 0.2),
);
```

will generate:

```css
.box-shadow:100 {
  box-shadow: 0 0.125rem 0.625rem rgba(26, 26, 26, 0.1);
}

.box-shadow:200 {
  box-shadow: 0 0.25rem 0.75rem rgba(26, 26, 26, 0.2);
}
```

### Creating new, “basic” classes

For the most common needs of creating new classes, Hucssley provides 3 easy ways of creating custom “generic”, pseudo and parent utility classes.

While the following examples all use `$-modules` and `$-types` variables that are provided by Hucssley, if creating your own, fully custom classes, we recommend setting them up in a way to cater for any complexity as your project grows, thus define the variables similarly to how the defaults are done. For examples and to learn more, please read [Hucssley classes](/hucssley-classes.md).

#### Generic classes: `hu-classes`

This mixin generates all of the normal classes for a specific property, modules and types. It’s what Hucssley itself uses for 95% of the provided classes.

```
@mixin hu-classes($property, $modules, $types?);
```

It takes a `$property`, which can be either a CSS property or a map, a list or map of `$modules` and an optional list or map of `$types`. It also accepts `@content` if no `$types` are supplied.

*Note: This mixin is a wrapper around six other mixins, `hu-generic-classes()` and `hu-responsive-classes()`, `hu-pseudo-generic-classes()`, `hu-pseudo-responsive-classes()`, `hu-parent-generic-classes()` and `hu-parent-responsive-classes()
`.*

##### Basic

```scss
@include hu-classes(align-content, $hu-align-content-modules, $hu-align-content-types);

/* ->
.align-content:baseline {
  align-content: baseline;
}

.align-content:center {
  align-content: center;
}

…

@media (min-width: 22.5em) {
  .@mq-480--align-content:baseline {
    align-content: baseline;
  }

  .@mq-480--align-content:center {
    align-content: center;
  }
}

…
*/
```

##### Custom class name

By passing a map to `$property`, the map’s key becomes the core class name, and the map’s value becomes the CSS property.

```scss
@include hu-classes((transition-easing: transition-timing-function), $hu-transition-easing-modules, $hu-transition-easing-types);

/* ->
.transition-easing:ease {
  transition-timing-function: ease;
}

.transition-easing:ease-in {
  transition-timing-function: ease-in;
}

…

@media (min-width: 22.5em) {
  .is-selected.is-selected--transition-easing:ease {
    transition-timing-function: ease;
  }

  .is-selected.is-selected--transition-easing:ease-in {
    transition-timing-function: ease-in;
  }
}

…
*/
```

##### Unique class with multiple declarations

By not proving a `$type` and passing in a `@content` block, you can create “one off” classes with multiple, static declarations.

```scss
@include hu-classes(font-smoothing, $hu-font-smoothing-modules) {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

/* ->
.font-smoothing {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

@media (min-width: 22.5em) {
  .@mq-480--font-smoothing {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
}

…
*/
```

You could also use this technique to add complex `@supports` feature queries:

```scss
@include hu-classes("@supports-mix-blend-mode:multiply", (base)) {
  @supports (mix-blend-mode: multiply) {
    mix-blend-mode: multiply;
    opacity: 1;
  }
}

/* ->
@supports (mix-blend-mode: multiply) {
  .@supports-mix-blend-mode:multiply {
    mix-blend-mode: multiply;
    opacity: 1;
  }
}
*/
```

Of course, just because you can’t provide a `$type` argument to the mixin, it doesn’t mean you’re restricted from creating multiple classes, since you can easily wrap it in its own `@each` loop:

```scss
// if $types was a map, also extract the $value variable and use that in the mixin's @content
@each $type in $hu-mix-blend-mode-types {
  @include hu-classes("@supports-mix-blend-mode:#{$type}", $hu-mix-blend-mode-modules) {
    @supports (mix-blend-mode: #{$type}) {
      mix-blend-mode: $type;
    }
  }
}

/* ->
@supports (mix-blend-mode: color) {
  .@supports-mix-blend-mode:color {
    mix-blend-mode: color;
  }
}

@supports (mix-blend-mode: color-burn) {
  .@supports-mix-blend-mode:color-burn {
    mix-blend-mode: color-burn;
  }
}

…
```

If your custom utilities also needs to support the `responsive` module, then you won’t be able to use the above method exactly. You can change `@include hu-classes` to `@include hu-generic-classes`, and also manually create the responsive classes using `hu-responsive()` as described in [Writing custom class logic](#writing-the-class-logic).

##### Pseudo classes

One benefit Hucssley has over other, similar libraries is that there is a defined method for easily creating pseudo classes.

If, as described in [Understanding class configuration: Advanced modules](/hucssley-classes.md#advanced-modules), you pass `$modules` as a map with a `pseudos` key, pseudo selector classes will also be generated for the complete list of modules.

For example:

```scss
$hu-display-modules: (
  core: $hu-display-modules,
  pseudos: ("::before", ":first-child"),
);

@include hu-classes(display, $hu-display-modules, $hu-display-types);

/* ->
…

.&:before--display:block::before {
  display: block;
}

.&:first-child--display:block:first-child {
  display: block;
}

…

@media (min-width: 22.5em) {
  .@mq-480:before--display:block::before {
    display: block;
  }

  .@mq-480:first-child--display:block:first-child {
    display: block;
  }
}

…
*/
```

##### Parent classes

Another benefit of Hucssley is that you can easily create custom parent classes, such as being able to respond to a `has-js` class. It behaves similarly to the above, but you instead provide a `parents` key with a list of one or more parent selectors you want to generate classes for.

```scss
$hu-display-modules: (
  core: $hu-display-modules,
  parents: ("has-js"),
);

@include hu-classes(display, $hu-display-modules, $hu-display-types);

/* ->
…

.has-js .has-js__display:block {
  display: block;
}

.has-js .has-js__display:flex {
  display: flex;
}

…

.has-js .is-expanded.has-js__is-expanded--display:block {
  display: block;
}

.has-js .is-expanded.has-js__is-expanded--display:flex {
  display: flex;
}

…
*/
```

#### Pseudo classes: `hu-pseudo-classes`

While `hu-classes` will be suitable for most use cases, should you need, you can also explicitly create pseudo classes with the `hu-pseudo-classes()` mixin. It behaves similarly to `hu-classes()`, but you also need to pass in a list of one or more pseudo selectors you want to generate classes for.

```
@mixin hu-pseudo-classes($property, $pseudos, $modules, $types?);
```

This mixin is a wrapper around two other mixins, `hu-pseudo-generic-classes()` and `hu-pseudo-responsive-classes()`, which take exactly the same arguments.

```scss
@include hu-pseudo-classes(display, ("::before", ":first-child"), $hu-display-modules, $hu-display-types);

/* ->
.&:before--display:block::before {
  display: block;
}

.&:first-child--display:block:first-child {
  display: block;
}

.&:before--display:flex::before {
  display: flex;
}

.&:first-child--display:flex:first-child {
  display: flex;
}

…

@media (min-width: 22.5em) {
  .@mq-480:before--display:block::before {
    display: block;
  }

  .@mq-480:first-child--display:block:first-child {
    display: block;
  }

  .@mq-480:before--display:flex::before {
    display: flex;
  }

  .@mq-480:first-child--display:flex:first-child {
    display: flex;
  }
}

…
*/
```

As with `$hu-classes`, you can customize the class name by passing a map to `$property`, and you can create unique classes with multiple declarations by not proving a `$type` and passing in a `@content` block.

#### Parent classes: `hu-parent-classes`

While `hu-classes` will be suitable for most use cases, should you need, you can also explicitly create custom parent classes with the `hu-parent-classes()` mixin. It behaves similarly to `hu-pseudo-classes()`, but you instead pass in a list of one or more parent elements you want to generate classes for.

*Note: `group-focus`, `group-hover`, `group-hocus` and `group-state` modules are not used for custom parents.*

```
@mixin hu-parent-classes($property, $parents, $modules, $types?);
```

This mixin is a wrapper around two other mixins, `hu-parent-generic-classes()` and `hu-parent-responsive-classes()`, which take exactly the same arguments.

```scss
@include hu-parent-classes(display, (has-js), $hu-display-modules, $hu-display-types);

/* ->
.has-js .has-js__display:block {
  display: block;
}

.has-js .has-js__:focus--display:block:focus {
  display: flex;
}

…

@media (min-width: 22.5em) {
  .has-js .has-js__@mq-480--display:block {
    display: block;
  }

  .has-js .is-selected.has-js__@mq-480-is-selected--display:block {
    display: block;
  }
}

…
*/
```

As with `$hu-classes`, you can customize the class name by passing a map to `$property`, and you can create unique classes with multiple declarations by not proving a `$type` and passing in a `@content` block.

### Creating new, “more complex” classes

Should you need to create classes that are more complex than what the 3 basic mixins described above can provide, you can follow a defined pattern for creating your own. However, before you do, it’s worth having a basic understanding of the functions and mixins you’ll use.

#### Helper Functions

##### `hu-class-name`

This function formats a class name to append `$hu-namespace` (if applicable), convert duplicate final strings (e.g. `color:transparent-transparent` to `color:transparent`) and escape special characters like `:`, `<`, `>` and `@`.

```scss
@function hu-class-name($class-name);

hu-class-name("eqio-<520-color:transparent-transparent");
// -> hu-eqio-\<520-color\:transparent
```

*Note: if your class name contains a special character, ensure you pass it as a quoted string.*

##### `hu-format-modules`

This function removes duplicates and re-orders the list of modules in to the correct specificity order so you needn’t worry about this aspect of your CSS.

```scss
@function hu-format-modules($list-of-modules);

hu-format-modules((state, print, responsive, state, base));
// -> (base, state, print, responsive)
```

##### `hu-important`

Outputs `!important` when `$hu-use-important: true`.

```scss
@function hu-important();

hu-important();
// -> !important
```

#### Mixins

*Note: All of the following examples assume `$hu-namespace: "hu-"` has been set.*

##### `hu-generic`

Generates the `base`, `focus`, `hover`, `hocus`, `state`, `group-hover`, `group-state`, `reduced-motion` and `print` module styles for a class (in that order) while also adding the correct specificity.

```scss
@mixin hu-generic($class-name, $one-or-multiple-modules);

@include hu-generic(hu-class-name("display:block"), (base, group-hover, print)) {
  display: block #{hu-important()};
}

/* ->
.hu-display:block {
  display: block;
}

.group:hover .group:hover__hu-display:block {
  display: block;
}

@media print {
  .@print--hu-display:block.print--hu-display:block.print--hu-display:block {
    display: block;
  }
}
*/
```

##### `hu-responsive`

Generates the responsive `base`, `state` and `group-state` module styles for a class (in that order).

*Note: it does not generate the required media queries, as they need to be [created in a specific manner as described below](#writing-the-class-logic).*

```scss
@mixin hu-responsive($class-name, $one-or-multiple-modules, $media-query-scale);

@include hu-responsive(hu-class-name("display:block"), (base, responsive, state), medium) {
  display: block #{hu-important()};
}

/* ->
.@mq-medium--hu-display:block {
  display: block;
}

.is-selected.@mq-medium-is-selected--hu-display:block {
  display: block;
}
*/
```

##### `hu-parent`

Generates the `base`, `focus`, `hover`, `hocus`, `state`, `reduced-motion` and `print` module styles for a parent selector class (in that order) while also adding the correct specificity.

```scss
@mixin hu-parent($class-name, $parent-selectors, $one-or-multiple-modules, $child-string-to-strip?);

@include hu-parent(hu-class-name("display:block"), (browser-edge, browser-ie), (base, hover)) {
  display: block #{hu-important()};
}

/* ->
.browser-edge .browser-edge__hu-display:block {
  display: block;
}

.browser-ie .browser-ie__hu-display:block {
  display: block;
}

.browser-edge .browser-edge__:hover--hu-display:block:hover {
  display: block;
}

.browser-ie .browser-ie__:hover--hu-display:block:hover {
  display: block;
}
*/
```

The optional `$child-string-to-strip` argument is to remove characters before the `__`, and can be useful if you create a generic child class that can respond to any parent selector, such as is used when generating themes.

##### `hu-parent-responsive`

Generates the responsive `base` and `state` module styles for a parent selector class (in that order).

*Note: it does not generate the required media queries, as they need to be [created in a specific manner as described below](#writing-the-class-logic).*

```scss
@mixin hu-parent-responsive($class-name, $parent-selectors, $one-or-multiple-modules, $media-query-scale, $child-string-to-strip?);

@include hu-parent-responsive(hu-class-name("display:block"), (browser-edge, browser-ie), (base, responsive), medium) {
  display: block #{hu-important()};
}

/* ->
.browser-edge .browser-edge__@mq-medium--hu-display:block {
  display: block;
}

.browser-ie .browser-ie__@mq-medium--hu-display:block {
  display: block;
}
*/
```

##### `hu-pseudo`

Generates the `base`, `focus`, `hover`, `hocus`, `state`, `reduced-motion` and `print` module styles for a pseudo selector class (in that order) while also adding the correct specificity.

```scss
@mixin hu-pseudo($class-name, $pseudo-selectors, $one-or-multiple-modules);

@include hu-pseudo(hu-class-name("display:block"), ("::before", ":first-child"), (base, reduced-motion)) {
  display: block #{hu-important()};
}

/* ->
.&:before--hu-display:block::before {
  display: block;
}

.&:first-child--hu-display:block:first-child {
  display: block;
}

@media (prefers-reduced-motion: reduce) {
  .@reduced-motion:before--hu-display:block::before.@reduced-motion:before--hu-display:block::before.@reduced-motion:before--hu-display:block::before {
    display: block;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reduced-motion:first-child--hu-display:block:first-child.reduced-motion:first-child--hu-display:block:first-child.reduced-motion:first-child--hu-display:block:first-child {
    display: block;
  }
}
*/
```

##### `hu-pseudo-responsive`

Generates the responsive `base` and `state` module styles for a pseudo selector class (in that order).

*Note: it does not generate the required media queries, as they need to be [created in a specific manner as described below](#writing-the-class-logic).*

```scss
@mixin hu-pseudo-responsive($class-name, $pseudo-selectors, $one-or-multiple-modules, $media-query-scale);

@include hu-pseudo-responsive(hu-class-name("display:block"), ("::before", ":first-child"), (base, responsive), medium) {
  display: block #{hu-important()};
}

/* ->
.@mq-medium:before--display:block::before {
  display: block;
}

.@mq-medium:first-child--display:block:first-child {
  display: block;
}
*/
```

Now we have a basic understanding of the functions and mixins used to create classes, we can follow Hucssley’s approach to create our own.

Let’s write some classes to size icons with both `height` and `width` declarations…

#### Defining the variables

As with the OOTB classes, each custom class needs to know which modules it will be created for, and the types and values to use, so let’s create the variables for that.

```scss
$icon-size-modules: (base, responsive);

$icon-size-types: (
  100: hu-rem(16),
  200: hu-rem(24),
);
```

*Note: Don’t prefix custom variables with `hu-` to ensure you don’t accidentally overwrite future updates to Hucssley.*

#### Writing the class logic

Although the mixins described above can take a list of modules, to ensure the correct class name order is produced for multiple types, it is recommended to manually loop over the modules externally by following this pattern:

```scss
// loop through the formatted modules in order
@each $module in hu-format-modules($icon-size-modules) {
  // loop through and extract $type & $value variables from each item in $types
  @each $type, $value in $icon-size-types {
    // define the class name you want, including the $type
    $class-name: hu-class-name("icon-size:#{$type}");
    // ensure $value supports $types that are both lists and maps
    $value: if($value, $value, $type);

    // call hu-generic with the $class-name and $module
    @include hu-generic($class-name, $module) {
      // write your declarations, using $value as the CSS value
      height: $value #{hu-important()};
      width: $value #{hu-important()};
    }
  }
}
```

The above loop doesn’t generate the responsive classes. If we generated them within that `$types` loop, you’d quickly encounter that higher scale base classes would override lower scale responsive classes. By moving them in to a separate loop and block, we can improve build time performance and run-time performance by batching up the media queries to produce smaller output.

```scss
// only try this if responsive is a module
@if index($icon-size-modules, responsive) {
  // extract $mq-scale and $mq-value variables for each media query
  @each $mq-scale, $mq-value in $hu-media-queries {
    // call the media-query mixin with $mq-value, which supports media query values as min-h/max-w maps
    @include hu-media-query($mq-value) {
      // loop through and extract $type & $value variables from each item in $types
      @each $type, $value in $icon-size-types {
        // define the class name you want, including the $type
        $class-name: hu-class-name("icon-size:#{$type}");
        // ensure $value supports $types that are both lists and maps
        $value: if($value, $value, $type);

        // call hu-responsive with the $class-name, *all* modules and $mq-scale
        @include hu-responsive($class-name, $icon-size-modules, $mq-scale) {
          // write your declarations, using $value as the CSS value
          height: $value #{hu-important()};
          width: $value #{hu-important()};
        }
      }
    }
  }
}
```

The output from these 2 blocks is:

```css
.icon-size:100 {
  height: 1rem;
  width: 1rem;
}

.icon-size:200 {
  height: 1.5rem;
  width: 1.5rem;
}

@media (min-width: 30em) {
  .@mq-480--icon-size:100 {
    height: 1rem;
    width: 1rem;
  }

  .@mq-480--icon-size:200 {
    height: 1.5rem;
    width: 1.5rem;
  }
}

// and all other media queries defined…
```

To see a fully-fledged example, take a look at how [`rotate`](/src/classes/_hu-rotate.scss) is written.

##### Creating custom pseudo classes

One benefit Hucssley has over other, similar libraries is that there is a defined method for easily creating pseudo classes. As with “generic” classes, you’ll need 2 code blocks, but instead of calling `hu-generic` and `hu-responsive`, you call `hu-pseudo` and `hu-pseudo-responsive` with the appropriate, documented arguments.

```scss
// loop through the formatted modules in order
@each $module in hu-format-modules($icon-size-modules) {
  // loop through and extract $type & $value variables from each item in $types
  @each $type, $value in $icon-size-types {
    // define the class name you want, including the $type
    $class-name: hu-class-name("icon-size:#{$type}");
    // ensure $value supports $types that are both lists and maps
    $value: if($value, $value, $type);

    // call hu-pseudo with the $class-name, pseudo selectors and $module
    @include hu-pseudo($class-name, ("::before"), $module) {
      // write your declarations, using $value as the CSS value
      height: $value #{hu-important()};
      width: $value #{hu-important()};
    }
  }
}

// only try this if responsive is a module
@if index($icon-size-modules, responsive) {
  // extract $mq-scale and $mq-value variables for each media query
  @each $mq-scale, $mq-value in $hu-media-queries {
    // call the media-query mixin with $mq-value, which supports media query values as min-h/max-w maps
    @include hu-media-query($mq-value) {
      // loop through and extract $type & $value variables from each item in $types
      @each $type, $value in $icon-size-types {
        // define the class name you want, including the $type
        $class-name: hu-class-name("icon-size:#{$type}");
        // ensure $value supports $types that are both lists and maps
        $value: if($value, $value, $type);

        // call hu-pseudo responsive with the $class-name, pseudo selectors, *all* modules and $mq-scale
        @include hu-pseudo-responsive($class-name, ("::before"), $icon-size-modules, $mq-scale) {
          // write your declarations, using $value as the CSS value
          height: $value #{hu-important()};
          width: $value #{hu-important()};
        }
      }
    }
  }
}
```

Generates the following:

```css
.&:before--icon-size:100::before {
  height: 1rem;
  width: 1rem;
}

.&:before--icon-size:200::before {
  height: 1.5rem;
  width: 1.5rem;
}

@media (min-width: 30em) {
  .@mq-480:before--icon-size:100::before {
    height: 1rem;
    width: 1rem;
  }

  .@mq-480:before--icon-size:200::before {
    height: 1.5rem;
    width: 1.5rem;
  }
}

// and all other media queries defined…
```

##### Creating custom parent classes

Similarly, custom parent classes can also easily be generated with the `hu-parent` and `hu-parent-responsive` mixins:

```scss
// loop through the formatted modules in order
@each $module in hu-format-modules($icon-size-modules) {
  // loop through and extract $type & $value variables from each item in $types
  @each $type, $value in $icon-size-types {
    // define the class name you want, including the $type
    $class-name: hu-class-name("icon-size:#{$type}");
    // ensure $value supports $types that are both lists and maps
    $value: if($value, $value, $type);

    // call hu-parent with the $class-name, parent selectors and $module
    @include hu-parent($class-name, (browser-mobile), $module) {
      // write your declarations, using $value as the CSS value
      height: $value #{hu-important()};
      width: $value #{hu-important()};
    }
  }
}

// only try this if responsive is a module
@if index($icon-size-modules, responsive) {
  // extract $mq-scale and $mq-value variables for each media query
  @each $mq-scale, $mq-value in $hu-media-queries {
    // call the media-query mixin with $mq-value, which supports media query values as min-h/max-w maps
    @include hu-media-query($mq-value) {
      // loop through and extract $type & $value variables from each item in $types
      @each $type, $value in $icon-size-types {
        // define the class name you want, including the $type
        $class-name: hu-class-name("icon-size:#{$type}");
        // ensure $value supports $types that are both lists and maps
        $value: if($value, $value, $type);

        // call hu-parent-responsive with the $class-name, parent selectors, *all* modules and $mq-scale
        @include hu-parent-responsive($class-name, (browser-mobile), $icon-size-modules, $mq-scale) {
          // write your declarations, using $value as the CSS value
          height: $value #{hu-important()};
          width: $value #{hu-important()};
        }
      }
    }
  }
}
```

will generate the following:

```css
.browser-mobile .browser-mobile__icon-size:100 {
  height: 1rem;
  width: 1rem;
}

.browser-mobile .browser-mobile__icon-size:200 {
  height: 1.5rem;
  width: 1.5rem;
}

@media (min-width: 30em) {
  .browser-mobile .browser-mobile__@mq-480--icon-size:100 {
    height: 1rem;
    width: 1rem;
  }
  .browser-mobile .browser-mobile__@mq-480--icon-size:200 {
    height: 1.5rem;
    width: 1.5rem;
  }
}

// and all other media queries defined…
```

---

## Creating components

Since Hucssley outputs raw HTML class names, it’s incredibly easy to integrate with any front-end “view” framework, to create custom components with small and simple styling APIs.

By using raw class name strings, you are also able to annotate browser-specifc fixes alongside them in the HTML, which helps with understanding why “unnecessary” properties are there.

Let’s create a button in Vue:

### Component definition

We create a basic component with 3 props that change the appearance, and create a styles object that simply has strings of Hucssley class names that will be applied by default, and in the different forms.

```js
export default {
  name: 'ButtonHu',
  props: {
    shape: {
      default: 'square',
      type: String,
    },
    size: {
      default: 'medium',
      type: String,
    },
    type: {
      default: 'primary',
      type: String,
    },
  },
  data() {
    return {
      isSelected: false,
    };
  },
  methods: {
    toggleSelected() {
      this.isSelected = !this.isSelected;
    },
  },
  created() {
    this.styles = {
      base: `
        font-weight:700
        min-width:0 // fixes IE
        transition-duration:100
        transition-easing:ease
        transition-property:all
        &:hocus--scale:105
        is-selected--background-color:neutral-700
        is-selected--color:neutral-0
      `,
      type: {
        primary: `
          background-color:blue-900
          color:neutral-0
          hocus--background-color:blue-600
        `,
        secondary: `
          background-color:blue-200
          hocus--background-color:blue-400
        `,
      },
      shape: {
        rounded: 'border-radius:1000',
        square: 'border-radius:300',
      },
      size: {
        medium: `
          padding-horizontal:400
          padding-vertical:300
        `,
        large: `
          font-size:600
          padding-horizontal:500
          padding-vertical:400
        `,
      },
    };
  },
};
```

Which means our `template` is as simple as creating an array of the various `styles` properties, which are determined by the props passed in.

```html
<template>
  <button
    v-bind:class="[
      styles.base,
      styles.shape[shape],
      styles.size[size],
      styles.type[type],
      isSelected && 'is-selected',
    ]"
    v-on:click="toggleSelected"
  >
    <slot></slot>
  </button>
</template>
```

The `template` itself is ridiculously simple. You can tell at a glance exactly which class names will be added under any UI condition, and, in the generated HTML you’ll even be able to see an IE-specific hack!

Unlike alternative frameworks, Hucssley encourages a utility-only, not utility-first mentality, so it’s highly recommended that all components be created with a template partial or JavaScript component to keep your code DRY and reduce the opportunity for copy-paste errors.

Components with meaningful, semantic props that map to UI variations also reduce the learning curve and implementation for developers less experienced with CSS.

### Using the component

The following shows how we can quickly use and customize a component’s appearance by setting the appropriate props, **and** that we can customize the component on a per-instance basis by merging the passed in `class` attribute with the root component `class` (which happens automagically in Vue).

```html
<button-hu
  class="margin:400"
>
  Primary
</button-hu>

<button-hu
  class="margin:400"
  type="secondary"
>
  Secondary
</button-hu>

<button-hu
  class="margin:400"
  shape="rounded"
>
  Primary Rounded
</button-hu>

<button-hu
  class="margin:400"
  shape="rounded"
  type="secondary"
>
  Secondary Rounded
</button-hu>

<button-hu
  class="margin:400"
  size="large"
  type="primary"
>
  Primary Large
</button-hu>

<button-hu
  class="margin:400"
  size="large"
  type="secondary"
>
  Secondary Large
</button-hu>

<button-hu
  class="margin:400"
  shape="rounded"
  size="large"
  type="primary"
>
  Primary Large Rounded
</button-hu>

<button-hu
  class="margin:400"
  shape="rounded"
  size="large"
  type="secondary"
>
  Secondary Large Rounded
</button-hu>
```

**A working demo can be seen here: https://codepen.io/stowball/full/NVdbyZ**

---

## Increasing specificity

While all of Hucssley’s classes have an intentionally low specificity count, this could present issues if you’re integrating it in to an existing project.

Luckily, Hucssley provides two methods to increase the specificity:

### Forcing `!important`

Option one is to set `$hu-use-important: true;` anywhere before you `@import` the reset and class styles:

```scss
$hu-use-important: true;

@import "path_to_node_modules/hucssley/src/styles";
// @import "custom/classes/index";
```

As [described earlier](#use-important-hu-use-important), this will add the `!important` rule to every declaration.

### Quarantining with a descendent selector

Since Hucssley is written in Sass, you can easily wrap your imports in a new selector to convert every class to use a descendent selector.

```scss
.hucssley {
  @import "path_to_node_modules/hucssley/src/styles";
  // @import "custom/classes/index";
}
```

which will produce:

```css
.hucssley .align-content:baseline {
  align-content: baseline;
}

.hucssley .align-content:center {
  align-content: center;
}

…
```

You could then add the `hucssley` class to a direct ancestor of your newly integrated component, or add it globally to the `<html>` element (although this could have unexpected side-effects if using the reset).

If this still doesn’t produce a high enough specificity bump, you can also use the `hu-bump-specificity($increase-to-specificity)` mixin to arbitrarily increase it further:

```scss
.hucssley {
  @include hu-bump-specificity(1) {
    @import "path_to_node_modules/hucssley/src/styles";
    // @import "custom/classes/index";
  }
}
```

which produces:

```css
.hucssley.hucssley .align-content:baseline {
  align-content: baseline;
}

.hucssley.hucssley .align-content:center {
  align-content: center;
}

…
```

---

## Controlling file size

While Hucssley creates almost every possible class you’d ever want to make building UI simple, this comes at a file size cost with the OOTB CSS coming in at a massive 1.3 MB uncompressed. Of course, the nature of Hucssley lends itself very well to gzipping, which brings the OOTB CSS down to 93 KB, which ironically, is still a lot smaller than lots of other “production” CSS in the wild.

But, Hucssley is infinitely customizable, so you can set the variables of modules you’ll never use to `()` so they won’t output, and of course, limiting the amount of colors, media queries, and spacing scales will also help.

However, we can do better… and we can do it automatically. By utilizing [Purgecss](https://purgecss.com) and the following `extractor`, you’ll be able to reduce your CSS output to only the classes that are used in your views:

```js
extractor: class {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_&:@<>\/]+/g) || [];
  }
}
```

If you wish to change which characters are escaped, you can customize the [global `$hu-escape-class-name-types` variable](/src/variables/global/_hu-escape-class-name-types.scss).
