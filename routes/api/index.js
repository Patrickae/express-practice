const router = require("express").Router();
const fbRoutes = require("./fireboard");

// Book routes
router.use("/probes", fbRoutes);

module.exports = router;
