export type TRval = {
  Retval: Array<string>,
  Err: string,
  Errno: string,
  Elapsed: string,
};

export type TLog = {
  LogPrefix: string;
  LogType: string,
  Taskname: string,
  Syscallname: string,
  Output: Array<string>,
  Rval: TRval,
  level: string;
  time: string;
};

