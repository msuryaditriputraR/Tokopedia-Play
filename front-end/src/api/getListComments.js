export default function getListComments(videoId) {
  return fetch(import.meta.env.VITE_ROOT_API + `video/${videoId}/comments`);
}
