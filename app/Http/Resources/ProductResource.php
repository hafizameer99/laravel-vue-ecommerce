<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{

    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'imageUrl' => $this->image,
            'price' => $this->price,
            'created_at' => (new \DateTime($request->created_at))->format('Y-m-d H:i:s'),
            'updated_at' => (new \DateTime($request->updated_at))->format('Y-m-d H:i:s'),
        ];
    }
}
