export function openModal(post) {
  const modal = document.getElementById("postModal");
  modal.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.content}</p>
    <button onclick="document.getElementById('postModal').close()">Close</button>
  `;
  modal.showModal();
}
