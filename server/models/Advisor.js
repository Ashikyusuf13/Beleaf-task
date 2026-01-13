const mongoose = require("mongoose");

const advisorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
      default: "Team Image.png",
    },
    socials: {
      type: [String],
      default: ["𝕏", "▶"],
    },
  },
  {
    timestamps: true,
  }
);

const Advisor = mongoose.model("Advisor", advisorSchema);

module.exports = Advisor;
