const router = require("express").router();

const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;