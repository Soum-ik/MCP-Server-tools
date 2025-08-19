# X-Automator.

X-Automator is an advanced automation tool designed to streamline repetitive tasks and enhance productivity. It leverages AI-driven workflows to simplify complex processes, making it an essential tool for developers and businesses alike.

## Features

- **AI-Powered Chat**: Interact with AI to ask questions or execute tools.
- **Dynamic Tool Integration**: Fetch and call tools hosted on the server.
- **Task Automation**: Automate repetitive tasks with ease.
- **AI Integration**: Utilize AI to optimize workflows and decision-making.
- **Customizable Workflows**: Tailor the automation to fit your specific needs.
- **Scalable**: Suitable for both small-scale and enterprise-level applications.

## Installation

### Server Setup

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in the `.env` file:
   ```properties
   TWITTER_API_KEY=<your-twitter-api-key>
   TWITTER_API_KEY_SECRET=<your-twitter-api-key-secret>
   TWITTER_ACCESS_TOKEN=<your-twitter-access-token>
   TWITTER_ACCESS_TOKEN_SECRET=<your-twitter-access-token-secret>
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Client Setup

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in the `.env` file:
   ```properties
   GEMINI_API_KEY=<your-gemini-api-key>
   ```
4. Start the client:
   ```bash
   npm start
   ```

## Usage

1. Start the server and client as described above.
2. Use the client to interact with the server and execute tasks such as posting to Twitter or performing calculations.

## Server Dependencies

The server uses the following dependencies:
- **@modelcontextprotocol/sdk**: Implements the MCP protocol.
- **dotenv**: Manages environment variables.
- **express**: Handles HTTP requests.
- **twitter-api-v2**: Integrates with Twitter.
- **zod**: Validates input schemas.

## Tools

### addTwoNumbers
- **Description**: Adds two numbers.
- **Input Schema**:
  ```json
  {
    "num1": "number",
    "num2": "number"
  }
  ```
- **Example Response**:
  ```json
  {
    "result": 5
  }
  ```

### createPost
- **Description**: Posts a status update to Twitter.
- **Input Schema**:
  ```json
  {
    "status": "string"
  }
  ```
- **Example Response**:
  ```json
  {
    "success": true,
    "tweetId": "1234567890"
  }
  ```

## How It Works

### Server
- Hosts tools and APIs.
- Listens for client connections on `/sse`.

### Client
- Connects to the server using SSE.
- Fetches tools and allows users to interact with them.
- Uses Google GenAI to generate intelligent responses.

## Future Improvements

- Add robust error handling for invalid inputs.
- Implement comprehensive unit tests for both client and server.
- Secure sensitive environment variables using a secrets manager.
- Expand toolset for more integrations.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Support

For any issues or questions, please open an issue in the repository or contact the maintainers.

