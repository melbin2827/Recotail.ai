import sellerCentralShopSchema from "./sellerCentralShopSchema.js";
import userSchema from "./user.js";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/RecoTemp")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

const SellerCentralShop = mongoose.model('SellerCentralShops', sellerCentralShopSchema);
const User = mongoose.model('User', userSchema);

async function createDummyShops() {
  try {
    // Create dummy SellerCentralShop documents
    const shop1 = new SellerCentralShop({
      sellePartnerID: 'SP12345',
      refreshToken: 'your_refresh_token_1',
      shopType: 'sellercentral'
    });
    await shop1.save();

    const shop2 = new SellerCentralShop({
      sellePartnerID: 'SP67890',
      refreshToken: 'your_refresh_token_2',
      shopType: 'vendorcentral'
    });
    await shop2.save();

    const shop3 = new SellerCentralShop({
      sellePartnerID: 'SP11122',
      refreshToken: 'your_refresh_token_3',
      shopType: 'sellercentral'
    });
    await shop3.save();

    // Create dummy User documents with shop references
    const user1 = new User({
      email: 'user1@example.com',
      name: 'User 1',
      shopList: [
        {
          shopId: 'SP12345',
          collectionName: 'SellerCentralShops',
          shopName: 'Shop 1'
        },
        {
          shopId: 'SP67890',
          collectionName: 'SellerCentralShops',
          shopName: 'Shop 2'
        }
      ]
    });
    await user1.save();

    const user2 = new User({
      email: 'user2@example.com',
      name: 'User 2',
      shopList: [
        // {
        //   shopId: 'SP11122',
        //   collectionName: 'SellerCentralShops',
        //   shopName: 'Shop 3'
        // }
      ]
    });
    await user2.save();

    const user3 = new User({
      email: 'user3@example.com',
      name: 'User 3',
    });
    await user3.save();


    console.log('Dummy shops and users created successfully!');
  } catch (error) {
    console.error('Error creating dummy shops:', error);
  }
}


async function displayUserShops(email) {
  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      console.log(`User with email ${email} not found.`);
      return;
    }

    // Iterate through the user's shopList
    for (const shop of user.shopList) {
      // Get the collection name from the shop object
      const collectionName = shop.collectionName;

      // Find the shop details from the corresponding collection
      const shopDetails = await mongoose.model(collectionName).findOne({ sellePartnerID: shop.shopId });

      if (shopDetails) {
        console.log(`\nShop Name: ${shop.shopName}`);
        console.log(`Shop ID: ${shop.shopId}`);
        console.log(`Shop Type: ${shopDetails.shopType}`);
        console.log(`Refresh Token: ${shopDetails.refreshToken}`);
      } else {
        console.log(`Shop with ID ${shop.shopId} not found.`);
      }
    }
  } catch (error) {
    console.error('Error displaying user shops:', error);
  }
}




async function addNewShopToUser(email, shopId, collectionName, shopName, shopType) {
  const shop4 = new SellerCentralShop({
    sellePartnerID: shopId,
    refreshToken: 'your_refresh_token_4',
    shopType: shopType
  });
  await shop4.save();
  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      console.log(`User with email ${email} not found.`);
      return;
    }

    // Create a new shop object
    const newShop = {
      shopId: shopId,
      collectionName:"SellerCentralShops",
      shopName: shopName,
    };

    // Add the new shop to the user's shopList
    user.shopList.push(newShop);

    // Save the updated user document
    await user.save();

    console.log(`Shop with ID ${shopId} added to user ${email} successfully!`);
  } catch (error) {
    console.error('Error adding new shop to user:', error);
  }
}

// Example usage:
const newShopId = 'MYNTRA123'; // Replace with actual Myntra shop ID
const newShopName = 'Myntra Shop'; // Replace with actual Myntra shop name
const newShopType = 'myntra'; // Replace with actual Myntra shop type



createDummyShops();
// displayUserShops('user1@example.com');
// addNewShopToUser('user1@example.com', newShopId, 'MyntraShops', newShopName, newShopType); // Assuming you have a 'MyntraShops' collection