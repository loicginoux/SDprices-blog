const collection = {
  name: "authors",
  label: "Authors",
  label_singular: "Author",
  editor: {
    preview: false,
  },
  description: "Blog authors",
  folder: "src/content/authors",
  slug: "{{slug}}",
  create: true,
  delete: true,
  fields: [
    {
      label: "Name",
      name: "title",
      widget: "string",
      default: "",
    },
    {
      label: "Featured Image",
      name: "thumbnail",
      widget: "image",
      default: "",
      required: false,
    },
    {
      label: "Description",
      name: "body",
      widget: "markdown",
      default: "",
      required: false,
    },
  ],
};

export { collection as authors };
