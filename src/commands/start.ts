import { Command, Flags } from "@oclif/core";

import { clone, FlagsArgs, CloneArgs } from "../utils/clone";

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

  static flags = {
    branch: Flags.string({
      char: "b",
      required: false,
      description: "An optional branch name",
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse<FlagsArgs, CloneArgs>(Start);
    try {
      await clone(flags, args);
    } catch (err) {
      console.log(err);
    }
  }
}
