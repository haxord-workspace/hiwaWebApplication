const express = require("express");
const router = express.Router();

router.post("/contact", (req, res) => {
  const { name, phone, date, location, message } = req.body;

  if (!name || !phone || !date || !location || !message) {
    return res.status(400).json({ error: "All fields are required. " });
  }

  // TODO: save to database, send email, or forward to CRM.
  console.log("New contact submission:", { name, phone, date, location, message });

  return res.status(201).json({ status: "success", message: "Contact request received" });
});

module.exports = router;
