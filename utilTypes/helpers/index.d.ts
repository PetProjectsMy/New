declare global {
  export namespace UtilTypes {
    type InterfaceToType<InputInterface> = {
      [key in keyof InputInterface]: InputInterface[key];
    };

    export type { InterfaceToType };
  }
}

export {};
