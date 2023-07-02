declare global {
  export namespace UtilTypes {
    type ObjectKey = string | symbol;
    type ObjectType = Record<ObjectKey, unknown>;

    type WithRequiredKeys<
      InputObjectType extends ObjectType,
      Keys extends keyof InputObjectType
    > = Omit<InputObjectType, Keys> & Required<Pick<InputObjectType, Keys>>;

    export type { ObjectKey, ObjectType, WithRequiredKeys };
  }
}

export {};
