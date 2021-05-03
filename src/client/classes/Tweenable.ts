import { Tween } from "./Tween";

export class Tweenable {
    public constructor(
        private instance: Instance
    ) {}

    public Tween(tweenInfo: TweenInfo, goal: object): Tween {
        return Tween(this.instance, tweenInfo, goal);
    }
}