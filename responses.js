function getBotResponse(input) {
    //rock paper scissors
    if (input == "hey") {
        return "How can I help you";
    } else if (input == "hello") {
        return "How can I help you?";
    } else if (input == "good Morning") {
        return "rHow can I help you";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "hi") {
        return "Hello!";
    }else if (input == "goodbye") {
        return "Talk to you later!";
    }else if (input == "whats up") {
        return "Having fun";
    }else if (input == "boring") {
        return "Take a walk!";
    }else if (input == "fun") {
        return "watching web series!";
    }else if (input == "lockdown") {
        return "stay home stay safe!";
    }else {
        return "Try asking something else!";
  
