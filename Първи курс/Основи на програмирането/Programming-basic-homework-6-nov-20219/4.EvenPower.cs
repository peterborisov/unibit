//4. Да се напише програма, която въвежда n и печата четните степени на 2 ≤ 2^n: 2^0, 2^2, 2^4, 2^8, …, 2^n.

using System;

class EvenPower
{
    static void Main()
    {
        int pow = int.Parse(Console.ReadLine());
        Console.WriteLine("Even power to {0} are:", pow);

        for (int i = 0; i <= pow; i+=2)
        {
            Console.WriteLine(Math.Pow(2, i));
        }
    }
}

