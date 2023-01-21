class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('hello')) {
      this.actionProvider.greet();
    } else if (lowerCaseMessage.includes('what')) {
      this.actionProvider.refu();
    } else if (lowerCaseMessage.includes('how')) {
      this.actionProvider.blog();
    } else if (lowerCaseMessage.includes('thank')) {
      this.actionProvider.thank();
    } else if (lowerCaseMessage.includes('join')) {
      this.actionProvider.join();
    }
  }
}

export default MessageParser;
