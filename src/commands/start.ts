import { Command } from "@oclif/core";

import { clone, CloneArgs } from "../utils/clone";
import { rename } from "../utils/rename";

export default class Start extends Command {
  static description = "Create a new project.";

  static examples = [
    "<%= config.bin %> <%= command.id %> rn-design-system my-project",
  ];

  static args = [
    {
      name: "template",
      required: true,
      description: "The starter template to use.",
    },
    { name: "name", required: true, description: "The name of the project." },
  ];

  public async run(): Promise<void> {
    const { args } = await this.parse<{}, CloneArgs>(Start);
    await clone(args);
    rename(args.template, args.name);
  }
}
