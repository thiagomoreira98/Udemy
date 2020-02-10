const express = require('express');

module.exports = (server) => {

  // API Routes
  const router = express.Router();
  server.use('/api', router);

  // billingCycle Routes
  const BillingCycle = require('../api/billingCycle/billingCycleService');
  BillingCycle.register(router, '/billingCycles');
}