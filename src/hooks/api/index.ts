import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  baseOptions: {
    headers: {
      "OpenAI-Learning-Mode": "off"
    }
  }
})
delete configuration.baseOptions.headers["User-Agent"]
const openai = new OpenAIApi(configuration)

export type Message = {
  role: "system" | "assistant" | "user"
  content: string
}

export const requestOpenApi = async (message: Message[]) => {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: message,
    temperature: 0.9,
    max_tokens: 2000
  })

  return await completion.data.choices[0].message
}
