const getAllStories = async (req, res) => {
  res.send("Get all stories");
};

const getStoryById = async (req, res) => {
  res.send("Get story by id");
};

const createStory = async (req, res) => {
  res.send("Story has been successfully created");
};

const updateStory = async (req, res) => {
  res.send("Story has been successfully updated");
};

const deleteStory = async (req, res) => {
  res.send("Story has been successfully deleted");
};

module.exports = {
  getAllStories,
  getStoryById,
  createStory,
  updateStory,
  deleteStory,
};