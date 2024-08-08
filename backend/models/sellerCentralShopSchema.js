import mongoose from 'mongoose';

const sellerCentralShopSchema = new mongoose.Schema({
  sellePartnerID: {
    type: String,
    required: true,
    unique: true
  },
  refreshToken: {
    type: String,
    required: true
  },
  shopType: {
    type: String,
    default: 'sellercentral' 
  }
});

export default sellerCentralShopSchema;
// export default mongoose.model('SellerCentralShop', sellerCentralShopSchema);
