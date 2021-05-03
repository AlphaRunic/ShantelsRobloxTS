import { Assets, Carbon as Framework, UI } from "shared/Carbon";
import { BaseComponent } from "shared/Component";
import { format } from "../format";
import { ClickPop } from "../ClickPop";
import { HoverPop } from "../HoverPop";
import { ShopItem } from "../ShopItem";
import { ToolItem } from "../ToolItem";
import { Tween } from "../Tween";
import { Vendor } from "../Vendor";

const Carbon = new Framework(script);

export class Shop extends Vendor implements BaseComponent {
    public Name = "Shop";
    
    private shopUI = UI.WaitForChild("CoinShop") as ScreenGui;
    private frame = this.shopUI.WaitForChild("Frame") as Frame;
    private toggleButton = this.shopUI.WaitForChild("ToggleShop") as TextButton;
    private itemContainer = this.frame.WaitForChild("ItemContainer") as ScrollingFrame;
    private closeButton = this.frame.WaitForChild("Close") as TextButton;
    private coinDisplay = this.shopUI.WaitForChild("CoinDisplay") as Frame;
    private coinLabel = this.coinDisplay.WaitForChild("Amount") as TextLabel;
    private openPos = this.shopUI.GetAttribute("openPosition") as UDim2;
    private closedPos = this.shopUI.GetAttribute("closedPosition") as UDim2;
    private tweenInfo = new TweenInfo(.6, Enum.EasingStyle.Sine, Enum.EasingDirection.InOut);
    private isOpen: boolean = false;

    private Close(): void {
        Tween(this.frame, this.tweenInfo, {
            Position: this.closedPos
        }).Completed.Connect(() => {
            this.isOpen = false;
        });
    }

    private Open(): void {
        Tween(this.frame, this.tweenInfo, {
            Position: this.openPos
        }).Completed.Connect(() => {
            this.isOpen = true;
        });
    }

    private Toggle(): void {
        if (this.isOpen)
            this.Close();
        else
            this.Open();
    }

    private UpdateCoinsUI(coins: number): void {
        this.coinLabel.Text = tostring(format(coins));
    }

    public Start(): void {
        const pop = 4;
        const spd = .2;
        HoverPop(this.toggleButton, pop, spd);
        ClickPop(this.toggleButton, pop, spd);

        HoverPop(this.closeButton, pop, spd);
        ClickPop(this.closeButton, pop, spd);

        const items: ShopItem[] = [
            new ToolItem(Assets.GravityCoil, 100)
        ];

        for (const item of items) {
            const button: ImageButton = this.Add(item);
            button.Parent = this.itemContainer;

            button.MouseButton1Click.Connect(() => {
                const res = Carbon.Network.Emit("Attempt Purchase", item.Name, item.Price);
                const purchaseSuccessful = res[0];

                if (purchaseSuccessful)
                    item.Purchase();
            });
        }

        this.toggleButton.MouseButton1Click.Connect(() => this.Toggle());
        this.closeButton.MouseButton1Click.Connect(() => this.Close());

        Carbon.Network.On("Update Coins", (coins: number) => this.UpdateCoinsUI(coins))
    }
}