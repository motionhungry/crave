import { Command } from "@oclif/core";
import { getList } from "../utils/templates";

export default class List extends Command {
  static description = "List the available templates.";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static args = [{ name: "file" }];

  public async run(): Promise<void> {
    const templates = getList();
    templates.forEach((template) => {
      this.log(template);
    });
  }
}
