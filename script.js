// script.js
export function displayPosts(posts) {
    const postList = document.getElementById("post-list");
    postList.innerHTML = "";

    posts.forEach(post => {
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");

        h1.textContent = post.title;
        p.textContent = post.body;

        li.appendChild(h1);
        li.appendChild(p);
        postList.appendChild(li);
    });
}

export async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) throw new Error("Network response was not ok");

        const posts = await response.json();
        const randomPosts = posts.sort(() => 0.5 - Math.random()).slice(0, 5);
        displayPosts(randomPosts);
        return randomPosts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}

// Auto-run fetchPosts when loaded in browser
if (typeof window !== "undefined") {
    fetchPosts();
}
