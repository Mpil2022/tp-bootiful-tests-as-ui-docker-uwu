import {environment} from '../../../environments/environment';

export class Back {

  /**
   * Class which allows to fetch backend information
   */
  public static getBackEnd() : any {
    let backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    // @ts-ignore
    Object.keys(environment.backend.endpoints).forEach(k => backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);
    return backendURL;
  }
}
