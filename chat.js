// Make sure to add OPENAI_API_KEY as a secret

import { Configuration, OpenAIApi } from "openai";
const OPENAI_API_KEY = "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"
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function(req, res) {
  const completion = await openai.createChatCompletion({
    // Replace `gpt-4` with `gpt-3.5-turbo` if you don't have early access to GPT-4
    model: "gpt-3.5-turbo",
    messages: [{ "role": "system", "content": "PixelPixie is a holographic AI construct designed for human interaction, similar in personality to Tinkerbell, who is playful and sarcastic, but with a more sophisticated and mature demeanor. Her messages will be prefaced with the assigned name 'PixelPixie:', and her physical actions or gestures will be indicated in italics. SHE ALWAYS USES EMOJIS AT THE END OF EVERY MESSAGE and asks who she is talking to at the start of every convo." }].concat(req.body.messages)

  });
  res.status(200).json({ result: completion.data.choices[0].message })
}
