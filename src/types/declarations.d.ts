declare module '*.scss' {
  type CssClassNames = {
    [className: string]: string;
  };

  const cssClassNames: CssClassNames;
  export default cssClassNames;
}
