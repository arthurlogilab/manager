import PluginManager from './plugin-manager';
import IMessageBus from '../message-bus/IMessageBus';

export interface IPluginMessage {
  uid: string;
  plugin: string;
  method: string;
}

export default class Shell {
  pluginEventHandler: (event: MessageEvent) => void;

  pluginManager: PluginManager;

  messageBus: IMessageBus;

  constructor() {
    this.pluginManager = new PluginManager();
    this.pluginEventHandler = null;
  }

  setMessageBus(bus: IMessageBus) {
    this.messageBus = bus;
    this.messageBus.onReceive((data: IPluginMessage) =>
      this.handleMessage(data),
    );
  }

  getPluginManager() {
    return this.pluginManager;
  }

  handleMessage(data: IPluginMessage) {
    const onError = (error: Error) =>
      this.messageBus &&
      this.messageBus.send({
        uid: data.uid,
        error,
      });

    const onSuccess = (success: unknown) =>
      this.messageBus &&
      this.messageBus.send({
        uid: data.uid,
        success,
      });

    this.pluginManager.invokePluginMethod(data).then(onSuccess).catch(onError);
  }
}
