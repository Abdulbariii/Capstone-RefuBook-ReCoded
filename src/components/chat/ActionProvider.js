class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage('Hi, friend.');
    this.updateChatbotState(greetingMessage);
  }

  refu() {
    const greetingMessage = this.createChatBotMessage(
      'Refubook help refugees wherever they are. Information will be separated by country and users will be able to create their own account and share their own personal experiences and knowledge on how to find a job, rent a house, buy or sell things you might need, or how to join events happening in the community. '
    );
    this.updateChatbotState(greetingMessage);
  }

  updateChatbotState(message) {
    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
