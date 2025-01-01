<?php

namespace App\Http\Helpers;

use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Support\Arr;


class Cart {

    public static function getCartItemsCount() {
        $user = request()->user();
        if($user) {
            return CartItem::where('user_id', $user->id)->sum('quantity');
        } else {
            $cartItems = self::getCookieCartItems();
            return array_reduce($cartItems, function($carry, $item) {
                return $carry + $item['quantity'];
            }, 0);
        }
    }

    // Return cart items of authencitcated user

    public static function getCartItems() {
        $user = request()->user();
        if($user) {
            return CartItem::where('user_id', $user->id)->get()->map(
                fn($item) => ['product_id' => $item->product_id, 'quantity' => $item->quantity]
            );
        } else {
            return self::getCookieCartItems();
        }
    }

    // Return cart items of guest user

    public static function getCookieCartItems() {
        return json_decode(request()->cookie('cart_items', '[]'), true);
    }

    public static function getCountFromItems($cartItems) {
        return array_reduce($cartItems, function($carry, $item) {
            return $carry + $item['quantity'];
        }, 0);
    }

    public static function moveCartItemsIntoDb() {
        $cartItems = self::getCookieCartItems();
        $dbCartItems = CartItem::where(['user_id' => request()->user()->id])->get()->keyBY('product_id');
        $newCartItems = [];
        foreach($cartItems as $cartItem) {
            if(isset($dbCartItems[$cartItem['product_id']])) {
                continue;
            } else {
                $newCartItems[] = [
                    'user_id' => request()->user()->id,
                    'product_id' => $cartItem['product_id'],
                    'quantity' => $cartItem['quantity'],
                ];
            }
        }

        if (!empty($newCartItems)) {
            CartItem::insert($newCartItems);
        }
    }

    public static function getProductsAndCartItems(){
        $cartItems = Cart::getCartItems();
        $ids = Arr::pluck($cartItems, 'product_id');
        $products = Product::whereIn('id', $ids)->get();
        $cartItems = Arr::keyBy($cartItems, 'product_id');

        return [$products, $cartItems];
    }


}