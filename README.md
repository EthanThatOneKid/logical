# Logical 🧝‍♂️

> "Logic is the beginning of wisdom, not the end of it." — Spock

## Guide

### Installation

- Make sure [deno is installed][deno_install] on your machine.
- Run `deno install ...`.

### Your First Log

- Initialize directory: `logical init`.
- Start logging: `logical "Hello World!"`.
- Complete current transmission: `logical -c`.
- Update title of current transmission: `logical -t "The Title"` (Title defaults to the content of the initial transmission log).
- Add tags to current transmission: `logical -at "add", "these", "tags"`.
- Remove tags from current transmission: `logical -rt "remove", "these", "tags"`.
- Print current or most recent log: `logical -r`.
- Print the 7 most recent logs: `logical -r 7`.
- Print log by title or tags: `logical -r "look-for-this-title", "or", "these", "tags"`.

### Best Practices

_TODO: Descibe logging best practices and ideals._

[deno_install]: https://github.com/denoland/deno_install
