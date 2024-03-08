import { authors, blog } from "./src/cms/collections";

const config = {
  backend: {
    name: "git-gateway",
    branch: "main",
  },
  media_folder: "public/images",
  public_folder: "/images",
  collections: [blog, authors],
  previewStyles: ["/src/styles/global.css"],
};

export default config;
