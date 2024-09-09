# preload.js

Electron is a framework for building cross-platform desktop applications using web technologies. It combines the Chromium rendering engine and the Node.js runtime. One of the key features of Electron is the ability to preload scripts in the renderer process (web pages) to securely expose limited APIs from the main process.

### Preload Scripts

Preload scripts are JavaScript files that run in a renderer process before any web content is loaded. They have access to both the DOM and Node.js APIs, making them a bridge between the web page and the Electron main process. Preload scripts are specified in the `webPreferences` option when creating a `BrowserWindow`.

### Context Isolation

To enhance security, Electron provides a feature called context isolation. It ensures that the web page and preload script run in separate JavaScript contexts. This prevents the web page from directly accessing Node.js APIs, reducing the risk of malicious code execution. Instead, safe APIs can be exposed to the web page using the `contextBridge` module.

## Detailed Design

The `preload.js` script in this design serves as a bridge between the renderer process and the main process. It uses the `contextBridge` and `ipcRenderer` modules to securely expose a set of APIs to the web page. These APIs allow the web page to send and receive messages to and from the main process, as well as invoke certain actions.

### Modules Used

- `contextBridge`: Used to expose APIs to the renderer process in a secure manner.
- `ipcRenderer`: Used to communicate with the main process via IPC (Inter-Process Communication).

### Exposed API

The `preload.js` script exposes an `ipc` object to the renderer process with the following methods:

- `send(channel, value)`: Sends a message to the main process on the specified channel.
- `on(channel, callback)`: Registers a callback to be invoked when a message is received on the specified channel. Returns a function to remove the listener.
- `getMode()`: Asynchronously invokes the `get-mode` action in the main process and returns the result.
- `getKit()`: Asynchronously invokes the `get-kit` action in the main process and returns the result.

### Event Listeners

The script also sets up listeners for specific IPC messages from the main process:

- `login-request`: Invokes the `login` action in the main process with the provided credentials.
- `logout-request`: Invokes the `logout` action in the main process.
- `mode-request`: Invokes the `change-mode` action in the main process with the provided mode ID.

### Security Considerations

- **Context Isolation**: Ensure that context isolation is enabled in the `BrowserWindow` configuration to prevent direct access to Node.js APIs from the web page.
- **Verification**: Verify all inputs and outputs to and from the main process to prevent injection attacks.
- **Least Privilege**: Only expose the minimum necessary APIs to the renderer process to reduce the attack surface.

### Example Usage in Renderer Process

In the renderer process, the exposed `ipc` object can be used as follows:

```javascript

```

This design ensures a secure and efficient way to communicate between the renderer and main processes in an Electron application.