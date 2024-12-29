```javascript
// Solution using $ifNull
db.collection('myCollection').aggregate([
  {
    $lookup: {
      from: 'anotherCollection',
      localField: 'foreignKey',
      foreignField: '_id',
      as: 'joinedData'
    }
  },
  {
    $addFields: {
      joinedData: { $ifNull: [ { $arrayElemAt: [ '$joinedData', 0 ] }, null ] }
    }
  }
])


//Alternative solution using $lookup option
db.collection('myCollection').aggregate([
  {
    $lookup: {
      from: 'anotherCollection',
      localField: 'foreignKey',
      foreignField: '_id',
      as: 'joinedData',
      let: { foreignKeyValue: '$foreignKey' },
      pipeline: [
          { $match: {
              $expr: { $eq: ['$_id', '$$foreignKeyValue'] }
          } }
      ]
    }
  }
]);
```