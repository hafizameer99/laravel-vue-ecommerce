<?php 


namespace App\Enums;

enum OrderStatus: String {
    case Unpaid = 'unpaid';
    case Paid = 'paid';
    case Completed = 'complete';
}

?>