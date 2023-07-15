import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

// Load environment variables
dotenv.config()

connectDB()

const importData = async () => {
  try {
    // Clear out all existing data
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    // Insert new data
    const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers[0]._id
    const sampleProducts = products.map(product => {
      // Spread the product object and add adminUser
      return { ...product, user: adminUser }
    })
    await Product.insertMany(sampleProducts)

    console.log('Data imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    // Clear out all existing data
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

// Run the importData function if the first argument is '-d'
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
