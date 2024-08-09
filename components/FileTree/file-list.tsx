import { cn } from '@lib/utils';
import { Directory } from './directory';
import { FileNode } from './file-node';

export function FileList({
  fileList,
  root,
}: {
  fileList: Directory[];
  root?: boolean;
}) {
  return (
    <ul
      className={cn(
        'pl-6 transition-all select-none overflow-hidden text-sm',
        root ? 'pl-0' : 'hidden peer-has-[:checked]:block'
      )}
    >
      {fileList.map((directory) => (
        <FileNode key={directory.path} directory={directory} />
      ))}
    </ul>
  );
}
