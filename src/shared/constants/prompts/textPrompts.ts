import { prompt } from '../cli/readline'

export async function textPrompt (message: string, defaultValue: string): Promise<string> {
  const question = prompt({
    name: 'answer',
    type: 'input',
    message,
    default: defaultValue
  })

  const answer = await question
  return answer.answer
}
