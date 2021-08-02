const router = require("express").Router();
const Workout = require("../../model/workout");

router.get("/", async (req, res) => {
  try {
    const workoutData = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ]);
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/range", async (req, res) => {
  try {
    const workoutData = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ]);
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async ({ body }, res) => {
  try {
    const workoutData = await Workout.create({
      body,
    });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const findWorkout = await Workout.findOne({ _id: req.params.id });
    const workoutData = await findWorkout.updateOne({
      $push: { exercises: req.body },
    });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
