export class LoggingService {
  log(action: string, message: string) {
    console.log(`${action}: `, message)
  }
}
