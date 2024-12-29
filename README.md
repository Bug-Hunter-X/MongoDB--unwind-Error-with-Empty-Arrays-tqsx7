# MongoDB $unwind Error with Empty Arrays

This repository demonstrates a common error encountered when using the `$unwind` stage in MongoDB aggregation pipelines. The `$unwind` operator fails if the field it's trying to unwind is an empty array.  This often occurs when performing `$lookup` operations where no matching documents are found in the joined collection.

The `bug.js` file shows the problematic code, and `bugSolution.js` demonstrates how to fix the issue using the `$ifNull` operator or a `$lookup` option to leave the field as is when no matches are found.
