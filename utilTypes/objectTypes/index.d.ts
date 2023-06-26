declare global {
  export namespace UtilTypes {
    export type ObjectKey = string | symbol;
    export type ObjectType = Record<ObjectKey, unknown>;

    export type WithRequiredKeys<
      InputObjectType extends ObjectType,
      Keys extends keyof InputObjectType
    > = Omit<InputObjectType, Keys> & Required<Pick<InputObjectType, Keys>>;
  }
}

export {};
