import { isObject } from '../objectsHandle';

export { classnames };

type ViaObjectClassesDefinition = Record<string, boolean>;
type InputClass = string | ViaObjectClassesDefinition;

function classnames(...inputClasses: InputClass[]): string {
  const classesList: string[] = [];
  inputClasses.forEach(classDefinition => {
    if (typeof classDefinition === 'string') {
      classesList.push(classDefinition);
    }

    if (isObject(classDefinition)) {
      const newDefinitions = convertViaObjectClassesDefinitionToClassesList(classDefinition);
      classesList.push(...newDefinitions);
    }
  });

  const classesListWithoutDuplicates = Array.from(new Set(classesList));
  const classesString = classesListWithoutDuplicates.join(' ');
  return classesString;
}

function convertViaObjectClassesDefinitionToClassesList(
  classesObject: ViaObjectClassesDefinition
): string[] {
  const classesList = Object.entries(classesObject).reduce(
    (accumulator, [className, shouldUseClass]) => {
      if (shouldUseClass) {
        accumulator.push(className);
      }

      return accumulator;
    },
    [] as string[]
  );

  return classesList;
}
