export default function searchVideo(query) {
  return fetch(import.meta.env.VITE_ROOT_API + `videos/search?q=${query}`);
}
