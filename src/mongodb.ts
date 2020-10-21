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