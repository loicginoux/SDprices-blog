const collection = {
  name: "landing-pages",
  label: "Landing Pages",
  description: "Individual pages with unique layouts and/or fields",
  delete: false,
  files: [
    {
      label: "Home",
      name: "home",
      file: "content/landing-pages/home.md",
      fields: [
        {
          label: "Template Key",
          name: "templateKey",
          widget: "hidden",
          default: "index-page",
        },
        {
          label: "Slug",
          name: "slug",
          widget: "hidden",
          default: "",
        },
        {
          widget: "object",
          label: "Hero",
          name: "hero",
          fields: [
            {
              label: "Heading",
              name: "heading",
              widget: "string",
            },
            {
              label: "Intro",
              name: "intro",
              widget: "text",
              required: false,
            },
            {
              label: "Image",
              name: "image",
              widget: "image",
              allow_multiple: false,
            },
            {
              label: "CTA",
              name: "cta",
              widget: "object",
              fields: [
                {
                  label: "Text",
                  name: "text",
                  widget: "string",
                  default: "See how it works",
                },
                {
                  label: "Link",
                  name: "Link",
                  widget: "string",
                  required: false,
                },
              ],
            },
          ],
        },
        {
          widget: "object",
          label: "Summary",
          name: "summary",
          fields: [
            {
              label: "Lead",
              name: "lead",
              widget: "string",
            },
            {
              label: "Text",
              name: "text",
              widget: "text",
            },
          ],
        },
      ],
    },
    {
      label: "Blog Index",
      name: "blog-index",
      file: "content/landing-pages/blog.md",
      fields: [
        {
          label: "Template Key",
          name: "templateKey",
          widget: "hidden",
          default: "blog-index",
        },
        {
          label: "Slug",
          name: "slug",
          widget: "hidden",
          default: "blog",
        },
        {
          label: "Hero",
          name: "hero",
          widget: "object",
          fields: [
            {
              label: "Heading",
              name: "heading",
              widget: "string",
            },
            {
              label: "Intro",
              name: "intro",
              widget: "text",
              required: false,
            },
            {
              label: "Image",
              name: "image",
              widget: "image",
              allow_multiple: false,
            },
          ],
        },
        {
          label: "Featured Blog Post",
          name: "featuredBlogPost",
          widget: "relation",
          required: false,
          collection: "blog",
          displayFields: ["title"],
          searchFields: ["title"],
          valueField: "title",
        },
      ],
    },
  ],
};

export { collection as landing };
