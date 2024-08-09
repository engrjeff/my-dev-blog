import { getDirectories } from './directory';
import { FileList } from './file-list';

export function FileTree() {
  const fileList = getDirectories();

  return (
    <div className="not-prose bg-gray-950 divide-y divide-gray-900 rounded-lg shadow border border-gray-900">
      <div className="p-4">
        <h1>File Tree</h1>
      </div>
      <div className="p-4 h-80 max-h-[500px] overflow-y-auto">
        <FileList fileList={fileList} root />
      </div>
    </div>
  );
}
