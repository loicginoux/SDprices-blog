import Blocks from "../blocks";
import { Title } from "../fields";

const collection = {
  name: "pages",
  label: "Pages",
  label_singular: "Page",
  description: "Custom pages",
  folder: "src/content/pages",
  create: true,
  fields: [
    {
      label: "Layout",
      name: "layout",
      widget: "hidden",
      default: "page-builder",
    },
    Title,
    Blocks,
  ],
};

// export default collection;
export { collection as pages };
