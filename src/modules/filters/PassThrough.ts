import FilterIndices from './FilterIndices';
import {
  PointTypesUnion,
  PointTypesIntersection,
  TPointTypesUnion,
  PointXYZ,
} from '@/modules/common/point-types';

class PassThrough<
  T extends Partial<PointTypesUnion> = Partial<PointTypesIntersection>,
> extends FilterIndices<T> {
  constructor(
    protected _PT: TPointTypesUnion = PointXYZ,
    extractRemovedIndices = false,
  ) {
    super(new __PCLCore__[`PassThrough${_PT.name}`](extractRemovedIndices));
  }

  public setFilterFieldName(fieldName: string) {
    return this._native.setFilterFieldName(fieldName);
  }

  public getFilterFieldName(): string | null {
    return this._native.getFilterFieldName() as string | null;
  }

  public setFilterLimits(min: number, max: number) {
    return this._native.setFilterLimits(min, max);
  }

  public getFilterLimits(): [number, number] {
    return this._native.getFilterLimits();
  }
}

export default PassThrough;
