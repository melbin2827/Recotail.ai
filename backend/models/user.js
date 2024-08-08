import mongoose from 'mongoose';

const shopSchema = new mongoose.Schema({
  shopId: {
    type: String,//mongoose.Schema.Types.ObjectId, // Or mongoose.Schema.Types.ObjectId
    required: true,
    // unique: true
  },
  collectionName: {
    type: String,
    required: true
  },
  shopName: {
    type: String,
    required: true
  }
});


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    // unique: true
  },
  name: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now // Set the default value to the current timestamp
  },

  shopList: { 
    type: [shopSchema],
    default: []
  } 
});

const User = mongoose.model('User', userSchema);

export default User;

// mongoose.connect("mongodb://localhost:27017/RecoTemp")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.error("Could not connect to MongoDB", err));

// const user = new User({
//   email: 'newuser@example.com',
//   name: 'New User',
//   // shopList: [] // No need to specify an empty array
// });
// await user.save();

// const newShop = {
//   shopId: "MYNTRA123",
//   collectionName: "collectionName",
//   shopName: "shopName",
// };
// user.shopList.push(newShop);
// await user.save();