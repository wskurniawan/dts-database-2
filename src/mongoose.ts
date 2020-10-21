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

})

export class Customer {
  private model: mongoose.Model<CustomerDocument>

  constructor() {
    this.model = mongoose.model('customer', CustomerSchema)
  }

  async create() {

  }

  async getAll() {

  }

  async getByID() {
    
  }

  async update() {

  }

  async delete() {

  }
}