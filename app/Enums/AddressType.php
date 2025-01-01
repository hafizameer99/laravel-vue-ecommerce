<?php 


namespace App\Enums;

enum AddressType: String {
    case Shipping = 'shipping';
    case Billing = 'billing';
}

?>