import { IsInt, Max, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class QueryPaging {
  @IsInt()
  @Min(0)
  @Transform((v, o) => {
    const value = parseInt(v);
    if (value) {
      o.page = value;
      return value;
    }
    return null;
  })
  page: number;

  @IsInt()
  @Max(100)
  @Min(5)
  @Transform((v, o) => {
    const value = parseInt(v);
    if (value) {
      o.limit = value;
      return value;
    }
    return null;
  })
  limit: number;
}
