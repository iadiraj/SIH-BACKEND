// const openai = require('../configs/gpt');
const OpenAI = require('openai');
// const {openai} = require("../configs/gpt");
const openai = new OpenAI({
    apiKey: "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"
});
module.exports.callGpt = async (text) => {
    try {
        const messages = [{"role": "user", "content": `${text}`}];
        // const completion = await openai.chat.completions.create({
        //     model: 'gpt-3.5-turbo-instruct',
        //     prompt: messages
        // })
        const completion = await openai.completions.create({
            model: "gpt-3.5-turbo-instruct",
            prompt: "Say this is a test.",
            max_tokens: 7,
            temperature: 0,
        });
        // const responseMessage = completion.choices[0].message;
        // console.log(responseMessage);
        console.log(completion);
        return completion;
    } catch (e) {
        console.error(e);
        throw e;
    }
};
