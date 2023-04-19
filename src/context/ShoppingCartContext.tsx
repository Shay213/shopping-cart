import { ReactNode, createContext, useContext, useState } from "react";

interface ShoppingCartProviderProps {
    children: ReactNode
}

interface ShoppingCartContext {
    openCart(): void
    closeCart(): void
    getItemQuantity(id: number): number
    increaseCartQuantity(id: number): void
    decreaseCartQuantity(id: number): void
    removeFromCart(id: number): void
    cartQuantity: number
    cartItems: CartItem[]
}

interface CartItem {
    id: number,
    quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider( { children }: ShoppingCartProviderProps ) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const cartQuantity = cartItems.reduce((total, item) => total + item.quantity ,0);

    const getItemQuantity = (id: number) => cartItems.find(item => item.id === id)?.quantity || 0;
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    const increaseCartQuantity = (id: number) => {
        setCartItems(currItems => {
            if(!currItems.find(item => item.id === id)) {
                return [...currItems, {id, quantity: 1}];
            }else{
                return currItems.map(item => {
                    if(item.id === id) return {...item, quantity: item.quantity+1};
                    return item;
                });
            }
        });
    }

    const decreaseCartQuantity = (id: number) => {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id);
            }else{
                return currItems.map(item => {
                    if(item.id === id) return {...item, quantity: item.quantity-1};
                    return item;
                });
            }
        });
    }

    const removeFromCart = (id: number) => {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id);
        });
    };

    return (
        <ShoppingCartContext.Provider 
            value={{
                openCart,
                closeCart,
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                cartQuantity,
                cartItems
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}