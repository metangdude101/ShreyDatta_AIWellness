
from openai import OpenAI
import random
import streamlit
client = OpenAI(
    api_key = streamlit.secrets["OPENAI_API_KEY"]

)

wellness_topics=[
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


]

streamlit.title("Daily Wellness Tips")

response = client.responses.create(
    model="gpt-5-nano",
    input="Write a one-sentence wellness tip about " + random.choice(wellness_topics)
)

print(response.output_text)

streamlit.write(response.output_text + " *By AI.*")

