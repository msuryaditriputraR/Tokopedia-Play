export default function postComment(videoId, data) {
  return fetch(import.meta.env.VITE_ROOT_API + `video/${videoId}/comments`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
