export type TRval = {
  Retval: Array<string>,
  Err: string,
  Errno: string,
  Elapsed: string,
};

type TLogValue = {
  LogPrefix: string;
  LogType: string,
  Taskname: string,
  Syscallname: string,
  Output: Array<string>,
  Rval: TRval
};

export type TMessege = {
  msg: TLogValue,
  level: string,
  time: string,
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


export function messgeToLog(messege: TMessege) {
  return {
    ...messege.msg, level: messege.level, time: messege.time
  }
}
