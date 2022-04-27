export default function (plop) {
  plop.setGenerator('screen', {
    description: 'a screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'screen component name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/screens/src/{{ name }}/{{ name }}.tsx',
        templateFile: '.plop/screen/screen/screen.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/screens/src/{{ name }}/index.ts',
        templateFile: '.plop/screen/screen/index.ts.hbs',
      },
    ],
  });
}
