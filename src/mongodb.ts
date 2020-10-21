import mongodb from 'mongodb'

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

export class Customer {
  private collection: mongodb.Collection<CustomerType>

  constructor(db: mongodb.Db) {
    this.collection = db.collection('customer')
  }

  async create(data: CustomerType) {
    try {
      const result = await this.collection.insertOne(data)
      console.log('Insert result %j', result)
    } catch (error) {
      throw error
    }
  }

  async getAll() {
    let customers: CustomerType[]
    try {
      customers = await this.collection.find().toArray()
    } catch (error) {
      throw error
    }

    return customers
  }

  async getByID(customerID: string) {
    let customer: CustomerType | null
    try {
      customer = await this.collection.findOne({ _id: new mongodb.ObjectID(customerID) })
    } catch (error) {
      throw error
    }

    return customer
  }

  async update(customerID: string, updateData: Partial<CustomerType>) {
    try {
      await this.collection.updateOne({ _id: new mongodb.ObjectID(customerID) }, { $set: updateData })
    } catch (error) {
      throw error
    }
  }


  async delete(customerID: string) {
    try {
      await this.collection.deleteOne({ _id: new mongodb.ObjectID(customerID) })
    } catch (error) {
      throw error
    }
  }
}