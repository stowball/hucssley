# Hucssley

Hucssley is very different to traditional frameworks like Bootstrap or Semantic UI, as it contains zero pre-built UI components, instead providing you with the atomic building blocks necessary for **you** to create any UI component.

It honours the groundwork laid by earlier utility class libraries such as [Tachyons](https://tachyons.io) and [Tailwind](https://tailwindcss.com), while hoping to address some of their deficiencies.

To that end, Hucssley has a few goals:

1. To be incredibly easy to learn and use, by providing a system of atomic classes that mostly map 1:1 with existing CSS properties.
2. To allow anyone of any skill to rapidly build for the web without unknowingly causing CSS bloat or fighting against some of CSS’s core, but sometimes difficult to understand principals.
3. To provide the tools required to build UI for any breakpoint, user interaction or UI state.
4. To be completely platform agnostic and portable between front-end stacks, with Sass being the only dependency.
5. To be highly flexible to your needs, with the ability to easily customise existing classes and create new ones.

To understand the reasoning behind its creation, please read [Rethinking CSS](/rethinking-css.md).

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [What’s in the box?](#whats-in-the-box)
- [A working example](#a-working-example)
- [Why Hucssley?](#why-hucssley)
- [Installation](#installation)
- [Syntax](#syntax)
  - [Modules](#modules)
    - [Base: `base`](#base-base)
    - [Non-parent modules: `focus, hocus, hover, print, reduced-motion, responsive`](#non-parent-modules-focus-hocus-hover-print-reduced-motion-responsive)
    - [State modules: `state`](#state-modules-state)
    - [Parent modules: `group-hover, group-state` and custom parent modules](#parent-modules-group-hover-group-state-and-custom-parent-modules)
    - [Combining modules: `responsive` and `group-state, state`](#combining-modules-responsive-and-group-state-state)
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
    - [Responsive breakpoints: `$hu-breakpoints`](#responsive-breakpoints-hu-breakpoints)
    - [UI states: `$hu-states`](#ui-states-hu-states)
    - [Spacing scale: `$hu-spacing-scale`](#spacing-scale-hu-spacing-scale)
    - [Borders: `$hu-border-modules`, `$hu-border-sides` and `$hu-border-types`](#borders-hu-border-modules-hu-border-sides-and-hu-border-types)
    - [Controlling focus: `$hu-hocus-focus-parent` and `$hu-hocus-focus-pseudo`](#controlling-focus-hu-hocus-focus-parent-and-hu-hocus-focus-pseudo)
    - [Themes: `$hu-themes`](#themes-hu-themes)
    - [Namespace: `$hu-namespace`](#namespace-hu-namespace)
    - [Debug: `$hu-debug`](#debug-hu-debug)
  - [Classes](#classes)
- [Creating custom classes](#creating-custom-classes)
  - [Customising “placeholder” classes](#customising-placeholder-classes)
  - [Creating new, “basic” classes](#creating-new-basic-classes)
    - [Generic classes: `hu-classes`](#generic-classes-hu-classes)
      - [Basic](#basic)
      - [Custom class name](#custom-class-name)
      - [Unique class with multiple declarations](#unique-class-with-multiple-declarations)
    - [Pseudo classes: `hu-pseudo-classes`](#pseudo-classes-hu-pseudo-classes)
    - [Parent classes: `hu-parent-classes`](#parent-classes-hu-parent-classes)
  - [Creating new, “more complex” classes](#creating-new-more-complex-classes)
    - [Helper Functions](#helper-functions)
      - [`hu-class-name`](#hu-class-name)
      - [`hu-format-modules`](#hu-format-modules)
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
- [Controlling file size](#controlling-file-size)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

## What’s in the box?

Currently, Hucssley provides utility classes for over 110 CSS properties, of which multiple, sensible default values are generated. Each utility is also created for various “modules”, whether that’s at certain breakpoints, UI states, user interactions, for print or more.

Each utility is completely customisable; they can be partially renamed, have values changed, have their modules altered or be omitted entirely.

By default, Hucssley does not output classes for things that don’t map explicitly to specific property types (such as `box-shadow`, background gradients and `transform`), but it does provide placeholder variables for these to make tailored, [custom classes simple to create](#creating-custom-classes).

Hucssley also provides utility classes for truncating text and making elements “visually hidden” for accessibility purposes.

For a complete list of the class names provided, read [Hucssley classes](/hucssley-classes.md).

Hucssley also comes with:

* A sensible, optional CSS reset to make building UI easier and more consistent.
* Functions for converting `px` values to `em` and `rem` for improved accessibilty.
* Functions to incrementally darken (`shade`) or lighten (`tint`) colours.
* The ability to theme elements based off a parent selector.
* The ability to create classes scoped to custom parent selectors.
* The ability to create classes that map to pseudo-classes and pseudo-selectors.

---

## A working example

The following example demonstrates how you can use Hucssley out-of-the-box to easily create a responsive, accessible, interactive component.

```html
<div class="
  bg-color-blue-100
  padding-500
">
  <div class="
    align-items-center
    bg-color-neutral-0
    border-color-neutral-200
    border-radius-500
    border-style-solid
    border-width-100
    display-flex
    flex-direction-column
    padding-500
    text-align-center
    bp-768--flex-direction-row
    bp-768--text-align-left
  ">
   <img
      alt=""
      class="
        bg-color-blue-600
        border-color-neutral-100
        border-radius-1000
        border-style-solid
        border-width-200
        margin-b-400
        width-50
        bp-600--width-30
        bp-768--margin-b-0
        bp-768--margin-r-500
        bp-768--width-20
      "
      src="https://hireup.cdn.prismic.io/hireup/89e15301c28e6396927d85e38e9c5d5833ebab09_kyle_357-bonnie.png"
    />
    <div>
      <p class="
        font-size-600
        font-weight-700
        line-height-200
        margin-b-400
        bp-768--font-size-800
      ">
        Disability support workers who love what you love
      </p>
      <a
        class="
          bg-color-blue-1000
          border-color-neutral-700
          color-neutral-0
          display-inline-block
          padding-h-400
          padding-v-300
          transition-duration-200
          transition-easing-ease
          transition-property-all
          bp-768--font-size-600
          bp-768--padding-h-500
          bp-768--padding-v-400
          hocus--bg-color-blue-600
          hocus--scale-105
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

We wanted to [solve a lot of the problems](/rethinking-css.md) developers have with “normal” CSS and the ones Adam Silver poses in [The problem with atomic CSS](https://adamsilver.io/articles/the-problem-with-atomic-css/).

Firstly, most utility libraries are hard to read, and more importantly hard to learn. They often use an obtuse, inconsistent syntax which has you reaching for the docs more often than you should. With Hucssley, the focus has been: “if you know CSS properties, you know Hucssley”.

Also, by using Sass under the hood, it supports an extremely deep pool of developers who already know the language and its wealth of features, and has great documentation and resources to boot.

With other libraries, while the initial implementation period is very promising, it’s when you hit the harder, more uncommon issues that you start to struggle. Out-of-the-box, Hucssley wants to provide you with all of the tools to build any UI regardless of the condition. This means we support every type of width media query, theming, pseudo selectors, user interaction states (`:hover`, `:focus-visible`), UI states (`is-expanded`, `is-loading`), and any kind of parent selector (for use with things like browser detection libraries, or element query polyfills).

Lastly, Hucssley tries to be extremely flexible and easily configurable. While it provides many more classes and features than other libraries OOTB, if it doesn’t provide something you need, it’s hopefully very easy to build what you need in a consistent, Hucssley manner.

So with you now intrigued, read the rest of the docs, have a play, and fall in love with building UI…

---

## Installation

```sh
npm install github:stowball/hucssley#master
```

If you want to use Hucssley as it comes, then it’s as simple as:

```scss
@import "../node_modules/hucssley/src/index";
```

However, if you want to customise Hucssley, we recommend taking this approach:

```scss
@import "../node_modules/hucssley/src/helpers";

@import "../node_modules/hucssley/src/variables/global/index";
// @import "custom/variables/global/index";

@import "../node_modules/hucssley/src/variables/classes/index";
// @import "custom/variables/classes/index";
// set class overrides before if you don’t need access to the defaults & want changes to flow through referenced vars

@import "../node_modules/hucssley/src/variables/reset/index";
// @import "custom/variables/reset/index";

@import "../node_modules/hucssley/src/styles";
// @import "custom/classes/index";
```

---

## Syntax

### Modules

#### Base: `base`

Base classes in Hucssley roughly equate to a kebab-cased version of a CSS property and value:

This property:

```css
{
  align-items: flex-end;
}
```

would be available as the following base class:

```css
.align-items-flex-end
```

Some classes deviate by default though:

```css
animation-count -> animation-iteration-count
animation-easing -> animation-timing-function
animation-mode -> animation-fill-mode
animation-state -> animation-play-state
backface -> backface-visibility
bg-color -> background-color
bg-image -> background-image
bg-position-x -> background-position-x
bg-position-y -> background-position-y
bg-repeat -> background-repeat
bg-size -> background-size
blend-mode -> mix-blend-mode
momentum-scrolling -> -webkit-overflow-scrolling
overscroll -> overscroll-behavior
pos-[b,l,r,t] -> bottom, left, right, top
rotate -> transform: rotate
scale -> transform: scale
svg-fill-color -> fill
svg-fill-rule -> fill-rule
svg-stroke-color -> stroke
table-border -> border-collapse
text-case -> text-transform
transition-easing -> transition-timing-function
translate-x -> transform: translateX
translate-y -> transform: translateY
```

If a value is a negative number, its class name output will use `-n[value]`, such as `margin-l-n100` instead of `margin-l-100`, to make it obvious that it’s “negative” and to not be confused with the “modifying” syntax described below.

If the last two words separated by a hyphen are identical, then the last word will automatically be omitted. For instance `.flex-wrap` is used instead of `flex-wrap-wrap`, but `flex-wrap-no-wrap` would be the equivalent `nowrap` version.

*Note: If a global namespace has been configured, it will always precede the base class name.*

#### Non-parent modules: `focus, hocus, hover, print, reduced-motion, responsive`

When you want to use class names scoped to “non-parent” modules, it follows a pattern of `[module-name][-module-variant])?--[base-class]`, for instance:

```css
.bp-768--align-items-center
.hocus--color-neutral-1000
.print--flex-direction-column
```

In the above example, `hocus` is shortcut module for `:hover, :focus`, and `bp-768` is for a `(min-width: 768px)` breakpoint.

#### State modules: `state`

State modules allow you to change the UI based on a particular state, and follows the pattern `[state-name]--[base-class]`:

```css
.is-expanded--visibility-visible
.is-disabled--opacity-30
```

For state classes to become active, you need to apply the raw state name as an class additional class on the element (often via JavaScript):

```html
<div class="
  display-none
  is-open--display-block
+ is-open
"></div>
```

#### Parent modules: `group-hover, group-state` and custom parent modules

Children of groups can respond to user and UI interaction via groups. Their syntax is `[parent-name]__[parent-type]--[base-class]`:

```
.group__hover--scale-110
.group__is-selected--bg-color-blue-300
.browser-mobile__font-size-700
```

For `group` classes to take effect, a parent has to be given the raw `.group` class, and raw state class if applicable:

```html
<html class="browser-mobile">
  …
  <div class="
    group
+   is-selected
  ">
    <ul class="
      browser-mobile__font-size-700
      group__hover--scale-110
      group__is-selected--bg-color-blue-300
    "></ul>
  </div>
</html>
```

Be careful when using groups, because they will affect all `.group__` children. A child `.group` does not reset the actions of a parent `.group`, so you could end up with unexpected behaviour. It’s recommended to use groups on near ancestors to leaf nodes.

*Note: `.browser-mobile` is an example of a custom parent selector, and is not included in Hucssley by default.*

#### Combining modules: `responsive` and `group-state, state`

When a particular class is configured to use the `responsive` module, it will also output `state` and `group-state` classes should they have also been configured.

Here the syntax is `bp-[responsive-scale]-[state-name]--[base-class]` for states, and `group__bp-[responsive-scale]-[state-name]--[class-name]`:

```css
.bp-960-is-expanded--display-flex
.group__bp-1200-is-collapsed--height-0
```

## Scales

Where it makes sense, and compared with other libraries, Hucssley favours a millennial scale (`0` - `1000`) to represent values instead of “names” like `xxl`, `mama-bear` etc. This can of course be completely customised.

By default, the following classes use a millennial scale:

* `bg-color`
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

* **Reset** configuration uses plain variables to customise “generic” styles like whether `box-sizing: border-box` should be used by default.
* **Global** configuration mostly uses maps to handle things like the default responsive breakpoints, colors, spacings, UI states and themes.
* **Classes** provides list and map variables to adjust the modules, and values for each class individually. Some classes (like those which deal with color) inherit from the same base variable by default, so only 1 change is required to affect all `border-color`, `background-color` and `color` classes. All classes can be generated at individual modules described above.

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
@function hu-get($map, $path);

hu-get($hu-colors, neutral 1000);
// -> #1a1a1a
```

Grabs the value at a specific path within a map.

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
// -> #867070;
```

Will mix the specified `$color` with a `$percentage` of white.

```scss
@function hu-shade($color, $percentage);

hu-shade(#361110, 40);
// -> #200a0a;
```

Will mix the specified `$color` with a `$percentage` of black.

### Reset

Here is a list of variables and default values that are available to customise the CSS reset:

```scss
$hu-reset: true;
$hu-reset-box-sizing: border-box;
$hu-reset-html-background-color: #fff;
$hu-reset-html-color: null;
$hu-reset-html-font-family: null;
$hu-reset-html-font-size: $hu-f-rem-context;
$hu-reset-html-font-smoothing: true;
$hu-reset-html-overflow-y: null;
$hu-reset-img-responsive: true;
$hu-reset-input-placeholder-color: #767676;
$hu-reset-remove-number-input-spinners: true;
$hu-reset-text-input-appearance: textfield !default;
```

Hopefully the variables are self explanatory, but if not, please [review the source code](/src/reset/_index.scss) to see how they affect the reset styles.

### Global

#### Colors: `$hu-colors`

To get you started, Hucssley provides a generous palette of colours in the spectrum at multiple scales, as well as for keywords like `inherit` and `transparent`:

```scss
$hu-colors: (
  neutral: (
    0: #ffffff,
    …
    500: #898989,
    …
    1000: #1a1a1a,
  ),
  red: (
    100: #f9ecea,
    …
    500: #d9524b,
    …
    1000: #361110,
  ),
  orange: (
    100: #faefea,
    …
    500: #dc7d51,
    …
    1000: #371d11,
  ),
  yellow: (
    100: #fcfcec,
    …
    500: #e9e262,
    …
    1000: #3b3a16,
  ),
  green: (
    100: #edfbf4,
    …
    500: #7ae69a,
    …
    1000: #1c3a25,
  ),
  blue: (
    100: #ebf6fb,
    …
    500: #67bbe5,
    …
    1000: #172e3a,
  ),
  indigo: (
    100: #ede9fa,
    …
    500: #5e4be1,
    …
    1000: #141039,
  ),
  violet: (
    100: #f8eafb,
    …
    500: #cb54e3,
    …
    1000: #321239,
  ),
);
```

**You can see the rendered palette here: https://codepen.io/stowball/full/JqbGvK**

To customise the palette, you can either `hu-append` or `hu-prepend` other maps to complement the existing, or start fresh by re-assigning `$hu-colors` to a new map of colours entirely.

We recommend also `hu-append`ing `$hu-colors-keywords` to your brand new palette to ensure you can use classes like `bg-color-transparent` and `color-inherit`;

Here is an example of setting a completely new palette:

```scss
$hu-colors: hu-append((
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
), $hu-colors-keywords);
```

#### Responsive breakpoints: `$hu-breakpoints`

Out-of-the-box, Hucssley provides the following 7 breakpoint values, with all being output for every `responsive` class name. It can be modified or replaced entirely to suit your project.

```scss
$hu-breakpoints: (
  360: hu-em(360),
  480: hu-em(480),
  600: hu-em(600),
  768: hu-em(768),
  960: hu-em(960),
  1024: hu-em(1024),
  1280: hu-em(1280),
);
```

If the value of an `$hu-breakpoints` key is a number, it will compile it to a `(min-width: [value])` media query.

If, however, you provide a map which has keys named `min` or `max`, you can choose to output `(min-width)`, `(max-width)` or a combined `(min-width) and (max-width)` media query.

To demonstrate:

```scss
$hu-breakpoints: (
  until-359: (max: hu-em(359)),
  360: (min: hu-em(360)),
  "600-767": (min: hu-em(600), max: hu-em(767)),
);
```

would generate the following `bp-` classes:

```css
@media (max-width: 22.4375em) {
  bp-until-359--… { … }
}

@media (min-width: 22.5em) {
  bp-360--… { … }
}

@media (min-width: 37.5em) and (max-width: 47.9375em) {
  bp-600-767--… { … }
}
```

Notice how, apart from the `bp-` prefix, Hucssley does not dictate the breakpoint class name format, so, should you wish to use ranges like `small` or `medium`, or device types like `tablet`, or `desktop`, it’s entirely up to you.

#### UI states: `$hu-states`

Out-of-the-box, Hucssley provides the following 10 UI state values, with all being output for every `state` and `group-state` class name. It can be modified or replaced entirely to suit your project.

```scss
$hu-states: (
  is-active,
  is-closed,
  is-collapsed,
  is-disabled,
  is-expanded,
  is-hidden,
  is-loading,
  is-open,
  is-selected,
  is-visible,
);
```

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

*Note: UI states generated by class names are not sufficient enough to produce fully accessible interfaces, so please ensure you also implement the correct [ARIA states and properties](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties) where necessary.*

#### Borders: `$hu-border-modules`, `$hu-border-sides` and `$hu-border-types`

By default, `.border-color-`, `.border-style-` and `.border-width-` classes use the 2 or 3 of the global border variables to control which modules, sides and colors they’re output at.

```scss
$hu-border-modules: (base);

$hu-border-sides: (
  border: border,
  border-b: border-bottom,
  border-l: border-left,
  border-r: border-right,
  border-t: border-top,
  border-h: (border-left, border-right),
  border-v: (border-bottom, border-top),
);

$hu-border-types: $hu-colors;
```

In conjunction with variables specific to each class name, classes like the following are generated:

```css
.border-color-neutral-0
.border-v-color-blue-600
.border-b-style-none
.border-h-width-200
```

#### Controlling focus: `$hu-hocus-focus-parent` and `$hu-hocus-focus-pseudo`

By default, the `focus` and `hocus` modules generate classes which use a `:focus` pseudo-class. This can be customised, should you wish to use `:focus-visible` or even in conjunction with a polyfill.

```scss
$hu-focus-pseudo: ":focus-visible";

/* ->
.focus--[class-name]:focus-visible,
.hocus--[class-name]:focus-visible {
  // declarations
}
*/
```

or

```scss
$hu-focus-parent: ".js-focus-visible";
$hu-focus-pseudo: ":focus:not(.focus-visible)";

/* ->
.js-focus-visible .focus--[class-name]:focus:not(.focus-visible),
.js-focus-visible .hocus--[class-name]:focus:not(.focus-visible) {
  // declarations
}
*/
```

#### Themes: `$hu-themes`

As well as the standard `$hu-colors`, “color” classes can also be generated for theming your application based on the key/vaue pairs in this map.

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

This would allow you to theme your entire application simply by changing a single, parent level `theme-[theme-name]` class by utilizing all the generated classes, like:

```css
.theme-broncos .theme__bg-color-primary {
  background-color: #6c1d45;
}

.theme-knights .theme__color-highlight {
  color: #e82c2a;
}

.theme-sharks .theme__border-color-secondary {
  border-color: #27a3e6;
}
```

#### Namespace: `$hu-namespace`

As mentioned earlier, Hucssley provides you the opportunity to namespace the class names generated, to help ensure there’s no conflict or pollution with other possible frameworks.

```scss
$hu-namespace: `hu-`;

// -> .hu-align-content-center, .bp-480--hu-flex-direction-column, .group__is-open--hu--display-flex
```

#### Debug: `$hu-debug`

With Hucssley generating every class for you, you may encounter scenarios where you need to debug the output when using [webpack’s style-loader](https://webpack.js.org/loaders/style-loader) which outputs the CSS within a `<style>` tag in the `<head>`.

By setting `$hu-debug: true;` before `@import "hucssley/src/styles";` all of the CSS will be printed to the screen, above your UI for you to review and debug.

### Classes

Every class in Hucssley can be completely customised to individually change the properties, values and modules used.

**For details of all the classes provided by default and their configuration, please read [Hucssley classes](/hucssley-classes.md).**

---

## Creating custom classes

While Hucssley provides an abundance of classes out-of-the-box, there will absolutely be times where you need to create your own to achieve your desired UI, which is hopefully straight-forward to achieve.

### Customising “placeholder” classes

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
.box-shadow-100 {
  box-shadow: 0 0.125rem 0.625rem rgba(26, 26, 26, 0.1);
}

.box-shadow-200 {
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

It takes a `$property`, which can be either a CSS property or a map, a list of `$modules` and an optional list or map of `$types`. It also accepts `@content` if no `$types` are supplied.

##### Basic

```scss
@include hu-classes(align-content, $hu-align-content-modules, $hu-align-content-types);

/* ->
.align-content-baseline {
  align-content: baseline;
}

.align-content-center {
  align-content: center;
}

…

@media (min-width: 22.5em) {
  .bp-360--align-content-baseline {
    align-content: baseline;
  }

  .bp-360--align-content-center {
    align-content: center;
  }
}

…
*/
```

##### Custom class name

By passing a map to `$property`, the map’s key becomes the core class name, and the map’s value becomes the CSS property.

```scss
@include hu-classes((fac: align-content), $hu-align-content-modules, $hu-align-content-types);

/* ->
.fac-baseline {
  align-content: baseline;
}

.fac-center {
  align-content: center;
}

…

@media (min-width: 22.5em) {
  .bp-360--fac-baseline {
    align-content: baseline;
  }

  .bp-360--fac-center {
    align-content: center;
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
  .bp-360--font-smoothing {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
}

…
*/
```

#### Pseudo classes: `hu-pseudo-classes`

One benefit Hucssley has over other, similar libraries is that there is a defined method for easily creating pseudo classes. It behaves similarly to `$hu-classes`, but you also pass in a list of 1 or more pseudo elements you want to generate classes for.

```
@mixin hu-pseudo-classes($property, $pseudos, $modules, $types?);
```

```scss
@include hu-pseudo-classes(display, ("::before", ":first-child"), $hu-display-modules, $hu-display-types);

/* ->
.pseudo-before--display-block::before {
  display: block;
}

.pseudo-first-child--display-block:first-child {
  display: block;
}

.pseudo-before--display-flex::before {
  display: flex;
}

.pseudo-first-child--display-flex:first-child {
  display: flex;
}

…

@media (min-width: 22.5em) {
  .bp-360-pseudo-before--display-block::before {
    display: block;
  }

  .bp-360-pseudo-first-child--display-block:first-child {
    display: block;
  }

  .bp-360-pseudo-before--display-flex::before {
    display: flex;
  }

  .bp-360-pseudo-first-child--display-flex:first-child {
    display: flex;
  }
}

…
*/
```

As with `$hu-classes`, you can customise the class name by passing a map to `$property`, and you can create unique classes with multiple declarations by not proving a `$type` and passing in a `@content` block.

#### Parent classes: `hu-parent-classes`

Another benefit of Hucssley is that you can easily create custom parent classes, such as being able to respond to a `has-js` class. It behaves similarly to `$hu-pseudo-classes`, but you instead pass in a list of 1 or more parent elements you want to generate classes for.

```
@mixin hu-parent-classes($property, $parents, $modules, $types?);
```

```scss
@include hu-parent-classes(display, (has-js), $hu-display-modules, $hu-display-types);

/* ->
.has-js .has-js__display-block {
  display: block;
}

.has-js .has-js__display-flex {
  display: flex;
}

…

@media (min-width: 22.5em) {
  .has-js .has-js__bp-360--display-block {
    display: block;
  }

  .has-js.is-active .has-js__bp-360-is-active--display-block {
    display: block;
  }
}

…
*/
```

As with `$hu-classes`, you can customise the class name by passing a map to `$property`, and you can create unique classes with multiple declarations by not proving a `$type` and passing in a `@content` block.

### Creating new, “more complex” classes

Should you need to create classes that are more complex than what the 3 basic mixins described above can provide, you can follow a defined pattern for creating your own. However, before you do, it’s worth having a basic understanding of the functions and mixins you’ll use.

#### Helper Functions

##### `hu-class-name`

This function formats a class name to append `$hu-namespace` (if applicable), convert duplicate final strings (e.g. `color-transparent-transparent` to `color-transparent`) and escape special characters like `:`, `<`, `>` and `@`.

```scss
@function hu-class-name($class-name);

hu-class-name("eqio-<520-flex-wrap-wrap");
// -> hu-eqio-\00003c520-flex-wrap
```

##### `hu-format-modules`

This function removes duplicates and re-orders the list of modules in to the correct specificity order so you needn’t worry about this aspect of your CSS.

```scss
@function hu-format-modules($list-of-modules);

hu-format-modules((state, print, responsive, state, base));
// -> (base, state, print, responsive)
```

#### Mixins

*Note: All of the following examples assume `$hu-namespace: "hu-"` has been set.*

##### `hu-generic`

Generates the `base`, `focus`, `hover`, `hocus`, `state`, `group-hover`, `group-state`, `reduced-motion` and `print` module styles for a class (in that order) while also adding the correct specificity.

```scss
@mixin hu-generic($class-name, $one-or-multiple-modules);

@include hu-generic(hu-class-name(display-block), (base, group-hover, print)) {
  display: block;
}

/* ->
.hu-display-block {
  display: block;
}

.group:hover .group__hover--hu-display-block {
  display: block;
}

@media print {
  .print--hu-display-block.print--hu-display-block.print--hu-display-block {
    display: block;
  }
}
*/
```

##### `hu-responsive`

Generates the responsive `base`, `state` and `group-state` module styles for a class (in that order).

*Note: it does not generate the required media queries, as they need to be [created in a specific manner as described below](#writing-the-class-logic).*

```scss
@mixin hu-responsive($class-name, $one-or-multiple-modules, $breakpoint-scale);

@include hu-responsive(hu-class-name(display-block), (base, responsive, state), medium) {
  display: block;
}

/* ->
.bp-medium--hu-display-block {
  display: block;
}

.is-active.bp-medium-is-active--hu-display-block {
  display: block;
}
*/
```

##### `hu-parent`

Generates the `base`, `focus`, `hover`, `hocus`, `state`, `reduced-motion` and `print` module styles for a parent selector class (in that order) while also adding the correct specificity.

```scss
@mixin hu-parent($class-name, $parent-selectors, $one-or-multiple-modules, $child-string-to-strip?) {

@include hu-parent(hu-class-name(display-block), (browser-edge, browser-ie), (base, hover)) {
  display: block;
}

/* ->
.browser-edge .browser-edge__hu-display-block {
  display: block;
}

.browser-ie .browser-ie__hu-display-block {
  display: block;
}

.browser-edge:hover .browser-edge__hover--hu-display-block {
  display: block;
}

.browser-ie:hover .browser-ie__hover--hu-display-block {
  display: block;
}
*/
```

The optional `$child-string-to-strip` argument is to remove characters before the `__`, and can be useful if you create a generic child class that can respond to any parent selector, such as is used when generating themes.

##### `hu-parent-responsive`

Generates the responsive `base` and `state` module styles for a parent selector class (in that order).

*Note: it does not generate the required media queries, as they need to be [created in a specific manner as described below](#writing-the-class-logic).*

```scss
@mixin hu-parent-responsive($class-name, $parent-selectors, $one-or-multiple-modules, $breakpoint-scale, $child-string-to-strip?) {

@include hu-parent-responsive(hu-class-name(display-block), (browser-edge, browser-ie), (base, responsive), medium) {
  display: block;
}

/* ->
.browser-edge .browser-edge__bp-medium--hu-display-block {
  display: block;
}

.browser-ie .browser-ie__bp-medium--hu-display-block {
  display: block;
}
*/
```

##### `hu-pseudo`

Generates the `base`, `focus`, `hover`, `hocus`, `state`, `reduced-motion` and `print` module styles for a pseudo selector class (in that order) while also adding the correct specificity.

```scss
@mixin hu-pseudo($class-name, $pseudo-selectors, $one-or-multiple-modules) {

@include hu-pseudo(hu-class-name(display-block), ("::before", ":first-child"), (base, reduced-motion)) {
  display: block;
}

/* ->
.pseudo-before--hu-display-block::before {
  display: block;
}

.pseudo-first-child--hu-display-block:first-child {
  display: block;
}

@media (prefers-reduced-motion: reduce) {
  .reduced-motion-pseudo-before--hu-display-block::before.reduced-motion-pseudo-before--hu-display-block::before.reduced-motion-pseudo-before--hu-display-block::before {
    display: block;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reduced-motion-pseudo-first-child--hu-display-block:first-child.reduced-motion-pseudo-first-child--hu-display-block:first-child.reduced-motion-pseudo-first-child--hu-display-block:first-child {
    display: block;
  }
}
*/
```

##### `hu-pseudo-responsive`

Generates the responsive `base` and `state` module styles for a pseudo selector class (in that order).

*Note: it does not generate the required media queries, as they need to be [created in a specific manner as described below](#writing-the-class-logic).*

```scss
@mixin hu-pseudo-responsive($class-name, $pseudo-selectors, $one-or-multiple-modules, $breakpoint-scale) {

@include hu-pseudo-responsive(hu-class-name(display-block), ("::before", ":first-child"), (base, responsive), medium) {
  display: block;
}

/* ->
.bp-medium-pseudo-before--display-block::before {
  display: block;
}

.bp-medium-pseudo-first-child--display-block:first-child {
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
    $class-name: hu-class-name(icon-size-#{$type});
    // ensure $value supports $types that are both lists and maps
    $value: if($value, $value, $type);

    // call hu-generic with the $class-name and $module
    @include hu-generic($class-name, $module) {
      // write your declarations, using $value as the CSS value
      height: $value;
      width: $value;
    }
  }
}
```

The above loop doesn’t generate the responsive classes. If we generated them within that `$types` loop, you’d quickly encounter that higher scale base classes would override lower scale responsive classes. By moving them in to a separate loop and block, we can improve build time performance and run-time performance by batching up the media queries to produce smaller output.

```scss
// only try this if responsive is a module
@if index($icon-size-modules, responsive) {
  // extract $bp-scale and $bp-value variables for each breakpoint
  @each $bp-scale, $bp-value in $hu-breakpoints {
    // call the media-query mixin with $bp-value, which supports breakpoint values as min/max maps
    @include hu-media-query($bp-value) {
      // loop through and extract $type & $value variables from each item in $types
      @each $type, $value in $icon-size-types {
        // define the class name you want, including the $type
        $class-name: hu-class-name(icon-size-#{$type});
        // ensure $value supports $types that are both lists and maps
        $value: if($value, $value, $type);

        // call hu-responsive with the $class-name, *all* modules and $bp-scale
        @include hu-responsive($class-name, $icon-size-modules, $bp-scale) {
          // write your declarations, using $value as the CSS value
          height: $value;
          width: $value;
        }
      }
    }
  }
}
```

The output from these 2 blocks is:

```css
.icon-size-100 {
  height: 1rem;
  width: 1rem;
}

.icon-size-200 {
  height: 1.5rem;
  width: 1.5rem;
}

@media (min-width: 22.5em) {
  .bp-360--icon-size-100 {
    height: 1rem;
    width: 1rem;
  }

  .bp-360--icon-size-200 {
    height: 1.5rem;
    width: 1.5rem;
  }
}

@media (min-width: 30em) {
  .bp-480--icon-size-100 {
    height: 1rem;
    width: 1rem;
  }

  .bp-480--icon-size-200 {
    height: 1.5rem;
    width: 1.5rem;
  }
}

// and all other breakpoints defined…
```

##### Creating custom pseudo classes

One benefit Hucssley has over other, similar libraries is that there is a defined method for easily creating pseudo classes. As with “generic” classes, you’ll need 2 code blocks, but instead of calling `hu-generic` and `hu-responsive`, you call `hu-pseudo` and `hu-pseudo-responsive` with the appropriate, documented arguments.

```scss
// loop through the formatted modules in order
@each $module in hu-format-modules($icon-size-modules) {
  // loop through and extract $type & $value variables from each item in $types
  @each $type, $value in $icon-size-types {
    // define the class name you want, including the $type
    $class-name: hu-class-name(icon-size-#{$type});
    // ensure $value supports $types that are both lists and maps
    $value: if($value, $value, $type);

    // call hu-pseudo with the $class-name, pseudo selectors and $module
    @include hu-pseudo($class-name, ("::before"), $module) {
      // write your declarations, using $value as the CSS value
      height: $value;
      width: $value;
    }
  }
}

// only try this if responsive is a module
@if index($icon-size-modules, responsive) {
  // extract $bp-scale and $bp-value variables for each breakpoint
  @each $bp-scale, $bp-value in $hu-breakpoints {
    // call the media-query mixin with $bp-value, which supports breakpoint values as min/max maps
    @include hu-media-query($bp-value) {
      // loop through and extract $type & $value variables from each item in $types
      @each $type, $value in $icon-size-types {
        // define the class name you want, including the $type
        $class-name: hu-class-name(icon-size-#{$type});
        // ensure $value supports $types that are both lists and maps
        $value: if($value, $value, $type);

        // call hu-pseudo responsive with the $class-name, pseudo selectors, *all* modules and $bp-scale
        @include hu-pseudo-responsive($class-name, ("::before"), $icon-size-modules, $bp-scale) {
          // write your declarations, using $value as the CSS value
          height: $value;
          width: $value;
        }
      }
    }
  }
}
```

Generates the following:

```css
.pseudo-before--icon-size-100::before {
  height: 1rem;
  width: 1rem;
}

.pseudo-before--icon-size-200::before {
  height: 1.5rem;
  width: 1.5rem;
}

@media (min-width: 22.5em) {
  .bp-360-pseudo-before--icon-size-100::before {
    height: 1rem;
    width: 1rem;
  }

  .bp-360-pseudo-before--icon-size-200::before {
    height: 1.5rem;
    width: 1.5rem;
  }
}

@media (min-width: 30em) {
  .bp-480-pseudo-before--icon-size-100::before {
    height: 1rem;
    width: 1rem;
  }

  .bp-480-pseudo-before--icon-size-200::before {
    height: 1.5rem;
    width: 1.5rem;
  }
}

// and all other breakpoints defined…
```

##### Creating custom parent classes

Similarly, custom parent classes can also easily be generated with the `hu-parent` and `hu-parent-responsive` mixins:

```scss
// loop through the formatted modules in order
@each $module in hu-format-modules($icon-size-modules) {
  // loop through and extract $type & $value variables from each item in $types
  @each $type, $value in $icon-size-types {
    // define the class name you want, including the $type
    $class-name: hu-class-name(icon-size-#{$type});
    // ensure $value supports $types that are both lists and maps
    $value: if($value, $value, $type);

    // call hu-parent with the $class-name, parent selectors and $module
    @include hu-parent($class-name, (browser-mobile), $module) {
      // write your declarations, using $value as the CSS value
      height: $value;
      width: $value;
    }
  }
}

// only try this if responsive is a module
@if index($icon-size-modules, responsive) {
  // extract $bp-scale and $bp-value variables for each breakpoint
  @each $bp-scale, $bp-value in $hu-breakpoints {
    // call the media-query mixin with $bp-value, which supports breakpoint values as min/max maps
    @include hu-media-query($bp-value) {
      // loop through and extract $type & $value variables from each item in $types
      @each $type, $value in $icon-size-types {
        // define the class name you want, including the $type
        $class-name: hu-class-name(icon-size-#{$type});
        // ensure $value supports $types that are both lists and maps
        $value: if($value, $value, $type);

        // call hu-parent-responsive with the $class-name, parent selectors, *all* modules and $bp-scale
        @include hu-parent-responsive($class-name, (browser-mobile), $icon-size-modules, $bp-scale) {
          // write your declarations, using $value as the CSS value
          height: $value;
          width: $value;
        }
      }
    }
  }
}
```

will generate the following:

```css
.browser-mobile .browser-mobile__icon-size-100 {
  height: 1rem;
  width: 1rem;
}

.browser-mobile .browser-mobile__icon-size-200 {
  height: 1.5rem;
  width: 1.5rem;
}

@media (min-width: 22.5em) {
  .browser-mobile .browser-mobile__bp-360--icon-size-100 {
    height: 1rem;
    width: 1rem;
  }
  .browser-mobile .browser-mobile__bp-360--icon-size-200 {
    height: 1.5rem;
    width: 1.5rem;
  }
}

@media (min-width: 30em) {
  .browser-mobile .browser-mobile__bp-480--icon-size-100 {
    height: 1rem;
    width: 1rem;
  }
  .browser-mobile .browser-mobile__bp-480--icon-size-200 {
    height: 1.5rem;
    width: 1.5rem;
  }
}

// and all other breakpoints defined…
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
        font-weight-700
        min-width-0 // fixes IE
        transition-duration-100
        transition-easing-ease
        transition-property-all
        hocus--scale-105
        is-selected--bg-color-neutral-700
        is-selected--color-neutral-0
      `,
      type: {
        primary: `
          bg-color-blue-1000
          color-neutral-0
          hocus--bg-color-blue-600
        `,
        secondary: `
          bg-color-blue-300
          hocus--bg-color-blue-400
        `,
      },
      shape: {
        rounded: 'border-radius-1000',
        square: 'border-radius-300',
      },
      size: {
        medium: `
          padding-h-400
          padding-v-300
        `,
        large: `
          font-size-600
          padding-h-500
          padding-v-400
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

The following shows how we can quickly use and customise a component’s appearance by setting the appropriate props, **and** that we can customise the component on a per-instance basis by merging the passed in `class` attribute with the root component `class` (which happens automagically in Vue).

```html
<button-hu
  class="margin-400"
>
  Primary
</button-hu>

<button-hu
  class="margin-400"
  type="secondary"
>
  Secondary
</button-hu>

<button-hu
  class="margin-400"
  shape="rounded"
>
  Primary Rounded
</button-hu>

<button-hu
  class="margin-400"
  shape="rounded"
  type="secondary"
>
  Secondary Rounded
</button-hu>

<button-hu
  class="margin-400"
  size="large"
  type="primary"
>
  Primary Large
</button-hu>

<button-hu
  class="margin-400"
  size="large"
  type="secondary"
>
  Secondary Large
</button-hu>

<button-hu
  class="margin-400"
  shape="rounded"
  size="large"
  type="primary"
>
  Primary Large Rounded
</button-hu>

<button-hu
  class="margin-400"
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

Luckily, since Hucssley is written in Sass, you can easily wrap your imports in a new selector to convert every class to use a descendent selector.

```scss
@import "hucssley/src/helpers";

@import "hucssley/src/variables/global/index";
// @import "custom/variables/global/index";

@import "hucssley/src/variables/classes/index";
// @import "custom/variables/classes/index";
// set class overrides before if you don’t need access to the defaults & want changes to flow through referenced vars

@import "hucssley/src/variables/reset/index";
// @import "custom/variables/reset/index";

.hucssley {
  @import "hucssley/src/styles";
  // @import "custom/classes/index";
}
```

which will produce:

```css
.hucssley .align-content-baseline {
  align-content: baseline;
}

.hucssley .align-content-center {
  align-content: center;
}

…
```

You could then add the `hucssley` class to a direct ancestor of your newly integrated component, or add it globally to the `<html>` element (although this could have unexpected side-effects if using the reset).

If this still doesn’t produce a high enough specificity bump, you can also use the `hu-bump-specificity($increase-to-specificity)` mixin to arbitrarily increase it further:

```scss
.hucssley {
  @include hu-bump-specificity(1) {
    @import "hucssley/src/styles";
    // @import "custom/classes/index";
  }
}
```

which produces:

```css
.hucssley.hucssley .align-content-baseline {
  align-content: baseline;
}

.hucssley.hucssley .align-content-center {
  align-content: center;
}

…
```

---

## Controlling file size

While Hucssley creates almost every possible class you’d ever want to make building UI simple, this comes at a file size cost with the OOTB CSS coming in at a massive 1.8 MB. Of course, the nature of Hucssley lends itself very well to gzipping, which brings the OOTB CSS down to 114 KB, which ironically, is still a lot smaller than lots of other “production” CSS in the wild.

Hucssley is infinitely customisable, so you can set the variables of modules you’ll never use to `()` so they won’t output, and of course, limiting the amount of colors, breakpoints, and spacing scales will also help.

However, we can do better. And do it automatically. By utilising [Purgecss](https://purgecss.com) and the following `extractor` you’ll be able to reduce your CSS output to only the classes that are used in your views:

```js
extractor: class {
  static extract(content) {
    return content.match(/(?:[A-Za-z0-9]|-|_|:|<|>|@)+/g) || [];
  }
},
```
