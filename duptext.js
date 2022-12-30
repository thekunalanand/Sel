//script to check duplicate divmessage text

// A function that returns true if a post should have its checkbox checked, false otherwise
function shouldCheckPost(innerPost) {
  // Check if the checkbox should be checked based on some condition
  // Add any additional conditions here

  return true;
}

// get all the posts on the webpage
const posts = document.querySelectorAll('.innerPost');

// create a Map to store the texts of the "divMessage" elements and their corresponding "innerPost" elements
const textsToInnerPosts = new Map();

// loop through all the posts
posts.forEach((post) => {
  // get the "divMessage" element of the post
  const divMessage = post.querySelector('.divMessage');
  // get the text of the "divMessage" element
  const text = divMessage.textContent;

  // ignore the post if the text is an empty string or if it contains the word "anyone" or "bump"
  if (text.trim() === '' || text.toLowerCase().includes('anyone') || text.toLowerCase().includes('bump')) {
    return;
  }

  // if the Map already contains the text
  if (textsToInnerPosts.has(text)) {
    // get the array of "innerPost" elements that contain the text
    const innerPosts = textsToInnerPosts.get(text);
    // add the current "innerPost" element to the array
    innerPosts.push(post);
  } else {
    // add the text and the "innerPost" element to the Map
    textsToInnerPosts.set(text, [post]);
  }
});

// loop through all the entries in the Map
for (const [text, innerPosts] of textsToInnerPosts) {
  // if there is more than one "innerPost" element with the same text
  if (innerPosts.length > 1) {
    // loop through all the "innerPost" elements
    innerPosts.forEach((innerPost) => {
      if (shouldCheckPost(innerPost)) {
        // get the checkbox element inside the "innerPost" element
        const checkbox = innerPost.querySelector('.deletionCheckBox');
        // check the checkbox
        checkbox.checked = true;
      }
    });
  }
}
