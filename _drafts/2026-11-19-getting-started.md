---
title: Getting started
description: Hit the ground running.
---

The basic configuration lives in one file. Edit `_config.yml` to set your name, email and links.

```yaml
# _config.yml
title: Personal Blog
author: Your Name
email: you@example.com
num_posts_on_homepage: 3
num_works_on_homepage: 2
num_projects_on_homepage: 3
```

| Field                      | Req | Description                              |
| :------------------------- | :-- | :--------------------------------------- |
| `title`                    | Yes | Shown in the header, footer and tab.     |
| `author`                   | Yes | Used in the homepage greeting.           |
| `email`                    | Yes | Shown in the contact section as a link.  |
| `num_posts_on_homepage`    | Yes | How many posts the homepage lists.       |

## Socials

Add or remove entries under `socials`. Each one needs a `name` and an `href`.

```yaml
socials:
  - name: github
    href: https://github.com/username
```
