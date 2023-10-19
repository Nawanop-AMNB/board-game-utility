export default function createPath(...path: string[]) {
  return [...path].join("/");
}
