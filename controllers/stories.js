const Story = require("../models/Story");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllStories = async (req, res) => {
  res.send("Get all stories");
};

const getStoryById = async (req, res) => {
  res.send("Get story by id");
};

const createStory = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const story = await Story.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ story });
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