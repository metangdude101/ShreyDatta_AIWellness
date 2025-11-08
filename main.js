import OpenAI from "https://api.openai.com/v1/completions";

const client = new OpenAI();

const response = await fetch('https://ai-messenger.shreydatta6.workers.dev/');
const data = await response.text(); // Or .text() if the Worker returns plain text
console.log(data)

const wellness_topics = [
    "Having a positive outlook",
    "Spending less time with negative influences",
    "Not comparing yourself with others",
    "Holding on to positive emotions",
    "Finding a balance between positive and negative emotions",
    "Forgiving others",
    "Thinking about what you’re grateful for",
    "Journaling what you’re grateful for",
    "Expressing gratitude for others",
    "Being physically active",
    "Getting enough good sleep",
    "Eating healthy food",
    "Staying hydrated",
    "Taking time away from screens",
    "Connecting with family / loved ones",
    "Connecting with friends",
    "Getting involved with the community",
    "Volunteering for a local organization",
    "Joining a hobby group",
    "Finding what matters most to you",
    "Trying new things",
    "Helping others",
    "Finding activities that help you calm down",
    "Using problem-based coping",
    "Talking with trusted people",
    "Mindfulness meditation",
    "Movement meditation",
    "How to create a good environment for meditation",
    "Progressive relaxation",
    "Guided imagery",
    "Biofeedback",
    "Self-hypnosis",
    "Deep breathing exercises",
    "Doing relaxing activities",
    "Talking to your primary care provider",
    "Talk therapy",
    "Medicines",
    "Symptoms of bad mental health",
    "Suicide/crisis hotlines",
    "Places to learn more about mental health",
    "Negative side effects of stress"
];

var topicindex = Math.floor(Math.random() * wellness_topics.length)

const airesponse = await client.responses.create({
    model: "gpt-5",
    input: "Write a one-sentence wellness tip about " + wellness_topics[topicindex]
});


console.log(airesponse.output_text);

