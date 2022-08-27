import {expect, test} from '@oclif/test'

describe('files:emptyTrash', () => {
  test
  .stdout()
  .command(['files:emptyTrash'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['files:emptyTrash', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
