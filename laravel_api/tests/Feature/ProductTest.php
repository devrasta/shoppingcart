<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProductTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     * @test
     */
    public function user_can_create_product()
    {
        $product = [
            'title'=> 'nouveau titre',
            'description'=> 'nouvelle description',
            'img' => 'https://images.unsplash.com/photo-1544866092-1935c5ef2a8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80'
        ];
        $response = $this->json('POST', 'api/products/add', $product);

        $response
            ->assertStatus(201)
            ->assertExactJson([
                'created' => true,
            ]);
        $response->assertStatus(200);
    }
}
