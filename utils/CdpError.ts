export default class CdpError extends Error {
    constructor(message: string,name: string) {
      super(message);
      this.name = name;
    }
}