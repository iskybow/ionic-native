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

/**
 * @name App Metrica
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { AppMetrica } from '@ionic-native/app-metrica';
 *
 *
 * constructor(private appMetrica: AppMetrica) { }
 *
 * ...
 *
 *
 * this.appMetrica.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'AppMetrica',
  plugin: 'yandex-appmetrica-plugin-cordova', // npm package name, example: cordova-plugin-camera
  pluginRef: 'window.appMetrica', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/yandexmobile/metrica-plugin-cordova', // the github repository URL for the plugin
  install: 'cordova plugin add yandex-appmetrica-plugin-cordova', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class AppMetrica extends IonicNativePlugin {
  /**
   * This function does something
   * @param config {object} Some param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({
    sync: true,
  })
  activate(config: object): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * This function does something
   * @param name {string} Some param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({
    sync: true,
  })
  reportEvent(name: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
