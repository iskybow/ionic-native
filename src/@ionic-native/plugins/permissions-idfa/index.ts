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

type TrackingPermission = 0 | 1 | 2 | 3;

interface IdfaData {
  /**
   * Whether usage of advertising id is allowed by user.
   */
  trackingLimited: boolean;

  /**
   * Identifier for advertisers _(iOS only)_.
   */
  idfa?: string;

  /**
   * Tracking permission status _(iOS only)_. Available only for iOS 14+ devices.
   *
   * For the meaning of the values see
   * [the tracking transparency API docs](https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanagerauthorizationstatus).
   */
  trackingPermission?: TrackingPermission;

  /**
   * Android advertising ID _(Android only)_.
   */
  aaid?: string;
}

interface IdfaPlugin {
  /**
   * Tracking permission value for the ["not determined" status](https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanagerauthorizationstatus/attrackingmanagerauthorizationstatusnotdetermined).
   */
  readonly TRACKING_PERMISSION_NOT_DETERMINED: 0;
  /**
   * Tracking permission value for the ["restricted" status](https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanagerauthorizationstatus/attrackingmanagerauthorizationstatusrestricted).
   */
  readonly TRACKING_PERMISSION_RESTRICTED: 1;
  /**
   * Tracking permission value for the ["permission denied" status](https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanagerauthorizationstatus/attrackingmanagerauthorizationstatusdenied).
   */
  readonly TRACKING_PERMISSION_DENIED: 2;
  /**
   * Tracking permission value for the ["authorized" status](https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanagerauthorizationstatus/attrackingmanagerauthorizationstatusauthorized).
   */
  readonly TRACKING_PERMISSION_AUTHORIZED: 3;
}

/**
 * @name permissions I D F A
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { PermissionsIDFA } from '@ionic-native/permissions-idfa/ngx';
 *
 *
 * constructor(private permissionsIDFA: PermissionsIDFA) { }
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
  pluginName: 'PermissionsIDFA',
  plugin: 'cordova-plugin-idfa', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.idfa', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/chemerisuk/cordova-plugin-idfa/', // the github repository URL for the plugin
  install: 'cordova plugin add cordova-plugin-idfa', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class PermissionsIDFA extends IonicNativePlugin {
  /**
   * This function does something
   * @return {Promise<IdfaData>} Returns a promise that resolves when something happens
   */
  @Cordova({
    sync: true,
  })
  getInfo(): Promise<IdfaData> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * This function does something
   * @return {Promise<TrackingPermission | null>} Returns a promise that resolves when something happens
   */
  @Cordova({
    sync: true,
  })
  requestPermission(): Promise<TrackingPermission | null> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
