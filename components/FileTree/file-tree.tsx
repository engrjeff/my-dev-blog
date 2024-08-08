import { getFilesOfPath } from '@actions/files';
import { FileList } from './file-list';

export async function FileTree({ path }: { path: string }) {
  const fileList = await getFilesOfPath(path);

  return (
    <div className="not-prose bg-gray-950 rounded-lg shadow p-6 border border-gray-900 h-96 max-h-[500px] overflow-y-auto">
      <h1 className="mb-4">FileTree</h1>
      <FileList fileList={fileList} root />
    </div>
  );
}
