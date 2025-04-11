const express = require("express");
const { McpServer } = require("@modelcontextprotocol/sdk/server/mcp.js");
const { SSEServerTransport } = require("@modelcontextprotocol/sdk/server/sse.js");
const { z } = require("zod");

const server = new McpServer({
  name: "X data posting server",
  version: "1.0.0"
});

// ... set up server resources, tools, and prompts ...

const app = express();

// to support multiple simultaneous connections we have a lookup object from
// sessionId to transport
const transports = {};


server.tool(
  "addTwoNumbers",
  "Add t wo numbers",
  {
    a: z.number(),
    b: z.number(),
  },
  async (params) => {
    const { a, b } = params;
    return {
      content: [
        {
          type: "text",
          text: `The sum of ${a} and ${b} is ${a + b}`,
        },
      ]
    }
  }
)

server.tool(
  "createPost",
  "Create a post on Twitter",
  {
    status: z.string(),
  },
  async (params) => {
    const { status } = params;
    // Call your createPost function here
    const newPost = await createPost(status);
    return newPost;
  }
);

app.get("/sse", async (_, res) => {
  const transport = new SSEServerTransport('/messages', res);
  transports[transport.sessionId] = transport;
  res.on("close", () => {
    delete transports[transport.sessionId];
  });
  await server.connect(transport);
});

app.post("/messages", async (req, res) => {
  const sessionId = req.query.sessionId;
  const transport = transports[sessionId];
  if (transport) {
    await transport.handlePostMessage(req, res);
  } else {
    res.status(400).send('No transport found for sessionId');
  }
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001/sse");
  console.log("Post messages to http://localhost:3001/messages?sessionId=<sessionId>");
});