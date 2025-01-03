<?php

namespace App\Models;

use App\Enums\AddressType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $primaryKey = 'user_id';

    protected $fillable = ['first_name', 'last_name', 'phone', 'status'];

    public function user() {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    private function _getAddresses() {
        return $this->hasOne(CustomerAddress::class, 'customer_id', 'user_id');
    }

    public function shippingAddress() {
        return $this->_getAddresses()->where('type', '=', AddressType::Shipping);
    }

    public function billingAddress() {
        return $this->_getAddresses()->where('type', '=', AddressType::Billing);
    }
}
