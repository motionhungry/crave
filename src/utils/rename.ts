import * as fs from 'fs-extra';
import * as path from 'path';

export const rename = (templateName: string, projectName: string) => {
  const projectDir = path.resolve(`${process.cwd()}/${projectName}`);

  const crawlAndReplace = (dir: string) => {
    fs.readdirSync(dir).forEach((file) => {
      const filePath = path.resolve(`${dir}/${file}`);
      const stats = fs.lstatSync(filePath);

      if (stats.isFile()) {
        const data = fs.readFileSync(filePath, 'utf8');
        const re = new RegExp(templateName, 'g');
        const newData = data.replace(re, projectName);

        fs.writeFileSync(filePath, newData, 'utf8');
      }

      if (stats.isDirectory()) {
        crawlAndReplace(filePath);
      }
    });
  };

  crawlAndReplace(projectDir);
};
