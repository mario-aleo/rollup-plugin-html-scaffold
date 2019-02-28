import { readFile, writeFile } from 'fs';
import path from 'path';
import { promisify } from './promisify';

export default function htmlTemplate(options = {}) {
  const { input, output, template } = options;

  const fileName = path.basename(output || input);
  const inputFile = fileName.indexOf('.html') < 0 ? `${fileName}.html` : fileName;

  return {
    name: 'html-scaffold',
    generateBundle(outputOptions) {
      const bundle = outputOptions.file;

      return new Promise((resolve, reject) =>
        readFile(input, (error, buffer) => {
          if (error) return reject(error);

          const html = buffer.toString('utf8');

          if (template) {
            Object.keys(template).forEach(key => {
              const regex = new RegExp(`<%= +${key} +%>`, 'g');
              html.replace(regex, template[key]);
            });
          }

          return promisify(writeFile, path.join(path.dirname(bundle), inputFile), html).then(
            () => resolve(),
            err => reject(err),
          );
        }),
      );
    },
  };
}
