# Rethinking CSS

In this article, I hope to define what I feel are the biggest issues with CSS, and ultimately, how those issues can be overcome.

## CSS is hard

While the syntax of, and writing CSS is very easy to learn and understand, product development teams the world over equally struggle with how to define and implement a maintainable, scalable CSS architecture.

Part of the problem is that CSS is so easy, that everyone on the team, regardless of their expertise, will at some point write it. This contribution of varying skill levels often results in a slimy, distasteful tin of home-brand spaghetti and the next point…

## Bloat is easy

Regardless of the technology or methodology used (such as BEM, CSS Modules or some CSS-in-JS library), with a traditional "componentised CSS" approach, the trajectory of your CSS's file size roughly equals the number of features developed. As your product roadmap continues to be implemented, your end users suffer longer download and parse times, and ultimately, a worse user experience.

While "thinking in components" (be it with help from a library like React or Vue) is absolutely the sensible approach to structuring and scaffolding your views, if 40 components are `display: flex`, why do we write that in a stylesheet 40 times? It's unnecessarily wasteful.

What if we could define an architecture whereby at some threshold, the size of the final CSS would never increase as the project grows?

Teams without dedicated UI Engineers also often reach for some kind pre-fabricated CSS UI framework, such as Bootstrap or Semantic UI, to get them building and realising UI quickly. While the initial development period is promising (foregoing the fact you're now serving to users 200 colours and 20 components you'll never use), bloat continues to worsen as you encounter the next problem…

## Specificity wars

Specialist UI Engineers have no issue understanding how CSS inheritance works, and also the 3 pillars of the "Cascading" in CSS: importance, specificity and source order. However, any or all of these can and often trip up less familiar developers.

As you add new features and styles, do they sometimes conflict with existing ones in surprising ways? Do you hack its specificity to get it to work by adding `!important`, an inline `style` or a more "qualified", nested selector? How does this affect the feature you build in 3 months' time? Do you then have to do the same to combat the last hack? It's a never-ending, losing battle.

Do you know how to calculate specificity? I've been a professional front-end developer since 2002 and I would not be able to reliably calculate it.

But what if we never need to worry about it? What if we could essentially reduce CSS to a meaningful source order (that you're rarely aware of) and UI state helpers that are guaranteed to trump existing styles?

## Naming things is hard

When BEM was introduced to the front-end community, it was a revelation. Ugly at first, but a revelation nonetheless. Within CSS's global context, it allowed us to clearly express the hierarchy of components: its variants and their children.

However, as always with introductory blog post tutorials, real-world usage didn't align with the simplicity presented. How do you describe a discrete child block, that has its own children? How do you define UI states? Are they modifiers or something else entirely? Is that a `wrapper`, a `container` or an `inner`? What do we call the parent class? Is this a `.media-object`? It looks a like a `.flag-layout` to me.

Of course, CSS Modules freed us from some of these shackles. We no longer needed to worry about such trivial things, or so we were told. It turns out that denoting child hierarchy, however, is actually useful so you can clearly see relationships regardless of whether you're looking at the CSS or HTML.

You'll never not have to come up with names for things (your components need to be called something after all), but we can make it so you have less naming decisions to make.

## What's in a name?

You know it's name, but what does it do and why does it look that way at this breakpoint, within this context or in this browser? Why does this `.flag-layout` no longer look like a flag when it's in the sidebar?

By looking at "semantic" class names in HTML alone, it's impossible to know. And of course, if you use a tool that uses/produces obtuse or hashed class names, it's even harder and offers little in regards to performance optimisations too.

Once you've found the relevant HTML, you look in the CSS and have to trawl through multiple, overridden, cascaded styles to disseminate what you need, which isn't always easy, and only paints the picture for that exact combination of potential scenarios. Every strike-through seen in the inspector represents an inefficiency so should be a potential red flag.

You'll ultimately need to cross-reference what's rendered to the relevant source CSS, and make sure you've understood every permutation.

What if we removed all of this guesswork, and by simply looking at the HTML you could tell exactly how this component is styled and behaves at every possible UI combination?

## Simpler views

When your HTML class attribute explicitly describes all use-cases of a component, your front-end view logic becomes infinitely simpler. You no longer have to mix and match presentational and behavioural logic at run-time; state changes from a user's interaction could effortlessly be achieved by simply adding or removing 1 class name.

## Platform agnostic

Although the boundaries of the web platform continues to evolve at an ever-increasing pace, the only technologies you can rely on are the core foundations: HTML, CSS and vanilla JavaScript. Everything new and shiny essentially wraps and compiles down to these 3 pillars of web standards.

So what if we had a styling methodology that would not only work regardless of the technology and environmental constraints, but was also easy to implement and port between them? We would be able to support "the web" in whatever shape necessary, whether that's within React, Vue, Elm, Reason, Handlebars, or even HTML emails. There would be no lock-in.

## Enforce consistency

CSS is great because it allows you to achieve wild, bespoke things with ease. Conversely, CSS is bad because it allows you to achieve wild, bespoke things with ease. We're not building CSS Zen Garden here. We're building products people need to use daily, and they don't want to have to deal with and continue to re-learn subtle inconsistencies throughout.

CSS pre-processors and CSS-in-JS libraries help to mitigate this by providing you the opportunity to use variables and functions to ensure we retrieve values from agreed upon standards, but it's purely opt-in. A developer implementing a piece of UI can quite happily go rogue should they wish.

What if we removed the ability to stray from our pre-defined path by only ever allowing you to use the CSS/class names that we as a team, have agreed on, and all styling was achieved via classes only?

## Flexible and customisable

Despite the consistency, it's unrealistic for a product team to understand every possible requirement up front, so any styling solution needs to be flexible and customisable enough to handle these changes in scope.

It should also be flexible in terms of providing the tools to deliver UI that adequately responds to wildly different browser contexts. If a component in browser X at breakpoint Y needs some alteration to deliver the ultimate user experience, then so be it. We shouldn't force our UI to simply settle within arbitrary buckets of breakpoints, for example.

## Easily tree-shaken

To combat the bloat factor mentioned earlier, any future-friendly CSS methodology needs to be able to only send over the wire exactly what is required; nothing less, nothing more.

By creating a system that can easily be combined with Purgecss or similar, only CSS that's actually in use will be given to an end user.

## Performant

As mentioned earlier, if we could create a solution that rarely generates new CSS, our users won't have to endure fetching updated CSS after each deployment, which could quite easily happen multiple times a day.

With a system that generates consistent, repetitive CSS, even a kitchen-sink stylesheet will compress to something smaller than most traditional CSS approaches. When also removing unused CSS, the end result will be a tiny payload.

Run-time performance should also improve, as the [class selector is the fastest](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations) for reducing the scope and complexity of style calculations.

## Easy to learn

What if we could provide a styling solution whose API mostly matches plain CSS 1:1, and then further fixes and improves on some of CSS's known inconsistencies? If you know CSS properties, then you would know this.

If we combine that with removing the need to juggle specificity, reducing the requirement to name things, having a consistent approach to styling every possible context and encouraging a mobile-first mentality, a developer's cognitive overhead and barrier to entry would be massively reduced.

## Introducing Hucssley – Hireup's CSS Library

Hucssley is a CSS framework which provides atomic utility classes for rapidly building consistent and performant user interfaces. Using it should hopefully address all of the pain points and support the goals previously discussed.

It is very different to traditional frameworks like Bootstrap or Semantic UI, as it contains zero pre-built UI components, instead providing you with the atomic building blocks necessary for **you** to create any UI component.

This means we will need to re-write all of our UI components from scratch, but it will finally allow us to realise of our UX/UI team's dreams for the product without being saddled with all the associated baggage and concessions of 3rd party developers' implementations.

Hucssley has a few goals:

1. To be incredibly easy to learn and use, by providing a system of atomic classes that mostly map 1:1 with existing CSS properties.
2. To allow anyone of any skill to rapidly build for the web without unknowingly causing CSS bloat or fighting against some of CSS's core, but sometimes difficult to understand principals.
3. To provide the tools required to build UI for any breakpoint, user interaction or UI state.
4. To be completely platform agnostic and portable between front-end stacks, with Sass being the only dependency.
5. To be highly flexible to your needs, with the ability to easily customize existing classes and create new ones.

For more information, please [read the docs](/README.md).