import { Players } from "@rbxts/services";
import { Carbon as Framework } from "shared/Carbon";
import { BaseComponent } from "shared/Component";
import { DataBase } from "../DataBase";

const Carbon = new Framework(script);

export class Coins implements BaseComponent {
    public Name = "Coins";

    private playerDataBases = new Map<Player, DataBase>();

    private HandleAttemptedPurchase(plr: Player, name: string, price: number): boolean {
        const plrDataBase: (DataBase | undefined) = this.FindDataBase(plr);
        const getResults = plrDataBase?.Get("Coins").await();
        const success = getResults?.[0];
        const currentCoins = getResults?.[1] as number;
        return success ? currentCoins >= price : false;
    }

    private FindDataBase(plr: Player): (DataBase | undefined) {
        return this.playerDataBases.get(plr);
    }

    public Start(): void {
        Players.PlayerAdded.Connect((plr: Player) => {
            const dataBase = new DataBase(plr, "Coins");
            dataBase.InitStore("Coins", 100);

            this.playerDataBases.set(plr, dataBase);
        });

        Carbon.Network.On("Attempt Purchase", (plr: Player, name: string, price: number) => this.HandleAttemptedPurchase(plr, name, price))
    }
}