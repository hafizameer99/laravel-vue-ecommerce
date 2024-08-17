<?php 


namespace App\Enums;

enum PaymentStatus: String {
    case Pending = 'pending';
    case Paid = 'paid';
    case Failed = 'failed';
}

?>