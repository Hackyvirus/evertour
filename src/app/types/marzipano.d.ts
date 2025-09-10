declare module "marzipano" {
  export const Viewer: any;
  export const ImageUrlSource: any;
  export const EquirectGeometry: any;
  export const CubeGeometry: any;
  export const RectilinearView: any;
  export const Scene: any;

  // Autorotate
  export function autorotate(options: {
    yawSpeed: number;
    targetPitch: number;
    targetFov: number;
  }): any;

  // Input handlers
  export class MouseViewDragHandler {
    constructor(options?: any);
  }
  export class TouchViewDragHandler {
    constructor(options?: any);
  }
  export class MouseZoomHandler {
    constructor(options?: any);
  }
}
