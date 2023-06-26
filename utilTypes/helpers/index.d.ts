declare global {
  export namespace UtilTypes {
    export type InterfaceToType<InputInterface> = {
      [key in keyof InputInterface]: InputInterface[key];
    };
  }
}

export {};
