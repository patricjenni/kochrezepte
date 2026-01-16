/**
 * Joins a base URL with a path, handling slashes correctly
 * @param base - The base URL (e.g., import.meta.env.BASE_URL)
 * @param path - The path to append
 * @returns The joined URL
 */
export const joinUrl = (base: string, path: string): string => {
  // If path is an absolute URL or protocol-relative, return it unchanged
  if (/^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(path)) return path;

  // Remove trailing slashes from base and leading slashes from path,
  // then join with a single slash.
  const normalizedBase = base.replace(/\/+$/, "");
  const normalizedPath = path.replace(/^\/+/, "");

  // If path is empty, return base (with a single trailing slash if base was root)
  if (normalizedPath === "")
    return normalizedBase === "" ? "/" : normalizedBase;

  return `${normalizedBase}/${normalizedPath}`;
};
