export default async function getListComments(videoId) {
  const response = await fetch(
    import.meta.env.VITE_ROOT_API + `video/${videoId}/comments`,
  );
  const data = response.json();

  return data;
}
