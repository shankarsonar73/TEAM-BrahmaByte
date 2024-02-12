import Post from "../models/Post.js";
import User from "../models/User.js";
import Filter from "bad-words";

const profanityFilter = new Filter();
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath, isAnonymous } = req.body;

    // Filter out profanity
    const filteredDescription = profanityFilter.clean(description);

    // Check if the description is empty after profanity filtering
    if (!filteredDescription.trim()) {
      // If description contains only profanity, you might want to reject the post
      return res.status(400).json({ message: "Post contains profanity and cannot be accepted." });
    }

    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      isAnonymous,
      description: filteredDescription,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });

    await newPost.save();

    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};


// Function to filter out profanity using WebPurify API
const filterProfanity = async (text) => {
  try {
    const result = await profanityFilter.live({ text });
    // Replace profane words with asterisks
    const filteredText = result.cleansed;

    return filteredText;
  } catch (error) {
    console.error("Profanity filter error:", error);
    return text;
  }
};
/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
