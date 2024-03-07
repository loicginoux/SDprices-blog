import { Title } from "../fields";

const collection = {
  name: "blog",
  label: "Blog",
  label_singular: "Blog Post",
  description: "Blog post collection",
  folder: "src/content/blog",
  slug: "{{slug}}",
  create: true,
  delete: true,
  fields: [
    Title,
    {
      label: "Description",
      name: "description",
      widget: "string",
    },
    {
      label: "Publication Date",
      name: "pubDate",
      widget: "datetime",
      format: "DD MMM YYYY",
      date_format: "DD MMM YYYY",
      time_format: false,
    },
    {
      label: "Updated Date",
      name: "updatedDate",
      widget: "datetime",
      format: "DD MMM YYYY",
      date_format: "DD MMM YYYY",
      time_format: false,
      required: false,
    },
    {
      label: "Author",
      name: "author",
      widget: "relation",
      collection: "authors",
      display_fields: ["title"],
      search_fields: ["title"],
      value_field: "title",
      required: false,
    },
    {
      label: "Hero Image",
      name: "heroImage",
      widget: "image",
      required: false,
    },
    {
      label: "Body",
      name: "body",
      widget: "markdown",
    },
  ],
};

export { collection as blog };
