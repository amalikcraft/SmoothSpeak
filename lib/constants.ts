export const plansMap = [
    {
      id: "basic",
      name: "Basic",
      description: "Get started with SmoothSpeak without breaking the bank!",
      price: "10",
      items: ["3 Blog Posts", "3 Transcription"],
      paymentLink: "https://buy.stripe.com/test_aEU2aNbGsfomffy288",
      priceId: process.env.NODE_ENV === "development" ? "price_1Px5yRP0F4ph3eylUEdciCaK" : "",

    },
    {
      id: "pro",
      name: "Pro",
      description: "All the blog posts, none of the excuses—time to go pro!",
      price: "19.99",
      items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
      paymentLink: "https://buy.stripe.com/test_3cs5mZ6m8eki3wQ6op",
      priceId: process.env.NODE_ENV === "development" ? "price_1Px5zIP0F4ph3eylk0h5Ieuz" : "",
    },
  ];


  export const ORIGIN_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://smoothspeak.lol";