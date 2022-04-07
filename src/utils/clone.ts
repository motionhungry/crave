import * as degit from "degit";

import { GIT_REPO } from "../constants";

export type CloneArgs = {
  template: string;
  name: string;
};

export type FlagsArgs = {
  branch: string | undefined;
};

export const clone = async (flags: FlagsArgs, args: CloneArgs): Promise<void> => {
  const branch = flags.branch ? `#${flags.branch}` : "";
  const emitter = degit(`${GIT_REPO}/${args.template}${branch}`, {
    cache: true,
    force: true,
    verbose: true,
  });

  emitter.on("info", (info) => {
    console.log(info.message);
  });

  return new Promise(async (resolve, reject) => {
    try {
      await emitter.clone(args.name);
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};
