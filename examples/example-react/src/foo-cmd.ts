import { injectable } from 'tsyringe'
import { Command, EvictCache } from '@archimedes/arch'

@EvictCache
@injectable()
export class FooCmd extends Command<number> {
  async internalExecute(value: number) {}
}
