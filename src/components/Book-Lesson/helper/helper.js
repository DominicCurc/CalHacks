const {
  CallClient,
  VideoStreamRenderer,
  LocalVideoStream
} = require("@azure/communication-calling");
const {
  AzureCommunicationTokenCredential
} = require("@azure/communication-common");
const { AzureLogger, setLogLevel } = require("@azure/logger");
// Set the log level and output
setLogLevel("verbose");
AzureLogger.log = (...args) => {
  console.log(...args);
};

const signInUserAccessToken = "";
const therapistUserAccessToken = "";
const ACSToken = "";

let initializeCallAgentButton = document.getElementById(
  "initialize-call-agent"
);
let tokenCredential;
let callAgent;
let deviceManager;
let call;
let incomingCall;
let localVideoStream;
let localVideoStreamRenderer;

function initiateAgentCall() {
  initializeCallAgentButton.onclick = async () => {
    try {
      console.log("working");
      window.location.href = "/videocall";
      const callClient = new CallClient();
      let tokenCredential = new AzureCommunicationTokenCredential(
        therapistUserAccessToken
      );
      callAgent = await callClient.createCallAgent(tokenCredential);
      // Set up a camera device to use.
      deviceManager = await callClient.getDeviceManager();
      await deviceManager.askDevicePermission({ video: true });
      await deviceManager.askDevicePermission({ audio: true });
      // Listen for an incoming call to accept.
      callAgent.on("incomingCall", async (args) => {
        try {
          incomingCall = args.incomingCall;
        } catch (error) {
          console.error(error);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export default initiateAgentCall;
