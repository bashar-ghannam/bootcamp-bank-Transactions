const express = require('express');
const router = express.Router();
const Transaction = require('../model/Transaction');

router.get('/transactions', function (req, res) {
  Transaction.find({}, function (err, transactions) {
    res.send(transactions);
  });
});

router.get('/categorys', function (req, res) {
  Transaction.aggregate(
    [{ $group: { _id: '$category', sum: { $sum: '$amount' } } }],
    function (err, categorys) {
      res.send(categorys);
    }
  );
});

router.post('/transaction', async function (req, res) {
  const transaction = new Transaction({
    amount: req.body.amount,
    category: req.body.category,
    vendor: req.body.vendor,
  });
  transaction.save();
  res.end();
});

router.delete('/transaction/:id', function (req, res) {
  Transaction.deleteOne({ _id: req.params.id }, function (err) {
    res.end();
  });
});

module.exports = router;
