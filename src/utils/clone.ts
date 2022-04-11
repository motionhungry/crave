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

export const clone = (args: CloneArgs) => {
  const templatePath = getTemplatePath(args.template);
  fs.cpSync(templatePath, path.join(process.cwd(), args.name), {
    dereference: true,
    recursive: true,
  });
};
