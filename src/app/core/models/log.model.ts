export enum LOG_TYPES {
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
}

export class Log {
  type: LOG_TYPES;
  message: string;
}
