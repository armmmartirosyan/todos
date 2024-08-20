export function useDisabled(title: string, description: string): boolean {
  return (
    !title || !title.trim().length || !description || !description.trim().length
  );
}
