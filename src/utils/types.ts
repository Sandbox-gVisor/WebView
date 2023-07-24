export type TLog = {
  LogType: string,
  Taskname: string,
  Syscallname: string,
  Output: Array<string>,
  Rval: {
    Retval: string,
    Err: string,
    Errno: string,
    Elapsed: string,
  }
}
