const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { accessChat, fetchChats, createGroupChat, renameGroup, addToGroup, removeFromGroup } = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").post( accessChat);
router.route("/").get(fetchChats);
router.route("/group").post( createGroupChat);
router.route("/rename").put( renameGroup);
router.route("/groupremove").put(  removeFromGroup);
router.route("/groupadd").put(  addToGroup);

module.exports = router;