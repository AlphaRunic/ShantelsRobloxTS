import { ShopItem } from "./ShopItem";

export class Vendor {
    public Storage: ShopItem[] = [];

    public Add(item: ShopItem): ImageButton {
        this.Storage.push(item);
        return item.Button;
    }
}