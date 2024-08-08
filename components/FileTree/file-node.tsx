import { getFilesOfPath } from '@actions/files';
import { type Dirent } from 'fs';
import { FileIcon, FolderIcon, FolderOpenIcon } from 'lucide-react';
import { FileList } from './file-list';

export async function FileNode({ file }: { file: Dirent }) {
  const isDirectory = file.isDirectory();

  if (isDirectory) {
    const filePath = file.path.replace(process.cwd(), '');
    const fileList = await getFilesOfPath(filePath, file.name);

    const nodeId = [file.path, file.name].join('-');

    return (
      <li className="relative before:absolute before:top-9 before:bottom-3 before:left-5 before:w-px before:bg-gray-800">
        <label
          htmlFor={nodeId}
          className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-800 cursor-pointer peer group"
        >
          <FolderIcon className="size-4 text-amber-500 group-has-[:checked]:hidden" />
          <FolderOpenIcon className="size-4 text-amber-500 hidden group-has-[:checked]:inline-block" />
          <span>{file.name}</span>

          <input
            defaultChecked={false}
            type="checkbox"
            name={nodeId}
            id={nodeId}
            hidden
          />
        </label>
        <FileList fileList={fileList} />
      </li>
    );
  }

  return (
    <li>
      <div className="flex items-center gap-3 px-3 py-2 rounded">
        <FileIcon className="size-4 text-sky-300" />
        <span>{file.name}</span>
      </div>
    </li>
  );
}
