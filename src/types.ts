export type TouchPointType = 'image' | 'button';

export interface TouchPoint {
  id: string;
  type: TouchPointType;
  enabled?: boolean; // whether the touchpoint is enabled/visible (default: true)
  positionX: number; // percentage (0-100)
  positionY: number; // percentage (0-100)
  imageUrl?: string; // required if type is 'image'
  buttonText?: string; // required if type is 'button'
  width?: number; // width in pixels for the icon/button
  height?: number; // height in pixels for the icon/button
  overlayContent: string; // text content to show in overlay
  overlayImage?: string; // image to show above the text in overlay
  overlayTitle?: string; // title to show above the image in overlay
  overlayWidth?: number; // width in pixels for the overlay (default: 300)
  overlayBackgroundColor?: string; // background color for overlay (default: '#000000')
  overlayOpacity?: number; // opacity for overlay background (0-1, default: 0.85)
  overlayPadding?: number; // padding in pixels for overlay content (default: 16)
  overlayTitleColor?: string; // font color for overlay title (default: '#ffffff')
  overlayTextColor?: string; // font color for overlay text content (default: '#ffffff')
  overlayOffsetX?: number; // horizontal offset in pixels from touch point (default: 20)
  overlayOffsetY?: number; // vertical offset in pixels from touch point (default: 0)
  overlayTimer?: number; // milliseconds, default if not specified
  glowColor?: string; // color of the glow effect when active (default: '#007bff')
  glowSize?: number; // size of the glow effect in pixels (default: 10)
}

export interface Story {
  id: string;
  title: string;
  backgroundImage: string;
  touchPoints: TouchPoint[];
}

