export interface AnimeOptions {
  targets?: object | object[];
  duration?: number;
  easing?: EasingTypes;
  update?: (targets: object[]) => void;
  [index: string]:
    | ((...args: any[]) => string | number)
    | BasicProp
    | FromToProp
    | NestProp
    | KeyFrameProp
    | any;
}

export type KeyFrameProp = NestProp[];
export type NestProp = {
  value: number;
  duration: number;
  easing?: EasingTypes;
  startTimeStamp?: number;
};
export type FromToProp = number[] | string[];
export type BasicProp = number | string;

export type EasingTypes =
  | "linear"
  | "easeInSine"
  | "easeOutSine"
  | "easeInOutSine"
  | "easeOutInSine"
  | "easeInQuad"
  | "easeOutQuad"
  | "easeInOutQuad"
  | "easeOutInQuad"
  | "easeInCubic"
  | "easeOutCubic"
  | "easeInOutCubic"
  | "easeOutInCubic"
  | "easeInQuart"
  | "easeOutQuart"
  | "easeInOutQuart"
  | "easeOutInQuart"
  | "easeInQuint"
  | "easeOutQuint"
  | "easeInOutQuint"
  | "easeOutInQuint"
  | "easeInExpo"
  | "easeOutExpo"
  | "easeInOutExpo"
  | "easeOutInExpo"
  | "easeInCirc"
  | "easeOutCirc"
  | "easeInOutCirc"
  | "easeOutInCirc"
  | "easeInBack"
  | "easeOutBack"
  | "easeInOutBack"
  | "easeOutInBack"
  | "easeInBounce"
  | "easeOutBounce"
  | "easeInOutBounce"
  | "easeOutInBounce";

export type EasingFunction = () => (t: number) => number;
export type EasingFunctions = {
  [index in EasingTypes]: EasingFunction;
};
