/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  IonicNativePlugin,
} from '@ionic-native/core';
import { Observable } from 'rxjs';

export interface idfaResponse {
  idfa: any;
  trackingLimited: any;
  trackingPermission: any;
}

/**
 * @name permissions I D F A
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { permissionsIDFA } from '@ionic-native/permissions-idfa';
 *
 *
 * constructor(private permissionsIDFA: permissionsIDFA) { }
 *
 * ...
 *
 *
 * this.permissionsIDFA.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'permissionsIDFA',
  plugin: 'cordova-plugin-idfa', // npm package name, example: cordova-plugin-camera
  pluginRef: 'idfaPlugin', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/chemerisuk/cordova-plugin-idfa/', // the github repository URL for the plugin
  install: 'cordova plugin add cordova-plugin-idfa', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['iOS'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class permissionsIDFA extends IonicNativePlugin {
  /**
   * This function does something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  getInfo(): Promise<idfaResponse> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * This function does something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  requestPermission(): Promise<idfaResponse> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
