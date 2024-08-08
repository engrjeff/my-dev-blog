import { cn } from '@lib/utils';
import { type Dirent } from 'fs';
import { FileNode } from './file-node';

export function FileList({
  fileList,
  root,
}: {
  fileList: Dirent[];
  root?: boolean;
}) {
  return (
    <ul
      className={cn(
        'pl-6 transition-all select-none overflow-hidden text-sm',
        root ? 'pl-0' : 'hidden peer-has-[:checked]:block'
      )}
    >
      {fileList.map((file) => (
        <FileNode key={file.path} file={file} />
      ))}
    </ul>
  );
}
