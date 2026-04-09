// Function to display posts
function displayPosts(posts) {
    const postList = document.getElementById("post-list");

    // Clear any existing posts
    postList.innerHTML = "";

    posts.forEach(post => {
        // Create elements
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");

        // Set content
        h1.textContent = post.title;
        p.textContent = post.body;

        // Append h1 and p to li
        li.appendChild(h1);
        li.appendChild(p);

        // Append li to ul
        postList.appendChild(li);
    });
}

// Async function to fetch posts
async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const posts = await response.json();

        // Pick 5 random posts
        const randomPosts = posts.sort(() => 0.5 - Math.random()).slice(0, 5);

        // Display posts
        displayPosts(randomPosts);

    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

// Call the async function
fetchPosts();
