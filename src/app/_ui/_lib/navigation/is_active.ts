/**
 * 設定のパスが現在のパスの一部分か(アクティブか)
 * @param currentPath
 * @param settingPath
 */
export function isActive(currentPath: string, settingPath: string) {
  const segments = explodePath(currentPath);
  const settingSegments = explodePath(settingPath);

  if (settingSegments.length === 0) return segments.length === 0;
  else return settingSegments.reduce(
    (accumulator, segment, index) => accumulator && segment === segments[index], true,
  );
}

function explodePath(path: string): string[] {
  return path.split('/').filter(segment => segment !== '');
}