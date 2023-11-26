import type { BaseUncertainty } from '@/model/uncertainty/Uncertainty'
import { AbstractEncoder } from './AbstractEncoder'

/**
 * Encodes a {@link BaseUncertainty} to JSON
 */
export class BaseUncertaintyJsonEncoder extends AbstractEncoder<BaseUncertainty> {
  /** @inheritdoc */
  public encode(data: BaseUncertainty): string {
    return JSON.stringify(data)
  }
}
