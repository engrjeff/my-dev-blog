'use server';

import fs from 'fs';
import path from 'path';

export async function getFilesOfPath(...paths: string[]) {
  const DIR = path.join(process.cwd(), ...paths);

  const fileList = await new Promise<fs.Dirent[]>((resolve, reject) => {
    fs.readdir(DIR, { encoding: 'utf8', withFileTypes: true }, (err, files) => {
      if (err) reject(err);

      resolve(files);
    });
  }).then((files) => files);

  return fileList;
}
