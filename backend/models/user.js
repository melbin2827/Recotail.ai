import mongoose from 'mongoose';

export const shopSchema = new mongoose.Schema({
  shopId: {
    type: mongoose.Schema.Types.ObjectId, // Or mongoose.Schema.Types.ObjectId
    required: true,
    unique: true
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
    unique: true
  },
  name: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now // Set the default value to the current timestamp
  },

  shopList: [shopSchema] // Store all shops
});

const User = mongoose.model('User', userSchema);
export default User;

