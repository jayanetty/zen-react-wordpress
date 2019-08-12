import { DeviceVariables } from "./variables";

export const Device = {
  mobile: `(max-width: ${DeviceVariables.mobile})`,
  tablet: `(min-width: ${DeviceVariables.tablet})`,
  tablet_below: `(max-width: ${DeviceVariables.tablet})`,
  tablet_only: `(min-width: ${DeviceVariables.tablet}) and (max-width: ${DeviceVariables.desktop})`,
  mini_desktop: `(min-width: ${DeviceVariables.desktop_small})`,
  desktop: `(min-width: ${DeviceVariables.desktop})`,
  desktop_below: `(max-width: ${DeviceVariables.desktop})`
};
