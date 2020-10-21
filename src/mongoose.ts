import mongoose from 'mongoose'

export type CustomerType = {
  first_name: string
	last_name: string
	age: number
	customer_type: string
	street: string
	city: string
	state: string
	zip_code: string
	phone_number: string
}

export type CustomerDocument = mongoose.Document & CustomerType

//schema definition
const CustomerSchema = new mongoose.Schema({
  first_name: String,
	last_name: String,
	age: Number,
	customer_type: String,
	street: String,
	city: String,
	state: String,
	zip_code: String,
	phone_number: String
})

export class Customer {
  private model: mongoose.Model<CustomerDocument>

  constructor() {
    this.model = mongoose.model('customer', CustomerSchema)
  }

  async create(data: CustomerType) {
    try {
      const result = await this.model.create(data)
      console.log(`Insert result %j`, result)
    } catch (error) {
      throw error
    }
  }

  async getAll() {
    let customers: CustomerType[]
    try {
      customers = await this.model.find({})
    } catch (error) {
      throw error
    }

    return customers
  }

  async getByID(customerID: string) {
    let customer: CustomerType | null
    try {
      customer = await this.model.findById(customerID)
    } catch (error) {
      throw error
    }

    return customer
  }

  async update(customerID: string, data: Partial<CustomerType>) {
    try {
      await this.model.findByIdAndUpdate(customerID, { $set: data })
    } catch (error) {
      throw error
    }
  }

  async delete(customerID: string) {
    try {
      await this.model.findByIdAndDelete(customerID)
    } catch (error) {
      throw error
    }
  }
}