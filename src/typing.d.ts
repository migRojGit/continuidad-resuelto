declare var processEnv: Process;

 interface Process {
   env: Env;
 }

 interface Env {
  URL_HTTP: string;
 }

 interface GlobalEnvironment {
   process: Process;
 }
