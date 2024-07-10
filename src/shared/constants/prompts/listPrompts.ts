import { prompt } from '../cli/readline'

export async function textListPrompt (message: string, defaultValue: string, choices: string[]): Promise<string> {
  const question = prompt({
    message,
    default: defaultValue,
    type: 'list',
    name: 'answer',
    choices: choices as any
  })

  const answer = await question
  return answer.answer
}
