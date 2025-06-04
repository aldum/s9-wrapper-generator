import { NodePlopAPI } from 'plop'

export default function (plop: NodePlopAPI) {

  const prompts = [
    {
      type: 'input',
      name: 'id',
      message: 'package id'
    },
    {
      type: 'input',
      name: 'name',
      message: 'package name',
      default: (answers: any) => {
        const id = answers.id
        const capitalized =
          `${id.charAt(0).toUpperCase()}${id.slice(1)}`
        return capitalized
      }
    },
    {
      type: 'input',
      name: 'path',
      message: 'project path',
      default: (answers: any) =>
        `../${answers.id}-startos`
    },
  ]
  const actions = [
    {
      type: 'addMany',
      destination: '{{path}}/',
      templateFiles: '_base/**',
      globOptions: {
        dot: true,
      }
    },
    {
      type: 'add',
      path: '{{path}}/Makefile',
      templateFile: '_extra/Makefile.hbs',
    },
  ]

  plop.setGenerator('base', {
    description: 'base wrapper generator',
    prompts: prompts,
    actions: actions
  })
}
