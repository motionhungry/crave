import * as fs from 'fs';
import * as path from 'path';

export const getTemplatePath = (templateName: string) => {
  const templatePath = path.join(__dirname, '../templates', templateName);
  console.log(templatePath);
  if (fs.existsSync(templatePath)) {
    return templatePath;
  }
  throw new Error(`template '${templateName} not found.`);
};

export const getList = () => {
  const templateDir = path.join(__dirname, '..', 'templates');
  return fs.readdirSync(templateDir);
};
