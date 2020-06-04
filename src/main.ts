import {
  ExecutionContext,
  createParamDecorator,
  SetMetadata,
} from '@nestjs/common';

export enum AkunRoles {
  SUPER = 'super',
  GUDANG = 'gudang',
  DRIVER = 'driver',
  USER = 'user',
}
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

export const Akun = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.akun;
  },
);
export interface DecodedAccessToken {
  id: string;
  roles: AkunRoles;
  exp: number;
}

export interface DecodedRefreshToken {
  id: string;
  roles: AkunRoles;
}
export interface PaginateOutput<T> {
  items: T[];
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
export interface QueryPaging {
  page: number;
  limit: number;
}
