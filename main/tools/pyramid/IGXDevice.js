import Tool from "../Tool"
import WebSocket from "ws"

class IGXDevice extends Tool {
  constructor(options) {
    super(options)
    const { ip } = options

    this.emitter = new WebSocket.EventEmitter()
    this.emitter.on("update", (data) => this.onUpdate(data))

    this.getTimer = null

    this.ip = ip
    this.url = `ws://${this.ip}`

    this.createWS() 
  }

  createWS() {
    this.ws = new WebSocket(this.url, "json")

    this.ws.on("open", () => {
      console.log("Connected to WebSocket", this.ws.url)
      this.sendGet()
    })

    this.ws.on("message", (message) => {
      const { event, data } = JSON.parse(message)
      this.emitter.emit(event, data)
    })

    this.ws.on("close", () => {
      console.log("Disconnected from WebSocket")
    })

    this.ws.on("error", (error) => {
      console.error("WebSocket error", error)
    })
  }

  sendEvent(event, data) {
    if (this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({ event, data }))
    } else {
      console.error("WebSocket is not connected", this.ws.url)
    }
  }

  sendGet() {
    this.sendEvent("get")
  }

  onUpdate(data) {
    if (this.getTimer) {
      clearTimeout(this.getTimer)
    }
    this.getTimer = setTimeout(() => this.sendGet(), 50)
  }

  getKitData() {
    return {
      ...super.getKitData(),
      ip: this.ip,
      url: this.url,
      status: this.ws.readyState,
    }
  }
}

export default IGXDevice
