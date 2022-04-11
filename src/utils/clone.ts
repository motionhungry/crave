import * as fs from "fs";
import * as path from "path";

import { getTemplatePath } from "./templates";

export type CloneArgs = {
  template: string;
  name: string;
};

export type FlagsArgs = {
  branch: string | undefined;
};

export const clone = async (args: CloneArgs): Promise<void> => {
  const templatePath = getTemplatePath(args.template);
  fs.cpSync(templatePath, path.join(process.cwd(), args.name), {
    dereference: true,
    recursive: true,
    filter: (filePath: string) => {
      console.log(filePath);
      return !filePath.includes("node_modules");
    },
  });
};
