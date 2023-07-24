export type TRval = {
    Retval: string,
    Err: string,
    Errno: string,
    Elapsed: string,
};

export type TLog = {
  LogType: string,
  Taskname: string,
  Syscallname: string,
  Output: Array<string>,
  Rval: TRval | null
};
