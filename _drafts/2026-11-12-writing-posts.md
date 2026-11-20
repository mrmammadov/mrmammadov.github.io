---
title: Writing posts
description: How to add posts to your blog.
---

Posts are Markdown files in `_posts/`, named `YYYY-MM-DD-slug.md`. The slug becomes the URL: `/blog/slug/`.

```markdown
---
title: My first post
description: A one-line summary shown on cards.
---

Write here. **Bold**, _italic_, [links](https://jekyllrb.com) and
code blocks all work.
```

> The `description` is what appears under the title in every list, so keep it short.

### Things that just work

- Syntax highlighting via Rouge
- Reading time, estimated at 200 words per minute
- An RSS feed at `/rss.xml` and a sitemap at `/sitemap.xml`
