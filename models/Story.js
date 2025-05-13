const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a story title"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    story: {
      type: String,
      required: [true, "Please enter a story description"],
    },
    tags: {
      type: [String],
      default: [],
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    imageUrl: {
      type: String,
      required: false
    },
    storyDate: {
      type: Date,
      default: Date.now
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Story", StorySchema);