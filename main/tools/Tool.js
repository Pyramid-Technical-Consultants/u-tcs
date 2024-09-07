import { v4 as uuidv4 } from "uuid"

class Tool {
  constructor({ id = uuidv4(), label, description }) {
    this.id = id
    this.label = label
    this.description = description
  }

  getKitData() {
    return {
      id: this.id,
      label: this.label,
      description: this.description,
    }
  }
}

export default Tool