<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckAdmin
{
    public function handle(Request $request, Closure $next)
    {
        if (auth()->user() && auth()->user()->admin == 1) {
            return $next($request);
        }

        // Redirect to a different page or show an error message
        return redirect('/')->with('error', 'You do not have admin access');
    }
}
