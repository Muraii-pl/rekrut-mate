export const generateSlug = (name: string) => {
  const cutIndex = name.lastIndexOf(' ', 150);
  name = name.substring(0, cutIndex);
  return name.normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')
  .replace(/--+/g, '-');
};
