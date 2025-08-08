export const aiSummary = (content) =>  fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_KEY}`,
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        model: "qwen/qwen3-8b:free",
        messages: [
            {
                "role": "system",
                "content": "You are a helpful assistant that summarizes text."
            },
            {
                "role": "user",
                "content": `Summarize this note: ${content}`
            }
        ]
    }),
});





