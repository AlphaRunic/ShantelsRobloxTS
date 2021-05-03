import { Assets } from "shared/Carbon";
import { format } from "./format";

export class ShopItem {
    public Button: ImageButton;

    public constructor(
        public Name: string,
        public Price: number,
        img: string
    ) {
        this.Button = Assets.ShopButton.Clone();
        this.Button.Name = Name;
        this.Button.Image = img;

        const priceLabel = this.Button.WaitForChild("Price") as TextLabel;
        priceLabel.Text = tostring(format(Price));
    }

    public Purchase() {
        
    }
}
