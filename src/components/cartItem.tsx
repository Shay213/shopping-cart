import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json"
import formatCurrency from "../utils/formatCurrency";

interface itemProps {
    id: number,
    quantity: number
}

export default ({id, quantity}: itemProps) => {
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find(i => i.id === id);
    if(!item) return null;

    const imageUrl = import.meta.env.BASE_URL + item.imgUrl;
    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={imageUrl} style={{ width: '125px', height: '75px', objectFit: 'cover' }} />
            <div className="me-auto">
                <div>
                    {item.name}{quantity > 1 && <span className="text-muted" style={{fontSize: '.65rem'}}> x{quantity}</span>}
                </div>
                <div className="text-muted" style={{fontSize: '.75rem'}}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>
                {formatCurrency(item.price * quantity)}
            </div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(id)}>&times;</Button>
        </Stack>
    );
};