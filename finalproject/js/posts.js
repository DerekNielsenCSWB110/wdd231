import { openModal } from './modal.js';

async function loadPosts() {
  try {
    const response = await fetch('data/posts.json');
    const posts = await response.json();

    const container = document.getElementById("posts-container");

    posts.forEach(post => {
      container.innerHTML += `
        <article class="card">
          <h3>${post.title}</h3>
          <p>${post.date}</p>
          <p>${post.category}</p>
          <button data-id="${post.id}">Read More</button>
        </article>
      `;
    });

    document.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        const post = posts.find(p => p.id == btn.dataset.id);
        openModal(post);
      });
    });

  } catch (error) {
    console.error("Error loading posts:", error);
  }
}

loadPosts();

