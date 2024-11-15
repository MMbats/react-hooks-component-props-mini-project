// src/data/blog.js

// Data for the blog posts
export const posts = [
  { title: 'Post 1', date: '2024-11-01', preview: 'This is a preview' },
  { title: 'Post 2', date: '2024-11-02', preview: 'Another preview' }
];

// Blog data, including the image, about text, and posts
const blogData = {
  name: "Underreacted",
  image: "https://via.placeholder.com/215", // Add a placeholder for image
  about: "A blog about learning React",
  posts: [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
  ],
};

export default blogData;
